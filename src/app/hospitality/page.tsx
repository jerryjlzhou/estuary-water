import Image from "next/image";
import { type Metadata } from "next";
import { FadeIn } from "~/app/_components/FadeIn";
import { SectionDivider } from "~/app/_components/SectionDivider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitality | Estuary Mineral Water",
  description:
    "Estuary Mineral Water for independent cafes, luxury hotels, and fine dining. Elevate your table with premium Australian mineral water.",
};

const segments = [
  {
    title: "Independent Cafes",
    subtitle: "A Point of Distinction",
    description:
      "In a market where every detail counts, the water you serve says as much about your establishment as the coffee you pour. Estuary offers specialty cafes and brunch destinations a premium, glass-bottled water that complements artisan food and drink — and signals an uncompromising attention to quality.",
    features: [
      "Glass bottles that enhance the table aesthetic",
      "Naturally alkaline — a conversation starter with health-conscious guests",
      "Australian-sourced story that resonates with local-first values",
    ],
    image: "/images/sydney_cafe_1.jpeg",
    imageAlt: "Upscale Sydney restaurant with Harbour Bridge view",
  },
  {
    title: "Luxury Hotels",
    subtitle: "The Preferred Choice",
    description:
      "Five-star hospitality demands five-star water. Estuary is designed for the minibar, the restaurant table, the poolside lounge, and the conference room — anywhere your guests expect the best. Our elegant glass bottles complement premium interiors while our mineral profile ensures a superior drinking experience.",
    features: [
      "Premium presentation for minibar and table service",
      "Sustainable glass packaging aligned with ESG commitments",
      "Consistent quality for high-volume hospitality operations",
    ],
    image: "/images/sydney_hotel_1.jpeg",
    imageAlt: "Luxury hotel room with panoramic Sydney Harbour view",
  },
  {
    title: "Fine Dining",
    subtitle: "Curated for Connoisseurs",
    description:
      "Sommeliers understand that water is as important to the dining experience as wine. Estuary's clean, balanced mineral profile makes it an ideal palate cleanser and table companion — one that enhances, rather than competes with, the flavours of a carefully composed menu.",
    features: [
      "Subtle mineral character that complements fine cuisine",
      "Elegant bottle design suited to white-tablecloth service",
      "Natural alkalinity for gentle palate cleansing between courses",
    ],
    image: "/images/beach_table_2.jpg",
    imageAlt: "Elegant restaurant table setting by the sea",
  },
];

export default function HospitalityPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-[60vh] min-h-[400px] items-end overflow-hidden">
        <Image
          src="/images/sydney_cafe_1.jpeg"
          alt="Upscale Sydney restaurant with harbour views"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
          <p className="text-xs font-medium tracking-[0.3em] text-accent">
            HOSPITALITY
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
            Where Every Detail Matters
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-12 text-lg leading-relaxed text-muted">
              From the intimate neighbourhood cafe to the grand hotel dining
              room, Estuary Mineral Water is designed to complement settings
              where quality is not a preference — it&apos;s a requirement. Our
              glass bottles make a quiet statement of refinement that discerning
              hosts and guests instantly recognise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Segments */}
      {segments.map((segment, i) => (
        <section
          key={segment.title}
          className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 !== 0 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                  <Image
                    src={segment.image}
                    alt={segment.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>

              {/* Text */}
              <div className="lg:[direction:ltr]">
                <FadeIn>
                  <p className="text-xs font-medium tracking-[0.3em] text-accent">
                    {segment.subtitle.toUpperCase()}
                  </p>
                </FadeIn>
                <FadeIn delay={100}>
                  <h2 className="mt-3 font-serif text-3xl font-medium text-primary lg:text-4xl">
                    {segment.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="mt-6 text-base leading-relaxed text-muted">
                    {segment.description}
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <ul className="mt-8 space-y-3">
                    {segment.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rotate-45 bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary py-20 text-white lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Become a Stockist
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-4 text-base text-white/60">
              Join a growing network of premium venues that choose Estuary.
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
