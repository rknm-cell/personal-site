"use client";

import { Section } from '~/components/ui/Section';
import { SKILLS } from '~/lib/constants';
import type { Skill } from '~/types';

const categoryLabels = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  design: 'Design & Creative',
  '3d': '3D & Manufacturing',
  ai: 'AI & Machine Learning'
} as const;

export function Skills() {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    acc[skill.category] ??= [];
    acc[skill.category]!.push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Section id="skills" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A diverse skill set spanning technical development, design, and 3D manufacturing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-black mb-4">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="text-gray-700">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 