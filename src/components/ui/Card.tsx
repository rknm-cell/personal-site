"use client";

import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '~/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-lg p-6',
          {
            'bg-white shadow-sm': variant === 'default',
            'border border-gray-200 bg-white': variant === 'outlined',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card }; 