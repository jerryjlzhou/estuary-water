import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/mountain_range_1.jpg"
        alt="Snowy Mountain ranges where Estuary water is sourced"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Wordmark */}
        <div className="animate-fade-in">
          <Image
            src="/logos/estuary-wordmark-white.png"
            alt="ESTUARY"
            width={2435}
            height={496}
            className="h-auto w-[280px] sm:w-[360px] lg:w-[480px] xl:w-[580px]"
            priority
          />
          <p className="mt-1 text-xs font-light tracking-[0.45em] text-white/70 sm:text-sm sm:tracking-[0.5em]">
            — MINERAL WATER —
          </p>
        </div>

        {/* Divider */}
        <div
          className="animate-fade-in my-8 flex items-center gap-4 sm:my-10"
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          <div className="h-px w-12 bg-white/30 sm:w-20" />
          <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <div className="h-px w-12 bg-white/30 sm:w-20" />
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-in-up text-xs font-light tracking-[0.4em] text-white/80 sm:text-sm"
          style={{ animationDelay: "600ms", animationFillMode: "backwards" }}
        >
          CLARITY. VITALITY. LIFE.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="animate-fade-in absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1200ms", animationFillMode: "backwards" }}
      >
        <div className="animate-bounce-gentle flex flex-col items-center gap-2">
          <span className="text-[0.6rem] font-light tracking-[0.3em] text-white/50">
            SCROLL
          </span>
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            className="text-white/40"
          >
            <path
              d="M6 0v18M1 13l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
