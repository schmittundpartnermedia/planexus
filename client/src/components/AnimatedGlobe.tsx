import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const partnerNodes = [
  { name: "WS", subname: "Funktions- und\nReinraum GmbH", x: 0.62, y: 0.12, size: 45 },
  { name: "MESYCON", subname: "GMBH", x: 0.52, y: 0.08, size: 50 },
  { name: "wesemann", subname: "Reinraumtechnik", x: 0.68, y: 0.52, size: 48 },
  { name: "ABARCON", subname: "", x: 0.38, y: 0.22, size: 55 },
  { name: "wesemann", subname: "", x: 0.22, y: 0.32, size: 48 },
  { name: "PLANEXUS", subname: "", x: 0.28, y: 0.52, size: 50 },
  { name: "SYNERGIE", subname: "Mobiliar GmbH", x: 0.22, y: 0.68, size: 45 },
  { name: "wesemann", subname: "BENELUX", x: 0.42, y: 0.78, size: 50 },
  { name: "HibLab", subname: "Solutions", x: 0.58, y: 0.82, size: 48 },
  { name: "wesemann", subname: "Schweiz", x: 0.68, y: 0.68, size: 48 },
  { name: "wesemann", subname: "Middle East", x: 0.72, y: 0.28, size: 45 },
  { name: "HibLab", subname: "Solutions", x: 0.55, y: 0.12, size: 42 },
  { name: "AB.", subname: "", x: 0.58, y: 0.18, size: 35 },
];

const regionLabels = [
  { name: "DEUTSCHLAND", x: 0.08, y: 0.42 },
  { name: "BENELUX", x: 0.18, y: 0.92 },
  { name: "SCHWEIZ", x: 0.92, y: 0.10 },
  { name: "SPANIEN", x: 0.62, y: 0.92 },
  { name: "NAHER OSTEN", x: 0.92, y: 0.48 },
];

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const centerX = canvas.width * 0.48;
      const centerY = canvas.height * 0.48;
      const scale = Math.min(canvas.width, canvas.height) / 800;
      const globeRadius = 140 * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rotation = time * 0.0002;

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius + 60 * scale, 0, Math.PI * 2);
      const outerGlow = ctx.createRadialGradient(
        centerX, centerY, globeRadius,
        centerX, centerY, globeRadius + 80 * scale
      );
      outerGlow.addColorStop(0, "rgba(156, 203, 0, 0.15)");
      outerGlow.addColorStop(0.5, "rgba(156, 203, 0, 0.05)");
      outerGlow.addColorStop(1, "rgba(156, 203, 0, 0)");
      ctx.fillStyle = outerGlow;
      ctx.fill();

      const earthGradient = ctx.createRadialGradient(
        centerX - globeRadius * 0.3, centerY - globeRadius * 0.3, 0,
        centerX, centerY, globeRadius
      );
      earthGradient.addColorStop(0, "rgba(156, 203, 0, 0.45)");
      earthGradient.addColorStop(0.4, "rgba(130, 180, 0, 0.3)");
      earthGradient.addColorStop(0.7, "rgba(100, 150, 0, 0.2)");
      earthGradient.addColorStop(1, "rgba(80, 120, 0, 0.12)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fillStyle = earthGradient;
      ctx.fill();
      ctx.strokeStyle = "rgba(156, 203, 0, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius - 2, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = "rgba(156, 203, 0, 0.18)";
      
      const europeX = centerX + Math.cos(rotation * 0.5) * globeRadius * 0.05;
      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.1, centerY - globeRadius * 0.25, globeRadius * 0.22, globeRadius * 0.18, 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.05, centerY + globeRadius * 0.2, globeRadius * 0.15, globeRadius * 0.28, -0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(europeX + globeRadius * 0.25, centerY - globeRadius * 0.1, globeRadius * 0.3, globeRadius * 0.22, 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.5, centerY, globeRadius * 0.12, globeRadius * 0.35, -0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      for (let i = 1; i < 6; i++) {
        const latY = centerY + (i - 3) * globeRadius * 0.28;
        const latR = Math.sqrt(globeRadius * globeRadius - Math.pow(latY - centerY, 2));
        if (latR > 0) {
          ctx.beginPath();
          ctx.ellipse(centerX, latY, latR, latR * 0.06, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.15)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (let i = 0; i < 10; i++) {
        const lon = (i / 10) * Math.PI + rotation;
        const lonScale = Math.cos(lon);
        if (Math.abs(lonScale) > 0.08) {
          ctx.beginPath();
          ctx.ellipse(centerX, centerY, globeRadius * Math.abs(lonScale), globeRadius, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.1)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      partnerNodes.forEach((node, index) => {
        const nodeX = node.x * canvas.width;
        const nodeY = node.y * canvas.height;
        const nodeSize = node.size * scale;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        const cp1x = centerX + (nodeX - centerX) * 0.35;
        const cp1y = centerY + (nodeY - centerY) * 0.15;
        const cp2x = centerX + (nodeX - centerX) * 0.7;
        const cp2y = nodeY - (nodeY - centerY) * 0.12;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nodeX, nodeY);
        
        ctx.strokeStyle = "rgba(156, 203, 0, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const pulseSpeed = 0.0018;
        const pulsePhase = ((time * pulseSpeed + index * 0.3) % 1);
        const t = pulsePhase;
        const pulseX = Math.pow(1-t, 3) * centerX + 3 * Math.pow(1-t, 2) * t * cp1x + 3 * (1-t) * t * t * cp2x + t * t * t * nodeX;
        const pulseY = Math.pow(1-t, 3) * centerY + 3 * Math.pow(1-t, 2) * t * cp1y + 3 * (1-t) * t * t * cp2y + t * t * t * nodeY;
        
        const pulseAlpha = 1 - pulsePhase * 0.6;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 203, 0, ${pulseAlpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, nodeSize + 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(156, 203, 0, 0.1)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.97)";
        ctx.fill();
        ctx.strokeStyle = "rgba(156, 203, 0, 0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#2a6565";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        if (node.subname) {
          ctx.font = `bold ${11 * scale}px system-ui`;
          ctx.fillText(node.name, nodeX, nodeY - 5 * scale);
          ctx.font = `${8 * scale}px system-ui`;
          ctx.fillStyle = "#4a8585";
          const sublines = node.subname.split("\n");
          sublines.forEach((line, i) => {
            ctx.fillText(line, nodeX, nodeY + (6 + i * 9) * scale);
          });
        } else {
          ctx.font = `bold ${11 * scale}px system-ui`;
          ctx.fillText(node.name, nodeX, nodeY);
        }

        ctx.beginPath();
        ctx.arc(nodeX, nodeY - nodeSize + 8 * scale, 4 * scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(156, 203, 0, 0.8)";
        ctx.fill();
      });

      regionLabels.forEach((region) => {
        const x = region.x * canvas.width;
        const y = region.y * canvas.height;
        
        ctx.font = `bold ${12 * scale}px system-ui`;
        ctx.fillStyle = "rgba(156, 203, 0, 0.9)";
        ctx.textAlign = "center";
        ctx.fillText(region.name, x, y);
      });

      const centerSize = 65 * scale;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerSize + 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(80, 120, 0, 0.3)";
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerSize, 0, Math.PI * 2);
      const centerGrad = ctx.createRadialGradient(
        centerX - centerSize * 0.3, centerY - centerSize * 0.3, 0,
        centerX, centerY, centerSize
      );
      centerGrad.addColorStop(0, "#5a8a30");
      centerGrad.addColorStop(1, "#3a6020");
      ctx.fillStyle = centerGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(156, 203, 0, 0.6)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold ${15 * scale}px system-ui`;
      ctx.fillText("wesemann", centerX, centerY - 4 * scale);
      ctx.font = `${7 * scale}px system-ui`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      ctx.fillText("LABOREINRICHTUNGEN", centerX, centerY + 12 * scale);

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[650px] md:h-[800px] lg:h-[850px] bg-slate-900">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-8 left-8 text-left"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white/90">
          Business
        </h2>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary">
          Ökosystem
        </h2>
        <p className="text-gray-500 text-xs mt-2 uppercase tracking-[0.35em]">
          Wesemann Netzwerk
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 text-left hidden md:block"
      >
        <div className="space-y-0.5 text-[11px] text-gray-500 leading-relaxed">
          <p>Wesemann GmbH</p>
          <p>Abarcon GmbH</p>
          <p>Wesemann Reinraumtechnik GmbH</p>
          <p>Mesycon GmbH</p>
          <p>Synergie Mobiliar GmbH</p>
          <p>WS Funktions- und Reinraum GmbH</p>
          <p>Planexus GmbH</p>
          <p>Wesemann Benelux B.V.</p>
          <p>Wesemann Schweiz AG</p>
          <p>HibLab Solutions, S.L.</p>
          <p>Wesemann Middle East</p>
        </div>
      </motion.div>
    </div>
  );
}
