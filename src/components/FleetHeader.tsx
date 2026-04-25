import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

export function FleetHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", href: "/fleet" },
    { label: "About Us", href: "/fleet/about" },
    { label: "Services", href: "/fleet/services" },
    { label: "Fleet", href: "/fleet/vehicles" },
    { label: "Industries", href: "/fleet/industries" },
    { label: "Contact", href: "/fleet/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass-strong rounded-2xl px-6 py-4 flex items-center justify-between transition-all ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          <Link to="/fleet" className="flex items-center gap-3">
            <img
              src={viLogo}
              alt="Vi Fleet"
              className="h-12 w-auto brightness-110 contrast-110"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-gradient-gold">
                Vi Fleet
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  location.pathname === item.href
                    ? "text-primary bg-white/10"
                    : "text-foreground/80 hover:text-primary hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919619510906"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-gold text-sm font-semibold hover:scale-105 transition"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-foreground hover:text-gradient-gold transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+919619510906"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center gap-2 px-8 py-3 rounded-full text-lg font-semibold glass-gold"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
