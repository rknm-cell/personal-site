"use client";

import { Github, Code } from 'lucide-react';
import { Section } from '~/components/ui/Section';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { PROJECTS } from '~/lib/constants';
import dynamic from 'next/dynamic';
const Work = dynamic(() => import('../../../framer/work'), { ssr: false });
const ButtonBlackBg = dynamic(() => import('../../../framer/button-black-bg'), { ssr: false });

export function Projects() {
  return (
    <Section id="projects" className="bg-isabelline-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-32 left-[5%] w-96 h-96 bg-linen-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-champagne-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <AnimatedSection>
        {/* Header */}
        <div className="mb-16 relative">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 max-w-3xl">
              <div className="relative inline-block mb-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-timberwolf-100 relative z-10">
                  Featured Projects
                </h2>
                <div className="absolute -bottom-2 left-0 w-32 h-1.5 bg-linen-400"></div>
              </div>
              <p className="text-lg md:text-xl text-timberwolf-200 leading-relaxed">
                Showcasing my work in AI integration, full-stack development, and mobile applications
              </p>
            </div>
            {/* Decorative number badge */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="text-8xl font-bold text-linen-400/20 select-none">
                  0{PROJECTS.length}
                </div>
                <div className="absolute top-4 right-0 w-16 h-16 border-2 border-champagne-pink-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Cards - Alternating layout with integrated images */}
        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`relative group`}
              >
                {/* Project number badge */}
                <div className="absolute -left-4 md:-left-6 top-8 w-12 h-12 md:w-16 md:h-16 bg-isabelline-500 rounded-full flex items-center justify-center border-4 border-isabelline-600 shadow-lg z-10">
                  <span className="text-base md:text-xl font-bold text-timberwolf-100">0{index + 1}</span>
                </div>

                {/* Main project card */}
                <div className={`grid lg:grid-cols-12 gap-8 items-center bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-warm border border-white/60 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  {/* Decorative corner accent */}
                  <div className={`absolute ${isEven ? '-top-4 -right-4' : '-top-4 -left-4'} w-20 h-20 bg-champagne-pink-400/30 rounded-full pointer-events-none`}></div>

                  {/* Image section */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-8'} relative`}>
                    <div className="aspect-video relative overflow-hidden rounded-lg lg:rounded-none">
                      <Work
                        title={project.title}
                        link={project.liveUrl ?? project.githubUrl}
                        image={{ src: project.imageUrl, alt: project.title }}
                        variant="Responsive"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'} p-6 md:p-8 space-y-6`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-timberwolf-100 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg text-timberwolf-200 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code size={18} className="text-linen-400" />
                        <h4 className="text-base font-semibold text-timberwolf-100">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <TooltipProvider key={techIndex}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-isabelline-600/80 text-timberwolf-600 text-xs font-mono font-medium border border-isabelline-300 hover:bg-isabelline-500 hover:-translate-y-0.5 transition-all cursor-default">
                                  {tech}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Used in {project.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium bg-isabelline-600 border border-timberwolf-300 rounded-lg px-4 py-2 hover:bg-isabelline-500 hover:-translate-y-0.5 transition-all shadow-sm"
                      >
                        <Github size={14} />
                        View Code
                      </a>
                      {project.liveUrl && (
                        <ButtonBlackBg title="Live Demo" link={project.liveUrl} newTab={true} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </Section>
  );
} 