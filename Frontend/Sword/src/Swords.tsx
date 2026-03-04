export function BronzeSword() {
  return (
    <svg width="120" height="380" viewBox="0 0 120 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#3b1f0a" />
          <stop offset="30%"  stopColor="#a0622a" />
          <stop offset="50%"  stopColor="#e8a96e" />
          <stop offset="70%"  stopColor="#a0622a" />
          <stop offset="100%" stopColor="#2a1205" />
        </linearGradient>
        <linearGradient id="runeGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ff9a3c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff9a3c" stopOpacity="0"   />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#3b1f0a" />
          <stop offset="50%"  stopColor="#cd7f32" />
          <stop offset="100%" stopColor="#3b1f0a" />
        </linearGradient>
        <filter id="glowBlue">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon points="60,0 74,280 60,295 46,280" fill="url(#bladeGrad)" />
      <line x1="46" y1="280" x2="60" y2="0"   stroke="rgba(232,169,110,0.4)" strokeWidth="1" />
      <line x1="74" y1="280" x2="60" y2="0"   stroke="rgba(160,98,42,0.2)"  strokeWidth="1" />

      <text x="60" y="80"  textAnchor="middle" fontSize="14" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.9">ᚠ</text>
      <text x="60" y="115" textAnchor="middle" fontSize="13" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.7">ᚱ</text>
      <text x="60" y="148" textAnchor="middle" fontSize="12" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.5">ᚷ</text>

      <line x1="60" y1="5" x2="60" y2="270" stroke="rgba(255,154,60,0.15)" strokeWidth="1" />

      <rect x="26" y="280" width="68" height="14" rx="2" fill="url(#goldGrad)" />
      <rect x="28" y="282" width="64" height="10" rx="1" fill="none" stroke="rgba(205,127,50,0.3)" strokeWidth="1" />
      <circle cx="36" cy="287" r="4" fill="#ff9a3c" opacity="0.8" filter="url(#glowBlue)" />
      <circle cx="84" cy="287" r="4" fill="#ff9a3c" opacity="0.8" filter="url(#glowBlue)" />

      <rect x="52" y="294" width="16" height="60" rx="2" fill="#1a0e05" />
      {[302, 312, 322, 332, 342].map(y => (
        <line key={y} x1="52" y1={y} x2="68" y2={y} stroke="rgba(180,90,20,0.5)" strokeWidth="2" />
      ))}

      <ellipse cx="60" cy="358" rx="14" ry="10" fill="url(#goldGrad)" />
      <ellipse cx="60" cy="356" rx="10" ry="7"  fill="none" stroke="rgba(205,127,50,0.3)" strokeWidth="1" />
      <circle  cx="60" cy="358" r="4"  fill="#a0622a" opacity="0.5" />
    </svg>
  )
}

export function SilverSword() {
  return (
    <svg width="120" height="380" viewBox="0 0 120 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#2a2a2a" />
          <stop offset="30%"  stopColor="#9e9e9e" />
          <stop offset="50%"  stopColor="#f0f0f0" />
          <stop offset="70%"  stopColor="#9e9e9e" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="runeGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#a8e6ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a8e6ff" stopOpacity="0"   />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#2a2a2a" />
          <stop offset="50%"  stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        <filter id="glowBlue">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon points="60,0 74,280 60,295 46,280" fill="url(#bladeGrad)" />
      <line x1="46" y1="280" x2="60" y2="0"   stroke="rgba(240,240,240,0.4)" strokeWidth="1" />
      <line x1="74" y1="280" x2="60" y2="0"   stroke="rgba(150,150,160,0.2)" strokeWidth="1" />

      <text x="60" y="80"  textAnchor="middle" fontSize="14" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.9">ᚠ</text>
      <text x="60" y="115" textAnchor="middle" fontSize="13" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.7">ᚱ</text>
      <text x="60" y="148" textAnchor="middle" fontSize="12" fill="url(#runeGlow)" filter="url(#glowBlue)" fontFamily="serif" opacity="0.5">ᚷ</text>

      <line x1="60" y1="5" x2="60" y2="270" stroke="rgba(168,230,255,0.15)" strokeWidth="1" />

      <rect x="26" y="280" width="68" height="14" rx="2" fill="url(#goldGrad)" />
      <rect x="28" y="282" width="64" height="10" rx="1" fill="none" stroke="rgba(200,200,210,0.3)" strokeWidth="1" />
      <circle cx="36" cy="287" r="4" fill="#a8e6ff" opacity="0.8" filter="url(#glowBlue)" />
      <circle cx="84" cy="287" r="4" fill="#a8e6ff" opacity="0.8" filter="url(#glowBlue)" />

      <rect x="52" y="294" width="16" height="60" rx="2" fill="#111111" />
      {[302, 312, 322, 332, 342].map(y => (
        <line key={y} x1="52" y1={y} x2="68" y2={y} stroke="rgba(180,180,200,0.5)" strokeWidth="2" />
      ))}

      <ellipse cx="60" cy="358" rx="14" ry="10" fill="url(#goldGrad)" />
      <ellipse cx="60" cy="356" rx="10" ry="7"  fill="none" stroke="rgba(200,200,210,0.3)" strokeWidth="1" />
      <circle  cx="60" cy="358" r="4"  fill="#aaaaaa" opacity="0.5" />
    </svg>
  )
}

export  function GoldSword() {
  return (
    <svg width="160" height="440" viewBox="0 0 160 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Blade */}
        <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#4a3000" />
          <stop offset="25%"  stopColor="#c9a84c" />
          <stop offset="50%"  stopColor="#fffbe0" />
          <stop offset="75%"  stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#3a2000" />
        </linearGradient>

        {/* Guard / pommel */}
        <linearGradient id="guardGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#3a2000" />
          <stop offset="30%"  stopColor="#c9a84c" />
          <stop offset="50%"  stopColor="#fff4b0" />
          <stop offset="70%"  stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#3a2000" />
        </linearGradient>

        {/* Rune fade */}
        <linearGradient id="runeGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffe066" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffe066" stopOpacity="0" />
        </linearGradient>

        {/* Energy aura radial */}
        <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#ffe066" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff8800" stopOpacity="0"    />
        </radialGradient>

        {/* Tip flare */}
        <radialGradient id="tipFlare" cx="50%" cy="10%" r="60%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0"   />
        </radialGradient>

        {/* Gem */}
        <radialGradient id="gemRed" cx="40%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#fff0a0" />
          <stop offset="50%"  stopColor="#ffaa00" />
          <stop offset="100%" stopColor="#8b4500" />
        </radialGradient>

        {/* Blade edge shimmer */}
        <linearGradient id="shimmer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="40%"  stopColor="#ffe066" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"   />
        </linearGradient>

        {/* Glow filter - strong */}
        <filter id="glowStrong" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow filter - soft */}
        <filter id="glowSoft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Outer aura blur */}
        <filter id="auraBlur" x="-80%" y="-20%" width="260%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>

        {/* Tip blur */}
        <filter id="tipBlur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* ── OUTER AURA ── */}
      <ellipse cx="80" cy="200" rx="55" ry="210" fill="url(#auraGrad)" filter="url(#auraBlur)" opacity="0.7" />

      {/* Floating energy particles */}
      {[
        [55, 60, 3], [105, 90, 2], [48, 140, 2.5], [112, 170, 2],
        [50, 230, 3], [108, 260, 2], [52, 310, 2.5], [110, 80, 1.5],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#ffe066" opacity="0.6" filter="url(#glowSoft)" />
      ))}

      {/* Energy lines beside blade */}
      <line x1="62" y1="20"  x2="55" y2="120" stroke="#ffd700" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 6" />
      <line x1="98" y1="20"  x2="105" y2="120" stroke="#ffd700" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 6" />
      <line x1="58" y1="130" x2="50" y2="260"  stroke="#ffd700" strokeWidth="0.7" opacity="0.2" strokeDasharray="3 8" />
      <line x1="102" y1="130" x2="110" y2="260" stroke="#ffd700" strokeWidth="0.7" opacity="0.2" strokeDasharray="3 8" />

      {/* ── TIP FLARE ── */}
      <ellipse cx="80" cy="8" rx="18" ry="28" fill="url(#tipFlare)" filter="url(#tipBlur)" />

      {/* ── BLADE ── */}
      <polygon points="80,4 98,300 80,318 62,300" fill="url(#bladeGrad)" />

      {/* Blade edge highlights */}
      <polygon points="80,4 84,300 80,318" fill="url(#shimmer)" opacity="0.5" />

      {/* Blade center fuller line */}
      <line x1="80" y1="8" x2="80" y2="290" stroke="rgba(255,251,200,0.5)" strokeWidth="1.5" filter="url(#glowSoft)" />

      {/* Edge glow lines */}
      <line x1="62" y1="300" x2="80" y2="4"  stroke="rgba(255,220,80,0.35)" strokeWidth="1" />
      <line x1="98" y1="300" x2="80" y2="4"  stroke="rgba(255,180,20,0.2)"  strokeWidth="1" />

      {/* ── RUNES (glowing, larger) ── */}
      <text x="80" y="88"  textAnchor="middle" fontSize="16" fill="url(#runeGlow)" filter="url(#glowStrong)" fontFamily="serif" opacity="1">ᚠ</text>
      <text x="80" y="128" textAnchor="middle" fontSize="15" fill="url(#runeGlow)" filter="url(#glowStrong)" fontFamily="serif" opacity="0.85">ᚱ</text>
      <text x="80" y="165" textAnchor="middle" fontSize="14" fill="url(#runeGlow)" filter="url(#glowStrong)" fontFamily="serif" opacity="0.65">ᚷ</text>
      <text x="80" y="200" textAnchor="middle" fontSize="13" fill="url(#runeGlow)" filter="url(#glowStrong)" fontFamily="serif" opacity="0.4">ᚢ</text>

      {/* ── GUARD ── */}
      {/* Wings */}
      <path d="M62,300 Q30,290 22,298 Q28,310 62,312 Z" fill="url(#guardGrad)" />
      <path d="M98,300 Q130,290 138,298 Q132,310 98,312 Z" fill="url(#guardGrad)" />
      {/* Main bar */}
      <rect x="28" y="298" width="104" height="16" rx="3" fill="url(#guardGrad)" filter="url(#glowSoft)" />
      <rect x="30" y="300" width="100" height="12" rx="2" fill="none" stroke="rgba(255,240,140,0.4)" strokeWidth="1" />

      {/* Guard engravings */}
      <line x1="50" y1="302" x2="50" y2="310" stroke="rgba(255,251,180,0.5)" strokeWidth="1" />
      <line x1="60" y1="301" x2="60" y2="311" stroke="rgba(255,251,180,0.4)" strokeWidth="1" />
      <line x1="100" y1="302" x2="100" y2="310" stroke="rgba(255,251,180,0.5)" strokeWidth="1" />
      <line x1="110" y1="301" x2="110" y2="311" stroke="rgba(255,251,180,0.4)" strokeWidth="1" />

      {/* Center gem on guard */}
      <circle cx="80" cy="306" r="7" fill="url(#gemRed)" filter="url(#glowStrong)" />
      <circle cx="80" cy="306" r="7" fill="none" stroke="rgba(255,240,140,0.6)" strokeWidth="1" />
      <circle cx="78" cy="304" r="2" fill="white" opacity="0.7" />

      {/* Side gems */}
      <circle cx="44" cy="306" r="4.5" fill="url(#gemRed)" filter="url(#glowSoft)" opacity="0.9" />
      <circle cx="116" cy="306" r="4.5" fill="url(#gemRed)" filter="url(#glowSoft)" opacity="0.9" />

      {/* ── GRIP ── */}
      <rect x="70" y="314" width="20" height="72" rx="3" fill="#1e0f04" />
      {/* Grip wrapping */}
      {[322, 331, 340, 349, 358, 367, 376].map(y => (
        <line key={y} x1="70" y1={y} x2="90" y2={y} stroke="rgba(201,168,76,0.55)" strokeWidth="2.5" />
      ))}
      {/* Grip gold trim ends */}
      <rect x="69" y="313" width="22" height="5" rx="2" fill="url(#guardGrad)" />
      <rect x="69" y="381" width="22" height="5" rx="2" fill="url(#guardGrad)" />

      {/* ── POMMEL ── */}
      <ellipse cx="80" cy="398" rx="20" ry="14" fill="url(#guardGrad)" filter="url(#glowSoft)" />
      <ellipse cx="80" cy="396" rx="14" ry="9"  fill="none" stroke="rgba(255,240,140,0.35)" strokeWidth="1" />
      {/* Pommel gem */}
      <circle cx="80" cy="398" r="6" fill="url(#gemRed)" filter="url(#glowStrong)" />
      <circle cx="78" cy="396" r="2" fill="white" opacity="0.6" />

      {/* ── BOTTOM ENERGY WISPS ── */}
      <ellipse cx="80" cy="405" rx="22" ry="8" fill="#ffd700" opacity="0.12" filter="url(#auraBlur)" />
    </svg>
  )
}