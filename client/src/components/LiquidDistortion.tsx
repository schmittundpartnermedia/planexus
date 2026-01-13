import { useEffect, useRef, useState } from "react";

interface LiquidDistortionProps {
  imageSrc: string;
  className?: string;
}

export function LiquidDistortion({ imageSrc, className = "" }: LiquidDistortionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }

    function handleMouseEnter() {
      setIsHovering(true);
    }

    function handleMouseLeave() {
      setIsHovering(false);
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative cursor-pointer overflow-hidden ${className}`}
      style={{ minHeight: '100vh' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full transition-opacity duration-300"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            background: `radial-gradient(circle, rgba(156, 203, 0, 0.3) 0%, transparent 70%)`,
            filter: 'blur(10px)',
            opacity: 1,
          }}
        />
      )}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: 'overlay' }}>
        <defs>
          <filter id="ripple" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01" 
              numOctaves="3" 
              result="noise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale={isHovering ? "8" : "0"} 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <circle
          cx={`${mousePos.x}%`}
          cy={`${mousePos.y}%`}
          r="40"
          fill="transparent"
          style={{
            filter: isHovering ? 'url(#ripple)' : 'none',
            transition: 'all 0.1s ease-out'
          }}
        />
      </svg>
    </div>
  );
}
