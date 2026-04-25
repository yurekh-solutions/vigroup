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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      } ${scrolled ? "py-2" : "py-4"}`}
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
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Side Drawer */}
            <div className="lg:hidden fixed top-0 left-0 h-full w-72 z-50 glass-strong animate-in slide-in-from-left duration-300">
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg glass text-foreground hover:bg-white/10 transition"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
                
                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <a
                    href="/logistics/quote"
                    onClick={() => setOpen(false)}
                    className="block w-full px-6 py-3 rounded-full text-center text-sm font-semibold bg-gradient-gold text-primary-foreground glow-gold"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
