import { useEffect, useRef, useState } from "react";

interface LiquidHeroProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function LiquidHero({ imageSrc, alt, className = "" }: LiquidHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const ripples = useRef<Array<{ x: number; y: number; radius: number; strength: number; life: number }>>([]);
  const lastRippleTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    
    img.onload = () => {
      imageRef.current = img;
      setIsLoaded(true);
      resizeCanvas();
    };

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    window.addEventListener("resize", resizeCanvas);

    function addRipple(x: number, y: number) {
      const now = Date.now();
      if (now - lastRippleTime.current < 50) return;
      lastRippleTime.current = now;
      
      ripples.current.push({
        x,
        y,
        radius: 0,
        strength: 30,
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

      if (ripples.current.length > 0) {
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
              
              const waveWidth = 30;
              const waveDist = Math.abs(dist - ripple.radius);
              
              if (waveDist < waveWidth) {
                const waveStrength = (1 - waveDist / waveWidth) * ripple.strength * ripple.life;
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
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [imageSrc]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: isLoaded ? "block" : "none" }}
      />
      {!isLoaded && (
        <img 
          src={imageSrc} 
          alt={alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}
