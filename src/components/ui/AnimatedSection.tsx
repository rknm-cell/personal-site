"use client";

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useIsMobile } from '~/lib/hooks';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const isMobile = useIsMobile();
  const shouldAnimate = !isMobile;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.1,
        delayChildren: delay + 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  } as const;

  const MotionComponent = shouldAnimate ? motion.div : 'div';

  const motionProps = shouldAnimate
    ? {
        variants: containerVariants,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-100px" }
      }
    : {};

  return (
    <MotionComponent
      className={className}
      {...motionProps}
    >
      {shouldAnimate ? (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </MotionComponent>
  );
} 