import { Section } from '~/components/ui/Section';
import { EXPERIENCE } from '~/lib/constants';

export function Experience() {
  return (
    <Section id="experience" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My professional journey from artistic design to technical engineering
        </p>
      </div>

      <div className="space-y-8">
        {EXPERIENCE.map((experience) => (
          <div key={experience.id} className="bg-gray-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-black">
                  {experience.position}
                </h3>
                <p className="text-xl text-gray-600">
                  {experience.company}
                </p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-600">{experience.location}</p>
                <p className="text-gray-600">{experience.duration}</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              {experience.description}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 