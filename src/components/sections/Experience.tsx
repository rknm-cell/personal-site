"use client";

import { Section } from '~/components/ui/Section';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { EXPERIENCE } from '~/lib/constants';
import { Building2, MapPin, Calendar, Award, Code } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" className="bg-isabelline-500">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timberwolf-100 mb-4">
            Experience
          </h2>
          <p className="text-lg text-timberwolf-200 max-w-2xl mx-auto">
            My professional journey from artistic design to technical engineering
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((experience, index) => (
            <Card key={experience.id} className="border-0 shadow-lg bg-isabelline-600">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-timberwolf-300">
                      <AvatarImage src={`/companies/${experience.id}.jpg`} alt={experience.company} />
                      <AvatarFallback className="text-sm font-bold bg-timberwolf-100 text-isabelline-500">
                        <Building2 size={16} />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl font-bold text-timberwolf-100">
                        {experience.position}
                      </CardTitle>
                      <p className="text-xl text-timberwolf-200">
                        {experience.company}
                      </p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {index === 0 ? 'Current' : 'Previous'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 mt-4 md:mt-0">
                    <div className="flex items-center gap-1 text-timberwolf-200">
                      <MapPin size={14} />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-timberwolf-200">
                      <Calendar size={14} />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-timberwolf-200 mb-6">
                  {experience.description}
                </p>

                <Separator className="my-6" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={18} className="text-linen-400" />
                      <h4 className="text-lg font-semibold text-timberwolf-100">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-linen-400 mr-2 mt-1 font-bold">•</span>
                          <span className="text-timberwolf-200">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code size={18} className="text-linen-400" />
                      <h4 className="text-lg font-semibold text-timberwolf-100">
                        Technologies & Skills
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Used at {experience.company}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
} 