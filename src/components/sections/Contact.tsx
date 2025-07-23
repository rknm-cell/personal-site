import { Mail, Github, Linkedin } from 'lucide-react';
import { Section } from '~/components/ui/Section';
import { Button } from '~/components/ui/Button';
import { SITE_CONFIG } from '~/lib/constants';

export function Contact() {
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. 
          Let's discuss how we can work together.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <Mail size={20} className="mr-3" />
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <Github size={20} className="mr-3" />
                  GitHub Profile
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin size={20} className="mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Available for new projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Open to freelance opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Interested in full-time roles</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Let's discuss your project or explore collaboration opportunities
            </p>
            <Button
              href={`mailto:${SITE_CONFIG.email}?subject=Portfolio Inquiry`}
              size="lg"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
} 