import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', loading = false, disabled, ...props }, ref) => {
    const variants = {
      primary: 'btn-primary',
      ghost: 'btn-ghost'
    };

    const sizes = {
      sm: 'py-xs px-sm text-small',
      md: 'py-md px-lg text-body',
      lg: 'py-lg px-xl text-h3'
    };

    return (
      <button
        ref={ref}
        className={cn(
          variants[variant],
          sizes[size],
          loading && 'opacity-50 cursor-not-allowed',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };