import React from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  variant?: 'neon' | 'pink' | 'outline' | 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  isIconOnly?: boolean;
  onPress?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'neon',
  size = 'md',
  isDisabled = false,
  isIconOnly = false,
  className = '',
  children,
  onClick,
  onPress,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-md font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ufoo-neon disabled:cursor-not-allowed disabled:opacity-50';
  
  const variants = {
    neon: 'bg-ufoo-neon text-ufoo-dark hover:shadow-neon hover:scale-105 active:scale-95',
    pink: 'bg-ufoo-pink text-white hover:shadow-neon-pink hover:scale-105 active:scale-95',
    outline: 'border-2 border-ufoo-neon text-ufoo-neon hover:bg-ufoo-neon hover:text-ufoo-dark hover:shadow-neon',
    primary: 'bg-ufoo-neon text-ufoo-dark hover:shadow-neon active:scale-[0.98]',
    ghost: 'text-ufoo-muted hover:bg-white/8 hover:text-ufoo-ink active:bg-white/12',
  };

  const sizes = {
    sm: isIconOnly ? 'h-8 min-w-8 px-2 text-xs' : 'h-8 px-3 text-xs',
    md: isIconOnly ? 'h-10 min-w-10 px-2 text-sm' : 'h-10 px-4 text-sm',
    lg: isIconOnly ? 'h-12 min-w-12 px-3 text-lg' : 'h-12 px-6 text-lg',
  };
  
  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClassName}
      disabled={isDisabled}
      onClick={onPress ?? onClick}
      type={type}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
