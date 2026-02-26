import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SectionDivider } from "./SectionDivider";

const sports = [
  { name: "Tennis", tagline: "Grand Slam hydration" },
  { name: "Golf", tagline: "Championship refreshment" },
  { name: "Sailing", tagline: "Regatta refined" },
  { name: "Skiing", tagline: "Alpine pure" },
];

export function LifestylePreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <SectionDivider />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/tennis_banner_1.webp"
                alt="Tennis court at sunset with palm trees"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.3em] text-accent">
                SPORT &amp; LIFESTYLE
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-primary lg:text-5xl">
                The Pursuit of
                <br />
                Excellence
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                In sports where precision, endurance, and environment matter,
                hydration plays a quiet but essential role. From courtside at the
                Australian Open to the members&apos; enclosure at Flemington —
                wherever excellence is the standard, Estuary belongs.
              </p>
            </FadeIn>

            {/* Sports Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {sports.map((sport, i) => (
                <FadeIn key={sport.name} delay={300 + i * 100}>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-primary">
                      {sport.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-muted">
                      {sport.tagline}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={700}>
              <Link
                href="/lifestyle"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-primary transition-colors hover:text-accent"
              >
                Explore Our World
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
