import React from 'react';

export interface SpinnerProps {
  color?: 'accent' | 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ color = 'default', size = 'md', className = '' }) => {
  const colors = {
    accent: 'border-ufoo-neon',
    default: 'border-ufoo-muted',
    primary: 'border-ufoo-neon',
  };
  const sizes = {
    sm: 'size-4 border-2',
    md: 'size-6 border-2',
    lg: 'size-8 border-3',
  };

  return (
    <span
      aria-label="Loading"
      role="status"
      className={`inline-block animate-spin rounded-full border-current border-r-transparent ${colors[color]} ${sizes[size]} ${className}`.trim()}
    />
  );
};
