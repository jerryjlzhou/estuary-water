import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SectionDivider } from "./SectionDivider";

const segments = [
  {
    title: "Independent Cafes",
    description:
      "A point of distinction for specialty coffee houses and brunch destinations.",
  },
  {
    title: "Luxury Hotels",
    description:
      "The preferred mineral water for five-star properties across Australia.",
  },
  {
    title: "Fine Dining",
    description:
      "Curated for sommeliers and restaurateurs who refuse to compromise.",
  },
];

export function HospitalityPreview() {
  return (
    <section className="bg-primary py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <FadeIn>
          <SectionDivider light />
        </FadeIn>
        <div className="mt-12 text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.3em] text-accent">
              HOSPITALITY
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight lg:text-5xl">
              Where Every Detail Matters
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              From the intimate corner cafe to the grand hotel dining room,
              Estuary elevates the table. Our glass bottles are designed to
              complement the finest settings — a quiet statement of quality that
              discerning hosts and guests recognise.
            </p>
          </FadeIn>
        </div>

        {/* Image Gallery */}
        <FadeIn delay={300}>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-5">
            <div className="relative aspect-[4/3] overflow-hidden sm:col-span-3">
              <Image
                src="/images/yacht_1.jpg"
                alt="Luxury yacht dining setting"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 60vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2">
              <Image
                src="/images/beach_table_2.jpg"
                alt="Elegant beachside restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
          </div>
        </FadeIn>

        {/* Segments */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {segments.map((segment, i) => (
            <FadeIn key={segment.title} delay={i * 150}>
              <div className="text-center">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  {segment.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {segment.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="mt-14 text-center">
            <Link
              href="/hospitality"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-white/80 transition-colors hover:text-accent"
            >
              Learn More
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
