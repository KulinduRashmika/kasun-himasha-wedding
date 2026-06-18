import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "ගෙදර", en: "Home" },
  { href: "#welcome", label: "ආරාධනය", en: "Invite" },
  { href: "#couple", label: "යුවළ", en: "Couple" },
  { href: "#details", label: "විස්තර", en: "Details" },
  { href: "#blessings", label: "ආශිර්වාද", en: "Blessings" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(13, 2, 5, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.2)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="font-cinzel text-gold font-semibold text-sm tracking-widest"
          >
            K <span className="text-ivory/60">♥</span> H
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="group flex flex-col items-center gap-0.5 transition-all"
              >
                <span
                  className="font-sinhala text-xs transition-colors"
                  style={{ color: active === link.href ? "#D4AF37" : "rgba(255,248,231,0.6)" }}
                >
                  {link.label}
                </span>
                <span
                  className="font-cinzel text-xs tracking-wider transition-colors"
                  style={{ color: active === link.href ? "#D4AF37" : "rgba(255,248,231,0.4)" }}
                >
                  {link.en}
                </span>
                <motion.div
                  className="h-px bg-gold"
                  animate={{ width: active === link.href ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-px w-6 bg-gold"
                  animate={
                    menuOpen
                      ? i === 0
                        ? { rotate: 45, y: 6 }
                        : i === 1
                        ? { opacity: 0 }
                        : { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 left-0 right-0 z-30 md:hidden"
            style={{
              background: "rgba(13, 2, 5, 0.97)",
              borderBottom: "1px solid rgba(212,175,55,0.3)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center gap-3 w-full text-left py-2"
                  style={{
                    borderBottom: "1px solid rgba(212,175,55,0.1)",
                  }}
                >
                  <span className="text-gold">✦</span>
                  <span className="font-sinhala text-ivory/80 text-sm">{link.label}</span>
                  <span className="font-cinzel text-gold/50 text-xs ml-auto">{link.en}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
