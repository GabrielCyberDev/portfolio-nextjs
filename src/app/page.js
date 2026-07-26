import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import ProjectsPreview from '@/components/ProjectsPreview/ProjectsPreview';
import Skills from '@/components/Skills/Skills';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <Skills />
      <ContactForm />
    </>
  );
}
