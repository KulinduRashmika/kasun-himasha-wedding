import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LotusFlower, KandyanBorder, CornerOrnament } from "./Ornaments";

const CountdownUnit = ({ value, label, labelSi }) => (
  <div className="flex flex-col items-center">
    <div
      className="countdown-card rounded-sm w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, transparent 60%)",
        }}
      />
      <span
        className="font-cinzel font-bold text-gold relative z-10"
        style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)" }}
      >
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <p className="font-cinzel text-gold/70 text-xs tracking-widest uppercase">
      {label}
    </p>
    <p className="font-sinhala text-ivory/50 text-xs mt-0.5">{labelSi}</p>
  </div>
);

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      };
    };

    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const WeddingDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const timeLeft = useCountdown("2026-09-10T00:00:00");

  return (
    <section
      id="details"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0205 0%, rgba(109,7,26,0.25) 50%, #0d0205 100%)",
      }}
    >
      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-cinzel text-gold/70 tracking-[0.4em] text-xs uppercase mb-3">
            Wedding Details · විවාහ විස්තර
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
            මංගල විස්තර
          </h2>
          <KandyanBorder className="w-full max-w-sm mx-auto h-6 mt-4" />
        </motion.div>

        {/* Main details card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="kandyan-frame bg-gradient-to-b from-maroon/20 to-black/50 backdrop-blur-sm rounded-sm p-8 md:p-12 relative"
        >
          {/* Corner ornaments */}
          {[[0, 0, 0], [0, "auto", 90], ["auto", 0, 270], ["auto", "auto", 180]].map(
            ([top, right, rotate], i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: i < 2 ? "12px" : "auto",
                  bottom: i >= 2 ? "12px" : "auto",
                  left: i % 2 === 0 ? "12px" : "auto",
                  right: i % 2 === 1 ? "12px" : "auto",
                }}
              >
                <CornerOrnament size={40} rotate={rotate} />
              </div>
            )
          )}

          {/* Date display */}
          <div className="text-center mb-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="flex justify-center mb-4"
            >
              <LotusFlower size={56} />
            </motion.div>

            <p className="font-sinhala text-gold/70 text-sm mb-2">
              විශේෂ දිනය
            </p>
            <p
              className="font-cinzel font-bold text-ivory"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
            >
              10 September
            </p>
            <p
              className="font-cinzel text-gold font-semibold"
              style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}
            >
              2026
            </p>
            <p className="font-sinhala text-ivory/60 text-sm mt-2">
              2026 සැප්තැම්බර් මස 10 වන දින
            </p>

            {/* Decorative separator */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="text-gold">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </div>

          {/* Countdown */}
          <div className="text-center">
            <p className="font-sinhala text-gold/70 text-sm mb-6">
              ශුභ මොහොත සඳහා ඇති කාලය
            </p>
            <div className="flex items-end justify-center gap-4 md:gap-8">
              <CountdownUnit
                value={timeLeft.days}
                label="Days"
                labelSi="දින"
              />
              <span className="text-gold text-2xl mb-8 font-cinzel">:</span>
              <CountdownUnit
                value={timeLeft.hours}
                label="Hours"
                labelSi="පැය"
              />
              <span className="text-gold text-2xl mb-8 font-cinzel">:</span>
              <CountdownUnit
                value={timeLeft.minutes}
                label="Minutes"
                labelSi="මිනිත්තු"
              />
              <span className="text-gold text-2xl mb-8 font-cinzel">:</span>
              <CountdownUnit
                value={timeLeft.seconds}
                label="Seconds"
                labelSi="තත්පර"
              />
            </div>
          </div>

          {/* Thursday note */}
          <div className="text-center mt-8">
            <div className="inline-block px-6 py-2 rounded-full" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.4)" }}>
              <p className="font-cinzel text-gold text-sm tracking-widest">
                Thursday · බ්‍රහස්පතින්දා
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {[
            {
              icon: "🌸",
              title: "Auspicious Day",
              titleSi: "ශුභ දිනය",
              desc: "10 September 2026",
              descSi: "2026 සැප්තැම්බර් 10",
            },
            {
              icon: "✨",
              title: "Your Presence",
              titleSi: "ඔබගේ පැමිණීම",
              desc: "Makes Our Joy Complete",
              descSi: "අපගේ සතුට සම්පූර්ණ කරයි",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-sm p-6 text-center" style={{ border: "1px solid rgba(212,175,55,0.3)" }}>
              <span className="text-3xl block mb-3">{item.icon}</span>
              <p className="font-cinzel text-gold text-sm tracking-wider">{item.title}</p>
              <p className="font-sinhala text-gold/60 text-xs mb-2">{item.titleSi}</p>
              <p className="font-playfair text-ivory/80 text-sm italic">{item.desc}</p>
              <p className="font-sinhala text-ivory/60 text-xs">{item.descSi}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetails;
