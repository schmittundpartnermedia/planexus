import { useEffect, useRef, useState, useCallback } from "react";

interface LiquidHeroProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function LiquidHero({ imageSrc, alt, className = "" }: LiquidHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>(0);
  const [isReady, setIsReady] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const ripples = useRef<Array<{ x: number; y: number; radius: number; strength: number; life: number }>>([]);
  const lastRippleTime = useRef(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const rect = container.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    
    img.onload = () => {
      imageRef.current = img;
      setTimeout(() => {
        resizeCanvas();
        setIsReady(true);
      }, 100);
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    window.addEventListener("resize", resizeCanvas);

    function addRipple(x: number, y: number) {
      const now = Date.now();
      if (now - lastRippleTime.current < 50) return;
      lastRippleTime.current = now;
      
      ripples.current.push({
        x,
        y,
        radius: 0,
        strength: 80,
        life: 1
      });
      
      if (ripples.current.length > 10) {
        ripples.current.shift();
      }
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isOver = true;
      addRipple(mouseRef.current.x, mouseRef.current.y);
    }

    function handleMouseLeave() {
      mouseRef.current.isOver = false;
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    function render() {
      if (!ctx || !canvas || !imageRef.current) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      const img = imageRef.current;
      const w = canvas.width;
      const h = canvas.height;

      if (w === 0 || h === 0) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const imgRatio = img.width / img.height;
      const canvasRatio = w / h;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (canvasRatio > imgRatio) {
        drawWidth = w;
        drawHeight = w / imgRatio;
        offsetX = 0;
        offsetY = (h - drawHeight) / 2;
      } else {
        drawHeight = h;
        drawWidth = h * imgRatio;
        offsetX = (w - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Gradient Overlay auf Canvas zeichnen (wird mit verzerrt)
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, 'rgba(2, 6, 23, 0.5)');
      gradient.addColorStop(0.5, 'rgba(2, 6, 23, 0.3)');
      gradient.addColorStop(1, 'rgba(2, 6, 23, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      if (ripples.current.length > 0) {
        try {
          const imageData = ctx.getImageData(0, 0, w, h);
          const data = imageData.data;
          const originalData = new Uint8ClampedArray(data);

          for (const ripple of ripples.current) {
            const maxRadius = ripple.radius + 50;
            const minX = Math.max(0, Math.floor(ripple.x - maxRadius));
            const maxX = Math.min(w, Math.ceil(ripple.x + maxRadius));
            const minY = Math.max(0, Math.floor(ripple.y - maxRadius));
            const maxY = Math.min(h, Math.ceil(ripple.y + maxRadius));

            for (let py = minY; py < maxY; py++) {
              for (let px = minX; px < maxX; px++) {
                const dx = px - ripple.x;
                const dy = py - ripple.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                const waveWidth = 60;
                const waveDist = Math.abs(dist - ripple.radius);
                
                if (waveDist < waveWidth) {
                  const waveStrength = (1 - waveDist / waveWidth) * ripple.strength * ripple.life * 2;
                  const angle = Math.atan2(dy, dx);
                  const wave = Math.sin((dist - ripple.radius) * 0.3) * waveStrength;
                  
                  const sourceX = Math.round(px + Math.cos(angle) * wave);
                  const sourceY = Math.round(py + Math.sin(angle) * wave);
                  
                  if (sourceX >= 0 && sourceX < w && sourceY >= 0 && sourceY < h) {
                    const targetIdx = (py * w + px) * 4;
                    const sourceIdx = (sourceY * w + sourceX) * 4;
                    
                    data[targetIdx] = originalData[sourceIdx];
                    data[targetIdx + 1] = originalData[sourceIdx + 1];
                    data[targetIdx + 2] = originalData[sourceIdx + 2];
                  }
                }
              }
            }
          }

          ctx.putImageData(imageData, 0, 0);
        } catch (e) {
          // Ignore getImageData errors
        }
      }

      for (let i = ripples.current.length - 1; i >= 0; i--) {
        ripples.current[i].radius += 4;
        ripples.current[i].life -= 0.015;
        
        if (ripples.current[i].life <= 0) {
          ripples.current.splice(i, 1);
        }
      }

      animationRef.current = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [imageSrc, resizeCanvas]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ minHeight: '100vh' }}>
      {/* Fallback Bild - nur sichtbar während Canvas lädt */}
      {!isReady && (
        <img 
          src={imageSrc} 
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      )}
      {/* Canvas - das EINZIGE sichtbare Bild nach dem Laden */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s' }}
      />
      <span className="sr-only">{alt}</span>
    </div>
  );
}
