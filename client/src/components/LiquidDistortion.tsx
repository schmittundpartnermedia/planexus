import { useEffect, useRef, useState } from "react";

interface LiquidDistortionProps {
  imageSrc: string;
  className?: string;
}

export function LiquidDistortion({ imageSrc, className = "" }: LiquidDistortionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function animate() {
      // Sanfte Interpolation
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;
      
      setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      animationRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      // Pixel-Position relativ zum Container
      targetPos.current.x = e.clientX - rect.left;
      targetPos.current.y = e.clientY - rect.top;
    }

    function handleMouseEnter() {
      setIsHovering(true);
    }

    function handleMouseLeave() {
      setIsHovering(false);
      targetPos.current = { x: -200, y: -200 };
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const filterId = "flowmap-filter";
  const effectRadius = 60; // Pixel

  return (
    <div 
      ref={containerRef} 
      className={`relative cursor-pointer overflow-hidden ${className}`}
      style={{ minHeight: '100vh' }}
    >
      {/* SVG Filter Definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feDisplacementMap
              in="blur"
              in2="SourceGraphic"
              scale={isHovering ? 12 : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Distortion Effect Layer - folgt der Maus genau */}
      {isHovering && (
        <div
          className="pointer-events-none absolute"
          style={{
            left: mousePos.x - effectRadius,
            top: mousePos.y - effectRadius,
            width: effectRadius * 2,
            height: effectRadius * 2,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(156, 203, 0, 0.15) 0%, rgba(156, 203, 0, 0.05) 40%, transparent 70%)`,
            backdropFilter: 'blur(1px)',
            transition: 'opacity 0.3s ease',
            boxShadow: '0 0 30px rgba(156, 203, 0, 0.2)',
          }}
        />
      )}

      {/* Subtle wave effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute animate-pulse"
          style={{
            left: mousePos.x - effectRadius * 0.7,
            top: mousePos.y - effectRadius * 0.7,
            width: effectRadius * 1.4,
            height: effectRadius * 1.4,
            borderRadius: '50%',
            border: '1px solid rgba(156, 203, 0, 0.3)',
            opacity: 0.6,
          }}
        />
      )}
    </div>
  );
}
