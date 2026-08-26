import { t, type Locale } from '@/lib/i18n';
import { ProjectCard } from './ProjectCard';

export const Projects = ({ locale }: { locale: Locale }) => {
  const projects = [
    {
      title: t(locale, 'projects.databites.title'),
      description: t(locale, 'projects.databites.description'),
      tech: t(locale, 'projects.databites.tech'),
      liveUrl: "https://databites.de/",
      image: '/databites.png',
    },
    {
      title: t(locale, 'projects.certusai.title'),
      description: t(locale, 'projects.certusai.description'),
      tech: t(locale, 'projects.certusai.tech'),
      githubUrl: 'https://github.com/saurluca/CertusAI',
      image: '/certus-ai.png',
    },
    {
      title: t(locale, 'projects.its.title'),
      description: t(locale, 'projects.its.description'),
      tech: t(locale, 'projects.its.tech'),
      githubUrl: 'https://github.com/saurluca/its',
      image: '/image2.png',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center">
          {t(locale, 'projects.title')}
        </h2>

        <div className="space-y-14">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
