import React from 'react';

export interface ToolbarProps {
  children: React.ReactNode;
  className?: string;
}

export const Toolbar: React.FC<ToolbarProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex min-h-10 flex-wrap items-center gap-2 ${className}`.trim()}>
      {children}
    </div>
  );
};

export interface ToolbarGroupProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export const ToolbarGroup: React.FC<ToolbarGroupProps> = ({ children, label, className = '' }) => {
  return (
    <div
      aria-label={label}
      className={`
        flex min-h-8 items-center gap-1 border-r border-ufoo-panel-border pr-2 last:border-r-0 last:pr-0
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export interface ToolButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  showLabel?: boolean;
}

export const ToolButton: React.FC<ToolButtonProps> = ({
  icon,
  label,
  active = false,
  showLabel = false,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      aria-label={label}
      aria-pressed={active}
      title={label}
      type={type}
      className={`
        inline-flex h-8 min-w-8 items-center justify-center gap-2 rounded-md border px-2 text-sm font-semibold
        transition-colors
        ${active
          ? 'border-ufoo-neon bg-ufoo-neon/15 text-ufoo-neon shadow-[0_0_18px_rgba(0,243,255,0.18)]'
          : 'border-transparent text-ufoo-muted hover:border-ufoo-panel-border hover:bg-white/5 hover:text-ufoo-ink'}
        disabled:cursor-not-allowed disabled:opacity-45
        ${className}
      `.trim()}
      {...props}
    >
      {icon && <span className="grid size-4 place-items-center">{icon}</span>}
      {showLabel && <span className="whitespace-nowrap">{label}</span>}
    </button>
  );
};
