import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'neon' | 'pink' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'neon',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 clip-[polygon(0_0,100%_0,100%_70%,90%_100%,0_100%)]';
  
  const variants = {
    neon: 'bg-ufoo-neon text-ufoo-dark hover:shadow-neon hover:scale-105 active:scale-95',
    pink: 'bg-ufoo-pink text-white hover:shadow-neon-pink hover:scale-105 active:scale-95',
    outline: 'border-2 border-ufoo-neon text-ufoo-neon hover:bg-ufoo-neon hover:text-ufoo-dark hover:shadow-neon',
  };

  const sizes = {
    sm: 'px-4 py-1 text-xs',
    md: 'px-8 py-2 text-sm',
    lg: 'px-12 py-3 text-lg',
  };

  // Note: clip-path is tricky with Tailwind, using inline style for robustness if needed
  // or custom utility. For now, let's use a standard border-radius with a twist or simple classes.
  
  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  return (
    <button className={combinedClassName} {...props}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white transition-opacity duration-200" />
    </button>
  );
};
