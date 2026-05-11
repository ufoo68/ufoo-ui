import React, { createContext, useContext } from 'react';

type TabKey = string | number;

type TabsContextValue = {
  selectedKey?: TabKey;
  onSelectionChange?: (key: TabKey) => void;
};

const TabsContext = createContext<TabsContextValue>({});

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedKey?: TabKey;
  onSelectionChange?: (key: TabKey) => void;
  'aria-label'?: string;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TabsTabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'id'> {
  id: TabKey;
}

const TabsRoot: React.FC<TabsProps> = ({
  selectedKey,
  onSelectionChange,
  className = '',
  children,
  ...props
}) => {
  return (
    <TabsContext.Provider value={{ selectedKey, onSelectionChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<TabsListProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`.trim()} role="tablist" {...props}>
      {children}
    </div>
  );
};

const TabsTab: React.FC<TabsTabProps> = ({ id, className = '', children, onClick, type = 'button', ...props }) => {
  const { selectedKey, onSelectionChange } = useContext(TabsContext);
  const selected = String(selectedKey) === String(id);

  return (
    <button
      aria-selected={selected}
      className={`
        rounded px-3 py-2 text-sm font-semibold transition-colors
        ${selected ? 'bg-ufoo-ink text-ufoo-dark' : 'text-ufoo-muted hover:bg-white/8 hover:text-ufoo-ink'}
        ${className}
      `.trim()}
      data-selected={selected}
      id={String(id)}
      role="tab"
      type={type}
      onClick={(event) => {
        onSelectionChange?.(id);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
};

type TabsComponent = React.FC<TabsProps> & {
  List: typeof TabsList;
  Tab: typeof TabsTab;
};

export const Tabs = TabsRoot as TabsComponent;
Tabs.List = TabsList;
Tabs.Tab = TabsTab;
