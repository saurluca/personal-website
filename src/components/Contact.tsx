import { Calendar, Github, Linkedin } from 'lucide-react';
import { CAL_URL, EMAIL, copy } from '@/content/copy';

export const Contact = () => {
  const { contact } = copy;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-text">
          {contact.title}
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {contact.description}
        </p>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
        >
          <Calendar className="w-5 h-5" />
          {contact.cta}
        </a>

        <p className="text-text-secondary">
          {contact.emailLabel}:{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="text-primary hover:underline font-medium"
          >
            {EMAIL}
          </a>
        </p>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://github.com/saurluca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">{contact.github}</span>
          </a>
          <a
            href="https://linkedin.com/in/luca-saur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">{contact.linkedin}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
