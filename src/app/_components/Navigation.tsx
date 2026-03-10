"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/product", label: "Product" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 shadow-sm backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col items-start">
            <Image
              src={isTransparent ? "/logos/estuary-wordmark-white.png" : "/logos/estuary-wordmark-navy.png"}
              alt="ESTUARY"
              width={2435}
              height={496}
              className="h-auto w-[120px] transition-opacity duration-300 sm:w-[140px]"
              priority
            />
            <span
              className={`-mt-0.5 text-[0.55rem] font-medium tracking-[0.35em] transition-colors duration-300 sm:text-[0.6rem] ${
                isTransparent ? "text-white/70" : "text-muted"
              }`}
            >
              MINERAL WATER
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-primary/70 hover:text-primary"
                } ${pathname === link.href ? (isTransparent ? "text-white" : "text-primary") : ""}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
                    isTransparent ? "bg-white" : "bg-primary"
                  } ${pathname === link.href ? "!w-full" : ""}`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                isTransparent
                  ? "border border-white/60 px-6 py-2.5 text-white hover:bg-white hover:text-primary"
                  : "border border-primary px-6 py-2.5 text-primary hover:bg-primary hover:text-white"
              }`}
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
              isTransparent && !mobileOpen ? "text-white" : "text-primary"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`h-px w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl font-medium text-primary transition-all duration-500 hover:text-accent ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`mt-4 border border-primary px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${navLinks.length * 80}ms`
                : "0ms",
            }}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}
