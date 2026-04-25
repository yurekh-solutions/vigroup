import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

export function PackagingFooter() {
  return (
    <footer className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 pb-10">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={viLogo}
                  alt="Vi Packaging"
                  className="h-14 w-auto brightness-110 contrast-110"
                />
                <span className="font-display text-2xl text-gradient-gold font-bold">
                  Vi Packaging
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premier corrugated box manufacturer in Mumbai, India. Custom packaging solutions
                engineered to perfection for every product, every industry.
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://www.facebook.com/ViPackagingSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                >
                  <Facebook size={16} className="text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/vipackagingsolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                >
                  <Instagram size={16} className="text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/company/vi-packaging-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                >
                  <Linkedin size={16} className="text-primary" />
                </a>
                <a
                  href="https://g.page/r/CbKd5LpWPnzTEB0/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Reviews"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                >
                  <Star size={16} className="text-primary" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/packaging" className="hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/packaging/about" className="hover:text-primary transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/packaging/corrugated" className="hover:text-primary transition">
                    Corrugated Box
                  </Link>
                </li>
                <li>
                  <Link to="/packaging/industries" className="hover:text-primary transition">
                    Industry Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/packaging/contact" className="hover:text-primary transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-4">
                Vi Group Companies
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/logistics" className="hover:text-primary transition">
                    Vi Logistics Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/packaging" className="text-primary font-semibold">
                    Vi Packaging Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/fleet" className="hover:text-primary transition">
                    Vi Fleet Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Reach Us</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    Plot no-16, Ground Floor, Annasagar Compound, Survey no. 48/1, Opp Vitthal
                    Mandir, Waliv, Vasai East — 401208, Maharashtra, India.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Phone size={16} className="text-primary shrink-0" />
                  <a href="tel:+919619510906" className="hover:text-primary transition">
                    +91 961 951 0906
                  </a>
                </li>
                <li className="flex gap-2">
                  <Mail size={16} className="text-primary shrink-0" />
                  <a href="mailto:vips@vigroup.in" className="hover:text-primary transition">
                    vips@vigroup.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <p>© Copyright {new Date().getFullYear()}, Vi Group. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
