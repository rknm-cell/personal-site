"use client";

import { Section } from '~/components/ui/Section';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { SITE_CONFIG } from '~/lib/constants';
import { Award, Users, Palette, Code, Zap } from 'lucide-react';

export function About() {
  return (
    <Section id="about" className="bg-isabelline-500">
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-12 w-12 border-2 border-timberwolf-300">
                <AvatarImage src="/avatar.jpg" alt={SITE_CONFIG.name} />
                <AvatarFallback className="text-sm font-bold bg-timberwolf-100 text-isabelline-500">
                  {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl md:text-4xl font-bold text-timberwolf-100">
                About Me
              </h2>
            </div>
            
            <div className="space-y-4 text-timberwolf-200">
              <p>
                I&apos;m a Design Engineer with a unique background that bridges the gap between 
                artistic creativity and technical innovation. With 4 years of experience at SFDS 
                in Brooklyn, NY, I&apos;ve evolved from an artist to a technical specialist, 
                specializing in 3D printing and high-profile client projects.
              </p>
              <p>
                My work spans from experiential marketing design for major brands like Dior, 
                Hermes, and Ogilvy, to sculptural pieces for Madame Tussaud&apos;s and Mariah Carey. 
                I&apos;ve also contributed to innovative projects for Pfizer and Rivian, creating 
                custom 3D printing solutions and automotive design components.
              </p>
              <p>
                Today, I focus on full-stack development and AI integration, bringing my 
                design sensibilities to create seamless digital experiences that combine 
                aesthetic appeal with technical excellence.
              </p>
            </div>

            <Separator className="my-6" />

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="secondary" className="text-xs">
                      <Palette size={12} className="mr-1" />
                      Design
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Artistic & UX Design</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="text-xs">
                      <Code size={12} className="mr-1" />
                      Development
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Full-Stack Development</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="secondary" className="text-xs">
                      <Zap size={12} className="mr-1" />
                      AI Integration
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>AI & Machine Learning</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="text-xs">
                      <Users size={12} className="mr-1" />
                      3D Printing
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MSLA & FDM Technologies</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <Card className="border-0 shadow-lg bg-isabelline-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-timberwolf-100">
                <Award size={20} className="text-linen-400" />
                Key Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-timberwolf-200">
                <li className="flex items-start">
                  <span className="text-linen-400 mr-2 font-bold">•</span>
                  Full-stack development with AI integration focus
                </li>
                <li className="flex items-start">
                  <span className="text-linen-400 mr-2 font-bold">•</span>
                  4 years at SFDS (Brooklyn, NY) - Artist to Technical Specialist
                </li>
                <li className="flex items-start">
                  <span className="text-linen-400 mr-2 font-bold">•</span>
                  High-profile client work: Dior, Hermes, Ogilvy, Madame Tussaud&apos;s
                </li>
                <li className="flex items-start">
                  <span className="text-linen-400 mr-2 font-bold">•</span>
                  Freelance projects for Pfizer and Rivian
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </Section>
  );
} 