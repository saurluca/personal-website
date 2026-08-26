import { copy } from '@/content/copy';

export const Offer = () => {
  const { offer } = copy;

  return (
    <section
      id="offer"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6 text-center">
          {offer.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-12">
          {offer.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offer.items.map((item) => (
            <div
              key={item.title}
              className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-text mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
