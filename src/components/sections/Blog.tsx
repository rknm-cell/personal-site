"use client";

import { Section } from '~/components/ui/Section';
import { Button } from '~/components/ui/Button';
import { AnimatedSection } from '~/components/ui/AnimatedSection';

export function Blog() {
  return (
    <Section id="blog" className="bg-white">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts on design, development, and the intersection of AI with creative work
          </p>
        </div>

        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m working on sharing insights about AI integration, design processes, 
              and technical challenges. Check back soon for articles and tutorials.
            </p>
            <Button variant="outline" disabled>
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
} 