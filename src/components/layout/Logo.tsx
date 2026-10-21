import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark',
  showSubtitle = true 
}) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Concept A: Geometric Energy Mark (Rhomboid Photovoltaic Crystal & Chartreuse Vector Core) */}
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105 ${
        isLight 
          ? 'bg-deep-fjord/90 border border-glacier/40 shadow-soft' 
          : 'bg-white border border-ice-mineral shadow-xs'
      }`}>
        <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Structural Facet (Deep Fjord) */}
          <path d="M6 16 L22 6 L22 34 L6 44 Z" fill={isLight ? '#F3F6F2' : '#263C49'} />
          
          {/* Right Structural Facet (Glacier Blue) */}
          <path d="M26 6 L42 16 L42 44 L26 34 Z" fill="#7699A3" />
          
          {/* Catalytic Electric Chartreuse Energy Core */}
          <polygon points="19,20 29,14 29,28 19,34" fill="#B9D84A" />
          
          {/* Central Structural Focal Node */}
          <circle cx="24" cy="24" r="2.5" fill={isLight ? '#263C49' : '#F3F6F2'} />
        </svg>
      </div>

      {/* Puran Chand Agro / PC Agro Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center font-extrabold tracking-tight text-xl leading-none">
          <span className={isLight ? 'text-frost-white' : 'text-deep-fjord'}>
            PURAN CHAND
          </span>
          <span className="text-chartreuse font-black ml-1.5 drop-shadow-[0_0_8px_rgba(185,216,74,0.3)]">
            AGRO
          </span>
        </div>
        
        {showSubtitle && (
          <span className={`text-[8.5px] font-bold tracking-[0.26em] uppercase leading-tight mt-1 ${
            isLight ? 'text-ice-mineral/80' : 'text-glacier'
          }`}>
            Solar Energy • Est. 1978
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
