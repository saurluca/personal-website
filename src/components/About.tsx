import { useLanguage } from '../hooks/useLanguage';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center">
          {t('about.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo Placeholder */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <PhotoPlaceholder className="w-full max-w-sm aspect-[4/3]" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('about.paragraph3')}
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {t('about.paragraph4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
