import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'magenta' | 'pink' | 'multi';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', hover = true, ...props }, ref) => {
    const gradientClasses = {
      default: '',
      cyan: 'gradient-border-cyan',
      magenta: 'gradient-border-magenta', 
      pink: 'gradient-border-pink',
      multi: 'gradient-border-multi'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'card',
          gradientClasses[variant],
          hover && 'hover:scale-105 hover:shadow-hover',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };