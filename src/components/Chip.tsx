import React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'accent' | 'default' | 'primary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md';
  variant?: 'soft' | 'solid' | 'outline';
}

export const Chip: React.FC<ChipProps> = ({
  color = 'default',
  size = 'md',
  variant = 'solid',
  className = '',
  children,
  ...props
}) => {
  const softColors = {
    accent: 'bg-ufoo-neon/15 text-ufoo-neon',
    default: 'bg-white/10 text-ufoo-muted',
    primary: 'bg-ufoo-neon/15 text-ufoo-neon',
    danger: 'bg-red-500/15 text-red-300',
    warning: 'bg-amber-500/15 text-amber-200',
    success: 'bg-emerald-500/15 text-emerald-300',
  };
  const solidColors = {
    accent: 'bg-ufoo-neon text-ufoo-dark',
    default: 'bg-ufoo-panel-border text-ufoo-ink',
    primary: 'bg-ufoo-neon text-ufoo-dark',
    danger: 'bg-red-600 text-white',
    warning: 'bg-amber-400 text-slate-950',
    success: 'bg-emerald-500 text-slate-950',
  };
  const outlineColors = {
    accent: 'border-ufoo-neon text-ufoo-neon',
    default: 'border-ufoo-panel-border text-ufoo-muted',
    primary: 'border-ufoo-neon text-ufoo-neon',
    danger: 'border-red-400 text-red-300',
    warning: 'border-amber-300 text-amber-200',
    success: 'border-emerald-300 text-emerald-300',
  };
  const variants = {
    soft: softColors[color],
    solid: solidColors[color],
    outline: `border ${outlineColors[color]}`,
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-bold
        ${size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'}
        ${variants[variant]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </span>
  );
};
