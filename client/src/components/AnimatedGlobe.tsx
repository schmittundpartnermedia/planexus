import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const partnerNodes = [
  { name: "WS Funktions-\nund Reinraum", angle: -50, distance: 280, region: "Deutschland" },
  { name: "MESYCON\nGmbH", angle: -15, distance: 260, region: "Deutschland" },
  { name: "wesemann\nReinraumtechnik", angle: 25, distance: 290, region: "Deutschland" },
  { name: "ABARCON", angle: -85, distance: 250, region: "Deutschland" },
  { name: "wesemann", angle: -130, distance: 240, region: "Deutschland" },
  { name: "PLANEXUS", angle: 175, distance: 250, region: "Deutschland" },
  { name: "SYNERGIE\nMobiliar GmbH", angle: 215, distance: 280, region: "Deutschland" },
  { name: "wesemann\nBENELUX", angle: 250, distance: 270, region: "Benelux" },
  { name: "HibLab\nSolutions", angle: 290, distance: 280, region: "Spanien" },
  { name: "wesemann\nSchweiz", angle: 60, distance: 280, region: "Schweiz" },
  { name: "wesemann\nMiddle East", angle: 330, distance: 270, region: "Naher Osten" },
];

const regionLabels = [
  { name: "DEUTSCHLAND", x: 0.08, y: 0.42, color: "#4a9090" },
  { name: "BENELUX", x: 0.22, y: 0.88, color: "#4a9090" },
  { name: "SCHWEIZ", x: 0.88, y: 0.22, color: "#4a9090" },
  { name: "SPANIEN", x: 0.58, y: 0.82, color: "#4a9090" },
  { name: "NAHER OSTEN", x: 0.90, y: 0.58, color: "#4a9090" },
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

    const drawGlobe = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) / 700;
      const radius = 100 * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const globeGradient = ctx.createRadialGradient(
        centerX - radius * 0.4,
        centerY - radius * 0.4,
        0,
        centerX,
        centerY,
        radius * 1.3
      );
      globeGradient.addColorStop(0, "rgba(120, 200, 200, 0.5)");
      globeGradient.addColorStop(0.4, "rgba(90, 170, 170, 0.35)");
      globeGradient.addColorStop(0.8, "rgba(70, 140, 140, 0.2)");
      globeGradient.addColorStop(1, "rgba(50, 120, 120, 0.1)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = globeGradient;
      ctx.fill();

      ctx.strokeStyle = "rgba(80, 160, 160, 0.6)";
      ctx.lineWidth = 3;
      ctx.stroke();

      const rotation = time * 0.0003;
      for (let i = 0; i < 7; i++) {
        const lat = ((i + 1) / 8) * Math.PI - Math.PI / 2;
        const y = centerY + Math.sin(lat) * radius;
        const xRadius = Math.cos(lat) * radius;
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, xRadius, xRadius * 0.1, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(80, 160, 160, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      for (let i = 0; i < 12; i++) {
        const lon = (i / 12) * Math.PI * 2 + rotation;
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(lon)),
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "rgba(80, 160, 160, 0.18)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      partnerNodes.forEach((node, index) => {
        const angleRad = (node.angle * Math.PI) / 180;
        const dist = node.distance * scale;
        const nodeX = centerX + Math.cos(angleRad) * dist;
        const nodeY = centerY + Math.sin(angleRad) * dist * 0.65;

        const pulseSpeed = 0.0015;
        const pulsePhase = ((time * pulseSpeed + index * 0.4) % 1);
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        const cp1x = centerX + (nodeX - centerX) * 0.4;
        const cp1y = centerY + (nodeY - centerY) * 0.2;
        const cp2x = centerX + (nodeX - centerX) * 0.7;
        const cp2y = nodeY - (nodeY - centerY) * 0.2;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nodeX, nodeY);
        
        ctx.strokeStyle = "rgba(80, 160, 160, 0.35)";
        ctx.lineWidth = 2;
        ctx.stroke();

        const t = pulsePhase;
        const pulseX = Math.pow(1-t, 3) * centerX + 3 * Math.pow(1-t, 2) * t * cp1x + 3 * (1-t) * t * t * cp2x + t * t * t * nodeX;
        const pulseY = Math.pow(1-t, 3) * centerY + 3 * Math.pow(1-t, 2) * t * cp1y + 3 * (1-t) * t * t * cp2y + t * t * t * nodeY;
        
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 5 * scale, 0, Math.PI * 2);
        const pulseAlpha = 0.9 - pulsePhase * 0.6;
        ctx.fillStyle = `rgba(156, 203, 0, ${pulseAlpha})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 8 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 203, 0, ${pulseAlpha * 0.3})`;
        ctx.fill();

        const nodeRadius = 38 * scale;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.97)";
        ctx.fill();
        ctx.strokeStyle = "rgba(80, 160, 160, 0.5)";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, nodeRadius + 6 * scale, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(80, 160, 160, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = `bold ${11 * scale}px system-ui`;
        ctx.fillStyle = "#1a5555";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        const lines = node.name.split("\n");
        lines.forEach((line, i) => {
          ctx.fillText(line, nodeX, nodeY + (i - (lines.length - 1) / 2) * 13 * scale);
        });
      });

      regionLabels.forEach((region) => {
        const x = region.x * canvas.width;
        const y = region.y * canvas.height;
        
        ctx.font = `bold ${14 * scale}px system-ui`;
        ctx.fillStyle = region.color;
        ctx.textAlign = "center";
        ctx.fillText(region.name, x, y);
      });

      const centerRadius = 60 * scale;
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(25, 75, 75, 0.95)";
      ctx.fill();
      ctx.strokeStyle = "rgba(80, 160, 160, 0.6)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.font = `bold ${14 * scale}px system-ui`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("wesemann", centerX, centerY - 6 * scale);
      ctx.font = `${8 * scale}px system-ui`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      ctx.fillText("LABOREINRICHTUNGEN", centerX, centerY + 10 * scale);

      time += 16;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[750px] lg:h-[800px]" style={{ background: "linear-gradient(145deg, #e5f2f2 0%, #d0e5e5 40%, #c0dada 100%)" }}>
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-8 left-8 text-left"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-slate-600 mb-1">
          Business
        </h2>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-teal-600">
          Ökosystem
        </h2>
        <p className="text-teal-600/60 text-sm mt-3 uppercase tracking-[0.4em]">
          Wesemann Netzwerk
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-8 left-8 text-left hidden md:block"
      >
        <div className="space-y-1 text-xs text-slate-500 leading-relaxed">
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
