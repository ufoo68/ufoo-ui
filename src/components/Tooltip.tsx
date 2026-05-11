import React from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  className?: string;
}

export interface TooltipContentProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const TooltipRoot: React.FC<TooltipProps> = ({ children, className = '' }) => {
  return <span className={`group relative inline-flex ${className}`.trim()}>{children}</span>;
};

const TooltipContent: React.FC<TooltipContentProps> = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`
        pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md
        bg-ufoo-dark px-2 py-1 text-xs font-semibold text-ufoo-ink opacity-0 shadow-lg transition-opacity
        group-hover:opacity-100 group-focus-within:opacity-100
        ${className}
      `.trim()}
      role="tooltip"
      {...props}
    >
      {children}
    </span>
  );
};

type TooltipComponent = React.FC<TooltipProps> & {
  Content: typeof TooltipContent;
};

export const Tooltip = TooltipRoot as TooltipComponent;
Tooltip.Content = TooltipContent;
