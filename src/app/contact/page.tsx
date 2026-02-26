import { type Metadata } from "next";
import { FadeIn } from "~/app/_components/FadeIn";
import { SectionDivider } from "~/app/_components/SectionDivider";
import { ContactForm } from "~/app/_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Estuary Mineral Water",
  description:
    "Wholesale and partnership enquiries for Estuary Mineral Water. Partner with us to bring premium Australian mineral water to your venue.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pb-8 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.3em] text-accent">
              GET IN TOUCH
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 font-serif text-4xl font-medium text-primary sm:text-5xl lg:text-6xl">
              Wholesale &amp; Partnership Enquiries
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Whether you represent a boutique hotel, a championship sporting
              event, or a discerning food and beverage establishment, we would be
              delighted to discuss how Estuary can elevate your offering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <SectionDivider />
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Info */}
            <FadeIn delay={100}>
              <div>
                <h2 className="font-serif text-2xl font-medium text-primary lg:text-3xl">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  Estuary Mineral Water partners with venues and organisations
                  that share our commitment to quality and distinction. Whether
                  you&apos;re looking to stock Estuary at your establishment or
                  explore a sponsorship opportunity, we&apos;re here to help.
                </p>

                <div className="mt-12 space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                      Email
                    </h3>
                    <a
                      href="mailto:estuarymineralwater@gmail.com"
                      className="mt-2 block text-sm text-primary transition-colors hover:text-accent"
                    >
                      estuarymineralwater@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                      Phone
                    </h3>
                    <a
                      href="tel:+61428218855"
                      className="mt-2 block text-sm text-primary transition-colors hover:text-accent"
                    >
                      0428 218 855
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                      Location
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      96 Great Western Highway,
                      <br />
                      Blaxland, NSW, Australia
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={200}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
