import { copy } from '@/content/copy';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { projects } = copy;

  const items = [
    {
      title: projects.prevery.title,
      description: projects.prevery.description,
      tech: projects.prevery.tech,
      liveUrl: 'https://www.prevery.de/',
      image: '/prevery.jpg',
    },
    {
      title: projects.backhaus.title,
      description: projects.backhaus.description,
      tech: projects.backhaus.tech,
      liveUrl: 'https://backhaus.vercel.app/',
      image: '/backhaus.jpg',
    },
    {
      title: projects.databites.title,
      description: projects.databites.description,
      tech: projects.databites.tech,
      liveUrl: 'https://databites.de/',
      image: '/databites.jpg',
    },
    // {
    //   title: projects.certusai.title,
    //   description: projects.certusai.description,
    //   tech: projects.certusai.tech,
    //   githubUrl: 'https://github.com/saurluca/CertusAI',
    //   image: '/certus-ai.png',
    // },
    // {
    //   title: projects.its.title,
    //   description: projects.its.description,
    //   tech: projects.its.tech,
    //   githubUrl: 'https://github.com/saurluca/its',
    //   image: '/image2.png',
    // },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {projects.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-12">
          {projects.intro}
        </p>

        <div className="space-y-14">
          {items.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
