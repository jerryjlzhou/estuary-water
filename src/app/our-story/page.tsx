import Image from "next/image";
import { type Metadata } from "next";
import { FadeIn } from "~/app/_components/FadeIn";
import { SectionDivider } from "~/app/_components/SectionDivider";

export const metadata: Metadata = {
  title: "Our Story | Estuary Mineral Water",
  description:
    "Discover the origin of Estuary Mineral Water — naturally sourced from a pristine aquifer in Australia's Snowy Mountains. Clean. Balanced. Australian.",
};

const values = [
  {
    title: "Purity",
    description:
      "Sourced from a pristine aquifer in the Snowy Mountains, our water is naturally filtered over time through some of Australia's oldest geological formations. Every bottle reflects the clarity and balance of its origin — untouched and uncompromised.",
  },
  {
    title: "Sustainability",
    description:
      "Bottled in glass by design, not by trend. Glass is inert, preserving the integrity of the water while eliminating the microplastics that leach from conventional plastic packaging. It is fully recyclable and aligned with a lower environmental footprint.",
  },
  {
    title: "Australian Heritage",
    description:
      "Australia is home to some of the world's oldest landscapes and most mineral-rich environments. Estuary carries the character of the Snowy Mountains — its clarity, its resilience, its quiet grandeur — in every bottle.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-[60vh] min-h-[400px] items-end overflow-hidden">
        <Image
          src="/images/mountain_range_3.jpg"
          alt="Mountain silhouettes at golden hour"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
          <p className="text-xs font-medium tracking-[0.3em] text-accent">
            OUR STORY
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
            Clean. Balanced. Australian.
          </h1>
        </div>
      </section>

      {/* Origin Narrative */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Text Content */}
            <div className="max-w-xl">
              <FadeIn>
                <h2 className="font-serif text-3xl font-medium leading-tight text-primary lg:text-4xl">
                  A Water Australia
                  <br />
                  Has Been Missing
                </h2>
              </FadeIn>

              <FadeIn delay={100}>
                <p className="mt-8 text-base leading-relaxed text-muted">
                  Estuary began with a simple observation. Australia, despite its
                  natural richness, lacked a truly recognised premium mineral
                  water brand. Surrounded by some of the world&apos;s oldest
                  landscapes and most mineral-rich environments, it felt natural
                  that Australia should produce water of exceptional quality. Yet
                  finding a refined, locally sourced mineral water that matched
                  global standards in both taste and presentation proved
                  surprisingly difficult.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Estuary was created to change that. Sourced from a pristine
                  aquifer in the Snowy Mountains, our water reflects the purity
                  and balance of its origin. Naturally filtered over time, it
                  develops a mineral composition that is both structured and
                  smooth — offering a clean, refined profile suited to both
                  everyday hydration and premium hospitality settings.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  From the beginning, the intention was to create more than just
                  water. Estuary is designed as a considered product — one that
                  brings together quality, simplicity, and presentation.
                </p>
              </FadeIn>
            </div>

            {/* Image */}
            <FadeIn delay={200} direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/mountain_range_5.jpg"
                  alt="Snow-covered Snowy Mountains at sunset"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Health & Sustainability */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Glass & Sustainability */}
            <FadeIn>
              <div>
                <p className="text-xs font-medium tracking-[0.3em] text-accent">
                  WHY GLASS MATTERS
                </p>
                <h2 className="mt-4 font-serif text-3xl font-medium text-primary lg:text-4xl">
                  Purity You Can Trust
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Bottled in glass, Estuary preserves the integrity of the water
                  while avoiding the material interactions associated with
                  plastic. Studies have shown that plastic bottles can leach
                  microplastics into the water they hold — particles so small
                  they are ingested without notice. Glass is inert: it does not
                  leach, does not absorb, and does not alter the composition of
                  what it contains.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Beyond purity, glass is infinitely recyclable without loss of
                  quality. Choosing glass is not just a decision about taste — it
                  is a commitment to a cleaner product and a more sustainable
                  approach to packaging.
                </p>
              </div>
            </FadeIn>

            {/* Mineral Water vs Spring Water */}
            <FadeIn delay={150}>
              <div>
                <p className="text-xs font-medium tracking-[0.3em] text-accent">
                  BEYOND SPRING WATER
                </p>
                <h2 className="mt-4 font-serif text-3xl font-medium text-primary lg:text-4xl">
                  What Sets Mineral Water Apart
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Unlike spring water, which simply emerges from the ground and
                  may contain minimal mineral content, mineral water like Estuary
                  develops its composition over centuries of natural filtration
                  through deep geological formations. The result is a
                  consistently balanced mineral profile — rich in magnesium,
                  calcium, potassium, and bicarbonate — that supports hydration
                  at a functional level.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Naturally rich in electrolytes, Estuary supports hydration and
                  recovery without additives or sugars. It is a clean, balanced
                  alternative designed for athletes and individuals who value
                  both performance and refinement.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Performance & Lifestyle */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-12 font-serif text-3xl font-medium text-primary lg:text-4xl">
              Performance Meets Lifestyle
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-base leading-relaxed text-muted">
              A core part of Estuary&apos;s philosophy is rooted in performance
              and lifestyle. In sports such as tennis, skiing, golf, sailing,
              and horse racing — where precision, endurance, and environment
              matter — hydration plays a quiet but essential role. Whether
              courtside, on the slopes, on the course, or by the water, Estuary
              is designed to complement environments where quality is expected
              and attention to detail matters.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Ultimately, Estuary represents a shift in how water is
              perceived — not as a commodity, but as part of a broader
              lifestyle. A product that fits seamlessly between performance and
              leisure, function and design.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-12 text-center font-serif text-3xl font-medium text-primary lg:text-4xl">
              What We Stand For
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-16">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 150}>
                <div className="text-center">
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
          <FadeIn delay={100}>
            <blockquote className="mt-12 font-serif text-2xl font-medium leading-relaxed text-primary italic sm:text-3xl">
              &ldquo;We don&apos;t make water. We simply honour what nature has
              already perfected.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-xs tracking-[0.25em] text-accent">
              ESTUARY MINERAL WATER
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
