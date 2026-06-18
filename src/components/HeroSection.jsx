import { motion } from "framer-motion";
import { LotusFlower, CornerOrnament, KandyanBorder } from "./Ornaments";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(109,7,26,0.6) 0%, rgba(13,2,5,1) 70%)",
      }}
    >
      {/* Lotus watermark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <LotusFlower size={600} color="#D4AF37" />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 w-full max-w-3xl mx-auto px-4"
      >
        <div className="kandyan-frame bg-gradient-to-b from-maroon/30 to-black/60 backdrop-blur-sm rounded-sm p-8 md:p-14 text-center">
          {/* Corner ornaments */}
          <div className="absolute top-4 left-4">
            <CornerOrnament size={50} rotate={0} />
          </div>
          <div className="absolute top-4 right-4">
            <CornerOrnament size={50} rotate={90} />
          </div>
          <div className="absolute bottom-4 left-4">
            <CornerOrnament size={50} rotate={270} />
          </div>
          <div className="absolute bottom-4 right-4">
            <CornerOrnament size={50} rotate={180} />
          </div>

          {/* Top lotus */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <LotusFlower size={72} />
          </motion.div>

          {/* Sinhala heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-sinhala font-bold mb-3 leading-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              background:
                "linear-gradient(90deg, #A07820 0%, #D4AF37 30%, #F0D060 50%, #D4AF37 70%, #A07820 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            මංගල ආරාධනය
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-cinzel text-gold-light text-sm md:text-base tracking-[0.3em] mb-8 uppercase"
          >
            Wedding Invitation
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xl">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          {/* Couple names */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="text-right">
                <p
                  className="font-cinzel font-semibold text-ivory"
                  style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)" }}
                >
                  Kasun
                </p>
                <p className="font-sinhala text-gold text-sm">කසුන්</p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <span
                  className="text-3xl md:text-5xl"
                  style={{ color: "#D4AF37" }}
                >
                  ♥
                </span>
              </motion.div>
              <div className="text-left">
                <p
                  className="font-cinzel font-semibold text-ivory"
                  style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)" }}
                >
                  Himasha
                </p>
                <p className="font-sinhala text-gold text-sm">හිමාෂා</p>
              </div>
            </div>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-6"
          >
            <p className="font-cinzel text-gold tracking-widest text-sm md:text-base">
              10 · IX · 2026
            </p>
            <p className="font-sinhala text-ivory/70 text-sm mt-1">
              2026 සැප්තැම්බර් මස 10 වන දින
            </p>
          </motion.div>

          {/* Bottom kandyan border */}
          <KandyanBorder className="w-full h-8 mt-4" />

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-6"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("welcome")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p className="font-sinhala text-gold/60 text-xs">
                පහළ අනුචලනය කරන්න
              </p>
              <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent mx-auto" />
              <span className="text-gold/60 text-lg">↓</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
