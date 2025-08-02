"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION } from '~/lib/constants';
import { useActiveSection, useIsMobile } from '~/lib/hooks';
import { cn } from '~/lib/utils';

interface NavigationToggleProps {
  className?: string;
}

export function NavigationToggle({ className = '' }: NavigationToggleProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeSection = useActiveSection();
  const isMobile = useIsMobile();
  const shouldAnimate = !isMobile;

  // Update selected index based on active section
  useEffect(() => {
    const activeIndex = NAVIGATION.findIndex(
      item => item.href.substring(1) === activeSection
    );
    if (activeIndex !== -1) {
      setSelectedIndex(activeIndex);
    }
  }, [activeSection]);

  const handleToggle = (index: number) => {
    setSelectedIndex(index);
    // Scroll to the section
    const element = document.querySelector(NAVIGATION[index].href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MotionComponent = shouldAnimate ? motion.div : 'div';

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <MotionComponent
        className="relative flex h-12 w-96 rounded-xl bg-white shadow-sm border border-gray-100"
        whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
        transition={{ duration: 0.2 }}
      >
        {/* Slider */}
        <motion.div
          className="absolute top-1 left-1 h-10 w-16 bg-gray-100 rounded-lg shadow-sm"
          animate={{
            x: selectedIndex * 64, // 64px per item (w-16)
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
        
        {NAVIGATION.map((item, index) => (
          <div key={item.name} className="flex-1 relative">
            <input
              type="radio"
              id={`nav-${index}`}
              name="navigation-mode"
              checked={selectedIndex === index}
              onChange={() => handleToggle(index)}
              className="sr-only"
            />
            <label
              htmlFor={`nav-${index}`}
              className={cn(
                "flex items-center justify-center w-full h-full cursor-pointer text-sm font-medium transition-colors duration-200 relative z-10",
                selectedIndex === index 
                  ? "text-black" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.name}
            </label>
          </div>
        ))}
      </MotionComponent>
    </div>
  );
} 