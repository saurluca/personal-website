import { useLanguage } from '../hooks/useLanguage';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {t('contact.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${t('contact.email')}`}
            className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {t('contact.cta')}
          </a>
          <a
            href="https://www.cal.com/lucasaur"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            {t('contact.bookMeeting')}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/saurluca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">{t('contact.github')}</span>
          </a>
          <a
            href="https://linkedin.com/in/luca-saur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">{t('contact.linkedin')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
