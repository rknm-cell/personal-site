"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '~/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-isabelline-500 border-t border-timberwolf-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-[10%] w-64 h-64 bg-linen-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-[15%] w-48 h-48 bg-champagne-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-timberwolf-100">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-timberwolf-200 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-timberwolf-100">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#projects"
                className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors text-sm"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-timberwolf-100">Connect</h4>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-isabelline-600 hover:bg-linen-400/50 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="GitHub"
              >
                <Github size={20} className="text-timberwolf-100" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-isabelline-600 hover:bg-linen-400/50 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-timberwolf-100" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-3 rounded-lg bg-isabelline-600 hover:bg-linen-400/50 transition-all hover:-translate-y-1 shadow-sm"
                aria-label="Email"
              >
                <Mail size={20} className="text-timberwolf-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-timberwolf-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-timberwolf-200">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-xs text-timberwolf-200">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 