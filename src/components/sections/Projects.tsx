"use client";

import { ExternalLink, Github } from 'lucide-react';
import { Section } from '~/components/ui/Section';
import { Button } from '~/components/ui/Button';
import { Card } from '~/components/ui/Card';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { PROJECTS } from '~/lib/constants';

export function Projects() {
  return (
    <Section id="projects" className="bg-gray-50">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my work in AI integration, full-stack development, and mobile applications
          </p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="space-y-4">
                  {project.imageUrl ? (
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <div className="bg-gray-200 px-4 py-2 text-sm text-gray-600 border-b">
                        Live Preview - {project.title}
                      </div>
                      <div className="relative h-96">
                        <img
                          src={project.imageUrl}
                          alt={`Screenshot of ${project.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
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
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  {project.caseStudy && (
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-3">
                        Case Study
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-black">Problem</h5>
                          <p className="text-gray-600 text-sm">{project.caseStudy.problem}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-black">Solution</h5>
                          <p className="text-gray-600 text-sm">{project.caseStudy.solution}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
} 