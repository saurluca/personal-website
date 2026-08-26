import { copy } from '@/content/copy';
import { ExperienceCard } from './ExperienceCard';

export const About = () => {
  const { about } = copy;

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {about.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-8">
          {about.intro}
        </p>

        <ul className="flex flex-wrap justify-center gap-2 mb-12">
          {about.chips.map((chip) => (
            <li
              key={chip}
              className="px-3 py-1 text-sm font-medium bg-gray-100 text-text-secondary rounded-md"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="space-y-6">
          <ExperienceCard
            organization={about.databites.title}
            role={about.databites.role}
            date={about.databites.date}
            description={about.databites.description}
          />
          <ExperienceCard
            organization={about.uni.title}
            role={about.uni.role}
            date={about.uni.date}
            description={about.uni.description}
          />
          <ExperienceCard
            organization={about.eth.title}
            role={about.eth.role}
            date={about.eth.date}
            description={about.eth.description}
          />
        </div>
      </div>
    </section>
  );
};
