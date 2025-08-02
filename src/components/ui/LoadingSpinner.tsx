"use client";

import { motion } from 'framer-motion';
import { useIsMobile } from '~/lib/hooks';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const isMobile = useIsMobile();
  const shouldAnimate = !isMobile;

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  if (!shouldAnimate) {
    return (
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-black ${sizeClasses[size]} ${className}`} />
    );
  }

  return (
    <motion.div
      className={`rounded-full border-2 border-gray-300 border-t-black ${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
} 