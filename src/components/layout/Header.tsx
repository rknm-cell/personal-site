"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAVIGATION } from '~/lib/constants';
import { Button } from '~/components/ui/Button';
import { useActiveSection, useIsMobile } from '~/lib/hooks';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const isMobile = useIsMobile();

  // Don't show animations on mobile
  const shouldAnimate = !isMobile;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-black">
              Peter Yelton
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {NAVIGATION.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`relative z-10 px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive 
                        ? 'text-black font-medium' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </a>
                  {isActive && shouldAnimate && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gray-100 rounded-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="flex flex-col space-y-4 py-4">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 