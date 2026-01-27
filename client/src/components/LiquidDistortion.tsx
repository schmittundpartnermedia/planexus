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
      alpha: true,
      preserveDrawingBuffer: true 
    });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    let animationId: number;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let isHovering = false;

    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      
      uniform sampler2D u_image;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_hover;
      uniform vec2 u_resolution;
      
      varying vec2 v_texCoord;
      
      void main() {
        vec2 uv = v_texCoord;
        
        // Berechne Distanz zur Mausposition
        vec2 mouse = u_mouse;
        vec2 diff = uv - mouse;
        
        // Aspect Ratio berücksichtigen
        float aspect = u_resolution.x / u_resolution.y;
        diff.x *= aspect;
        
        float dist = length(diff);
        
        // Sehr kleiner, lokaler Radius (ca. 5% des Bildes)
        float radius = 0.08;
        float strength = 0.015 * u_hover;
        
        // Sanfter Falloff
        float falloff = 1.0 - smoothstep(0.0, radius, dist);
        falloff = falloff * falloff * falloff; // Kubischer Falloff für mehr Konzentration
        
        // Verzerrung nur im lokalen Bereich
        vec2 distortion = vec2(0.0);
        if (dist > 0.001) {
          // Richtung von Maus weg (nicht invertiert!)
          vec2 dir = normalize(diff);
          distortion = dir * falloff * strength;
        }
        
        // Sanfte wellenartige Bewegung
        float wave = sin(dist * 30.0 - u_time * 2.0) * 0.002 * falloff * u_hover;
        distortion += vec2(wave);
        
        vec2 finalUV = uv + distortion;
        
        // Clamp UV um Artefakte zu vermeiden
        finalUV = clamp(finalUV, 0.0, 1.0);
        
        vec4 color = texture2D(u_image, finalUV);
        gl_FragColor = color;
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram | null {
      const program = gl.createProgram();
      if (!program) return null;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1,  -1, 1,
      -1,  1,  1, -1,   1, 1
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    // Standard WebGL: Y=0 unten, Y=1 oben (Bild wird korrekt angezeigt)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0, 0,  1, 0,  0, 1,
      0, 1,  1, 0,  1, 1
    ]), gl.STATIC_DRAW);

    const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const hoverLocation = gl.getUniformLocation(program, "u_hover");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

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

    let hoverValue = 0;
    const startTime = Date.now();

    function render() {
      const time = (Date.now() - startTime) / 1000;

      // Sanfte Interpolation der Mausposition
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Sanftes Ein-/Ausblenden des Hover-Effekts
      const targetHover = isHovering ? 1.0 : 0.0;
      hoverValue += (targetHover - hoverValue) * 0.05;

      gl!.uniform2f(mouseLocation, mouseX, mouseY);
      gl!.uniform1f(timeLocation, time);
      gl!.uniform1f(hoverLocation, hoverValue);
      gl!.uniform2f(resolutionLocation, canvas!.width, canvas!.height);

      gl!.drawArrays(gl!.TRIANGLES, 0, 6);

      animationId = requestAnimationFrame(render);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width;
      // Y invertieren: DOM Y=0 oben, WebGL UV Y=0 unten
      targetMouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    }

    function handleMouseEnter() {
      isHovering = true;
    }

    function handleMouseLeave() {
      isHovering = false;
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
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
