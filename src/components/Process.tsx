import { ArrowDown, ArrowRight } from 'lucide-react';
import { copy } from '@/content/copy';

export const Process = () => {
  const { process } = copy;

  return (
    <section
      id="process"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {process.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-12">
          {process.intro}
        </p>

        <ol className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {process.steps.map((step, index) => (
            <li
              key={step.number}
              className="relative bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <p className="text-sm font-medium text-primary mb-2">
                {step.number} · {step.duration}
              </p>
              <h3 className="text-lg font-semibold text-text mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
              {index < process.steps.length - 1 && (
                <>
                  <ArrowRight
                    aria-hidden
                    className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 w-5 h-6 text-primary"
                  />
                  <ArrowDown
                    aria-hidden
                    className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-5 h-6 text-primary"
                  />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
