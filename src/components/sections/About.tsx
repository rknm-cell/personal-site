import { Section } from '~/components/ui/Section';

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              I'm a Design Engineer with a unique background that bridges the gap between 
              artistic creativity and technical innovation. With 4 years of experience at SFDS 
              in Brooklyn, NY, I've evolved from an artist to a technical specialist, 
              specializing in 3D printing and high-profile client projects.
            </p>
            <p>
              My work spans from experiential marketing design for major brands like Dior, 
              Hermes, and Ogilvy, to sculptural pieces for Madame Tussaud's and Mariah Carey. 
              I've also contributed to innovative projects for Pfizer and Rivian, creating 
              custom 3D printing solutions and automotive design components.
            </p>
            <p>
              Today, I focus on full-stack development and AI integration, bringing my 
              design sensibilities to create seamless digital experiences that combine 
              aesthetic appeal with technical excellence.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-black mb-4">Key Highlights</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              4 years at SFDS (Brooklyn, NY) - Artist to Technical Specialist
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              High-profile client work: Dior, Hermes, Ogilvy, Madame Tussaud's
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Specialized in MSLA and FDM 3D printing technologies
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Freelance projects for Pfizer and Rivian
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Full-stack development with AI integration focus
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
} 