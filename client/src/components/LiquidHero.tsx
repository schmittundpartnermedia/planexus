import { useEffect, useRef, useState, useCallback } from "react";

interface LiquidHeroProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function LiquidHero({ imageSrc, alt, className = "" }: LiquidHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const textureRef = useRef<WebGLTexture | null>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const timeRef = useRef(0);
  const intensityRef = useRef({ value: 0, target: 0 });

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
    precision mediump float;
    uniform sampler2D u_image;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform float u_intensity;
    varying vec2 v_texCoord;

    void main() {
      vec2 uv = v_texCoord;
      vec2 mouse = u_mouse;
      
      float dist = distance(uv, mouse);
      float wave = sin(dist * 30.0 - u_time * 3.0) * 0.5 + 0.5;
      float falloff = smoothstep(0.5, 0.0, dist);
      
      vec2 offset = normalize(uv - mouse + 0.001) * wave * falloff * u_intensity * 0.08;
      float ripple = sin(dist * 40.0 - u_time * 4.0) * falloff * u_intensity * 0.03;
      
      uv += offset;
      uv.x += ripple;
      uv.y += ripple * 0.7;
      
      uv = clamp(uv, 0.0, 1.0);
      
      vec4 color = texture2D(u_image, uv);
      float highlight = wave * falloff * u_intensity * 0.1;
      color.rgb += highlight;
      
      gl_FragColor = color;
    }
  `;

  const initWebGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    } catch (e) {
      return false;
    }

    if (!gl) return false;
    glRef.current = gl;

    function createShader(type: number, source: string): WebGLShader | null {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return false;

    const program = gl.createProgram();
    if (!program) return false;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return false;
    }

    programRef.current = program;
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const texCoords = new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    return true;
  }, []);

  const loadTexture = useCallback((src: string) => {
    const gl = glRef.current;
    const program = programRef.current;
    if (!gl || !program) return;

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      textureRef.current = texture;
      setIsReady(true);
    };
    image.src = src;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const supported = initWebGL();
    if (!supported) {
      setWebglSupported(false);
      setIsReady(true);
      return;
    }

    loadTexture(imageSrc);

    const resize = () => {
      const gl = glRef.current;
      if (!gl || !canvas || !container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = (e.clientX - rect.left) / rect.width;
      mouseRef.current.targetY = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    const handleMouseEnter = () => {
      intensityRef.current.target = 1;
    };

    const handleMouseLeave = () => {
      intensityRef.current.target = 0;
    };

    const render = () => {
      const gl = glRef.current;
      const program = programRef.current;
      if (!gl || !program || !textureRef.current) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      timeRef.current += 0.016;
      
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;
      intensityRef.current.value += (intensityRef.current.target - intensityRef.current.value) * 0.05;

      gl.uniform2f(gl.getUniformLocation(program, 'u_mouse'), mouseRef.current.x, mouseRef.current.y);
      gl.uniform1f(gl.getUniformLocation(program, 'u_time'), timeRef.current);
      gl.uniform1f(gl.getUniformLocation(program, 'u_intensity'), intensityRef.current.value);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [imageSrc, initWebGL, loadTexture]);

  if (!webglSupported) {
    return (
      <div className={`relative ${className}`} style={{ minHeight: '100vh' }}>
        <img 
          src={imageSrc} 
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/30 to-transparent" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ minHeight: '100vh' }}>
      {!isReady && (
        <img 
          src={imageSrc} 
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s' }}
      />
      <span className="sr-only">{alt}</span>
    </div>
  );
}
