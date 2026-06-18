import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LotusFlower, KandyanBorder, OrnamentalDivider } from "./Ornaments";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="welcome"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0205 0%, rgba(109,7,26,0.15) 50%, #0d0205 100%)",
      }}
    >
      {/* Background lotus watermarks */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-4 pointer-events-none">
        <LotusFlower size={300} color="#D4AF37" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-4 pointer-events-none">
        <LotusFlower size={300} color="#D4AF37" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          {/* Top lotus */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <LotusFlower size={56} />
            </motion.div>
          </div>

          {/* Section label */}
          <p className="font-cinzel text-gold/70 tracking-[0.4em] text-xs uppercase mb-4">
            Cordial Welcome · සාදරයෙන් පිළිගැනීම
          </p>

          <KandyanBorder className="w-full h-6 mb-8" />

          {/* Main blessing quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="relative"
          >
            <span
              className="absolute -top-6 -left-2 text-gold/20 font-serif"
              style={{ fontSize: "6rem", lineHeight: 1 }}
            >
              "
            </span>
            <p
              className="font-sinhala text-ivory/90 leading-relaxed relative z-10"
              style={{ fontSize: "clamp(1.05rem, 3vw, 1.4rem)" }}
            >
              දෙදෙනෙකුගේ හදවත් එක්වන මේ සුන්දර දිනයට
              <br />
              <span className="text-gold">ඔබ සාදරයෙන් පිළිගනිමු.</span>
            </p>
            <span
              className="absolute -bottom-8 -right-2 text-gold/20 font-serif"
              style={{ fontSize: "6rem", lineHeight: 1 }}
            >
              "
            </span>
          </motion.blockquote>

          <OrnamentalDivider />

          {/* Full invitation text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="glass-card rounded-sm p-8 md:p-12 mt-6 text-left space-y-6"
            style={{
              borderTop: "2px solid rgba(212,175,55,0.6)",
              borderBottom: "2px solid rgba(212,175,55,0.6)",
            }}
          >
            <p className="font-sinhala text-ivory/85 text-center" style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)", lineHeight: "2" }}>
              ආදරණීය ඔබ වෙත,
            </p>
            <p
              className="font-sinhala text-ivory/80 text-center leading-loose"
              style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)" }}
            >
              අපගේ ජීවිතයේ අතිශය සුන්දර මොහොතක් වන විවාහ මංගල්‍යයට
              ඔබගේ ගෞරවනීය පැමිණීමෙන් අපව ආශිර්වාද කරන්න.
            </p>

            <div className="text-center py-4">
              <p className="font-cinzel text-gold/80 text-sm tracking-wider mb-1">
                Bridegroom
              </p>
              <p
                className="font-cinzel text-ivory font-semibold"
                style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
              >
                Kasun
              </p>
              <p className="font-sinhala text-gold text-sm">
                කසුන් පුත්‍රයා — P. G. D. Koswatta මහතාගේ
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold text-2xl">✦</span>
              <p className="font-sinhala text-gold/70 text-sm">සහ</p>
              <span className="text-gold text-2xl">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" />
            </div>

            <div className="text-center py-4">
              <p className="font-cinzel text-gold/80 text-sm tracking-wider mb-1">
                Bride
              </p>
              <p
                className="font-cinzel text-ivory font-semibold"
                style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
              >
                Himasha
              </p>
              <p className="font-sinhala text-gold text-sm">
                හිමාෂා දියණිය — K. W. Malavige මහත්මියගේ
              </p>
            </div>

            <p
              className="font-sinhala text-ivory/70 text-center leading-loose"
              style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
            >
              ඔබගේ සහභාගීත්වය අපගේ සතුට තව තවත් වර්ධනය කරනු ඇත.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
