import React from 'react';

export interface EditorShellProps {
  sidebar?: React.ReactNode;
  toolbar?: React.ReactNode;
  inspector?: React.ReactNode;
  statusbar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const EditorShell: React.FC<EditorShellProps> = ({
  sidebar,
  toolbar,
  inspector,
  statusbar,
  children,
  className = '',
}) => {
  const contentColumns = `${sidebar ? '220px ' : ''}minmax(0, 1fr)${inspector ? ' 280px' : ''}`;

  return (
    <div
      className={`
        grid min-h-[720px] overflow-hidden border border-ufoo-panel-border bg-ufoo-dark text-ufoo-ink
        shadow-[0_18px_60px_rgba(0,0,0,0.35)]
        ${className}
      `.trim()}
    >
      {toolbar && (
        <div className="border-b border-ufoo-panel-border bg-ufoo-panel/95 px-3 py-2">
          {toolbar}
        </div>
      )}
      <div className="grid min-h-0 flex-1 bg-ufoo-workspace" style={{ gridTemplateColumns: contentColumns }}>
        {sidebar && (
          <aside className="min-h-0 overflow-y-auto border-r border-ufoo-panel-border bg-ufoo-panel">
            {sidebar}
          </aside>
        )}
        <main className="min-h-0 overflow-auto p-6">
          {children}
        </main>
        {inspector && (
          <aside className="min-h-0 overflow-y-auto border-l border-ufoo-panel-border bg-ufoo-panel">
            {inspector}
          </aside>
        )}
      </div>
      {statusbar && (
        <div className="border-t border-ufoo-panel-border bg-ufoo-panel px-3 py-2 text-xs text-ufoo-muted">
          {statusbar}
        </div>
      )}
    </div>
  );
};
