import React from 'react';
import { cn } from '@/lib/utils';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = 'md', text = 'Carregando...', ...props }, ref) => {
    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-16 h-16',
      lg: 'w-24 h-24'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center gap-4',
          className
        )}
        {...props}
      >
        {/* Ícone de cabeça com código */}
        <div className={cn(
          'relative flex items-center justify-center text-accent-cyan animate-pulse',
          sizes[size]
        )}>
          {/* Cabeça */}
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Cabeça base */}
            <circle
              cx="32"
              cy="24"
              r="16"
              fill="currentColor"
              fillOpacity="0.8"
            />
            
            {/* Olhos como pontos de código */}
            <circle cx="26" cy="20" r="2" fill="#1a202c" />
            <circle cx="38" cy="20" r="2" fill="#1a202c" />
            
            {/* Boca como linha de código */}
            <rect x="28" y="26" width="8" height="1" fill="#1a202c" rx="0.5" />
            
            {/* Corpo/Monitor */}
            <rect
              x="20"
              y="40"
              width="24"
              height="16"
              rx="2"
              fill="currentColor"
              fillOpacity="0.6"
            />
            
            {/* Linhas de código no monitor */}
            <rect x="22" y="43" width="8" height="1" fill="#1a202c" rx="0.5" />
            <rect x="22" y="46" width="12" height="1" fill="#1a202c" rx="0.5" />
            <rect x="22" y="49" width="6" height="1" fill="#1a202c" rx="0.5" />
            <rect x="22" y="52" width="10" height="1" fill="#1a202c" rx="0.5" />
            
            {/* Pontos de código flutuantes */}
            <circle cx="48" cy="20" r="1" fill="currentColor" fillOpacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="16" cy="30" r="1" fill="currentColor" fillOpacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle cx="50" cy="40" r="1" fill="currentColor" fillOpacity="0.4">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
          </svg>
        </div>
        
        {text && (
          <p className="text-text-secondary text-small font-medium animate-pulse">
            {text}
          </p>
        )}
      </div>
    );
  }
);

Loading.displayName = 'Loading';

export { Loading };