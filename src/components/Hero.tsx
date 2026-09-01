import Image from 'next/image';
import { CAL_URL, copy } from '@/content/copy';

export const Hero = () => {
  const { hero } = copy;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
              {hero.subtitle}
            </p>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {hero.description}
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              {hero.cta}
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/me.jpeg"
              alt={hero.imageAlt}
              width={1024}
              height={1024}
              priority
              className="w-full max-w-lg aspect-square object-cover rounded-lg object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
