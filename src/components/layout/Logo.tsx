import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  layout?: 'horizontal' | 'stacked';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark',
  layout = 'horizontal',
  showSubtitle = true 
}) => {
  const isLight = variant === 'light';
  const isStacked = layout === 'stacked';

  // Crisp Vector Emblem based on Official Puran Chand Agro Brand Artwork
  const Emblem = () => (
    <svg 
      viewBox="0 0 240 140" 
      className={isStacked ? "w-20 h-12" : "w-12 h-8 sm:w-14 sm:h-9"} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Sun Gradient */}
        <linearGradient id="pcaSunGrad" x1="120" y1="18" x2="120" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAA61A" />
          <stop offset="100%" stopColor="#F58220" />
        </linearGradient>

        {/* Upper Solar Tier - Royal Blue */}
        <linearGradient id="pcaBlueGrad" x1="120" y1="52" x2="120" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1074C4" />
          <stop offset="100%" stopColor="#084E94" />
        </linearGradient>

        {/* Lower Solar Tier - Agro Emerald Teal */}
        <linearGradient id="pcaTealGrad" x1="120" y1="84" x2="120" y2="122" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#18A092" />
          <stop offset="100%" stopColor="#0D766C" />
        </linearGradient>
      </defs>

      {/* 1. 11 RADIATING SUN RAYS */}
      <g fill="#FAA61A">
        <polygon points="78,74 65,74 74,67" />
        <polygon points="83,60 72,55 82,51" />
        <polygon points="91,48 83,40 95,38" />
        <polygon points="101,39 96,28 107,30" />
        <polygon points="113,33 111,20 120,23" />
        {/* Apex Ray */}
        <polygon points="120,32 120,16 125,32" />
        <polygon points="127,33 129,20 120,23" transform="scale(-1, 1) translate(-240, 0)" />
        <polygon points="139,39 144,28 133,30" />
        <polygon points="149,48 157,40 145,38" />
        <polygon points="157,60 168,55 158,51" />
        <polygon points="162,74 175,74 166,67" />
      </g>

      {/* 2. SUN SEMICIRCLE */}
      <path d="M86,76 A34,34 0 0,1 154,76 Z" fill="url(#pcaSunGrad)" />

      {/* 3. PERSPECTIVE SOLAR DOME (Upper Tier - Blue) */}
      <g fill="url(#pcaBlueGrad)" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        {/* Cell 1 (Far Left) */}
        <path d="M72,86 Q90,71 101,66 L99,75 Q86,81 72,86 Z" />
        {/* Cell 2 */}
        <path d="M101,66 Q111,62 119,62 L118,73 Q109,74 99,75 Z" />
        {/* Cell 3 */}
        <path d="M121,62 Q129,62 139,66 L141,75 Q131,74 122,73 Z" />
        {/* Cell 4 (Far Right) */}
        <path d="M139,66 Q150,71 168,86 Q154,81 141,75 Z" />
      </g>

      {/* 4. PERSPECTIVE SOLAR DOME (Lower Tier - Emerald Teal) */}
      <g fill="url(#pcaTealGrad)" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        {/* Bottom Left 1 */}
        <path d="M48,98 Q72,90 85,86 L82,96 Q65,97 48,98 Z" />
        {/* Bottom Left 2 */}
        <path d="M85,86 Q98,82 108,79 L106,93 Q94,94 82,96 Z" />
        {/* Bottom Center Left */}
        <path d="M108,79 Q118,77 126,76 L125,92 Q117,92 106,93 Z" />
        {/* Bottom Center Right */}
        <path d="M114,76 Q122,77 132,79 L134,93 Q123,92 115,92 Z" />
        {/* Bottom Right 2 */}
        <path d="M132,79 Q142,82 155,86 L158,96 Q146,94 134,93 Z" />
        {/* Bottom Right 1 */}
        <path d="M155,86 Q168,90 192,98 Q175,97 158,96 Z" />
      </g>

      {/* Subtle Bottom Horizon Curve */}
      <path d="M46,98 Q120,95 194,98" stroke="#0D766C" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  );

  return (
    <div className={`select-none transition-transform duration-200 ${className} ${
      isStacked ? 'flex flex-col items-center text-center gap-1.5' : 'flex items-center gap-3'
    }`}>
      {/* Official Emblem */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <Emblem />
      </div>

      {/* Official Typography: PURAN CHAND AGRO */}
      <div className={`flex flex-col ${isStacked ? 'items-center text-center' : 'items-start text-left'}`}>
        <div className="flex items-center font-black tracking-tight leading-none">
          <span className={`text-base sm:text-lg font-black tracking-[0.06em] uppercase whitespace-nowrap ${
            isLight ? 'text-warm-porcelain' : 'text-aubergine-ink'
          }`}>
            PURAN CHAND AGRO
          </span>
        </div>

        {showSubtitle && (
          <span className={`text-[8px] sm:text-[9px] font-bold tracking-[0.24em] uppercase leading-tight mt-0.5 whitespace-nowrap ${
            isLight ? 'text-mineral-lilac/80' : 'text-smoky-plum'
          }`}>
            Solar Energy • Est. 1978
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
