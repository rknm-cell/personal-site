import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
} 