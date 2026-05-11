import React from 'react';

export interface InspectorPanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InspectorPanel: React.FC<InspectorPanelProps> = ({ title = 'Inspector', children, className = '' }) => {
  return (
    <div className={`divide-y divide-ufoo-panel-border ${className}`.trim()}>
      <div className="px-4 py-3">
        <h2 className="text-xs font-black uppercase tracking-[0.18em] text-ufoo-muted">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export interface InspectorSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const InspectorSection: React.FC<InspectorSectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`space-y-3 px-4 py-4 ${className}`.trim()}>
      <h3 className="text-sm font-bold text-ufoo-ink">{title}</h3>
      {children}
    </section>
  );
};

export interface InspectorFieldProps {
  label: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export const InspectorField: React.FC<InspectorFieldProps> = ({ label, hint, children, className = '' }) => {
  return (
    <label className={`grid gap-1.5 ${className}`.trim()}>
      <span className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-ufoo-muted">
        <span>{label}</span>
        {hint && <span className="normal-case tracking-normal text-ufoo-muted/70">{hint}</span>}
      </span>
      {children}
    </label>
  );
};

export interface InspectorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  unit?: string;
}

export const InspectorInput: React.FC<InspectorInputProps> = ({ unit, className = '', ...props }) => {
  return (
    <span className="relative block">
      <input
        className={`
          h-8 w-full rounded-md border border-ufoo-panel-border bg-ufoo-input px-2 text-sm text-ufoo-ink outline-none
          transition-colors placeholder:text-ufoo-muted/70 focus:border-ufoo-neon focus:ring-1 focus:ring-ufoo-neon
          ${unit ? 'pr-9' : ''}
          ${className}
        `.trim()}
        {...props}
      />
      {unit && (
        <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs text-ufoo-muted">
          {unit}
        </span>
      )}
    </span>
  );
};
