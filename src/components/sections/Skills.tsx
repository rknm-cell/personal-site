"use client";

import { Section } from '~/components/ui/Section';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { SKILLS } from '~/lib/constants';
import type { Skill } from '~/types';
import { Code, Palette, Box, Zap, Database, Monitor } from 'lucide-react';

const categoryLabels = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  design: 'Design & Creative',
  '3d': '3D & Manufacturing',
  ai: 'AI & Machine Learning'
} as const;

const categoryIcons = {
  frontend: Monitor,
  backend: Database,
  design: Palette,
  '3d': Box,
  ai: Zap
} as const;

export function Skills() {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    acc[skill.category] ??= [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Section id="skills" className="bg-isabelline-600">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timberwolf-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-timberwolf-200 max-w-2xl mx-auto">
            A diverse skill set spanning technical development, design, and 3D manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            
            return (
              <Card key={category} className="border-0 shadow-lg bg-isabelline-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-timberwolf-300">
                      <AvatarFallback className="text-sm font-bold bg-timberwolf-100 text-isabelline-500">
                        <IconComponent size={16} />
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-semibold text-timberwolf-100">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <TooltipProvider key={skill.name}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge variant="outline" className="text-xs">
                              {skill.name}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>
    </Section>
  );
} 