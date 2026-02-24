import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SectionDivider } from "./SectionDivider";

export function OverviewSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <SectionDivider />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.3em] text-accent">
                OUR ORIGIN
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-primary lg:text-5xl">
                Born in the
                <br />
                Snowy Mountains
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Deep beneath the alpine peaks of Australia&apos;s Snowy
                Mountains, ancient granite formations filter pristine snowmelt
                through layers of mineral-rich rock. This centuries-old natural
                process creates water of extraordinary purity — naturally
                alkaline, rich in magnesium and potassium, untouched by modern
                industry.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <Link
                href="/our-story"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-primary transition-colors hover:text-accent"
              >
                Discover Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={200} direction="left">
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
              <Image
                src="/images/mountain_range_5.jpg"
                alt="Snow-covered mountain range at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
