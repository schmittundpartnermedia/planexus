import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const partnerNodes = [
  { name: "Wesemann", angle: 0, distance: 180, region: "Deutschland" },
  { name: "Reinraumtechnik", angle: 40, distance: 200, region: "Deutschland" },
  { name: "Abarcon", angle: 80, distance: 190, region: "Deutschland" },
  { name: "WS Funktions-", angle: 120, distance: 185, region: "Deutschland" },
  { name: "Synergie", angle: 160, distance: 195, region: "Deutschland" },
  { name: "Mesycon", angle: 200, distance: 180, region: "Deutschland" },
  { name: "Planexus", angle: 240, distance: 200, region: "Deutschland" },
  { name: "Benelux", angle: 280, distance: 190, region: "Benelux" },
  { name: "Schweiz", angle: 310, distance: 185, region: "Schweiz" },
  { name: "HibLab", angle: 340, distance: 195, region: "Spanien" },
];

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

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
      const radius = Math.min(canvas.width, canvas.height) * 0.18;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "rgba(156, 203, 0, 0.3)");
      gradient.addColorStop(0.5, "rgba(156, 203, 0, 0.15)");
      gradient.addColorStop(1, "rgba(156, 203, 0, 0.05)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.strokeStyle = "rgba(156, 203, 0, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let i = 0; i < 5; i++) {
        const lat = ((i + 1) / 6) * Math.PI - Math.PI / 2;
        const y = centerY + Math.sin(lat) * radius;
        const xRadius = Math.cos(lat) * radius;
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, xRadius, xRadius * 0.15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(156, 203, 0, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let i = 0; i < 8; i++) {
        const lon = (i / 8) * Math.PI * 2 + rotation;
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
        ctx.strokeStyle = "rgba(156, 203, 0, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      partnerNodes.forEach((node, index) => {
        const angle = ((node.angle + rotation * 30) * Math.PI) / 180;
        const nodeX = centerX + Math.cos(angle) * node.distance;
        const nodeY = centerY + Math.sin(angle) * node.distance * 0.6;

        const time = Date.now() / 1000;
        const pulsePhase = (time + index * 0.3) % 1;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        const cp1x = centerX + (nodeX - centerX) * 0.3;
        const cp1y = centerY + (nodeY - centerY) * 0.1;
        const cp2x = centerX + (nodeX - centerX) * 0.7;
        const cp2y = nodeY - (nodeY - centerY) * 0.3;
        
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nodeX, nodeY);
        
        const lineGradient = ctx.createLinearGradient(centerX, centerY, nodeX, nodeY);
        lineGradient.addColorStop(0, "rgba(156, 203, 0, 0.1)");
        lineGradient.addColorStop(pulsePhase, "rgba(156, 203, 0, 0.8)");
        lineGradient.addColorStop(Math.min(1, pulsePhase + 0.1), "rgba(156, 203, 0, 0.1)");
        lineGradient.addColorStop(1, "rgba(156, 203, 0, 0.2)");
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(156, 203, 0, 0.2)";
        ctx.fill();
        ctx.strokeStyle = "rgba(156, 203, 0, 0.6)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nodeX, nodeY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#9CCB00";
        ctx.fill();

        ctx.font = "bold 11px system-ui";
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.textAlign = "center";
        ctx.fillText(node.name, nodeX, nodeY + 22);
      });

      ctx.font = "bold 14px system-ui";
      ctx.fillStyle = "#9CCB00";
      ctx.textAlign = "center";
      ctx.fillText("WESEMANN", centerX, centerY - 5);
      ctx.font = "10px system-ui";
      ctx.fillStyle = "rgba(156, 203, 0, 0.7)";
      ctx.fillText("NETZWERK", centerX, centerY + 10);

      rotation += 0.002;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-4 left-4 text-left"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
          Business
        </h2>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
          Ökosystem
        </h2>
        <p className="text-gray-400 text-sm mt-2 uppercase tracking-widest">
          Wesemann Netzwerk
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-4 right-4 text-right hidden md:block"
      >
        <div className="space-y-1 text-xs text-gray-500">
          <div className="flex items-center gap-2 justify-end">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Deutschland</span>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span className="w-2 h-2 bg-primary/70 rounded-full animate-pulse"></span>
            <span>Benelux</span>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span className="w-2 h-2 bg-primary/70 rounded-full animate-pulse"></span>
            <span>Schweiz</span>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span className="w-2 h-2 bg-primary/70 rounded-full animate-pulse"></span>
            <span>Spanien</span>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <span className="w-2 h-2 bg-primary/70 rounded-full animate-pulse"></span>
            <span>Naher Osten</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
