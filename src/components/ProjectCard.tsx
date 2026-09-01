import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const ProjectCard = ({ title, description, tech, githubUrl, liveUrl, image }: ProjectCardProps) => {
  const media = image ? (
    <Image
      src={image}
      alt={liveUrl ? `${title} – zur Website` : `${title} - ${description.substring(0, 60)}...`}
      fill
      sizes="(max-width: 1024px) 100vw, 1024px"
      className={`object-cover${liveUrl ? ' hover:opacity-90 transition-opacity' : ''}`}
    />
  ) : (
    <PhotoPlaceholder className="w-full h-full rounded-none" />
  );

  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[16/9] bg-gray-100 overflow-hidden block"
        >
          {media}
        </a>
      ) : (
        <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
          {media}
        </div>
      )}

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-text">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {tech.split(', ').map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-text-secondary rounded-md"
              >
                {item.trim()}
              </span>
            ))}
          </div>

          {(githubUrl || liveUrl) && (
            <div className="flex items-center gap-4">
              {githubUrl && githubUrl !== 'undefined' && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
