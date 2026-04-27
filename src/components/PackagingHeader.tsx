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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      } ${scrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"}`}
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
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Side Drawer */}
            <div className="lg:hidden fixed top-0 left-0 h-full w-72 z-50 bg-background border-r border-white/10 animate-in slide-in-from-left duration-300">
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg bg-white/5 text-foreground hover:bg-white/10 transition"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <Link
                      key={l.label}
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
                
                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <Link
                    to="/packaging/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full px-6 py-3 rounded-full text-center text-sm font-semibold bg-gradient-gold text-primary-foreground glow-gold"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
