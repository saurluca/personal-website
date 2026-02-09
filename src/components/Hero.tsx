import { useLanguage } from '../hooks/useLanguage';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>
            <button
              onClick={scrollToContact}
              aria-label={t('hero.cta')}
              className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              {t('hero.cta')}
            </button>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/me.jpeg"
              alt="Luca Saur - AI Solutions & Web Development Expert"
              loading="eager"
              width="500"
              height="625"
              className="w-full max-w-lg h-[500px] object-cover rounded-lg"
              style={{ aspectRatio: '4/5', width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center 35%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
