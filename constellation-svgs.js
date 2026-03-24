// Inline constellation SVG artwork - public domain stick figure line art
// Based on traditional Western constellation patterns
const CONSTELLATION_SVGS = {
  aries: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-aries">
        <stop offset="0%" style="stop-color:#fff;stop-opacity:0.9"/>
        <stop offset="100%" style="stop-color:#ffd700;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Aries constellation stick figure -->
    <g stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6">
      <!-- Main body line -->
      <path d="M 100,150 L 150,140 L 200,135 L 250,140" stroke-width="3"/>
      <!-- Horn curve from Hamal -->
      <path d="M 100,150 Q 80,120 70,80" stroke-width="2.5"/>
      <!-- Second horn -->
      <path d="M 150,140 Q 140,110 130,75" stroke-width="2"/>
    </g>
    <!-- Stars -->
    <circle cx="100" cy="150" r="6" fill="url(#star-aries)" stroke="#ffd700" stroke-width="1"/>
    <circle cx="150" cy="140" r="5" fill="url(#star-aries)" stroke="#ffd700" stroke-width="1"/>
    <circle cx="200" cy="135" r="4" fill="url(#star-aries)" stroke-width="1"/>
    <circle cx="70" cy="80" r="4" fill="url(#star-aries)" stroke-width="1"/>
    <circle cx="130" cy="75" r="3" fill="url(#star-aries)" stroke-width="1"/>
  </svg>`,

  taurus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-taurus">
        <stop offset="0%" style="stop-color:#ffaa77;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#ff6600;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Taurus bull head and horns -->
    <g stroke="#ff8855" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Left horn -->
      <path d="M 150,180 L 130,150 L 100,110 L 80,70" stroke-width="3"/>
      <!-- Right horn -->
      <path d="M 200,180 L 220,150 L 250,110 L 280,70" stroke-width="3"/>
      <!-- Face -->
      <path d="M 150,180 L 175,190 L 200,180"/>
      <!-- V-shaped face (Hyades) -->
      <path d="M 175,190 L 160,220 M 175,190 L 190,220"/>
    </g>
    <!-- Aldebaran (bright eye) -->
    <circle cx="175" cy="190" r="8" fill="url(#star-taurus)" stroke="#ff6600" stroke-width="1.5"/>
    <!-- Pleiades cluster hint -->
    <g opacity="0.8">
      <circle cx="300" cy="100" r="3" fill="#aaccff" stroke="#6699ff" stroke-width="0.5"/>
      <circle cx="310" cy="95" r="3" fill="#aaccff" stroke-width="0.5"/>
      <circle cx="320" cy="100" r="2" fill="#aaccff" stroke-width="0.5"/>
      <circle cx="305" cy="108" r="2" fill="#aaccff" stroke-width="0.5"/>
    </g>
    <circle cx="80" cy="70" r="5" fill="#aaccff" stroke-width="1"/>
    <circle cx="280" cy="70" r="5" fill="#aaccff" stroke-width="1"/>
  </svg>`,

  gemini: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-gemini">
        <stop offset="0%" style="stop-color:#fff;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#aaccff;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Twin stick figures Castor and Pollux -->
    <g stroke="#93c5fd" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Left twin (Castor) -->
      <path d="M 120,80 L 120,130 L 100,170 M 120,130 L 140,170 M 120,110 L 90,120 M 120,110 L 150,120"/>
      <!-- Right twin (Pollux) -->
      <path d="M 240,80 L 240,130 L 220,170 M 240,130 L 260,170 M 240,110 L 210,120 M 240,110 L 270,120"/>
      <!-- Connection between twins -->
      <path d="M 150,120 L 210,120" stroke-dasharray="4,3" stroke-width="1.5"/>
    </g>
    <!-- Castor and Pollux (twin heads) -->
    <circle cx="120" cy="80" r="7" fill="url(#star-gemini)" stroke="#93c5fd" stroke-width="1"/>
    <circle cx="240" cy="80" r="7" fill="url(#star-gemini)" stroke="#93c5fd" stroke-width="1"/>
    <!-- Feet stars -->
    <circle cx="100" cy="170" r="4" fill="#aaccff" stroke-width="0.5"/>
    <circle cx="140" cy="170" r="4" fill="#aaccff" stroke-width="0.5"/>
    <circle cx="220" cy="170" r="4" fill="#aaccff" stroke-width="0.5"/>
    <circle cx="260" cy="170" r="4" fill="#aaccff" stroke-width="0.5"/>
  </svg>`,

  cancer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-cancer">
        <stop offset="0%" style="stop-color:#ffd700;stop-opacity:0.8"/>
        <stop offset="100%" style="stop-color:#ffaa00;stop-opacity:0.2"/>
      </radialGradient>
    </defs>
    <!-- Cancer crab - inverted Y shape -->
    <g stroke="#dda0dd" stroke-width="2.5" fill="none" opacity="0.6">
      <!-- Body center -->
      <path d="M 150,150 L 200,140 L 250,150"/>
      <!-- Left claw -->
      <path d="M 150,150 L 120,160 L 90,140 L 70,130"/>
      <!-- Right claw -->
      <path d="M 250,150 L 280,160 L 310,140 L 330,130"/>
      <!-- Beehive cluster indication (M44) -->
      <circle cx="200" cy="120" r="25" stroke-dasharray="3,3" stroke-width="1.5"/>
    </g>
    <!-- Stars -->
    <circle cx="150" cy="150" r="5" fill="url(#star-cancer)" stroke="#dda0dd" stroke-width="1"/>
    <circle cx="200" cy="140" r="4" fill="url(#star-cancer)" stroke-width="1"/>
    <circle cx="250" cy="150" r="5" fill="url(#star-cancer)" stroke-width="1"/>
    <circle cx="70" cy="130" r="4" fill="#dda0dd" stroke-width="0.5"/>
    <circle cx="330" cy="130" r="4" fill="#dda0dd" stroke-width="0.5"/>
    <!-- Beehive cluster stars (M44) -->
    <g opacity="0.5">
      <circle cx="200" cy="120" r="2" fill="#fff"/>
      <circle cx="195" cy="115" r="1.5" fill="#fff"/>
      <circle cx="205" cy="118" r="1.5" fill="#fff"/>
      <circle cx="198" cy="125" r="1.5" fill="#fff"/>
    </g>
  </svg>`,

  leo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-leo">
        <stop offset="0%" style="stop-color:#ffffaa;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#ffaa00;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Leo lion - sickle head and triangle body -->
    <g stroke="#ffa500" stroke-width="3" fill="none" opacity="0.7">
      <!-- Sickle (head and mane) -->
      <path d="M 150,100 Q 140,80 160,70 Q 180,65 190,80 L 180,110 L 160,130"/>
      <!-- Body triangle -->
      <path d="M 160,130 L 220,150 L 280,140 L 160,130"/>
      <!-- Tail -->
      <path d="M 280,140 L 320,120 L 350,110"/>
    </g>
    <!-- Regulus (heart of the lion) -->
    <circle cx="160" cy="130" r="8" fill="url(#star-leo)" stroke="#ffa500" stroke-width="1.5"/>
    <!-- Other bright stars -->
    <circle cx="150" cy="100" r="5" fill="url(#star-leo)" stroke-width="1"/>
    <circle cx="190" cy="80" r="5" fill="#ffffaa" stroke-width="1"/>
    <circle cx="220" cy="150" r="6" fill="#ffffaa" stroke-width="1"/>
    <circle cx="280" cy="140" r="6" fill="#ffffaa" stroke-width="1"/>
    <circle cx="350" cy="110" r="5" fill="#ffffaa" stroke-width="1"/>
  </svg>`,

  virgo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-virgo">
        <stop offset="0%" style="stop-color:#aaccff;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#6699ff;stop-opacity:0.2"/>
      </radialGradient>
    </defs>
    <!-- Virgo maiden - Y shape with wheat -->
    <g stroke="#87ceeb" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Body (Y shape) -->
      <path d="M 150,80 L 180,130 L 180,180"/>
      <path d="M 210,80 L 180,130"/>
      <!-- Arms -->
      <path d="M 180,110 L 140,120 M 180,110 L 220,120"/>
      <!-- Wheat sheaf in left hand -->
      <path d="M 140,120 L 130,140 M 135,130 L 125,135 M 135,135 L 125,140 M 135,140 L 125,145"/>
      <!-- Dress/robe -->
      <path d="M 170,180 L 160,220 M 180,180 L 190,220"/>
    </g>
    <!-- Spica (brightest star) -->
    <circle cx="180" cy="180" r="8" fill="url(#star-virgo)" stroke="#87ceeb" stroke-width="1.5"/>
    <!-- Other stars -->
    <circle cx="150" cy="80" r="5" fill="#aaccff" stroke-width="1"/>
    <circle cx="210" cy="80" r="5" fill="#aaccff" stroke-width="1"/>
    <circle cx="180" cy="130" r="4" fill="#aaccff" stroke-width="1"/>
  </svg>`,

  libra: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-libra">
        <stop offset="0%" style="stop-color:#90ee90;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#228b22;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Libra scales -->
    <g stroke="#98fb98" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Center post -->
      <path d="M 200,100 L 200,160"/>
      <!-- Balance beam -->
      <path d="M 120,130 L 280,130" stroke-width="3"/>
      <!-- Left pan -->
      <path d="M 130,130 L 110,150 L 150,150 L 130,130"/>
      <!-- Right pan -->
      <path d="M 270,130 L 250,150 L 290,150 L 270,130"/>
      <!-- Chains -->
      <path d="M 120,130 L 110,140 M 140,130 L 150,140" stroke-width="1.5"/>
      <path d="M 260,130 L 250,140 M 280,130 L 290,140" stroke-width="1.5"/>
    </g>
    <!-- Stars at key points -->
    <circle cx="130" cy="130" r="6" fill="url(#star-libra)" stroke="#98fb98" stroke-width="1"/>
    <circle cx="270" cy="130" r="6" fill="url(#star-libra)" stroke="#98fb98" stroke-width="1"/>
    <circle cx="200" cy="100" r="5" fill="#90ee90" stroke-width="1"/>
    <circle cx="200" cy="160" r="4" fill="#90ee90" stroke-width="1"/>
  </svg>`,

  scorpius: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-scorpius">
        <stop offset="0%" style="stop-color:#ff6347;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#8b0000;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Scorpius - long curved body with stinger -->
    <g stroke="#ff6347" stroke-width="3" fill="none" opacity="0.7">
      <!-- Head/claws -->
      <path d="M 100,120 L 120,130 L 140,120 M 100,140 L 120,130 L 140,140"/>
      <!-- Body curve -->
      <path d="M 120,130 L 160,140 L 200,150 L 240,170 L 270,200 L 290,230"/>
      <!-- Stinger -->
      <path d="M 290,230 L 310,250 L 320,240" stroke-width="2.5"/>
    </g>
    <!-- Antares (heart of scorpion - red supergiant) -->
    <circle cx="160" cy="140" r="9" fill="url(#star-scorpius)" stroke="#ff0000" stroke-width="2"/>
    <!-- Other stars along body -->
    <circle cx="120" cy="130" r="5" fill="#ff6347" stroke-width="1"/>
    <circle cx="200" cy="150" r="5" fill="#ff6347" stroke-width="1"/>
    <circle cx="240" cy="170" r="5" fill="#ff6347" stroke-width="1"/>
    <circle cx="270" cy="200" r="5" fill="#ff6347" stroke-width="1"/>
    <circle cx="290" cy="230" r="5" fill="#ff6347" stroke-width="1"/>
    <circle cx="320" cy="240" r="4" fill="#ff6347" stroke-width="1"/>
  </svg>`,

  sagittarius: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-sag">
        <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#ff8c00;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Sagittarius teapot shape -->
    <g stroke="#ffb366" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Teapot body -->
      <path d="M 180,180 L 220,180 L 240,200 L 200,210 L 160,200 L 180,180"/>
      <!-- Spout -->
      <path d="M 240,200 L 270,190"/>
      <!-- Handle -->
      <path d="M 160,200 L 140,210 L 150,220"/>
      <!-- Lid -->
      <path d="M 190,180 L 200,160 L 210,180"/>
      <!-- Arrow (bow of archer) -->
      <path d="M 120,120 L 280,80" stroke-width="2"/>
      <path d="M 280,80 L 270,75 M 280,80 L 275,90"/>
    </g>
    <!-- Stars forming teapot -->
    <circle cx="180" cy="180" r="5" fill="url(#star-sag)" stroke-width="1"/>
    <circle cx="220" cy="180" r="5" fill="url(#star-sag)" stroke-width="1"/>
    <circle cx="240" cy="200" r="5" fill="url(#star-sag)" stroke-width="1"/>
    <circle cx="200" cy="210" r="5" fill="url(#star-sag)" stroke-width="1"/>
    <circle cx="160" cy="200" r="5" fill="url(#star-sag)" stroke-width="1"/>
    <circle cx="200" cy="160" r="5" fill="url(#star-sag)" stroke-width="1"/>
  </svg>`,

  capricornus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-cap">
        <stop offset="0%" style="stop-color:#b0c4de;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#4682b4;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Capricornus sea-goat -->
    <g stroke="#87ceeb" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Goat head and horns -->
      <path d="M 120,140 Q 110,120 100,100 M 140,140 Q 150,120 160,100"/>
      <!-- Body transitioning to fish tail -->
      <path d="M 120,140 L 160,150 L 200,160 L 240,170"/>
      <!-- Fish tail curve -->
      <path d="M 240,170 Q 270,180 300,170 Q 320,160 330,150"/>
      <!-- Tail fins -->
      <path d="M 330,150 L 340,140 M 330,150 L 340,160"/>
    </g>
    <!-- Stars -->
    <circle cx="120" cy="140" r="6" fill="url(#star-cap)" stroke="#87ceeb" stroke-width="1"/>
    <circle cx="160" cy="150" r="5" fill="#b0c4de" stroke-width="1"/>
    <circle cx="200" cy="160" r="5" fill="#b0c4de" stroke-width="1"/>
    <circle cx="240" cy="170" r="5" fill="#b0c4de" stroke-width="1"/>
    <circle cx="330" cy="150" r="5" fill="#b0c4de" stroke-width="1"/>
  </svg>`,

  aquarius: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-aqu">
        <stop offset="0%" style="stop-color:#00ffff;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#0080ff;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Aquarius water bearer - wavy water lines -->
    <g stroke="#00bfff" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Figure pouring water -->
      <path d="M 180,80 L 180,120 L 160,160 M 180,120 L 200,160 M 180,100 L 150,110 M 180,100 L 210,90"/>
      <!-- Water jug -->
      <path d="M 210,90 L 230,95 L 230,110 L 210,115 L 210,90 M 220,90 L 220,85"/>
      <!-- Wavy water streams -->
      <path d="M 230,110 Q 240,130 230,150 T 220,190 T 210,230" stroke-width="2"/>
      <path d="M 100,180 Q 120,175 140,180 T 180,180 T 220,180 T 260,180 T 300,180" stroke-width="3"/>
      <path d="M 90,200 Q 110,195 130,200 T 170,200 T 210,200 T 250,200 T 290,200" stroke-width="3"/>
    </g>
    <!-- Stars -->
    <circle cx="180" cy="80" r="6" fill="url(#star-aqu)" stroke="#00bfff" stroke-width="1"/>
    <circle cx="180" cy="120" r="5" fill="#00ffff" stroke-width="1"/>
    <circle cx="160" cy="160" r="5" fill="#00ffff" stroke-width="1"/>
    <circle cx="200" cy="160" r="5" fill="#00ffff" stroke-width="1"/>
  </svg>`,

  pisces: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <radialGradient id="star-pisces">
        <stop offset="0%" style="stop-color:#dda0dd;stop-opacity:1"/>
        <stop offset="100%" style="stop-color="#9370db;stop-opacity:0.3"/>
      </radialGradient>
    </defs>
    <!-- Pisces - two fish connected by cord -->
    <g stroke="#dda0dd" stroke-width="2.5" fill="none" opacity="0.7">
      <!-- Left fish (swimming left) -->
      <ellipse cx="110" cy="120" rx="35" ry="20" fill="rgba(221,160,221,0.1)"/>
      <path d="M 75,120 L 60,110 M 75,120 L 60,130"/>
      <!-- Right fish (swimming right) -->
      <ellipse cx="290" cy="180" rx="35" ry="20" fill="rgba(221,160,221,0.1)"/>
      <path d="M 325,180 L 340,170 M 325,180 L 340,190"/>
      <!-- Connecting cord -->
      <path d="M 145,120 Q 180,140 200,150 Q 220,160 255,180" stroke-dasharray="4,3" stroke-width="2"/>
    </g>
    <!-- Stars -->
    <circle cx="110" cy="120" r="6" fill="url(#star-pisces)" stroke="#dda0dd" stroke-width="1"/>
    <circle cx="290" cy="180" r="6" fill="url(#star-pisces)" stroke="#dda0dd" stroke-width="1"/>
    <circle cx="200" cy="150" r="5" fill="#dda0dd" stroke-width="1"/>
    <circle cx="60" cy="120" r="4" fill="#dda0dd" stroke-width="0.5"/>
    <circle cx="340" cy="180" r="4" fill="#dda0dd" stroke-width="0.5"/>
  </svg>`,
}

// Export for use in HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONSTELLATION_SVGS
}
