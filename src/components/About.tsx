import { useLanguage } from '../hooks/useLanguage';
import { ExperienceCard } from './ExperienceCard';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {t('about.title')}
        </h2>

        {/* Intro */}
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
          {t('about.intro')}
        </p>

        {/* Experience Cards */}
        <div className="space-y-6">
          <ExperienceCard
            organization={t('about.databites.title')}
            role={t('about.databites.role')}
            date={t('about.databites.date')}
            description={t('about.databites.description')}
          />

          <ExperienceCard
            organization={t('about.uni.title')}
            role={t('about.uni.role')}
            date={t('about.uni.date')}
            description={t('about.uni.description')}
          />

          <ExperienceCard
            organization={t('about.eth.title')}
            role={t('about.eth.role')}
            date={t('about.eth.date')}
            description={t('about.eth.description')}
          />
        </div>
      </div>
    </section>
  );
};
