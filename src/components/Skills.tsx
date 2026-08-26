import type { ReactNode } from 'react';
import { t, type Locale } from '@/lib/i18n';
import {
  Code2,
  Globe,
  Brain,
} from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
  renderIcon: () => ReactNode;
}

export const Skills = ({ locale }: { locale: Locale }) => {
  const services: ServiceCard[] = [
    {
      title: t(locale, 'skills.ai.title'),
      description: t(locale, 'skills.ai.description'),
      renderIcon: () => <Brain className="w-8 h-8" />,
    },
    {
      title: t(locale, 'skills.frontend.title'),
      description: t(locale, 'skills.frontend.description'),
      renderIcon: () => <Globe className="w-8 h-8" />,
    },
    {
      title: t(locale, 'skills.languages.title'),
      description: t(locale, 'skills.languages.description'),
      renderIcon: () => <Code2 className="w-8 h-8" />,
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {t(locale, 'skills.title')}
        </h2>

        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-12">
          {t(locale, 'skills.intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">
                  {service.renderIcon()}
                </div>
                <h3 className="text-xl font-semibold text-text">
                  {service.title}
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
