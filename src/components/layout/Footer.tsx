import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '~/lib/constants';

export function Footer() {
  return (
    <footer className="bg-isabelline-600 border-t border-timberwolf-300">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-timberwolf-100 mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-timberwolf-200">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-timberwolf-100 mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center text-timberwolf-200 hover:text-timberwolf-100 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-timberwolf-100 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-timberwolf-200 hover:text-timberwolf-100 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-timberwolf-300 mt-8 pt-8 text-center text-timberwolf-200">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 