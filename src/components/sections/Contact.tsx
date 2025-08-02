"use client";

import { Mail, Github, Linkedin, User, Calendar, MessageSquare } from 'lucide-react';
import { Section } from '~/components/ui/Section';
import { Button } from '~/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { SITE_CONFIG } from '~/lib/constants';

export function Contact() {
  return (
    <Section id="contact" className="bg-gray-50">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-gray-200">
                  <AvatarImage src="/avatar.jpg" alt={SITE_CONFIG.name} />
                  <AvatarFallback className="text-sm font-bold bg-gray-100 text-gray-700">
                    {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl font-bold text-black">
                    Let&apos;s Connect
                  </CardTitle>
                  <p className="text-gray-600">Ready to discuss your project?</p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <User size={18} className="text-blue-600" />
                    <h3 className="text-xl font-semibold text-black">
                      Contact Information
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`mailto:${SITE_CONFIG.email}`}
                            className="flex items-center text-gray-600 hover:text-black transition-colors p-2 rounded-md hover:bg-gray-50"
                          >
                            <Mail size={20} className="mr-3" />
                            {SITE_CONFIG.email}
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Send me an email</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={SITE_CONFIG.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-black transition-colors p-2 rounded-md hover:bg-gray-50"
                          >
                            <Github size={20} className="mr-3" />
                            GitHub Profile
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View my code projects</p>
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
                            className="flex items-center text-gray-600 hover:text-black transition-colors p-2 rounded-md hover:bg-gray-50"
                          >
                            <Linkedin size={20} className="mr-3" />
                            LinkedIn Profile
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Connect professionally</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={18} className="text-green-600" />
                    <h3 className="text-xl font-semibold text-black">
                      Availability
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Available for new projects</span>
                      <Badge variant="default" className="text-xs">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Open to freelance opportunities</span>
                      <Badge variant="secondary" className="text-xs">
                        Open
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Interested in full-time roles</span>
                      <Badge variant="outline" className="text-xs">
                        Interested
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MessageSquare size={18} className="text-blue-600" />
                  <p className="text-gray-600">
                    Let&apos;s discuss your project or explore collaboration opportunities
                  </p>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`mailto:${SITE_CONFIG.email}?subject=Portfolio Inquiry`}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8"
                      >
                        <Mail size={16} className="mr-2" />
                        Send Message
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Start a conversation</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </Section>
  );
} 