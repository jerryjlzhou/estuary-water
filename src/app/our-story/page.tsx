import Image from "next/image";
import { type Metadata } from "next";
import { FadeIn } from "~/app/_components/FadeIn";
import { SectionDivider } from "~/app/_components/SectionDivider";

export const metadata: Metadata = {
  title: "Our Story | Estuary Mineral Water",
  description:
    "Discover the origin of Estuary Mineral Water — naturally sourced from a protected aquifer deep in Australia's Snowy Mountains.",
};

const values = [
  {
    title: "Purity",
    description:
      "Our water is drawn from a single, protected source — an ancient aquifer untouched by surface contaminants. Every bottle reflects the pristine environment from which it originates.",
  },
  {
    title: "Sustainability",
    description:
      "Glass-bottled by design, not by trend. We believe in packaging that honours the quality of what's inside. Our commitment to glass eliminates single-use plastic from the equation entirely.",
  },
  {
    title: "Australian Heritage",
    description:
      "The Snowy Mountains are among Australia's most revered landscapes. Estuary carries the character of this remarkable region — its clarity, its resilience, its quiet grandeur.",
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
            From Mountain to Glass
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
                  A Source Millions
                  <br />
                  of Years in the Making
                </h2>
              </FadeIn>

              <FadeIn delay={100}>
                <p className="mt-8 text-base leading-relaxed text-muted">
                  Beneath the Snowy Mountains of New South Wales lies a network
                  of ancient aquifers, formed over millennia as snowmelt and
                  rainfall percolated through layers of granite, basalt, and
                  mineral-bearing sediment. This slow, natural filtration
                  process — untouched by human intervention — produces water of
                  remarkable clarity and composition.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Estuary Mineral Water is drawn directly from one of these
                  protected subterranean sources. The water emerges naturally
                  alkaline, with a balanced mineral profile that includes
                  significant levels of magnesium and potassium — minerals
                  essential for hydration, recovery, and everyday vitality.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  We bottle at the source in premium glass, ensuring that
                  nothing is added and nothing is lost between the aquifer and
                  your table. The result is water that tastes clean, smooth, and
                  distinctly pure — a reflection of the landscape from which it
                  comes.
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
