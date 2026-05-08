import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`relative bg-ufoo-gray border-l-4 border-ufoo-neon p-6 shadow-neon ${className}`}>
      <div className="absolute top-0 right-0 w-8 h-8 bg-ufoo-neon clip-[polygon(100%_0,0_0,100%_100%)]" />
      {title && (
        <h3 className="text-ufoo-neon font-black italic uppercase mb-4 tracking-tighter">
          {title}
        </h3>
      )}
      <div className="text-white">
        {children}
      </div>
    </div>
  );
};
