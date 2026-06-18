import { useMemo } from "react";
import { motion } from "framer-motion";

const LotusPetal = ({ style, delay, duration, startX }) => {
  const colors = ["#D4AF37", "#E8C84A", "#C9A227", "#F0D060", "#B8902A"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="fixed top-0 pointer-events-none z-10"
      style={{ left: `${startX}%`, ...style }}
      initial={{ y: -80, opacity: 0, rotate: 0, x: 0 }}
      animate={{
        y: ["−80px", "110vh"],
        opacity: [0, 0.8, 0.8, 0],
        rotate: [0, 180, 360, 540],
        x: [0, 30, -20, 50],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.05, 0.9, 1],
      }}
    >
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path
          d="M12 2 C6 2, 2 8, 2 14 C2 20, 6 26, 12 26 C18 26, 22 20, 22 14 C22 8, 18 2, 12 2Z"
          fill={color}
          opacity="0.75"
          transform="scale(0.7) translate(3, 2)"
        />
        <ellipse cx="12" cy="14" rx="5" ry="9" fill={color} opacity="0.6" />
        <ellipse cx="12" cy="14" rx="2" ry="5" fill="#FFF8E7" opacity="0.3" />
      </svg>
    </motion.div>
  );
};

const FloatingPetals = ({ count = 18 }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        delay: Math.random() * 12,
        duration: Math.random() * 8 + 10,
      })),
    [count]
  );

  return (
    <>
      {petals.map((petal) => (
        <LotusPetal
          key={petal.id}
          startX={petal.startX}
          delay={petal.delay}
          duration={petal.duration}
        />
      ))}
    </>
  );
};

export default FloatingPetals;
