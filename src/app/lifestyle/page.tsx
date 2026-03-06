import Image from "next/image";
import { type Metadata } from "next";
import { FadeIn } from "~/app/_components/FadeIn";
import { SectionDivider } from "~/app/_components/SectionDivider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sport & Lifestyle | Estuary Mineral Water",
  description:
    "Estuary Mineral Water — at home in the world's most distinguished sporting arenas. Tennis, golf, sailing, skiing, horse racing, and fashion.",
};

const sports = [
  {
    name: "Tennis",
    tagline: "Grand Slam Hydration",
    description:
      "From courtside at the Australian Open to private club tournaments, Estuary's mineral-rich profile supports peak performance and refined recovery.",
  },
  {
    name: "Golf",
    tagline: "Championship Refreshment",
    description:
      "On the fairways of Australia's most prestigious courses, Estuary is the natural choice for players and patrons who appreciate quiet quality.",
  },
  {
    name: "Sailing",
    tagline: "Regatta Refined",
    description:
      "Whether racing on Sydney Harbour or cruising the coast, Estuary belongs on board — premium hydration for those who live by the water.",
  },
  {
    name: "Horse Racing",
    tagline: "Trackside Elegance",
    description:
      "From the Birdcage at Flemington to the members' enclosure at Randwick, Estuary complements the tradition and prestige of Australian racing.",
  },
  {
    name: "Skiing",
    tagline: "Alpine Pure",
    description:
      "Born in the mountains, at home on the slopes. Estuary is the natural après-ski companion — mineral water from the very peaks you carve.",
  },
  {
    name: "Fashion",
    tagline: "Front Row Worthy",
    description:
      "Backstage, front row, and at every reception — Estuary's glass bottles and refined positioning make it the water of choice for fashion's finest moments.",
  },
];

export default function LifestylePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-[60vh] min-h-[400px] items-end overflow-hidden">
        <Image
          src="/images/tennis_banner_1.webp"
          alt="Tennis court at sunset with palm trees"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
          <p className="text-xs font-medium tracking-[0.3em] text-accent">
            SPORT &amp; LIFESTYLE
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
            The Pursuit of Excellence
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
              In sports where precision, endurance, and environment matter,
              hydration plays a quiet but essential role. Estuary Mineral Water
              is at home in the world&apos;s most distinguished sporting arenas
              and cultural events — wherever excellence is the standard, not the
              aspiration.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.3em] text-accent">
                OUR WORLD
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium text-primary lg:text-4xl">
                Where We Belong
              </h2>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
            {sports.map((sport, i) => (
              <FadeIn key={sport.name} delay={i * 100}>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-primary">
                    {sport.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-[0.2em] text-accent">
                    {sport.tagline.toUpperCase()}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {sport.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Image Band */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/sailing_1.jpg"
                  alt="Sailboats racing past Sydney Opera House"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/horse_racing.PNG"
                  alt="Horse racing at the track"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-primary py-24 text-white lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeIn>
            <SectionDivider light />
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-12 font-serif text-3xl font-medium sm:text-4xl">
              Our Vision
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              We believe premium hydration belongs at the intersection of sport,
              culture, and hospitality. Estuary is building partnerships with
              Australia&apos;s most iconic sporting and cultural events —
              creating a presence wherever people gather to celebrate excellence,
              tradition, and the finer things.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              If your event or organisation shares our commitment to quality,
              we&apos;d love to explore a partnership.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <Link
              href="/contact"
              className="mt-10 inline-block border border-white/40 px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-primary"
            >
              Partner With Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
