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

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step) => (
            <li
              key={step.number}
              className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <p className="text-sm font-medium text-primary mb-2">
                {step.number} · {step.duration}
              </p>
              <h3 className="text-xl font-semibold text-text mb-4">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
