import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Input: React.FC<InputProps> = ({ variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'border-ufoo-panel-border bg-ufoo-input text-ufoo-ink focus:border-ufoo-neon focus:ring-ufoo-neon',
    outline: 'border-ufoo-panel-border bg-transparent text-ufoo-ink focus:border-ufoo-neon focus:ring-ufoo-neon',
    ghost: 'border-transparent bg-transparent text-ufoo-ink focus:border-ufoo-neon focus:ring-ufoo-neon',
  };

  return (
    <input
      className={`
        h-10 w-full rounded-md border px-3 text-sm outline-none transition-colors placeholder:text-ufoo-muted
        focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${className}
      `.trim()}
      {...props}
    />
  );
};
