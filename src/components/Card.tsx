import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`grid gap-3 p-4 text-ufoo-ink ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

type CardComponent = React.FC<CardProps> & {
  Content: typeof CardContent;
};

export const Card: CardComponent = ({ children, title, className = '' }) => {
  const childrenArray = React.Children.toArray(children);
  const hasContentSlot =
    childrenArray.length > 0 &&
    childrenArray.every((child) => React.isValidElement(child) && child.type === CardContent);

  return (
    <div className={`relative overflow-hidden rounded-lg bg-ufoo-gray border-l-4 border-ufoo-neon shadow-neon ${className}`}>
      <div className="absolute top-0 right-0 w-8 h-8 bg-ufoo-neon clip-[polygon(100%_0,0_0,100%_100%)]" />
      {title && (
        <h3 className="px-4 pt-4 text-ufoo-neon font-black italic uppercase tracking-tighter">
          {title}
        </h3>
      )}
      {hasContentSlot ? children : <CardContent>{children}</CardContent>}
    </div>
  );
};

Card.Content = CardContent;
