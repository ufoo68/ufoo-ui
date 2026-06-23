import React from 'react';

export interface PortfolioSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  tone?: 'default' | 'muted' | 'dark';
  contentClassName?: string;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  eyebrow,
  description,
  actions,
  tone = 'default',
  className = '',
  contentClassName = '',
  children,
  ...props
}) => {
  const tones = {
    default: 'bg-white text-slate-950',
    muted: 'bg-slate-50 text-slate-950',
    dark: 'bg-ufoo-dark text-ufoo-ink',
  };

  return (
    <section className={`py-14 sm:py-20 ${tones[tone]} ${className}`.trim()} {...props}>
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${contentClassName}`.trim()}>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-600">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
            {description && (
              <p className={`mt-3 leading-7 ${tone === 'dark' ? 'text-ufoo-muted' : 'text-slate-600'}`}>
                {description}
              </p>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
        {children}
      </div>
    </section>
  );
};

export interface ProjectCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  media?: React.ReactNode;
  technologies?: React.ReactNode[];
  action?: React.ReactNode;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  eyebrow,
  media,
  technologies = [],
  action,
  featured = false,
  className = '',
  ...props
}) => (
  <article
    className={`
      group flex h-full flex-col overflow-hidden rounded-2xl border bg-white text-slate-950
      transition duration-300 hover:-translate-y-1 hover:shadow-xl
      ${featured ? 'border-cyan-400 shadow-lg shadow-cyan-500/10' : 'border-slate-200 shadow-sm'}
      ${className}
    `.trim()}
    {...props}
  >
    {media && <div className="aspect-video overflow-hidden bg-slate-100 [&>*]:size-full [&>*]:object-cover">{media}</div>}
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">{eyebrow}</p>
      )}
      <h3 className="text-xl font-black tracking-tight">{title}</h3>
      {description && <div className="mt-3 text-sm leading-6 text-slate-600">{description}</div>}
      {technologies.length > 0 && (
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <li
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700"
              key={React.isValidElement(technology) && technology.key ? technology.key : index}
            >
              {technology}
            </li>
          ))}
        </ul>
      )}
      {action && <div className="mt-auto pt-6">{action}</div>}
    </div>
  </article>
);

export interface SkillBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: React.ReactNode;
  meta?: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'dark';
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  meta,
  tone = 'neutral',
  className = '',
  ...props
}) => {
  const tones = {
    neutral: 'border-slate-200 bg-slate-100 text-slate-800',
    accent: 'border-cyan-200 bg-cyan-50 text-cyan-900',
    dark: 'border-ufoo-panel-border bg-ufoo-panel text-ufoo-ink',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-bold ${tones[tone]} ${className}`.trim()}
      {...props}
    >
      <span>{name}</span>
      {meta && <span className="font-medium opacity-65">{meta}</span>}
    </span>
  );
};

export interface SkillGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({
  title,
  description,
  className = '',
  children,
  ...props
}) => (
  <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`.trim()} {...props}>
    <h3 className="text-lg font-black text-slate-950">{title}</h3>
    {description && <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>}
    <div className="mt-4 flex flex-wrap gap-2">{children}</div>
  </div>
);
