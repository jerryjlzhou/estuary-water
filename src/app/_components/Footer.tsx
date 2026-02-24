import Link from "next/link";

const navLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/product", label: "Product" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                ESTUARY
              </span>
              <p className="mt-0.5 text-[0.6rem] font-medium tracking-[0.35em] text-white/50">
                MINERAL WATER
              </p>
            </div>
            <p className="mt-4 text-xs tracking-[0.25em] text-accent">
              CLARITY. VITALITY. LIFE.
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Premium Australian mineral water, naturally sourced from the Snowy
              Mountains.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@estuarywater.com.au"
                  className="transition-colors duration-200 hover:text-white"
                >
                  hello@estuarywater.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61000000000"
                  className="transition-colors duration-200 hover:text-white"
                >
                  +61 (0) 000 000 000
                </a>
              </li>
              <li className="leading-relaxed">
                Snowy Mountains,
                <br />
                New South Wales, Australia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Estuary Mineral Water. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
