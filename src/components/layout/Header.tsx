"use client";

import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { NAVIGATION } from '~/lib/constants';
import { useActiveSection } from '~/lib/hooks';
import { cn } from '~/lib/utils';
import { Card, CardContent } from '~/components/ui/Card';
import { Badge } from '~/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { SITE_CONFIG } from '~/lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-isabelline-500/80 backdrop-blur-sm border-b border-timberwolf-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="flex items-center gap-2 text-xl font-bold text-timberwolf-100 hover:text-timberwolf-200 transition-colors">
                    <Avatar className="h-8 w-8 border border-timberwolf-300">
                      <AvatarImage src="/avatar.jpg" alt={SITE_CONFIG.name} />
                      <AvatarFallback className="text-sm font-bold bg-timberwolf-100 text-isabelline-500">
                        <User size={14} />
                      </AvatarFallback>
                    </Avatar>
                    <span>PY</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Peter Yelton</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION.map((item) => (
              <TooltipProvider key={item.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md",
                        activeSection === item.href.substring(1)
                          ? "text-timberwolf-100 bg-linen-400/75"
                          : "text-timberwolf-200 hover:text-timberwolf-100 hover:bg-isabelline-600/50"
                      )}
                    >
                      {item.name}
                      
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to {item.name} section</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors p-2 rounded-md hover:bg-isabelline-600/50"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isMenuOpen ? 'Close menu' : 'Open menu'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <Card className="border-t border-timberwolf-300 bg-isabelline-500/95 backdrop-blur-sm">
              <CardContent className="px-2 pt-2 pb-3 space-y-1">
                {NAVIGATION.map((item) => (
                  <TooltipProvider key={item.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md",
                            activeSection === item.href.substring(1)
                              ? "text-timberwolf-100 bg-linen-500/50"
                              : "text-timberwolf-200 hover:text-timberwolf-100 hover:bg-isabelline-600/50"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            {activeSection === item.href.substring(1) && (
                              <Badge variant="secondary" className="text-xs bg-champagne-pink-400 text-timberwolf-100">
                                Active
                              </Badge>
                            )}
                          </div>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Go to {item.name} section</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </header>
  );
} 