import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-9", variant = 'dark' }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Modern Solar Emblem */}
      <div className="w-8 h-8 rounded-xl bg-moss-ink flex items-center justify-center border border-moss-green/40 shadow-xs flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-pistachio" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" fill="#C0D3B9" />
          <path d="M12 2v2" stroke="#587C60" strokeWidth="2.5" />
          <path d="M12 20v2" stroke="#587C60" strokeWidth="2.5" />
          <path d="m4.93 4.93 1.41 1.41" stroke="#587C60" strokeWidth="2" />
          <path d="m17.66 17.66 1.41 1.41" stroke="#587C60" strokeWidth="2" />
          <path d="M2 12h2" stroke="#587C60" strokeWidth="2.5" />
          <path d="M20 12h2" stroke="#587C60" strokeWidth="2.5" />
          <path d="m6.34 17.66-1.41 1.41" stroke="#587C60" strokeWidth="2" />
          <path d="m19.07 4.93-1.41 1.41" stroke="#587C60" strokeWidth="2" />
        </svg>
      </div>

      {/* PC AGRO Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center font-black tracking-tight text-xl leading-none">
          <span className={isLight ? 'text-fog' : 'text-moss-ink'}>PC</span>
          <span className="text-moss-green ml-1">AGRO</span>
        </div>
        <span className={`text-[8px] font-bold tracking-[0.25em] uppercase leading-tight mt-0.5 ${
          isLight ? 'text-mist-grey' : 'text-mist-grey-600'
        }`}>
          Solar Energy • Est. 1978
        </span>
      </div>
    </div>
  );
};

export default Logo;
