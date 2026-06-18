import { motion } from "framer-motion";
import { LotusFlower, KandyanBorder } from "./Ornaments";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden" style={{ background: "#060103" }}>
      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Ornamental top divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <KandyanBorder className="w-full h-8" />
        </motion.div>

        {/* Lotus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <LotusFlower size={56} />
          </motion.div>
        </motion.div>

        {/* Main footer text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3
            className="font-sinhala font-semibold mb-3"
            style={{
              fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
              background:
                "linear-gradient(90deg, #A07820 0%, #D4AF37 30%, #F0D060 50%, #D4AF37 70%, #A07820 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            ඔබගේ පැමිණීම අපගේ සතුටයි
          </h3>
          <p className="font-playfair italic text-ivory/60 text-sm">
            Your presence is our greatest joy
          </p>
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <p className="font-cinzel text-ivory/80 font-semibold" style={{ fontSize: "1.2rem" }}>
            Kasun
          </p>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold text-xl"
          >
            ♥
          </motion.span>
          <p className="font-cinzel text-ivory/80 font-semibold" style={{ fontSize: "1.2rem" }}>
            Himasha
          </p>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-10"
        >
          <div
            className="inline-block px-6 py-2 rounded-full"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            <p className="font-cinzel text-gold/80 text-sm tracking-widest">
              10 · IX · MMXXVI
            </p>
          </div>
        </motion.div>

        {/* Bottom divider */}
        <KandyanBorder className="w-full h-6 mb-8" />

        {/* Copyright */}
        <p className="font-cinzel text-ivory/25 text-xs tracking-widest">
          © 2026 Kasun & Himasha · Made with ♥
        </p>

        {/* Bottom lotus row */}
        <div className="flex justify-center gap-4 mt-6 opacity-20">
          {[...Array(5)].map((_, i) => (
            <LotusFlower key={i} size={20} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
