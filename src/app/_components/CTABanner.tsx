import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function CTABanner() {
  return (
    <section className="bg-primary-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.3em] text-accent">
            WHOLESALE PARTNERSHIPS
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Partner With Estuary
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
            Whether you represent a boutique hotel, a championship sporting
            event, or a discerning food and beverage establishment, we would be
            delighted to discuss how Estuary can elevate your offering.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <Link
            href="/contact"
            className="mt-10 inline-block border border-white/40 px-10 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-primary"
          >
            Enquire Now
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
