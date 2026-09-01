import { About } from '@/components/About';
import { Audience } from '@/components/Audience';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { Offer } from '@/components/Offer';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('home');

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Audience />
      <Offer />
      <Process />
      <Projects />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
