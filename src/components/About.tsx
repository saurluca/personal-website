import { t, type Locale } from '@/lib/i18n';
import { ExperienceCard } from './ExperienceCard';

export const About = ({ locale }: { locale: Locale }) => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {t(locale, 'about.title')}
        </h2>

        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
          {t(locale, 'about.intro')}
        </p>

        <div className="space-y-6">
          <ExperienceCard
            organization={t(locale, 'about.databites.title')}
            role={t(locale, 'about.databites.role')}
            date={t(locale, 'about.databites.date')}
            description={t(locale, 'about.databites.description')}
          />

          <ExperienceCard
            organization={t(locale, 'about.uni.title')}
            role={t(locale, 'about.uni.role')}
            date={t(locale, 'about.uni.date')}
            description={t(locale, 'about.uni.description')}
          />

          <ExperienceCard
            organization={t(locale, 'about.eth.title')}
            role={t(locale, 'about.eth.role')}
            date={t(locale, 'about.eth.date')}
            description={t(locale, 'about.eth.description')}
          />
        </div>
      </div>
    </section>
  );
};
