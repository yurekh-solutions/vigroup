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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      } ${scrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"}`}
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
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 z-40 bg-black/70"
              onClick={() => setIsOpen(false)}
            />
            {/* Side Drawer */}
            <div className="lg:hidden fixed top-0 left-0 h-full w-72 z-50 bg-[#0a0a0f] border-r border-white/10 animate-in slide-in-from-left duration-300 overflow-y-auto">
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-white/10 text-foreground hover:bg-white/20 transition"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                {/* CTA Button */}
                <div className="mt-auto pt-6">
                  <a
                    href="tel:+919619510906"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold glass-gold"
                  >
                    <Phone size={18} />
                    Call Now
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
