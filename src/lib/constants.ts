import type { Project, Skill, Experience } from '~/types';

export const SITE_CONFIG = {
  name: 'Peter Yelton',
  title: 'Design Engineer',
  description: 'Design Engineer specializing in AI integration, full-stack development with an eye for design',
  email: 'peteryelton@gmail.com',
  linkedin: 'https://linkedin.com/in/peteryelton',
  github: 'https://github.com/rknm-cell',
} as const;

export const PROJECTS: Project[] = [
  {
    id: 'mise-cooking',
    title: 'Mise',
    description: 'Seamless AI-powered cooking experience with intelligent recipe generation',
    longDescription: 'A comprehensive web application that leverages AI to provide personalized cooking experiences, featuring intelligent recipe generation, nutritional analysis, and interactive cooking guidance.',
    technologies: ['Next.js', 'TypeScript', 'AI Integration', 'T3 Stack', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rknm-cell/mise-cooking',
    liveUrl: 'https://nutrichef-ai.vercel.app',
    imageUrl: 'https://api.microlink.io?url=https://nutrichef-ai.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
     featured: true,
    category: 'ai',
    caseStudy: {
      problem: 'Users struggle to find recipes that match their dietary preferences and available ingredients',
      solution: 'AI-powered recipe generation that considers user preferences, available ingredients, and nutritional requirements',
      challenges: ['AI model integration', 'Real-time nutritional analysis', 'User preference learning'],
      outcomes: ['Improved user engagement', 'Reduced food waste', 'Better dietary adherence']
    }
  },
  {
    id: 'mise-cooking-app',
    title: 'Expo Mobile App',
    description: 'Cross-platform mobile version of the AI recipe application',
    longDescription: 'A React Native/Expo mobile application that brings the AI recipe experience to mobile devices with offline capabilities and enhanced mobile-specific features.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'AI Integration', 'Offline Support'],
    githubUrl: 'https://github.com/rknm-cell/mise-cooking-app',
    imageUrl: '/images/screenshots/mise_screenshot.png',
    featured: true,
    category: 'mobile'
  }
];

export const SKILLS: Skill[] = [
  // Technical Skills
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'AI Integration', category: 'ai' },
  { name: 'Full-stack Development', category: 'backend' },
  
  // Design Skills
  { name: 'UI/UX Design', category: 'design' },
  { name: '3D Modeling', category: '3d' },
  { name: '3D Printing (MSLA)', category: '3d' },
  { name: '3D Printing (FDM)', category: '3d' },
  { name: 'Blender', category: '3d' },
  { name: 'Prusa Slicer', category: '3d' },
  { name: 'Chitubox', category: '3d' },
  { name: 'Experiential Marketing Design', category: 'design' },
  { name: 'Sculptural Design', category: 'design' }
];

export const EXPERIENCE: Experience[] = [
    {id: 'fractal',
        company: 'Fractal Tech AI Accelarator',
        position: 'AI Engineer',
        location: 'Brooklyn, NY',
        duration: 'May 2025 - Present',
        description: 'Developed Full-Stack AI-powered applications',
        achievements: [
        ],
        technologies: ['Vercel AI SDK', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma']
    },
  {
    id: 'sfds',
    company: 'SFDS',
    position: 'Casting & Mold Artist | 3D Printing Engineer',
    location: 'Brooklyn, NY',
    duration: 'May 2021 - February 2025',
    description: 'Started as an artist and progressed to technical roles, specializing in 3D printing and high-profile client projects.',
    achievements: [
      'Led design and production for major brands including Dior, Hermes, and Ogilvy',
      'Developed sculptural pieces for Madame Tussaud\'s and Mariah Carey projects',
      'Specialized in MSLA and FDM 3D printing technologies'
    ],
    technologies: ['3D Printing', 'Blender', 'Design Software', 'Project Management']
  }
];

export const NAVIGATION = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
] as const; 