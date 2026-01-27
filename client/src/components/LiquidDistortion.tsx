import { useEffect, useRef } from "react";

interface LiquidDistortionProps {
  imageSrc: string;
  className?: string;
}

export function LiquidDistortion({ imageSrc, className = "" }: LiquidDistortionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const gl = canvas.getContext("webgl", { 
      antialias: true, 
      alpha: false,
      preserveDrawingBuffer: false 
    });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    let animationId: number;
    let mouse = { x: 0.5, y: 0.5 };
    let lastMouse = { x: 0.5, y: 0.5 };
    let velocity = { x: 0, y: 0 };

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_uv = a_position * 0.5 + 0.5;
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      
      uniform sampler2D u_image;
      uniform vec2 u_mouse;
      uniform vec2 u_velocity;
      uniform float u_aspect;
      uniform float u_time;
      
      varying vec2 v_uv;
      
      void main() {
        vec2 uv = v_uv;
        
        // Flip Y for correct orientation
        vec2 mouse = vec2(u_mouse.x, 1.0 - u_mouse.y);
        
        // Calculate distance to mouse with aspect correction
        vec2 diff = uv - mouse;
        diff.x *= u_aspect;
        float dist = length(diff);
        
        // Flowmap parameters
        float radius = 0.15;
        float strength = 0.04;
        
        // Smooth falloff
        float falloff = 1.0 - smoothstep(0.0, radius, dist);
        falloff = pow(falloff, 2.0);
        
        // Use velocity for directional distortion
        vec2 vel = u_velocity * 0.5;
        
        // Distortion follows mouse movement direction
        vec2 distortion = vel * falloff * strength;
        
        // Add subtle wave effect
        float wave = sin(dist * 20.0 - u_time * 3.0) * 0.003 * falloff;
        distortion += vec2(wave * 0.5, wave);
        
        vec2 finalUV = uv - distortion;
        finalUV = clamp(finalUV, 0.001, 0.999);
        
        // Flip Y for texture sampling
        finalUV.y = 1.0 - finalUV.y;
        
        vec4 color = texture2D(u_image, finalUV);
        gl_FragColor = color;
      }
    `;

    function createShader(type: number, source: string): WebGLShader | null {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error("Shader error:", gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full screen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,   1, -1,   -1, 1,
      -1,  1,   1, -1,    1, 1
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const velocityLocation = gl.getUniformLocation(program, "u_velocity");
    const aspectLocation = gl.getUniformLocation(program, "u_aspect");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    // Load texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Placeholder pixel
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    };
    image.src = imageSrc;

    function resize() {
      const rect = container!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width = rect.width + "px";
      canvas!.style.height = rect.height + "px";
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }

    resize();
    window.addEventListener("resize", resize);

    const startTime = Date.now();

    function render() {
      const time = (Date.now() - startTime) / 1000;
      const aspect = canvas!.width / canvas!.height;

      // Calculate velocity from mouse movement
      velocity.x = (mouse.x - lastMouse.x) * 10;
      velocity.y = (mouse.y - lastMouse.y) * 10;
      
      // Smooth velocity decay
      velocity.x *= 0.9;
      velocity.y *= 0.9;
      
      lastMouse.x += (mouse.x - lastMouse.x) * 0.1;
      lastMouse.y += (mouse.y - lastMouse.y) * 0.1;

      gl!.uniform2f(mouseLocation, lastMouse.x, lastMouse.y);
      gl!.uniform2f(velocityLocation, velocity.x, velocity.y);
      gl!.uniform1f(aspectLocation, aspect);
      gl!.uniform1f(timeLocation, time);

      gl!.drawArrays(gl!.TRIANGLES, 0, 6);

      animationId = requestAnimationFrame(render);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    }

    container.addEventListener("mousemove", handleMouseMove);
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteTexture(texture);
    };
  }, [imageSrc]);

  return (
    <div 
      ref={containerRef} 
      className={`relative cursor-pointer overflow-hidden ${className}`}
      style={{ minHeight: '100vh' }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
