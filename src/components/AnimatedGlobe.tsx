import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CENTER = { x: 50, y: 50 };

const regionHubs = [
  { name: "DEUTSCHLAND", x: 25, y: 28 },
  { name: "SCHWEIZ", x: 76, y: 20 },
  { name: "BENELUX", x: 20, y: 78 },
  { name: "SPANIEN", x: 66, y: 82 },
  { name: "NAHER OSTEN", x: 84, y: 50 },
];

const companyNodes = [
  { name: "Wesemann Reinraumtechnik", logo: "/attached_assets/wesemann-reinraumtechnik_1770839042056.png", x: 8, y: 12, region: "DEUTSCHLAND" },
  { name: "Abarcon", logo: "/attached_assets/Abarcon_Logo_1770839042054.png", x: 25, y: 8, region: "DEUTSCHLAND" },
  { name: "RPG Kunststoff", logo: "/attached_assets/Logo_RPG_Kuntstoff_1770839042055.png", x: 40, y: 10, region: "DEUTSCHLAND" },
  { name: "WS Funktions- und Reinraum", logo: "/attached_assets/Logo_WS_Funktions_1770839062817.png", x: 42, y: 26, region: "DEUTSCHLAND" },
  { name: "Mesycon", logo: "/attached_assets/Logo-Mesycon_283x62px_1770839042056.png", x: 8, y: 28, region: "DEUTSCHLAND" },
  { name: "oneX", logo: "/attached_assets/oneX_logo_1770839042055.png", x: 8, y: 42, region: "DEUTSCHLAND" },
  { name: "Planexus", logo: "/attached_assets/Planexus_Icon_1768324672124.png", x: 22, y: 46, region: "DEUTSCHLAND" },
  { name: "Synergie Mobiliar", logo: "/attached_assets/Logo_SYNERGIE_1770839042055.png", x: 8, y: 56, region: "DEUTSCHLAND" },
  { name: "Labco AG", logo: "/attached_assets/Labco_AG_Logo_1770839042055.png", x: 78, y: 8, region: "SCHWEIZ" },
  { name: "Wesemann Benelux", logo: "/attached_assets/Logo_WS_Benelux_1770839042056.png", x: 10, y: 88, region: "BENELUX" },
  { name: "HibLab Solutions", logo: "/attached_assets/HibLabSolutions_Logo_1770839042055.png", x: 60, y: 92, region: "SPANIEN" },
  { name: "Wesemann Middle East", logo: "/attached_assets/Wesemann_Middle_East_Logo_1770839042055.png", x: 92, y: 40, region: "NAHER OSTEN" },
];

const allLogosForMobile = [
  { name: "Wesemann", logo: "/attached_assets/Wesemann_Logo_1770839062818.png" },
  ...companyNodes.map(c => ({ name: c.name, logo: c.logo })),
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
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cX = (CENTER.x / 100) * w;
      const cY = (CENTER.y / 100) * h;
      const scale = Math.min(w, h) / 1000;
      const globeRadius = 90 * scale;
      const rotation = time * 0.0002;

      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.arc(cX, cY, globeRadius + 60 * scale, 0, Math.PI * 2);
      const outerGlow = ctx.createRadialGradient(cX, cY, globeRadius, cX, cY, globeRadius + 80 * scale);
      outerGlow.addColorStop(0, "rgba(187, 215, 0, 0.15)");
      outerGlow.addColorStop(0.5, "rgba(187, 215, 0, 0.05)");
      outerGlow.addColorStop(1, "rgba(187, 215, 0, 0)");
      ctx.fillStyle = outerGlow;
      ctx.fill();

      const earthGrad = ctx.createRadialGradient(cX - globeRadius * 0.3, cY - globeRadius * 0.3, 0, cX, cY, globeRadius);
      earthGrad.addColorStop(0, "rgba(187, 215, 0, 0.3)");
      earthGrad.addColorStop(0.5, "rgba(130, 180, 0, 0.2)");
      earthGrad.addColorStop(1, "rgba(80, 120, 0, 0.1)");
      ctx.beginPath();
      ctx.arc(cX, cY, globeRadius, 0, Math.PI * 2);
      ctx.fillStyle = earthGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(187, 215, 0, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      ctx.arc(cX, cY, globeRadius - 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = "rgba(187, 215, 0, 0.12)";
      const europeX = cX + Math.cos(rotation * 0.5) * globeRadius * 0.05;
      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.1, cY - globeRadius * 0.25, globeRadius * 0.2, globeRadius * 0.15, 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(europeX - globeRadius * 0.05, cY + globeRadius * 0.2, globeRadius * 0.12, globeRadius * 0.25, -0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(europeX + globeRadius * 0.25, cY - globeRadius * 0.1, globeRadius * 0.25, globeRadius * 0.18, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      for (let i = 1; i < 5; i++) {
        const latY = cY + (i - 2.5) * globeRadius * 0.32;
        const latR = Math.sqrt(globeRadius * globeRadius - Math.pow(latY - cY, 2));
        if (latR > 0) {
          ctx.beginPath();
          ctx.ellipse(cX, latY, latR, latR * 0.05, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(187, 215, 0, 0.1)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      for (let i = 0; i < 8; i++) {
        const lon = (i / 8) * Math.PI + rotation;
        const lonScale = Math.cos(lon);
        if (Math.abs(lonScale) > 0.1) {
          ctx.beginPath();
          ctx.ellipse(cX, cY, globeRadius * Math.abs(lonScale), globeRadius, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(187, 215, 0, 0.06)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      let pulseIdx = 0;
      regionHubs.forEach(region => {
        const rX = (region.x / 100) * w;
        const rY = (region.y / 100) * h;

        ctx.beginPath();
        ctx.moveTo(cX, cY);
        ctx.lineTo(rX, rY);
        ctx.strokeStyle = "rgba(187, 215, 0, 0.45)";
        ctx.lineWidth = 2;
        ctx.stroke();

        const mainPulse = ((time * 0.0006 + pulseIdx * 0.2) % 1);
        const mpX = cX + (rX - cX) * mainPulse;
        const mpY = cY + (rY - cY) * mainPulse;
        ctx.beginPath();
        ctx.arc(mpX, mpY, 4 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(187, 215, 0, ${1 - mainPulse * 0.5})`;
        ctx.fill();

        const retPulse = ((time * 0.0005 + pulseIdx * 0.3 + 0.5) % 1);
        const rpX = rX + (cX - rX) * retPulse;
        const rpY = rY + (cY - rY) * retPulse;
        ctx.beginPath();
        ctx.arc(rpX, rpY, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 - retPulse * 0.5})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(rX, rY, 6 * scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(187, 215, 0, 0.9)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.font = `bold ${10 * scale}px system-ui`;
        ctx.fillStyle = "rgba(187, 215, 0, 0.85)";
        ctx.textAlign = region.x < 50 ? "right" : "left";
        const labelOff = region.x < 50 ? -12 * scale : 12 * scale;
        ctx.fillText(region.name, rX + labelOff, rY + 4 * scale);

        const regionCompanies = companyNodes.filter(c => c.region === region.name);
        regionCompanies.forEach((comp, ci) => {
          const compPxX = (comp.x / 100) * w;
          const compPxY = (comp.y / 100) * h;

          ctx.beginPath();
          ctx.moveTo(rX, rY);
          ctx.lineTo(compPxX, compPxY);
          ctx.strokeStyle = "rgba(187, 215, 0, 0.25)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          const cp = ((time * 0.0008 + pulseIdx * 0.15 + ci * 0.25) % 1);
          const cpX = rX + (compPxX - rX) * cp;
          const cpY = rY + (compPxY - rY) * cp;
          ctx.beginPath();
          ctx.arc(cpX, cpY, 3 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(187, 215, 0, ${0.9 - cp * 0.6})`;
          ctx.fill();

          const crp = ((time * 0.0007 + pulseIdx * 0.2 + ci * 0.35 + 0.5) % 1);
          const crpX = compPxX + (rX - compPxX) * crp;
          const crpY = compPxY + (rY - compPxY) * crp;
          ctx.beginPath();
          ctx.arc(crpX, crpY, 2.5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.6 - crp * 0.4})`;
          ctx.fill();
        });

        pulseIdx++;
      });

      const centerGlow = 55 * scale;
      ctx.beginPath();
      ctx.arc(cX, cY, centerGlow + 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(187, 215, 0, 0.1)";
      ctx.fill();

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
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="hidden md:block absolute inset-0 w-full h-full" />

      <div className="hidden md:block absolute inset-0 z-10">
        <motion.div
          className="absolute bg-white rounded-full shadow-xl shadow-primary/20 border-2 border-primary/40 flex items-center justify-center overflow-hidden"
          style={{
            left: `${CENTER.x}%`,
            top: `${CENTER.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '110px',
            height: '110px'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          <img
            src="/attached_assets/Wesemann_Logo_1770839062818.png"
            alt="Wesemann Laboreinrichtungen"
            className="w-[80px] h-auto object-contain"
          />
        </motion.div>

        {companyNodes.map((company, i) => (
          <motion.div
            key={company.name}
            className="absolute bg-white/95 backdrop-blur-sm rounded-xl shadow-md border border-white/60 flex items-center justify-center p-2.5 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300 cursor-default"
            style={{
              left: `${company.x}%`,
              top: `${company.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + 0.06 * i, duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-7 lg:h-9 w-auto max-w-[90px] lg:max-w-[110px] object-contain"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center justify-center min-h-screen px-6 py-24 relative z-10">
        <h2 className="text-3xl font-heading text-white/90 text-center mb-3">
          <span className="font-light">Business</span>{" "}
          <span className="font-bold text-primary">Ökosystem</span>
        </h2>
        <p className="text-gray-400 text-xs mb-10 uppercase tracking-[0.3em]">Wesemann Netzwerk</p>
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {allLogosForMobile.map((company, i) => (
            <motion.div
              key={company.name}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-7 w-auto max-w-[100px] object-contain"
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="hidden md:block absolute top-8 left-8 z-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white/90">
          <span className="font-light">Business</span>{" "}
          <span className="font-bold text-primary">Ökosystem</span>
        </h2>
        <p className="text-gray-500 text-xs mt-2 uppercase tracking-[0.35em]">
          Wesemann Netzwerk
        </p>
      </motion.div>
    </div>
  );
}
