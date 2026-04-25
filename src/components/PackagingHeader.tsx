import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

const navLinks = [
  { href: "/packaging", label: "Home" },
  { href: "/packaging/about", label: "About Us" },
  { href: "/packaging/corrugated", label: "Corrugated Box" },
  { href: "/packaging/industries", label: "Industry Solutions" },
  { href: "/packaging/contact", label: "Contact" },
] as const;

export function PackagingHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <Link to="/packaging" className="flex items-center gap-3 group">
            <img src={viLogo} alt="Vi Packaging" className="h-10 w-auto brightness-110 contrast-110" />
            <div className="leading-none">
              <div className="font-display text-lg md:text-xl font-bold text-gradient-gold">
                Vi Packaging
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Corrugated Solutions
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/packaging/contact"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-gold text-primary-foreground glow-gold hover:scale-105 transition flex items-center gap-2"
            >
              <Phone size={14} /> Get a Quote
            </Link>
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
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/packaging/contact"
              onClick={() => setOpen(false)}
              className="mx-4 mt-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-gold text-primary-foreground text-center glow-gold"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
