import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const regions = [
  { 
    name: "DEUTSCHLAND", 
    x: 0.12, 
    y: 0.45,
    companies: [
      { name: "wesemann", subname: "Reinraumtechnik", offsetX: -0.02, offsetY: -0.18 },
      { name: "ABARCON", subname: "", offsetX: 0.10, offsetY: -0.14 },
      { name: "WS", subname: "Funktions- und\nReinraum GmbH", offsetX: 0.18, offsetY: -0.06 },
      { name: "MESYCON", subname: "GmbH", offsetX: 0.18, offsetY: 0.10 },
      { name: "PLANEXUS", subname: "", offsetX: 0.08, offsetY: 0.18 },
      { name: "SYNERGIE", subname: "Mobiliar GmbH", offsetX: -0.04, offsetY: 0.26 },
    ]
  },
  { 
    name: "SCHWEIZ", 
    x: 0.68, 
    y: 0.22,
    companies: [
      { name: "wesemann", subname: "Schweiz", offsetX: -0.10, offsetY: -0.10 },
    ]
  },
  { 
    name: "BENELUX", 
    x: 0.30, 
    y: 0.82,
    companies: [
      { name: "wesemann", subname: "BENELUX", offsetX: 0.10, offsetY: -0.10 },
    ]
  },
  { 
    name: "SPANIEN", 
    x: 0.58, 
    y: 0.85,
    companies: [
      { name: "HibLab", subname: "Solutions", offsetX: 0.08, offsetY: -0.10 },
    ]
  },
  { 
    name: "NAHER OSTEN", 
    x: 0.72, 
    y: 0.55,
    companies: [
      { name: "wesemann", subname: "Middle East", offsetX: 0.08, offsetY: 0.10 },
    ]
  },
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
      const centerX = canvas.width * 0.50;
      const centerY = canvas.height * 0.48;
      const scale = Math.min(canvas.width, canvas.height) / 800;
      const globeRadius = 130 * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rotation = time * 0.0002;

      // Outer glow
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

      // Earth globe
      const earthGradient = ctx.createRadialGradient(
        centerX - globeRadius * 0.3, centerY - globeRadius * 0.3, 0,
        centerX, centerY, globeRadius
      );
      earthGradient.addColorStop(0, "rgba(156, 203, 0, 0.4)");
      earthGradient.addColorStop(0.4, "rgba(130, 180, 0, 0.28)");
      earthGradient.addColorStop(0.7, "rgba(100, 150, 0, 0.18)");
      earthGradient.addColorStop(1, "rgba(80, 120, 0, 0.1)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fillStyle = earthGradient;
      ctx.fill();
      ctx.strokeStyle = "rgba(156, 203, 0, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Continents
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius - 2, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = "rgba(156, 203, 0, 0.15)";
      
      const europeX = centerX + Math.cos(rotation * 0.5) * globeRadius * 0.05;
      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.1, centerY - globeRadius * 0.25, globeRadius * 0.2, globeRadius * 0.15, 0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.05, centerY + globeRadius * 0.2, globeRadius * 0.12, globeRadius * 0.25, -0.1, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(europeX + globeRadius * 0.25, centerY - globeRadius * 0.1, globeRadius * 0.25, globeRadius * 0.18, 0.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Grid lines
      for (let i = 1; i < 5; i++) {
        const latY = centerY + (i - 2.5) * globeRadius * 0.32;
        const latR = Math.sqrt(globeRadius * globeRadius - Math.pow(latY - centerY, 2));
        if (latR > 0) {
          ctx.beginPath();
          ctx.ellipse(centerX, latY, latR, latR * 0.05, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.12)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (let i = 0; i < 8; i++) {
        const lon = (i / 8) * Math.PI + rotation;
        const lonScale = Math.cos(lon);
        if (Math.abs(lonScale) > 0.1) {
          ctx.beginPath();
          ctx.ellipse(centerX, centerY, globeRadius * Math.abs(lonScale), globeRadius, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.08)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw regions and their companies
      let pulseIndex = 0;
      
      regions.forEach((region) => {
        const regionX = region.x * canvas.width;
        const regionY = region.y * canvas.height;

        // Line from center to region
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(regionX, regionY);
        ctx.strokeStyle = "rgba(156, 203, 0, 0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Animated pulse on main line
        const mainPulsePhase = ((time * 0.0006 + pulseIndex * 0.2) % 1);
        const mainPulseX = centerX + (regionX - centerX) * mainPulsePhase;
        const mainPulseY = centerY + (regionY - centerY) * mainPulsePhase;
        ctx.beginPath();
        ctx.arc(mainPulseX, mainPulseY, 5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 203, 0, ${1 - mainPulsePhase * 0.5})`;
        ctx.fill();

        // Region node
        ctx.beginPath();
        ctx.arc(regionX, regionY, 8 * scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(156, 203, 0, 0.9)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Region label
        ctx.font = `bold ${13 * scale}px system-ui`;
        ctx.fillStyle = "rgba(156, 203, 0, 1)";
        ctx.textAlign = region.x < 0.5 ? "right" : "left";
        const labelOffset = region.x < 0.5 ? -15 * scale : 15 * scale;
        ctx.fillText(region.name, regionX + labelOffset, regionY + 4 * scale);

        // Draw companies for this region
        region.companies.forEach((company, compIndex) => {
          const compX = regionX + company.offsetX * canvas.width;
          const compY = regionY + company.offsetY * canvas.height;
          const nodeSize = 52 * scale;

          // Line from region to company
          ctx.beginPath();
          ctx.moveTo(regionX, regionY);
          ctx.lineTo(compX, compY);
          ctx.strokeStyle = "rgba(156, 203, 0, 0.35)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Pulse on company line
          const compPulsePhase = ((time * 0.0008 + pulseIndex * 0.15 + compIndex * 0.25) % 1);
          const compPulseX = regionX + (compX - regionX) * compPulsePhase;
          const compPulseY = regionY + (compY - regionY) * compPulsePhase;
          ctx.beginPath();
          ctx.arc(compPulseX, compPulseY, 4 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(156, 203, 0, ${1 - compPulsePhase * 0.6})`;
          ctx.fill();

          // Company node glow
          ctx.beginPath();
          ctx.arc(compX, compY, nodeSize + 5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(156, 203, 0, 0.08)";
          ctx.fill();

          // Company node
          ctx.beginPath();
          ctx.arc(compX, compY, nodeSize, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.97)";
          ctx.fill();
          ctx.strokeStyle = "rgba(156, 203, 0, 0.5)";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Small green dot on top
          ctx.beginPath();
          ctx.arc(compX, compY - nodeSize + 6 * scale, 4 * scale, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(156, 203, 0, 0.85)";
          ctx.fill();

          // Company text
          ctx.fillStyle = "#2a5555";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          
          if (company.subname) {
            ctx.font = `bold ${11 * scale}px system-ui`;
            ctx.fillText(company.name, compX, compY - 5 * scale);
            ctx.font = `${8 * scale}px system-ui`;
            ctx.fillStyle = "#4a7575";
            const sublines = company.subname.split("\n");
            sublines.forEach((line, i) => {
              ctx.fillText(line, compX, compY + (6 + i * 9) * scale);
            });
          } else {
            ctx.font = `bold ${11 * scale}px system-ui`;
            ctx.fillText(company.name, compX, compY);
          }
        });

        pulseIndex++;
      });

      // Center Wesemann logo
      const centerSize = 60 * scale;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerSize + 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(80, 120, 0, 0.25)";
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
      ctx.font = `bold ${14 * scale}px system-ui`;
      ctx.fillText("wesemann", centerX, centerY - 4 * scale);
      ctx.font = `${6 * scale}px system-ui`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
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
    <div className="relative w-full h-[650px] md:h-[800px] lg:h-[850px] bg-slate-900">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-8 left-8 text-left"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white/90">
          <span className="font-light">Business</span> <span className="font-bold text-primary">Ökosystem</span>
        </h2>
        <p className="text-gray-500 text-xs mt-2 uppercase tracking-[0.35em]">
          Wesemann Netzwerk
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-8 right-8 text-right hidden md:block"
      >
        <div className="space-y-1 text-[12px] text-gray-400 leading-relaxed font-medium">
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
