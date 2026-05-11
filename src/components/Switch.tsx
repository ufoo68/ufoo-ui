import React, { createContext, useContext } from 'react';

type SwitchContextValue = {
  isSelected: boolean;
};

const SwitchContext = createContext<SwitchContextValue>({ isSelected: false });

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  isSelected?: boolean;
  onChange?: (selected: boolean) => void;
  size?: 'sm' | 'md';
}

export interface SwitchControlProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const SwitchRoot: React.FC<SwitchProps> = ({
  isSelected = false,
  onChange,
  size = 'md',
  className = '',
  children,
  type = 'button',
  onClick,
  ...props
}) => {
  return (
    <SwitchContext.Provider value={{ isSelected }}>
      <button
        aria-checked={isSelected}
        className={`
          inline-flex items-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ufoo-neon
          ${size === 'sm' ? 'text-sm' : 'text-base'}
          ${className}
        `.trim()}
        role="switch"
        type={type}
        onClick={(event) => {
          onChange?.(!isSelected);
          onClick?.(event);
        }}
        {...props}
      >
        {children}
      </button>
    </SwitchContext.Provider>
  );
};

const SwitchControl: React.FC<SwitchControlProps> = ({ className = '', children, ...props }) => {
  const { isSelected } = useContext(SwitchContext);

  return (
    <span
      data-selected={isSelected}
      className={`
        relative inline-flex h-5 w-9 items-center rounded-full transition-colors
        ${isSelected ? 'bg-ufoo-neon' : 'bg-ufoo-panel-border'}
        ${className}
      `.trim()}
      {...props}
    >
      {children ?? (
        <span
          className={`
            absolute top-0.5 block h-4 w-4 rounded-full bg-white shadow transition-[left]
            ${isSelected ? 'left-[18px]' : 'left-0.5'}
          `.trim()}
        />
      )}
    </span>
  );
};

type SwitchComponent = React.FC<SwitchProps> & {
  Control: typeof SwitchControl;
};

export const Switch = SwitchRoot as SwitchComponent;
Switch.Control = SwitchControl;
