export const LotusFlower = ({ size = 80, color = "#D4AF37", opacity = 1 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    style={{ opacity }}
  >
    {/* Center */}
    <circle cx="50" cy="50" r="8" fill={color} />
    <circle cx="50" cy="50" r="5" fill="#FFF8E7" opacity="0.4" />
    {/* Petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="50"
        rx="6"
        ry="20"
        fill={color}
        opacity={i % 2 === 0 ? 0.9 : 0.6}
        transform={`rotate(${angle} 50 50) translate(0, -18)`}
      />
    ))}
    {/* Inner petals */}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map(
      (angle, i) => (
        <ellipse
          key={`inner-${i}`}
          cx="50"
          cy="50"
          rx="4"
          ry="13"
          fill={color}
          opacity="0.5"
          transform={`rotate(${angle} 50 50) translate(0, -13)`}
        />
      )
    )}
  </svg>
);

export const KandyanBorder = ({ className = "" }) => (
  <svg
    viewBox="0 0 800 40"
    className={className}
    preserveAspectRatio="none"
    fill="none"
  >
    <path
      d="M0 20 Q50 5, 100 20 Q150 35, 200 20 Q250 5, 300 20 Q350 35, 400 20 Q450 5, 500 20 Q550 35, 600 20 Q650 5, 700 20 Q750 35, 800 20"
      stroke="#D4AF37"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M0 20 Q50 15, 100 20 Q150 25, 200 20 Q250 15, 300 20 Q350 25, 400 20 Q450 15, 500 20 Q550 25, 600 20 Q650 15, 700 20 Q750 25, 800 20"
      stroke="#D4AF37"
      strokeWidth="0.5"
      opacity="0.5"
      fill="none"
    />
    {[0, 100, 200, 300, 400, 500, 600, 700, 800].map((x, i) => (
      <circle key={i} cx={x} cy="20" r="2.5" fill="#D4AF37" />
    ))}
    {[50, 150, 250, 350, 450, 550, 650, 750].map((x, i) => (
      <g key={`diamond-${i}`}>
        <rect
          x={x - 3}
          y={17}
          width="6"
          height="6"
          fill="#D4AF37"
          opacity="0.6"
          transform={`rotate(45 ${x} 20)`}
        />
      </g>
    ))}
  </svg>
);

export const CornerOrnament = ({ size = 60, rotate = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path
      d="M5 5 L25 5 L5 25 Z"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M5 5 L15 5 L5 15"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="1"
      opacity="0.6"
    />
    <path d="M5 5 Q30 5, 30 30" stroke="#D4AF37" strokeWidth="1" fill="none" />
    <path
      d="M5 5 Q20 5, 20 20"
      stroke="#D4AF37"
      strokeWidth="0.7"
      fill="none"
      opacity="0.5"
    />
    <circle cx="5" cy="5" r="3" fill="#D4AF37" />
    <circle cx="25" cy="5" r="1.5" fill="#D4AF37" opacity="0.7" />
    <circle cx="5" cy="25" r="1.5" fill="#D4AF37" opacity="0.7" />
    <circle cx="30" cy="30" r="2" fill="#D4AF37" opacity="0.5" />
  </svg>
);

export const PunkalasaIcon = ({ size = 120, color = "#D4AF37" }) => (
  <svg width={size} height={size} viewBox="0 0 120 140" fill="none">
    {/* Pot base */}
    <ellipse cx="60" cy="125" rx="28" ry="8" fill={color} opacity="0.4" />
    <path
      d="M35 100 Q32 125, 35 130 Q60 138, 85 130 Q88 125, 85 100 Z"
      fill={color}
      opacity="0.5"
    />
    <path
      d="M38 100 Q38 120, 60 125 Q82 120, 82 100"
      fill={color}
      opacity="0.3"
    />
    {/* Pot neck */}
    <rect x="48" y="88" width="24" height="14" rx="3" fill={color} opacity="0.6" />
    {/* Pot opening */}
    <ellipse cx="60" cy="88" rx="16" ry="5" fill={color} opacity="0.4" />
    {/* Decorative band */}
    <path d="M38 110 Q60 115, 82 110" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
    {/* Flowers/foliage */}
    <path d="M60 88 Q40 70, 25 45 Q35 50, 45 65 Q35 40, 50 20 Q55 40, 50 65 Q55 35, 65 15 Q68 38, 62 65 Q70 35, 82 20 Q78 42, 70 65 Q80 48, 90 55 Q78 68, 68 80 Z" fill={color} opacity="0.5" />
    {/* Lotus on top */}
    <circle cx="60" cy="20" r="6" fill={color} />
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <ellipse
        key={i}
        cx="60" cy="20" rx="3" ry="8"
        fill={color} opacity="0.6"
        transform={`rotate(${angle} 60 20) translate(0, -10)`}
      />
    ))}
    {/* Side leaves */}
    <path d="M30 75 Q20 60, 15 45 Q25 55, 35 70 Z" fill={color} opacity="0.4" />
    <path d="M90 75 Q100 60, 105 45 Q95 55, 85 70 Z" fill={color} opacity="0.4" />
  </svg>
);

export const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-6">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold opacity-60" />
    <div className="flex items-center gap-3">
      <span className="text-gold text-lg">✦</span>
      <LotusFlower size={32} />
      <span className="text-gold text-lg">✦</span>
    </div>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold opacity-60" />
  </div>
);
