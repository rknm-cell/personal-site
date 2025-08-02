"use client";

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';
import { useIsMobile } from '~/lib/hooks';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const isMobile = useIsMobile();
    const shouldAnimate = !isMobile;

    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-black text-white hover:bg-gray-800': variant === 'primary',
        'bg-white text-black hover:bg-gray-100': variant === 'secondary',
        'border border-black text-black hover:bg-black hover:text-white': variant === 'outline',
        'text-black hover:bg-gray-100': variant === 'ghost',
      },
      {
        'h-8 px-3 text-sm': size === 'sm',
        'h-10 px-4 py-2': size === 'md',
        'h-12 px-6 text-lg': size === 'lg',
      },
      className
    );

    const MotionComponent = shouldAnimate ? motion.div : 'div';

    if (href) {
      return (
        <MotionComponent
          whileHover={shouldAnimate ? { scale: 1.05 } : undefined}
          whileTap={shouldAnimate ? { scale: 0.95 } : undefined}
          transition={{ duration: 0.2 }}
        >
          <a
            href={href}
            className={baseClasses}
            target={props.target}
            rel={props.rel}
          >
            {props.children}
          </a>
        </MotionComponent>
      );
    }

    return (
      <MotionComponent
        whileHover={shouldAnimate ? { scale: 1.05 } : undefined}
        whileTap={shouldAnimate ? { scale: 0.95 } : undefined}
        transition={{ duration: 0.2 }}
      >
        <button
          className={baseClasses}
          ref={ref}
          {...props}
        />
      </MotionComponent>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 