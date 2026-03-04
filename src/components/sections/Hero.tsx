"use client";

import { motion } from 'framer-motion';
import { Section } from '~/components/ui/Section';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { SITE_CONFIG } from '~/lib/constants';
import { useIsMobile } from '~/lib/hooks';
import { Github, Linkedin, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
const ButtonBlackBg = dynamic(() => import('../../../framer/button-black-bg'), { ssr: false });
const ButtonWhiteBg = dynamic(() => import('../../../framer/button-white-bg'), { ssr: false });

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
    <Section className="min-h-screen flex items-center bg-gradient-to-br from-isabelline-500/90 to-linen-500/90 relative overflow-hidden">
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-champagne-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-[5%] w-80 h-80 bg-pale-dogwood-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-[15%] w-1 h-32 bg-linen-400/40 rotate-45"></div>
        <div className="absolute bottom-1/4 left-[12%] w-24 h-1 bg-champagne-pink-400/40"></div>
      </div>

      {/* Main content - asymmetric left-aligned layout */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Main content */}
          <MotionComponent
            className="lg:col-span-7 space-y-8"
            variants={shouldAnimate ? containerVariants : undefined}
            initial={shouldAnimate ? "hidden" : undefined}
            animate={shouldAnimate ? "visible" : undefined}
          >
            {/* Avatar with overlapping name tag */}
            <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
              <div className="relative inline-block">
                <Avatar className="h-24 w-24 md:h-28 md:w-28 border-4 border-white shadow-lg">
                  <AvatarImage src="/avatar.jpg" alt={SITE_CONFIG.name} />
                  <AvatarFallback className="text-xl font-bold bg-timberwolf-100 text-isabelline-500">
                    {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {/* Decorative corner accent */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-linen-400 rounded-full border-4 border-isabelline-500"></div>
              </div>
            </MotionComponent>

            <div className="space-y-4">
              <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-timberwolf-100 leading-none tracking-tight">
                  {SITE_CONFIG.name}
                </h1>
              </MotionComponent>

              <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
                <div className="relative inline-block">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-timberwolf-200 relative z-10">
                    {SITE_CONFIG.title}
                  </h2>
                  {/* Underline accent */}
                  <div className="absolute bottom-1 left-0 w-24 h-2 bg-linen-400/50 -z-10"></div>
                </div>
              </MotionComponent>
            </div>

            <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
              <p className="text-lg md:text-xl text-timberwolf-200 max-w-xl leading-relaxed">
                Blending artistic vision with technical expertise in full-stack development,
                AI integration, and 3D design to create innovative digital experiences.
              </p>
            </MotionComponent>

            <MotionComponent
              variants={shouldAnimate ? itemVariants : undefined}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <ButtonBlackBg title="View Projects" link="#projects" />
              <ButtonWhiteBg title="Get In Touch" link="#contact" variant="Normal" />
            </MotionComponent>
          </MotionComponent>

          {/* Right side - Social links card */}
          <MotionComponent
            variants={shouldAnimate ? itemVariants : undefined}
            className="lg:col-span-5 lg:ml-auto"
          >
            <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-warm border border-white/60 max-w-md lg:transform lg:translate-y-12">
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-champagne-pink-400 rounded-lg rotate-12 opacity-80"></div>

              <h3 className="text-lg font-semibold text-timberwolf-100 mb-6">Let&apos;s Connect</h3>

              <div className="space-y-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={SITE_CONFIG.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-isabelline-600 hover:bg-isabelline-500 transition-all hover:-translate-y-1 hover:shadow-lg group"
                      >
                        <div className="p-2 rounded-lg bg-timberwolf-100/20">
                          <Github size={20} className="text-timberwolf-100" />
                        </div>
                        <span className="text-timberwolf-200 group-hover:text-timberwolf-100 font-medium">GitHub Profile</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View my code</p>
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
                        className="flex items-center gap-4 p-4 rounded-xl bg-isabelline-600 hover:bg-isabelline-500 transition-all hover:-translate-y-1 hover:shadow-lg group"
                      >
                        <div className="p-2 rounded-lg bg-timberwolf-100/20">
                          <Linkedin size={20} className="text-timberwolf-100" />
                        </div>
                        <span className="text-timberwolf-200 group-hover:text-timberwolf-100 font-medium">LinkedIn Profile</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Professional network</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="flex items-center gap-4 p-4 rounded-xl bg-isabelline-600 hover:bg-isabelline-500 transition-all hover:-translate-y-1 hover:shadow-lg group"
                      >
                        <div className="p-2 rounded-lg bg-timberwolf-100/20">
                          <Mail size={20} className="text-timberwolf-100" />
                        </div>
                        <span className="text-timberwolf-200 group-hover:text-timberwolf-100 font-medium">Send Email</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get in touch</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </MotionComponent>
        </div>
      </div>
    </Section>
  );
} 