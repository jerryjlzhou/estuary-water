import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

const attributes = [
  {
    title: "Naturally Alkaline",
    description: "pH 7.8–8.2 from natural mineral filtration.",
  },
  {
    title: "Rich in Minerals",
    description: "Magnesium, potassium, and calcium from ancient granite.",
  },
  {
    title: "Glass Bottled",
    description: "Premium glass preserves purity and eliminates plastic.",
  },
];

export function ProductPreview() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.3em] text-accent">
              THE PRODUCT
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-medium text-primary lg:text-5xl">
              Purity in Every Pour
            </h2>
          </FadeIn>
        </div>

        {/* Product Showcase */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {/* Attributes */}
          <div className="order-2 space-y-10 lg:order-1">
            {attributes.map((attr, i) => (
              <FadeIn key={attr.title} delay={i * 150}>
                <div className="text-center lg:text-right">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                    {attr.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {attr.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottle */}
          <FadeIn className="order-1 lg:order-2">
            <div className="flex justify-center">
              <div className="relative h-[420px] w-[220px] sm:h-[500px] sm:w-[260px]">
                <Image
                  src="/logos/Bottle Mock Up.jpeg"
                  alt="Estuary Mineral Water glass bottle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="260px"
                />
              </div>
            </div>
          </FadeIn>

          {/* More Info */}
          <div className="order-3 space-y-10">
            <FadeIn>
              <div className="text-center lg:text-left">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  Australian Sourced
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Single-origin water from a protected Snowy Mountains aquifer.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="text-center lg:text-left">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  Naturally Filtered
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Centuries of slow percolation through mineral-rich rock.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="text-center lg:text-left">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  Zero Additives
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Nothing added, nothing removed. Water as nature intended.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="mt-16 text-center">
            <Link
              href="/product"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-primary transition-colors hover:text-accent"
            >
              Explore the Product
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
