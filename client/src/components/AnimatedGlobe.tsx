import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const partnerNodes = [
  { name: "WS", subname: "Funktions- und\nReinraum GmbH", angle: -55, distance: 320, size: 50 },
  { name: "MESYCON", subname: "GMBH", angle: -20, distance: 280, size: 45 },
  { name: "wesemann", subname: "Reinraumtechnik", angle: 20, distance: 310, size: 50 },
  { name: "ABARCON", subname: "", angle: -90, distance: 270, size: 55 },
  { name: "wesemann", subname: "", angle: -135, distance: 260, size: 50 },
  { name: "PLANEXUS", subname: "", angle: 165, distance: 280, size: 50 },
  { name: "SYNERGIE", subname: "Mobiliar GmbH", angle: 205, distance: 320, size: 45 },
  { name: "wesemann", subname: "BENELUX", angle: 235, distance: 300, size: 50 },
  { name: "HibLab", subname: "Solutions", angle: 275, distance: 310, size: 45 },
  { name: "wesemann", subname: "Schweiz", angle: 55, distance: 320, size: 50 },
  { name: "wesemann", subname: "Middle East", angle: 320, distance: 300, size: 45 },
];

const regionLabels = [
  { name: "DEUTSCHLAND", x: 0.10, y: 0.45 },
  { name: "BENELUX", x: 0.25, y: 0.90 },
  { name: "SCHWEIZ", x: 0.85, y: 0.20 },
  { name: "SPANIEN", x: 0.60, y: 0.85 },
  { name: "NAHER OSTEN", x: 0.88, y: 0.55 },
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

    const drawEarth = (cx: number, cy: number, r: number, rotation: number) => {
      const earthGradient = ctx.createRadialGradient(
        cx - r * 0.3, cy - r * 0.3, 0,
        cx, cy, r
      );
      earthGradient.addColorStop(0, "rgba(156, 203, 0, 0.4)");
      earthGradient.addColorStop(0.5, "rgba(100, 150, 50, 0.25)");
      earthGradient.addColorStop(0.8, "rgba(80, 120, 40, 0.15)");
      earthGradient.addColorStop(1, "rgba(60, 100, 30, 0.1)");

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = earthGradient;
      ctx.fill();

      ctx.strokeStyle = "rgba(156, 203, 0, 0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r - 2, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = "rgba(156, 203, 0, 0.2)";
      
      const europeX = cx + Math.cos(rotation) * r * 0.1;
      const europeY = cy - r * 0.2;
      ctx.beginPath();
      ctx.ellipse(europeX, europeY, r * 0.25, r * 0.2, 0.2, 0, Math.PI * 2);
      ctx.fill();

      const africaX = cx + Math.cos(rotation) * r * 0.05;
      const africaY = cy + r * 0.15;
      ctx.beginPath();
      ctx.ellipse(africaX, africaY, r * 0.18, r * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();

      const asiaX = cx + r * 0.3 + Math.cos(rotation) * r * 0.1;
      const asiaY = cy - r * 0.1;
      ctx.beginPath();
      ctx.ellipse(asiaX, asiaY, r * 0.35, r * 0.25, 0.3, 0, Math.PI * 2);
      ctx.fill();

      const americaX = cx - r * 0.4 + Math.cos(rotation + Math.PI) * r * 0.1;
      const americaY = cy;
      ctx.beginPath();
      ctx.ellipse(americaX, americaY, r * 0.15, r * 0.4, -0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      for (let i = 1; i < 5; i++) {
        const latY = cy + (i - 2.5) * r * 0.35;
        const latR = Math.sqrt(r * r - Math.pow(latY - cy, 2));
        if (latR > 0) {
          ctx.beginPath();
          ctx.ellipse(cx, latY, latR, latR * 0.08, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (let i = 0; i < 8; i++) {
        const lon = (i / 8) * Math.PI + rotation;
        const lonScale = Math.cos(lon);
        if (Math.abs(lonScale) > 0.1) {
          ctx.beginPath();
          ctx.ellipse(cx, cy, r * Math.abs(lonScale), r, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.15)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(cx, cy, r + 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(156, 203, 0, 0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, r + 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(156, 203, 0, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const draw = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) / 800;
      const globeRadius = 120 * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rotation = time * 0.0003;
      drawEarth(centerX, centerY, globeRadius, rotation);

      partnerNodes.forEach((node, index) => {
        const angleRad = (node.angle * Math.PI) / 180;
        const dist = node.distance * scale;
        const nodeX = centerX + Math.cos(angleRad) * dist;
        const nodeY = centerY + Math.sin(angleRad) * dist * 0.6;
        const nodeSize = node.size * scale;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        const cp1x = centerX + (nodeX - centerX) * 0.3;
        const cp1y = centerY + (nodeY - centerY) * 0.1;
        const cp2x = centerX + (nodeX - centerX) * 0.7;
        const cp2y = nodeY - (nodeY - centerY) * 0.15;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nodeX, nodeY);
        
        ctx.strokeStyle = "rgba(156, 203, 0, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const pulseSpeed = 0.002;
        const pulsePhase = ((time * pulseSpeed + index * 0.35) % 1);
        const t = pulsePhase;
        const pulseX = Math.pow(1-t, 3) * centerX + 3 * Math.pow(1-t, 2) * t * cp1x + 3 * (1-t) * t * t * cp2x + t * t * t * nodeX;
        const pulseY = Math.pow(1-t, 3) * centerY + 3 * Math.pow(1-t, 2) * t * cp1y + 3 * (1-t) * t * t * cp2y + t * t * t * nodeY;
        
        const pulseAlpha = 1 - pulsePhase * 0.7;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 6 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 203, 0, ${pulseAlpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
        ctx.fill();
        ctx.strokeStyle = "rgba(156, 203, 0, 0.6)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#1e3a3a";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        if (node.subname) {
          ctx.font = `bold ${12 * scale}px system-ui`;
          ctx.fillText(node.name, nodeX, nodeY - 6 * scale);
          ctx.font = `${9 * scale}px system-ui`;
          ctx.fillStyle = "#3a6060";
          const sublines = node.subname.split("\n");
          sublines.forEach((line, i) => {
            ctx.fillText(line, nodeX, nodeY + (8 + i * 10) * scale);
          });
        } else {
          ctx.font = `bold ${12 * scale}px system-ui`;
          ctx.fillText(node.name, nodeX, nodeY);
        }
      });

      regionLabels.forEach((region) => {
        const x = region.x * canvas.width;
        const y = region.y * canvas.height;
        
        ctx.font = `bold ${13 * scale}px system-ui`;
        ctx.fillStyle = "rgba(156, 203, 0, 0.9)";
        ctx.textAlign = "center";
        ctx.fillText(region.name, x, y);
      });

      const centerSize = 60 * scale;
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
      ctx.strokeStyle = "rgba(156, 203, 0, 0.7)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold ${14 * scale}px system-ui`;
      ctx.fillText("wesemann", centerX, centerY - 5 * scale);
      ctx.font = `${7 * scale}px system-ui`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillText("LABOREINRICHTUNGEN", centerX, centerY + 10 * scale);

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
    <div 
      className="relative w-full h-[650px] md:h-[800px] lg:h-[850px] bg-slate-900" 
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-8 left-8 text-left"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white">
          Business
        </h2>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary">
          Ökosystem
        </h2>
        <p className="text-gray-400 text-xs mt-2 uppercase tracking-[0.35em]">
          Wesemann Netzwerk
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 text-left hidden md:block"
      >
        <div className="space-y-0.5 text-[11px] text-gray-400 leading-relaxed">
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
