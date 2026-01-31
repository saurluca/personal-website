import { useLanguage } from '../hooks/useLanguage';
import { 
  Code2, 
  Globe, 
  Database, 
  Brain, 
  Settings
} from 'lucide-react';

interface SkillCategory {
  items: string[];
  renderIcon: () => React.ReactNode;
}

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      items: ['Python', 'TypeScript', 'SQL'],
      renderIcon: () => <Code2 className="w-6 h-6" />,
    },
    frontend: {
      items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Tailwind CSS'],
      renderIcon: () => <Globe className="w-6 h-6" />,
    },
    backend: {
      items: ['FastAPI', 'Django', 'PostgreSQL'],
      renderIcon: () => <Database className="w-6 h-6" />,
    },
    ai: {
      items: ['DSPy', 'OpenRouter', 'LLMs', 'Machine Learning'],
      renderIcon: () => <Brain className="w-6 h-6" />,
    },
    devops: {
      items: ['Docker', 'GitHub Actions', 'Linux'],
      renderIcon: () => <Settings className="w-6 h-6" />,
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  {category.renderIcon()}
                </div>
                <h3 className="text-lg font-semibold text-text">
                  {t(`skills.${key}`)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-text-secondary rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
