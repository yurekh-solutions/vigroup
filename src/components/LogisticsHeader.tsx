import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

const navLinks = [
  { href: "/logistics", label: "Home" },
  { href: "/logistics/about", label: "About" },
  { href: "/logistics/services", label: "Services" },
  { href: "/logistics/quote", label: "Get a Quote" },
  { href: "/logistics/contact", label: "Contact" },
] as const;

export function LogisticsHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass-strong rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all ${
            scrolled ? "shadow-2xl" : ""
          }`}
        >
          <Link to="/logistics" className="flex items-center gap-3 group">
            <img src={viLogo} alt="Vi Group" className="h-10 w-auto brightness-110 contrast-110" />
            <div className="leading-none">
              <div className="font-display text-lg md:text-xl font-bold text-gradient-gold">
                Vi Group
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Logistics Solutions
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/logistics/quote"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-gold text-primary-foreground glow-gold hover:scale-105 transition"
            >
              Request Quote
            </a>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg glass text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
