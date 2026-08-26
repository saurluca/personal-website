import { copy } from '@/content/copy';

export const FAQ = () => {
  const { faq } = copy;

  return (
    <section
      id="faq"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center">
          {faq.title}
        </h2>

        <div className="space-y-4">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group border border-border rounded-lg px-6 py-4"
            >
              <summary className="cursor-pointer list-none font-semibold text-text flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="text-primary text-xl leading-none group-open:hidden"
                >
                  +
                </span>
                <span
                  aria-hidden
                  className="text-primary text-xl leading-none hidden group-open:inline"
                >
                  −
                </span>
              </summary>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
