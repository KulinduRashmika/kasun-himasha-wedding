import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LotusFlower, KandyanBorder, PunkalasaIcon } from "./Ornaments";

const BlessingCard = ({ text, textEn, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="glass-card rounded-sm p-6 text-center relative overflow-hidden"
    style={{ border: "1px solid rgba(212,175,55,0.3)" }}
  >
    <div
      className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none"
    >
      <LotusFlower size={100} />
    </div>
    <p className="font-sinhala text-ivory/85 leading-loose relative z-10" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
      {text}
    </p>
    {textEn && (
      <p className="font-playfair italic text-gold/60 text-sm mt-3 relative z-10">
        {textEn}
      </p>
    )}
  </motion.div>
);

const BlessingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const blessings = [
    {
      text: "ඔබට දෙවියන්ගේ ආශිර්වාදය හා සෞභාග්‍යය ලැබේවා",
      textEn: "May the divine blessings and prosperity be upon you",
    },
    {
      text: "ආදරය, සතුට හා සෞබාග්‍යයෙන් පිරිපුන් ජීවිතයක් ලැබේවා",
      textEn: "May your life be filled with love, happiness, and abundance",
    },
    {
      text: "දෙවිවරුන්ගේ ශ්‍රී පාද සෙවනේ ජීවිත ගමන ගෙවන්නට ශක්තිය ලැබේවා",
      textEn: "May you find strength to journey through life in divine grace",
    },
    {
      text: "ඔබ දෙදෙනාගේ බැඳීම සදාකාලයටම ශක්තිමත් වේවා",
      textEn: "May your bond remain strong for eternity",
    },
  ];

  return (
    <section
      id="blessings"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0205 0%, rgba(74,5,18,0.3) 50%, #0d0205 100%)",
      }}
    >
      {/* Animated lotus background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 16}%`,
              top: `${20 + (i % 3) * 25}%`,
              opacity: 0.04,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            <LotusFlower size={80 + i * 10} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-cinzel text-gold/70 tracking-[0.4em] text-xs uppercase mb-3">
            Blessings & Wishes · ආශිර්වාද
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
            ශුභ ප්‍රාර්ථනා
          </h2>
          <KandyanBorder className="w-full max-w-sm mx-auto h-6 mt-4" />
        </motion.div>

        {/* Punkalasa decorations */}
        <div className="flex justify-center gap-16 mb-12">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <PunkalasaIcon size={90} color="#D4AF37" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Blessing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blessings.map((b, i) => (
            <BlessingCard
              key={i}
              text={b.text}
              textEn={b.textEn}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Central animated lotus with main blessing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center glass-card rounded-sm p-10"
          style={{
            border: "2px solid rgba(212,175,55,0.5)",
            background:
              "linear-gradient(135deg, rgba(109,7,26,0.4), rgba(13,2,5,0.8))",
          }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <LotusFlower size={80} />
          </motion.div>

          <p
            className="font-sinhala text-ivory/90 leading-loose mb-4"
            style={{ fontSize: "clamp(1rem, 3vw, 1.2rem)" }}
          >
            "ඔබ දෙදෙනා නිරතුරුව ආදරයෙන් හා සතුටෙන් ජීවත් වේවා"
          </p>
          <p className="font-playfair italic text-gold/70 text-sm mb-6">
            "May the two of you always live in love and happiness"
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/60" />
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold text-2xl"
            >
              ♥
            </motion.span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          <p className="font-cinzel text-gold/60 text-xs tracking-widest mt-4 uppercase">
            Kasun & Himasha · 10.09.2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlessingsSection;
