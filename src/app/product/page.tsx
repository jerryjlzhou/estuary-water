import Image from "next/image";
import { type Metadata } from "next";
import { FadeIn } from "~/app/_components/FadeIn";
import { SectionDivider } from "~/app/_components/SectionDivider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Product | Estuary Mineral Water",
  description:
    "Naturally alkaline, mineral-rich water bottled in premium glass. Discover the qualities that set Estuary apart.",
};

const attributes = [
  {
    title: "Naturally Alkaline",
    description:
      "With a neutral-to-slightly-alkaline pH of 7.1, Estuary's alkalinity is the result of natural mineral contact — not artificial enhancement. This contributes to its clean, smooth taste profile.",
  },
  {
    title: "Rich in Minerals",
    description:
      "Magnesium, potassium, calcium, and bicarbonate are absorbed naturally as the water filters through ancient geological formations. These essential minerals contribute to recovery, vitality, and everyday wellbeing.",
  },
  {
    title: "Glass Bottled",
    description:
      "Every bottle of Estuary is sealed in premium glass — inert, elegant, and entirely recyclable. Glass preserves the water's purity and eliminates the microplastics that leach from conventional plastic packaging.",
  },
  {
    title: "Australian Sourced",
    description:
      "Drawn from a single pristine aquifer in the Snowy Mountains of New South Wales. Our source is monitored and preserved to ensure consistent quality, bottle after bottle.",
  },
  {
    title: "Naturally Filtered",
    description:
      "The water undergoes a filtration process that takes centuries — percolating slowly through layers of mineral-rich rock. No mechanical filtration is required or applied.",
  },
  {
    title: "Zero Additives",
    description:
      "Nothing added, nothing removed. Estuary is bottled exactly as it emerges from the aquifer. The taste — clean, smooth, and subtly mineral — is entirely nature's work.",
  },
];

const mineralProfile = [
  { mineral: "Magnesium (Mg)", value: "47 mg/L" },
  { mineral: "Calcium (Ca)", value: "32 mg/L" },
  { mineral: "Potassium (K)", value: "3.5 mg/L" },
  { mineral: "Sodium (Na)", value: "73 mg/L" },
  { mineral: "Bicarbonate (HCO₃)", value: "112 mg/L" },
  { mineral: "Silica (SiO₂)", value: "10 mg/L" },
  { mineral: "Chloride (Cl)", value: "156 mg/L" },
  { mineral: "pH Level", value: "7.1" },
];

const healthBenefits = [
  {
    mineral: "Magnesium",
    highlight: "47 mg/L",
    benefits:
      "Supports muscle function and recovery, helps reduce cramps and fatigue, and supports the nervous system. One of Estuary's strongest natural assets for active lifestyles.",
  },
  {
    mineral: "Calcium",
    highlight: "32 mg/L",
    benefits:
      "Essential for bone strength, teeth health, and muscle contraction. Contributes to functional hydration that goes beyond simple refreshment.",
  },
  {
    mineral: "Bicarbonate",
    highlight: "112 mg/L",
    benefits:
      "Helps buffer acidity in the body, supports digestion, and contributes to the smooth, clean taste that distinguishes Estuary from other waters.",
  },
  {
    mineral: "Silica",
    highlight: "10 mg/L",
    benefits:
      "Supports skin, hair, and nail health, as well as connective tissue integrity. A subtle but valuable component of Estuary's natural mineral profile.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pb-8 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.3em] text-accent">
              THE PRODUCT
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 font-serif text-4xl font-medium text-primary sm:text-5xl lg:text-6xl">
              Purity by Design
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Every element of Estuary Mineral Water — from source to
              bottle — reflects an uncompromising commitment to quality. This is
              water elevated to its highest expression.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottle Showcase */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="flex justify-center">
              <div className="relative h-[500px] w-[260px] sm:h-[600px] sm:w-[300px] lg:h-[700px] lg:w-[350px]">
                <Image
                  src="/logos/Bottle Mock Up.jpeg"
                  alt="Estuary Mineral Water premium glass bottle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="350px"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Attributes Grid */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-12 text-center font-serif text-3xl font-medium text-primary lg:text-4xl">
              What Sets Estuary Apart
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
            {attributes.map((attr, i) => (
              <FadeIn key={attr.title} delay={i * 100}>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                    {attr.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {attr.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mineral Profile */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.3em] text-accent">
                COMPOSITION
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium text-primary lg:text-4xl">
                Mineral Profile
              </h2>
              <p className="mt-4 text-sm text-muted">
                Typical analysis at source. Values may vary naturally.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12">
              <table className="w-full">
                <tbody>
                  {mineralProfile.map((row, i) => (
                    <tr
                      key={row.mineral}
                      className={
                        i < mineralProfile.length - 1
                          ? "border-b border-primary/10"
                          : ""
                      }
                    >
                      <td className="py-4 text-sm font-medium text-primary">
                        {row.mineral}
                      </td>
                      <td className="py-4 text-right text-sm text-muted">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-12 text-center">
              <p className="text-xs font-medium tracking-[0.3em] text-accent">
                FUNCTIONAL HYDRATION
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium text-primary lg:text-4xl">
                More Than Just Water
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
                Unlike standard spring water, Estuary&apos;s mineral composition
                develops over centuries of natural filtration through deep
                geological formations. The result is water that hydrates at a
                functional level — naturally rich in electrolytes, without
                additives or sugars.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {healthBenefits.map((benefit, i) => (
              <FadeIn key={benefit.mineral} delay={i * 100}>
                <div className="border-l-2 border-accent/30 pl-6">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-xl font-medium text-primary">
                      {benefit.mineral}
                    </h3>
                    <span className="text-xs font-medium tracking-wide text-accent">
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {benefit.benefits}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Interested in Stocking Estuary?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-4 text-base text-white/60">
              We partner with venues that share our commitment to quality.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-white/40 px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-primary"
            >
              Enquire Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
