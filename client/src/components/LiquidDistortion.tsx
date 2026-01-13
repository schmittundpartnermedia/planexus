import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface LiquidDistortionProps {
  imageSrc: string;
  className?: string;
}

export function LiquidDistortion({ imageSrc, className = "" }: LiquidDistortionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    
    const texture = loader.load(imageSrc, () => {
      resize();
    });
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uIntensity;
      uniform vec2 uResolution;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        
        // Mouse Y ist bereits invertiert in JS, aber UV geht von unten nach oben
        // Also müssen wir die UV auch invertieren für den Vergleich
        vec2 mouse = vec2(uMouse.x, 1.0 - uMouse.y);
        float dist = distance(uv, mouse);
        
        // Sehr kleiner lokaler Radius - nur direkt um die Maus herum
        float radius = 0.02;
        float falloff = 1.0 - smoothstep(0.0, radius, dist);
        falloff = falloff * falloff * falloff; // Steilerer Abfall
        
        // Welleneffekt nur im lokalen Bereich
        float wave = sin(dist * 80.0 - uTime * 5.0);
        
        // Verzerrung nur lokal um die Maus
        vec2 direction = uv - mouse;
        float len = length(direction);
        if (len > 0.001) {
          direction = direction / len;
        }
        
        vec2 offset = direction * wave * falloff * uIntensity * 0.015;
        
        uv += offset;
        
        vec4 color = texture2D(uTexture, uv);
        
        gl_FragColor = color;
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
        uIntensity: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) }
      },
      vertexShader,
      fragmentShader,
      transparent: true
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function resize() {
      if (!container || !renderer) return;
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      material.uniforms.uResolution.value.set(rect.width, rect.height);
    }

    function handleMouseMove(e: MouseEvent) {
      if (!container || !material) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      gsap.to(material.uniforms.uMouse.value, {
        x,
        y,
        duration: 0.1,
        ease: "none"
      });
    }

    function handleMouseEnter() {
      if (!material) return;
      gsap.to(material.uniforms.uIntensity, {
        value: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    }

    function handleMouseLeave() {
      if (!material) return;
      gsap.to(material.uniforms.uIntensity, {
        value: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    }

    function animate() {
      if (!renderer || !scene || !material) return;
      material.uniforms.uTime.value += 0.016;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
      
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [imageSrc]);

  return (
    <div 
      ref={containerRef} 
      className={`relative cursor-pointer ${className}`}
      style={{ minHeight: '100vh' }}
    />
  );
}
