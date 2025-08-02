"use client";

import { motion } from 'framer-motion';
import { Button } from '~/components/ui/Button';
import { Section } from '~/components/ui/Section';
import { Badge } from '~/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Separator } from '~/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { Card, CardContent } from '~/components/ui/Card';
import { SITE_CONFIG } from '~/lib/constants';
import { useIsMobile } from '~/lib/hooks';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Hero() {
  const isMobile = useIsMobile();
  const shouldAnimate = !isMobile;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const MotionComponent = shouldAnimate ? motion.div : 'div';

  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-isabelline-500/90 to-linen-500/90 relative overflow-hidden">
      <MotionComponent 
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate={shouldAnimate ? "visible" : undefined}
      >
        {/* Avatar and Name Section */}
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <div className="flex flex-col items-center space-y-4 mb-6">
            <Avatar className="h-20 w-20 border-2 border-timberwolf-300">
              <AvatarImage src="/avatar.jpg" alt={SITE_CONFIG.name} />
              <AvatarFallback className="text-lg font-bold bg-timberwolf-100 text-isabelline-500">
                {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </MotionComponent>

        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-timberwolf-100 mb-6">
            {SITE_CONFIG.name}
          </h1>
        </MotionComponent>
        
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-timberwolf-200 mb-8">
            {SITE_CONFIG.title}
          </h2>
        </MotionComponent>

        {/* Skills Badges */}
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined} className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-xs bg-linen-500 text-timberwolf-100 border-timberwolf-300">
              Full-Stack
            </Badge>
            <Badge variant="outline" className="text-xs border-champagne-pink-400 text-timberwolf-200">
              AI Integration
            </Badge>
            <Badge variant="secondary" className="text-xs bg-pale-dogwood-500 text-timberwolf-100 border-timberwolf-300">
              3D Design
            </Badge>
          </div>
        </MotionComponent>
        
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <p className="text-lg md:text-xl text-timberwolf-200 mb-12 max-w-2xl mx-auto">
            Blending artistic vision with technical expertise in full-stack development, 
            AI integration, and 3D design to create innovative digital experiences.
          </p>
        </MotionComponent>
        
        <MotionComponent 
          variants={shouldAnimate ? itemVariants : undefined}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne-pink-400 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-linen-500 text-timberwolf-100 shadow hover:bg-linen-400 h-10 rounded-md px-8"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Projects
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explore my latest work</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne-pink-400 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-timberwolf-300 bg-transparent shadow-sm hover:bg-timberwolf-100 hover:text-isabelline-500 h-10 rounded-md px-8"
                >
                  <Mail size={16} className="mr-2" />
                  Get In Touch
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Let's work together</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </MotionComponent>

        {/* Social Links */}
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined} className="mt-8">
          <div className="flex justify-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-isabelline-600 hover:bg-isabelline-500 transition-colors"
                  >
                    <Github size={18} className="text-timberwolf-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-isabelline-600 hover:bg-isabelline-500 transition-colors"
                  >
                    <Linkedin size={18} className="text-timberwolf-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="p-2 rounded-full bg-isabelline-600 hover:bg-isabelline-500 transition-colors"
                  >
                    <Mail size={18} className="text-timberwolf-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Email</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </MotionComponent>
      </MotionComponent>
    </Section>
  );
} 