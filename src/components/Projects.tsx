import { useLanguage } from '../hooks/useLanguage';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.its.title'),
      description: t('projects.its.description'),
      tech: t('projects.its.tech'),
      githubUrl: 'https://github.com/saurluca/its',
      liveUrl: 'https://tutor.ethz.ch',
      image: '/2.png',
    },
    {
      title: t('projects.coxi.title'),
      description: t('projects.coxi.description'),
      tech: t('projects.coxi.tech'),
      githubUrl: 'https://github.com/saurluca/coxi-credits',
      liveUrl: 'https://coxi-credits.vercel.app/',
      image: undefined,
    },
    {
      title: t('projects.finludo.title'),
      description: t('projects.finludo.description'),
      tech: t('projects.finludo.tech'),
      githubUrl: 'https://github.com/saurluca/finludo',
      liveUrl: undefined,
      image: undefined,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
