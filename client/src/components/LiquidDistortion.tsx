import { useEffect, useRef } from "react";
import { Renderer, Program, Texture, Mesh, Vec2, Flowmap, Triangle } from "ogl";

interface LiquidDistortionProps {
  imageSrc: string;
  className?: string;
}

export function LiquidDistortion({ imageSrc, className = "" }: LiquidDistortionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Vertex Shader
    const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

    // Fragment Shader
    const fragment = `
      precision highp float;
      
      uniform sampler2D tWater;
      uniform sampler2D tFlow;
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vec3 flow = texture2D(tFlow, vUv).rgb;
        
        vec2 uv = vUv;
        uv -= flow.xy * 0.05;
        
        vec3 tex = texture2D(tWater, uv).rgb;
        
        gl_FragColor = vec4(tex, 1.0);
      }
    `;

    // Create renderer
    const renderer = new Renderer({ 
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: false,
      antialias: true
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.canvas.style.position = "absolute";
    gl.canvas.style.top = "0";
    gl.canvas.style.left = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    // Variables for mouse tracking
    const mouse = new Vec2(-1);
    const velocity = new Vec2();
    let lastTime: number | null = null;
    const lastMouse = new Vec2();

    // Resize handler
    function resize() {
      const rect = container!.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
    }
    window.addEventListener("resize", resize);
    resize();

    // Triangle geometry covering viewport
    const geometry = new Triangle(gl);

    // Load image texture
    const texture = new Texture(gl, { 
      wrapS: gl.CLAMP_TO_EDGE, 
      wrapT: gl.CLAMP_TO_EDGE 
    });
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      texture.image = img;
    };
    img.src = imageSrc;

    // Create flowmap with optimal settings
    const flowmap = new Flowmap(gl, {
      size: 512,
      falloff: 0.3,
      alpha: 1,
      dissipation: 0.98,
    });

    // Create shader program
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        tWater: { value: texture },
        tFlow: flowmap.uniform,
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    // Mouse move handler
    function updateMouse(e: MouseEvent | TouchEvent) {
      let x: number, y: number;
      
      if ("touches" in e && e.touches.length) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ("clientX" in e) {
        x = e.clientX;
        y = e.clientY;
      } else {
        return;
      }

      const rect = container!.getBoundingClientRect();
      
      // Normalize to 0-1 range relative to container
      mouse.set(
        (x - rect.left) / rect.width,
        1.0 - (y - rect.top) / rect.height
      );

      // Calculate velocity
      if (lastTime === null) {
        lastTime = performance.now();
        lastMouse.set(x, y);
      }

      const deltaX = x - lastMouse.x;
      const deltaY = y - lastMouse.y;

      lastMouse.set(x, y);

      const time = performance.now();
      const delta = Math.max(14, time - lastTime);
      lastTime = time;

      // X: positive deltaX = move right = positive velocity (correct)
      // Y: positive deltaY = move down in DOM, but UP is positive in WebGL, so invert
      velocity.x = deltaX / delta;
      velocity.y = -deltaY / delta;

      (velocity as any).needsUpdate = true;
    }

    // Event listeners
    container.addEventListener("mousemove", updateMouse);
    container.addEventListener("touchstart", updateMouse, { passive: true });
    container.addEventListener("touchmove", updateMouse, { passive: true });

    // Animation loop
    let animationId: number;
    
    function update(t: number) {
      animationId = requestAnimationFrame(update);

      // Update flowmap
      if ((velocity as any).needsUpdate) {
        flowmap.aspect = renderer.width / renderer.height;
        flowmap.mouse.copy(mouse);
        flowmap.velocity.lerp(velocity, velocity.len() ? 0.5 : 0.1);
        (velocity as any).needsUpdate = false;
      }

      flowmap.update();

      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    animationId = requestAnimationFrame(update);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", updateMouse);
      container.removeEventListener("touchstart", updateMouse);
      container.removeEventListener("touchmove", updateMouse);
      if (gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, [imageSrc]);

  return (
    <div 
      ref={containerRef} 
      className={`relative cursor-pointer overflow-hidden ${className}`}
      style={{ minHeight: '100vh' }}
    />
  );
}
