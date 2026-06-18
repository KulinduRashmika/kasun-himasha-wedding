import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Generates a gentle bell-like tone using Web Audio API
const createBellSound = (audioCtx) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  const oscillator2 = audioCtx.createOscillator();
  const gainNode2 = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator2.connect(gainNode2);
  gainNode2.connect(audioCtx.destination);

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 2);

  oscillator2.type = "sine";
  oscillator2.frequency.setValueAtTime(1320, audioCtx.currentTime);
  oscillator2.frequency.exponentialRampToValueAtTime(660, audioCtx.currentTime + 2);

  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3);

  gainNode2.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gainNode2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.5);

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 3);
  oscillator2.start(audioCtx.currentTime);
  oscillator2.stop(audioCtx.currentTime + 2.5);
};

const BellButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const toggleBell = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      createBellSound(audioCtxRef.current);
      intervalRef.current = setInterval(() => {
        if (audioCtxRef.current) createBellSound(audioCtxRef.current);
      }, 6000);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute bottom-14 right-0 whitespace-nowrap px-3 py-1.5 rounded text-xs font-cinzel"
            style={{
              background: "rgba(13,2,5,0.95)",
              border: "1px solid rgba(212,175,55,0.4)",
              color: "#D4AF37",
            }}
          >
            {isPlaying ? "නවත්වන්න (Stop bells)" : "දේව 종소리 (Temple bells)"}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleBell}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={
          isPlaying
            ? {
                rotate: [0, 8, -8, 6, -6, 0],
                transition: { duration: 0.8, repeat: Infinity, repeatDelay: 5 },
              }
            : {}
        }
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: isPlaying
            ? "linear-gradient(135deg, #6D071A, #9B1A2E)"
            : "linear-gradient(135deg, rgba(13,2,5,0.9), rgba(74,5,18,0.9))",
          border: `2px solid ${isPlaying ? "#D4AF37" : "rgba(212,175,55,0.5)"}`,
          boxShadow: isPlaying
            ? "0 0 20px rgba(212,175,55,0.5)"
            : "0 4px 20px rgba(0,0,0,0.5)",
        }}
        aria-label="Toggle temple bell sound"
      >
        <span className="text-xl">{isPlaying ? "🔔" : "🔕"}</span>
      </motion.button>
    </div>
  );
};

export default BellButton;
