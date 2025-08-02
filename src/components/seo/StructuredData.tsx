import { SITE_CONFIG, PROJECTS, EXPERIENCE } from '~/lib/constants';

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE_CONFIG.name,
    "jobTitle": SITE_CONFIG.title,
    "description": SITE_CONFIG.description,
    "url": "https://your-domain.com", // Replace with your domain
    "sameAs": [
      SITE_CONFIG.github,
      SITE_CONFIG.linkedin
    ],
    "email": SITE_CONFIG.email,
    "knowsAbout": [
      "AI Integration",
      "Full-stack Development", 
      "3D Design",
      "3D Printing",
      "React",
      "Next.js",
      "TypeScript"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Fractal Tech AI Accelerator",
      "jobTitle": "AI Engineer"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${SITE_CONFIG.name} Portfolio`,
    "url": "https://your-domain.com", // Replace with your domain
    "description": SITE_CONFIG.description,
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.name
    }
  };

  const projectsSchema = PROJECTS.map(project => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": project.liveUrl || project.githubUrl,
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.name
    },
    "keywords": project.technologies.join(", "),
    "dateCreated": "2024", // Add actual dates
    "genre": project.category
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      {projectsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
} 