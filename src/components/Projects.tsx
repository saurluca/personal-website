import { useLanguage } from '../hooks/useLanguage';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.databites.title'),
      description: t('projects.databites.description'),
      tech: t('projects.databites.tech'),
      liveUrl: "https://databites.de/",
      image: '/databites.png',
    },
    {
      title: t('projects.certusai.title'),
      description: t('projects.certusai.description'),
      tech: t('projects.certusai.tech'),
      githubUrl: 'https://github.com/saurluca/CertusAI',
      image: '/certus-ai.png',
    },
    {
      title: t('projects.its.title'),
      description: t('projects.its.description'),
      tech: t('projects.its.tech'),
      githubUrl: 'https://github.com/saurluca/its',
      image: '/image2.png',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center">
          {t('projects.title')}
        </h2>

        <div className="space-y-14">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
