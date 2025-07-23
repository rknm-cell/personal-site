import { Button } from '~/components/ui/Button';
import { Section } from '~/components/ui/Section';
import { SITE_CONFIG } from '~/lib/constants';

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
          {SITE_CONFIG.name}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mb-8">
          {SITE_CONFIG.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Blending artistic vision with technical expertise in full-stack development, 
          AI integration, and 3D design to create innovative digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" href="#projects">
            View Projects
          </Button>
          <Button size="lg" variant="outline" href="#contact">
            Get In Touch
          </Button>
        </div>
      </div>
    </Section>
  );
} 