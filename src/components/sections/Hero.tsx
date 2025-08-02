"use client";

import { motion } from 'framer-motion';
import { Button } from '~/components/ui/Button';
import { Section } from '~/components/ui/Section';
import { SITE_CONFIG } from '~/lib/constants';
import { useIsMobile } from '~/lib/hooks';

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
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white/90 to-gray-50/90 relative overflow-hidden">
      <MotionComponent 
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate={shouldAnimate ? "visible" : undefined}
      >
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            {SITE_CONFIG.name}
          </h1>
        </MotionComponent>
        
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mb-8">
            {SITE_CONFIG.title}
          </h2>
        </MotionComponent>
        
        <MotionComponent variants={shouldAnimate ? itemVariants : undefined}>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Blending artistic vision with technical expertise in full-stack development, 
            AI integration, and 3D design to create innovative digital experiences.
          </p>
        </MotionComponent>
        
        <MotionComponent 
          variants={shouldAnimate ? itemVariants : undefined}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" href="#projects">
            View Projects
          </Button>
          <Button size="lg" variant="outline" href="#contact">
            Get In Touch
          </Button>
        </MotionComponent>
      </MotionComponent>
    </Section>
  );
} 