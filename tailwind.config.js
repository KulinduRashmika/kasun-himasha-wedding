/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#F0D060",
        "gold-dark": "#A07820",
        maroon: "#6D071A",
        "maroon-light": "#9B1A2E",
        "maroon-dark": "#4A0512",
        ivory: "#FFF8E7",
        "ivory-dark": "#F5E8C0",
      },
      fontFamily: {
        sinhala: ["'Noto Serif Sinhala'", "serif"],
        cinzel: ["'Cinzel'", "serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "particle-rise": "particleRise 8s ease-in infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(5deg)" },
          "66%": { transform: "translateY(-10px) rotate(-3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(212,175,55,0.8)" },
        },
        particleRise: {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: 0 },
          "10%": { opacity: 1 },
          "90%": { opacity: 0.5 },
          "100%": { transform: "translateY(-100px) scale(1)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
