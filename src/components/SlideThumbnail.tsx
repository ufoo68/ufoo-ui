import React from 'react';

export interface SlideThumbnailProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  slideNumber: number;
  title?: string;
  selected?: boolean;
  meta?: string;
  children?: React.ReactNode;
}

export const SlideThumbnail: React.FC<SlideThumbnailProps> = ({
  slideNumber,
  title,
  selected = false,
  meta,
  children,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        group grid w-full grid-cols-[2rem_minmax(0,1fr)] gap-3 rounded-md border p-2 text-left transition-colors
        ${selected
          ? 'border-ufoo-neon bg-ufoo-neon/10 shadow-[0_0_22px_rgba(0,243,255,0.16)]'
          : 'border-transparent hover:border-ufoo-panel-border hover:bg-white/5'}
        ${className}
      `.trim()}
      {...props}
    >
      <span className={`pt-1 text-right font-mono text-xs ${selected ? 'text-ufoo-neon' : 'text-ufoo-muted'}`}>
        {slideNumber}
      </span>
      <span className="min-w-0 space-y-2">
        <span className="block aspect-video overflow-hidden rounded border border-ufoo-panel-border bg-ufoo-canvas">
          {children ?? (
            <span className="flex size-full items-center justify-center text-xs text-ufoo-muted">
              Slide
            </span>
          )}
        </span>
        {(title || meta) && (
          <span className="block min-w-0">
            {title && <span className="block truncate text-sm font-semibold text-ufoo-ink">{title}</span>}
            {meta && <span className="block truncate text-xs text-ufoo-muted">{meta}</span>}
          </span>
        )}
      </span>
    </button>
  );
};
