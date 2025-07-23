import { Layout } from '~/components/layout/Layout';
import { Hero } from '~/components/sections/Hero';
import { About } from '~/components/sections/About';
import { Skills } from '~/components/sections/Skills';
import { Experience } from '~/components/sections/Experience';
import { Projects } from '~/components/sections/Projects';
import { Blog } from '~/components/sections/Blog';
import { Contact } from '~/components/sections/Contact';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  );
}
