"use client";

import { type HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';
import { useIsMobile } from '~/lib/hooks';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const isMobile = useIsMobile();
    const shouldAnimate = !isMobile;

    const MotionComponent = shouldAnimate ? motion.div : 'div';

    return (
      <MotionComponent
        whileHover={shouldAnimate ? { 
          rotateX: 2, 
          rotateY: 2,
          transition: { duration: 0.2 }
        } : undefined}
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