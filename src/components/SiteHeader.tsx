import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/logistics", label: "Logistics" },
  // { to: "/packaging", label: "Packaging" },
  // { to: "/fleet", label: "Fleet" },
  // { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
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
          <Link to="/" className="flex items-center gap-3 group">
            <img src={viLogo} alt="Vi Group" className="h-10 w-auto brightness-110 contrast-110" />
            <div className="leading-none">
              <div className="font-display text-lg md:text-xl font-bold text-gradient-gold">
                Vi Group
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Global Solutions
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
                activeProps={{
                  className:
                    "px-4 py-2 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/30",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-gold text-primary-foreground glow-gold hover:scale-105 transition"
            >
              Get a Quote
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
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/5"
                activeProps={{
                  className: "px-4 py-3 rounded-xl text-sm font-medium text-primary bg-primary/10",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
