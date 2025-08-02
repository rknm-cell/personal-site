"use client";

import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '~/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, id, container = true, children, ...props }, ref) => {
    return (
      <section
        id={id}
        className={cn('py-16 md:py-24', className)}
        ref={ref}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 max-w-6xl">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section }; 