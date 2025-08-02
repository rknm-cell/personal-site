"use client";

import { ExternalLink, Github, Code, Globe, Award, Target, Zap } from 'lucide-react';
import { Section } from '~/components/ui/Section';
import { Button } from '~/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { PROJECTS } from '~/lib/constants';
import Image from 'next/image';

export function Projects() {
  return (
    <Section id="projects" className="bg-isabelline-600">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timberwolf-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-timberwolf-200 max-w-2xl mx-auto">
            Showcasing my work in AI integration, full-stack development, and mobile applications
          </p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-timberwolf-300">
                    <AvatarImage src={`/projects/${project.id}.jpg`} alt={project.title} />
                    <AvatarFallback className="text-sm font-bold bg-gradient-to-r from-linen-400 to-champagne-pink-400 text-timberwolf-100">
                      {project.title.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-bold text-timberwolf-100">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="default" className="mt-1 text-xs">
                        <Award size={10} className="mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="space-y-4">
                    {project.imageUrl ? (
                      <div className="bg-isabelline-600 rounded-lg overflow-hidden">
                        <div className="bg-isabelline-500 px-4 py-2 text-sm text-timberwolf-200 border-b border-timberwolf-300 flex items-center gap-2">
                          <Globe size={14} />
                          Live Preview - {project.title}
                        </div>
                        <div className="relative h-96">
                          <Image
                            src={project.imageUrl}
                            alt={`Screenshot of ${project.title}`}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="bg-isabelline-500 rounded-lg h-64 flex items-center justify-center">
                        <div className="text-center text-timberwolf-300">
                          <div className="text-4xl mb-2">📱</div>
                          <p>Project Screenshot</p>
                          <p className="text-sm">{project.title}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-timberwolf-200 mb-4">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code size={18} className="text-linen-400" />
                        <h4 className="text-lg font-semibold text-timberwolf-100">
                          Technologies
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <TooltipProvider key={index}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Used in {project.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div>

                    {/* Case Study */}
                    {project.caseStudy && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target size={18} className="text-linen-400" />
                          <h4 className="text-lg font-semibold text-timberwolf-100">
                            Case Study
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-timberwolf-100 flex items-center gap-1">
                              <span className="text-red-400">•</span>
                              Problem
                            </h5>
                            <p className="text-timberwolf-200 text-sm ml-4">{project.caseStudy.problem}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-timberwolf-100 flex items-center gap-1">
                              <span className="text-green-400">•</span>
                              Solution
                            </h5>
                            <p className="text-timberwolf-200 text-sm ml-4">{project.caseStudy.solution}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <Separator className="my-4" />

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
                            >
                              <Github size={16} className="mr-2" />
                              View Code
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View source code on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {project.liveUrl && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                Live Demo
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Visit live application</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
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