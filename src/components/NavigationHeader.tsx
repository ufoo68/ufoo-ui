import React from 'react';

export interface NavigationItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  active = false,
  className = '',
  children,
  ...props
}) => (
  <a
    aria-current={active ? 'page' : undefined}
    className={`
      relative inline-flex min-h-10 items-center rounded-lg px-3 py-2 text-sm font-bold
      transition-colors hover:bg-current/8 focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-cyan-400
      ${active ? 'text-cyan-500 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-current' : ''}
      ${className}
    `.trim()}
    {...props}
  >
    {children}
  </a>
);

export interface NavigationHeaderProps extends React.HTMLAttributes<HTMLElement> {
  brand: React.ReactNode;
  navigation: React.ReactNode;
  actions?: React.ReactNode;
  tone?: 'light' | 'dark' | 'glass';
  sticky?: boolean;
  menuLabel?: string;
  containerClassName?: string;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  brand,
  navigation,
  actions,
  tone = 'dark',
  sticky = true,
  menuLabel = 'メニューを開く',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const tones = {
    light: 'border-slate-200 bg-white text-slate-950',
    dark: 'border-white/10 bg-ufoo-dark text-ufoo-ink',
    glass: 'border-white/15 bg-slate-950/80 text-white backdrop-blur-xl',
  };

  return (
    <header
      className={`
        z-40 w-full border-b
        ${sticky ? 'sticky top-0' : ''}
        ${tones[tone]}
        ${className}
      `.trim()}
      {...props}
    >
      <div
        className={`mx-auto flex min-h-16 w-full max-w-6xl items-center gap-4 px-5 sm:px-8 ${containerClassName}`.trim()}
      >
        <div className="min-w-0 shrink-0">{brand}</div>

        <nav aria-label="メインナビゲーション" className="ml-auto hidden items-center gap-1 md:flex">
          {navigation}
        </nav>

        {actions && <div className="hidden shrink-0 items-center gap-2 md:flex">{actions}</div>}

        <details className="group relative ml-auto md:hidden">
          <summary
            aria-label={menuLabel}
            className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 [&::-webkit-details-marker]:hidden"
          >
            <svg
              aria-hidden="true"
              className="size-5 group-open:hidden"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              aria-hidden="true"
              className="hidden size-5 group-open:block"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </summary>

          <div
            className={`
              absolute right-0 top-12 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border p-2 shadow-2xl
              ${tone === 'light' ? 'border-slate-200 bg-white' : 'border-white/10 bg-slate-950'}
            `.trim()}
          >
            <nav aria-label="モバイルナビゲーション" className="grid [&>*]:w-full">
              {navigation}
            </nav>
            {actions && (
              <div className="mt-2 flex items-center gap-2 border-t border-current/10 p-2 [&>*]:flex-1">
                {actions}
              </div>
            )}
          </div>
        </details>
      </div>
    </header>
  );
};
