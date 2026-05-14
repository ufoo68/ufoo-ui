import React from 'react';
import { Chip } from './Chip';

export type QuizQuestionType = 'single' | 'multiple' | 'text' | 'boolean';
export type QuizQuestionStatus = 'draft' | 'ready' | 'published';
export type QuizChoiceState = 'default' | 'selected' | 'correct' | 'incorrect';

export interface QuizQuestionCardProps extends React.HTMLAttributes<HTMLElement> {
  questionNumber?: number;
  title: string;
  description?: string;
  type?: QuizQuestionType;
  status?: QuizQuestionStatus;
  difficulty?: 'easy' | 'normal' | 'hard';
  points?: number;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export interface QuizChoiceProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  label?: string;
  state?: QuizChoiceState;
  isDisabled?: boolean;
  meta?: React.ReactNode;
  onPress?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface QuizStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string;
    value: React.ReactNode;
    tone?: 'default' | 'accent' | 'success' | 'warning' | 'danger';
  }>;
}

const typeLabels: Record<QuizQuestionType, string> = {
  single: 'Single choice',
  multiple: 'Multiple choice',
  text: 'Text answer',
  boolean: 'True / false',
};

const statusColors: Record<QuizQuestionStatus, React.ComponentProps<typeof Chip>['color']> = {
  draft: 'default',
  ready: 'warning',
  published: 'success',
};

const difficultyColors: Record<NonNullable<QuizQuestionCardProps['difficulty']>, React.ComponentProps<typeof Chip>['color']> = {
  easy: 'success',
  normal: 'primary',
  hard: 'danger',
};

export const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  questionNumber,
  title,
  description,
  type = 'single',
  status = 'draft',
  difficulty = 'normal',
  points,
  actions,
  footer,
  children,
  className = '',
  ...props
}) => {
  return (
    <article
      className={`
        overflow-hidden rounded-lg border border-ufoo-panel-border bg-ufoo-panel text-ufoo-ink shadow-[0_14px_34px_rgba(0,0,0,0.22)]
        ${className}
      `.trim()}
      {...props}
    >
      <div className="grid gap-4 border-b border-ufoo-panel-border p-4 sm:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {questionNumber !== undefined && (
              <span className="text-xs font-black uppercase text-ufoo-neon">
                Q{questionNumber}
              </span>
            )}
            <Chip color="accent" size="sm" variant="soft">
              {typeLabels[type]}
            </Chip>
            <Chip color={statusColors[status]} size="sm" variant="soft">
              {status}
            </Chip>
            <Chip color={difficultyColors[difficulty]} size="sm" variant="outline">
              {difficulty}
            </Chip>
            {points !== undefined && (
              <Chip color="default" size="sm" variant="soft">
                {points} pt
              </Chip>
            )}
          </div>
          <h3 className="text-lg font-black leading-snug text-ufoo-ink">{title}</h3>
          {description && (
            <p className="mt-2 text-sm leading-6 text-ufoo-muted">{description}</p>
          )}
        </div>
        {actions && <div className="flex items-start gap-2">{actions}</div>}
      </div>
      {children && <div className="grid gap-3 p-4">{children}</div>}
      {footer && (
        <div className="border-t border-ufoo-panel-border bg-ufoo-workspace px-4 py-3 text-sm text-ufoo-muted">
          {footer}
        </div>
      )}
    </article>
  );
};

export const QuizChoice: React.FC<QuizChoiceProps> = ({
  label,
  state = 'default',
  isDisabled = false,
  meta,
  className = '',
  children,
  onClick,
  onPress,
  type = 'button',
  ...props
}) => {
  const stateStyles = {
    default: 'border-ufoo-panel-border bg-ufoo-input text-ufoo-ink hover:border-ufoo-neon/70',
    selected: 'border-ufoo-neon bg-ufoo-neon/12 text-ufoo-ink shadow-[0_0_18px_rgba(0,243,255,0.16)]',
    correct: 'border-emerald-400 bg-emerald-500/12 text-emerald-100',
    incorrect: 'border-red-400 bg-red-500/12 text-red-100',
  };

  return (
    <button
      className={`
        grid min-h-12 w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border px-3 py-2 text-left
        text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-ufoo-neon disabled:cursor-not-allowed disabled:opacity-50
        ${stateStyles[state]}
        ${className}
      `.trim()}
      data-state={state}
      disabled={isDisabled}
      type={type}
      onClick={onPress ?? onClick}
      {...props}
    >
      {label && (
        <span className="flex size-7 items-center justify-center rounded bg-white/8 text-xs font-black uppercase text-ufoo-muted">
          {label}
        </span>
      )}
      <span className="min-w-0 leading-5">{children}</span>
      {meta && <span className="text-xs font-semibold text-ufoo-muted">{meta}</span>}
    </button>
  );
};

export const QuizStats: React.FC<QuizStatsProps> = ({ items, className = '', ...props }) => {
  const toneStyles = {
    default: 'border-ufoo-panel-border bg-ufoo-panel',
    accent: 'border-ufoo-neon/60 bg-ufoo-neon/10',
    success: 'border-emerald-400/60 bg-emerald-500/10',
    warning: 'border-amber-300/60 bg-amber-500/10',
    danger: 'border-red-400/60 bg-red-500/10',
  };

  return (
    <div
      className={`grid gap-3 sm:grid-flow-col sm:auto-cols-fr ${className}`.trim()}
      {...props}
    >
      {items.map((item) => (
        <div
          className={`rounded-md border p-3 ${toneStyles[item.tone ?? 'default']}`}
          key={item.label}
        >
          <div className="text-xs font-bold uppercase text-ufoo-muted">{item.label}</div>
          <div className="mt-1 text-xl font-black text-ufoo-ink">{item.value}</div>
        </div>
      ))}
    </div>
  );
};
