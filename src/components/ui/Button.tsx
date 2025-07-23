"use client";

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '~/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
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

    if (href) {
      return (
        <a
          href={href}
          className={baseClasses}
          target={props.target}
          rel={props.rel}
        >
          {props.children}
        </a>
      );
    }

    return (
      <button
        className={baseClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button }; 