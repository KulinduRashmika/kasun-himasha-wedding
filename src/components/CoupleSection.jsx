import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LotusFlower, CornerOrnament, KandyanBorder } from "./Ornaments";

const CoupleCard = ({ name, nameSi, role, roleSi, parent, parentSi, delay, side }) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.9, ease: "easeOut" }}
    className="flex flex-col items-center text-center"
  >
    {/* Portrait placeholder */}
    <div className="relative mb-6">
      <div
        className="portrait-ring rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: "180px",
          height: "180px",
          background: "linear-gradient(135deg, rgba(109,7,26,0.8), rgba(74,5,18,0.9))",
        }}
      >
        {/* Decorative inner pattern */}
        <div className="relative flex items-center justify-center w-full h-full">
          <LotusFlower size={80} color="#D4AF37" opacity={0.5} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="font-cinzel font-bold text-gold/60"
              style={{ fontSize: "3.5rem" }}
            >
              {name[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Role badge */}
      <div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-cinzel tracking-widest whitespace-nowrap"
        style={{
          background: "linear-gradient(90deg, #6D071A, #9B1A2E, #6D071A)",
          border: "1px solid #D4AF37",
          color: "#D4AF37",
        }}
      >
        {role}
      </div>
    </div>

    <div className="mt-4 space-y-2">
      <h3
        className="font-cinzel font-bold text-ivory"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
      >
        {name}
      </h3>
      <p className="font-sinhala text-gold text-sm">{nameSi}</p>

      <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(212,175,55,0.3)" }}>
        <p className="font-cinzel text-gold/60 text-xs tracking-widest uppercase mb-1">
          {roleSi}
        </p>
        <p className="font-playfair text-ivory/80 text-sm italic">{parent}</p>
        <p className="font-sinhala text-gold/70 text-xs mt-1">{parentSi}</p>
      </div>
    </div>
  </motion.div>
);

const CoupleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="couple"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0205 0%, rgba(74,5,18,0.2) 50%, #0d0205 100%)",
      }}
    >
      {/* Decorative bg element */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,7,26,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cinzel text-gold/70 tracking-[0.4em] text-xs uppercase mb-3">
            The Happy Couple
          </p>
          <h2
            className="font-sinhala font-bold"
            style={{
              fontSize: "clamp(1.6rem, 5vw, 2.5rem)",
              background:
                "linear-gradient(90deg, #A07820 0%, #D4AF37 30%, #F0D060 50%, #D4AF37 70%, #A07820 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            යුවළ හඳුනා ගැනීම
          </h2>
          <KandyanBorder className="w-full max-w-sm mx-auto h-6 mt-4" />
        </motion.div>

        {/* Couple cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {/* Kasun */}
          <CoupleCard
            name="Kasun"
            nameSi="කසුන්"
            role="Bridegroom"
            roleSi="දරුවන් දෙදෙනෙකු ගේ"
            parent="Son of P. G. D. Koswatta"
            parentSi="P. G. D. Koswatta මහතාගේ පුත්‍රයා"
            delay={0.2}
            side="left"
          />

          {/* Center ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center justify-center py-8"
          >
            <div className="glass-card rounded-sm p-6 text-center"
              style={{ border: "2px solid rgba(212,175,55,0.5)" }}>
              <div className="relative">
                <div className="absolute top-0 left-0"><CornerOrnament size={30} rotate={0} /></div>
                <div className="absolute top-0 right-0"><CornerOrnament size={30} rotate={90} /></div>
                <div className="absolute bottom-0 left-0"><CornerOrnament size={30} rotate={270} /></div>
                <div className="absolute bottom-0 right-0"><CornerOrnament size={30} rotate={180} /></div>
                <div className="py-4 px-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <LotusFlower size={60} />
                  </motion.div>
                  <motion.p
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl mt-2"
                    style={{ color: "#D4AF37" }}
                  >
                    ♥
                  </motion.p>
                  <p className="font-cinzel text-gold text-xs tracking-widest mt-2">TOGETHER</p>
                  <p className="font-sinhala text-ivory/60 text-xs mt-1">සදාකාලයටම</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Himasha */}
          <CoupleCard
            name="Himasha"
            nameSi="හිමාෂා"
            role="Bride"
            roleSi="දරුවන් දෙදෙනෙකු ගේ"
            parent="Daughter of K. W. Malavige"
            parentSi="K. W. Malavige මහත්මියගේ දියණිය"
            delay={0.3}
            side="right"
          />
        </div>

        {/* Family blessings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center glass-card rounded-sm p-8"
          style={{ borderTop: "2px solid rgba(212,175,55,0.5)", borderBottom: "2px solid rgba(212,175,55,0.5)" }}
        >
          <p className="font-cinzel text-gold/70 tracking-widest text-xs uppercase mb-4">
            With Blessings of Their Families
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div>
              <p className="font-playfair text-ivory font-semibold">P. G. D. Koswatta</p>
              <p className="font-sinhala text-gold/70 text-sm">Koswatta පවුල</p>
            </div>
            <div className="text-gold text-2xl hidden md:block">✦</div>
            <div className="text-gold text-2xl md:hidden">↕</div>
            <div>
              <p className="font-playfair text-ivory font-semibold">K. W. Malavige</p>
              <p className="font-sinhala text-gold/70 text-sm">Malavige පවුල</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
