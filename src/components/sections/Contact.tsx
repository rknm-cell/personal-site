"use client";

import { Github, Linkedin, User, MessageSquare } from 'lucide-react';
import { Section } from '~/components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { Separator } from '~/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { SITE_CONFIG } from '~/lib/constants';
import dynamic from 'next/dynamic';
const CopyEmail = dynamic(() => import('../../../framer/copy-email'), { ssr: false });
const ButtonBlackBg = dynamic(() => import('../../../framer/button-black-bg'), { ssr: false });

export function Contact() {
  return (
    <Section id="contact" className="bg-isabelline-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-[8%] w-80 h-80 bg-champagne-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-[5%] w-96 h-96 bg-linen-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-[15%] w-1 h-40 bg-linen-400/20 rotate-12 pointer-events-none"></div>

      <AnimatedSection>
        {/* Header - Diagonal layout */}
        <div className="mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="relative inline-block mb-4">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-timberwolf-100 relative z-10 leading-none">
                  Get In Touch
                </h2>
                {/* Accent box behind title */}
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-linen-400/20 -z-10 rounded-lg"></div>
              </div>
              <p className="text-lg md:text-xl text-timberwolf-200 max-w-2xl leading-relaxed mt-6">
                I&apos;m always interested in new opportunities and collaborations.
                Let&apos;s discuss how we can work together.
              </p>
            </div>
            {/* Decorative element */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative h-32">
                <div className="absolute right-0 bottom-0 w-32 h-32 border-4 border-champagne-pink-400/30 rounded-full"></div>
                <div className="absolute right-8 bottom-8 w-16 h-16 bg-linen-400/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main contact area - Split layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side - Contact card */}
          <div className="lg:col-span-7">
            <Card className="border-0 shadow-warm bg-white/50 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-champagne-pink-400/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-linen-400/30 rounded-lg rotate-12"></div>

              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                    <AvatarImage src="/avatar.jpg" alt={SITE_CONFIG.name} />
                    <AvatarFallback className="text-lg font-bold bg-timberwolf-100 text-isabelline-500">
                      {SITE_CONFIG.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-timberwolf-100">
                      Let&apos;s Connect
                    </CardTitle>
                    <p className="text-timberwolf-200">Ready to discuss your project?</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="space-y-6">
                  {/* Contact methods */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-linen-400/20 rounded-lg">
                        <User size={18} className="text-linen-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-timberwolf-100">
                        Contact Information
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <CopyEmail email={SITE_CONFIG.email} clipboard={SITE_CONFIG.email} />

                      <a
                        href={SITE_CONFIG.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-timberwolf-200 hover:text-timberwolf-100 transition-all p-3 rounded-lg hover:bg-white/60 hover:-translate-x-1 group"
                      >
                        <div className="p-2 bg-isabelline-600 group-hover:bg-timberwolf-100/20 rounded-lg transition-colors">
                          <Github size={20} />
                        </div>
                        <span className="font-medium">GitHub Profile</span>
                      </a>

                      <a
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-timberwolf-200 hover:text-timberwolf-100 transition-all p-3 rounded-lg hover:bg-white/60 hover:-translate-x-1 group"
                      >
                        <div className="p-2 bg-isabelline-600 group-hover:bg-timberwolf-100/20 rounded-lg transition-colors">
                          <Linkedin size={20} />
                        </div>
                        <span className="font-medium">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>


                  {/* CTA */}
                  <div className="bg-gradient-to-br from-linen-400/10 to-champagne-pink-400/10 rounded-xl p-6 border border-linen-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare size={20} className="text-linen-400 mt-1" />
                      <p className="text-timberwolf-200 leading-relaxed">
                        Let&apos;s discuss your project or explore collaboration opportunities
                      </p>
                    </div>
                    <ButtonBlackBg
                      title="Send Message"
                      link={`mailto:${SITE_CONFIG.email}?subject=Portfolio Inquiry`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


            {/* Info highlight card */}
              </div>
              </div>
              
      </AnimatedSection>
    </Section>
  );
} 