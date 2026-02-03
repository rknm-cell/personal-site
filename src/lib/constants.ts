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
    id: 'peters-world',
    title: 'Peter\'s World',
    description: 'Living Ecosystem Simulation - Performance-optimized 3D web application demonstrating advanced React Three Fiber usage',
    longDescription: 'A complex 3D ecosystem simulation featuring autonomous animal behaviors using state machines, terrain deformation, and selective physics simulation supporting 50+ concurrent entities at 60fps. Built with performance engineering including Zustand state management preventing cascading re-renders, Rapier.js physics optimization, and mobile-responsive 3D rendering. Features real-time terraforming tools, dynamic ecosystem evolution, and physics-based environmental interactions.',
    technologies: ['React Three Fiber', 'Three.js', 'Zustand', 'Rapier.js', 'TypeScript', 'Performance Optimization', '3D Graphics'],
    githubUrl: 'https://github.com/rknm-cell/peters-world',
    liveUrl: 'https://www.peters-world.com/',
    imageUrl: 'https://api.microlink.io?url=https://www.peters-world.com/&screenshot=true&meta=false&embed=screenshot.url',
    featured: true,
    category: '3d',
    caseStudy: {
      problem: 'Need for a high-performance 3D ecosystem simulation that could run smoothly in browsers with complex physics and multiple entities',
      solution: 'Built a performance-optimized 3D web application using React Three Fiber with advanced state management and selective physics simulation',
      challenges: ['Performance optimization for 50+ concurrent entities', 'Complex physics simulation at 60fps', 'Mobile-responsive 3D rendering', 'State management for complex systems'],
      outcomes: ['Achieved 60fps performance with 50+ entities', 'Seamless browser experience without Unity', 'Superior UI integration with React ecosystem', 'Mobile-responsive 3D application']
    }
  },
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
  },
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
  {
    id: 'fractal',
    company: 'Fractal Tech AI Accelerator',
    position: 'Software Engineering Fellow',
    location: 'Remote',
    duration: 'June 2025 - August 2025',
    description: 'Intensive 60-hour/week accelerator program focused on rapid AI application development',
    achievements: [
      'Delivered 3-5 pull requests daily across multiple full-stack TypeScript projects, building production-ready features with Next.js and React while maintaining code quality',
      'Leveraged AI SDK and modern development tools to accelerate feature implementation, establishing systematic approaches to fast iteration without accumulating technical debt',
      'Shipped multiple complete applications to production within 12-week timeframe, demonstrating ability to move from concept to deployed product rapidly'
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'AI SDK', 'Full-stack Development']
  },
  {
    id: 'holdfast',
    company: 'HOLDFAST-CIFARM',
    position: 'Software Engineer Intern',
    location: 'Remote',
    duration: 'July 2025',
    description: 'Built grant application system for NOAA partnership serving aquaculture research community',
    achievements: [
      'Designed and implemented auto-saving proposal system preventing data loss during multi-session grant applications, enabling researchers to iterate on complex NOAA submissions over weeks',
      'Established component library and design patterns using Tailwind CSS, creating consistent UI framework adopted across application for improved user experience',
      'Built responsive proposal management interface with Next.js and TypeScript, implementing real-time draft persistence and form state management for complex multi-step workflows',
      'Integrated Vitest testing framework ensuring reliable proposal data handling and user interaction flows'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest', 'pnpm']
  },
  {
    id: 'sfds-lead',
    company: 'Scenic Fabrication Design Shop',
    position: '3D Printing Dept Lead',
    location: 'Brooklyn, NY',
    duration: 'January 2024 - May 2025',
    description: 'Developed production pipeline and established department to address need for high detailed pieces for client demands',
    achievements: [
      'Developed and maintained a database of 3D prints with information relating to printers, materials used, time elapsed, quality, and issues to log successes and bottlenecks',
      'Established department pipeline transitioning from outsourced to in-house 3D printing production',
      'Designed and modified existing 3D models to create high quality prints with regards to art direction',
      'Interfaced with Design, Project Management, and Scenic Department to create high quality prints implemented into production'
    ],
    technologies: ['3D Printing (MSLA)', '3D Printing (FDM)', 'Blender', 'Project Management', 'Database Management']
  },
  {
    id: 'sfds-artist',
    company: 'Scenic Fabrication Design Shop',
    position: 'Scenic Artist',
    location: 'Brooklyn, NY',
    duration: 'May 2021 - January 2024',
    description: 'Executed designs for sculptural and scenic elements for high-profile brands including Macy\'s, HBO, Tiffany\'s, Hermès, Toys R Us',
    achievements: [
      'Interfaced with Project Managers and Designers to execute designs for sculptural and scenic elements',
      'Coordinated with a team of artists to ensure speedy and accurate delivery of design elements',
      'Ordered and maintained inventory of tools and materials used in the creation of scenic and sculptural elements',
      'Researched and developed new tools and materials for use in new techniques to create a more efficient and accurate product'
    ],
    technologies: ['Sculptural Design', 'Project Coordination', 'Material Research', 'Art Direction']
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