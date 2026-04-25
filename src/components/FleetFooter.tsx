import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Star } from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

export function FleetFooter() {
  return (
    <footer className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 pb-10">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={viLogo}
                  alt="Vi Fleet"
                  className="h-14 w-auto brightness-110 contrast-110"
                />
                <span className="font-display text-2xl text-gradient-gold font-bold">
                  Vi Fleet
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted partner for temperature-controlled logistics in India — cold chain, dry
                cargo, chemical and container trailer transport with precision and safety.
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://www.facebook.com/ViFleetPvtLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                >
                  <Facebook size={16} className="text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/vifleetpvtltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                >
                  <Instagram size={16} className="text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/company/vi-fleet-pvt-ltd"
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
                  <Link to="/fleet" className="hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#coverage" className="hover:text-primary transition">
                    Network Coverage
                  </a>
                </li>
                <li>
                  <a href="#technology" className="hover:text-primary transition">
                    Technology
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition">
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
                  <Link to="/packaging" className="hover:text-primary transition">
                    Vi Packaging Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/fleet" className="text-primary font-semibold">
                    Vi Fleet Pvt. Ltd.
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
                    Head Office:: Tropical New Era Business Park, Unit No. 303, 3rd Floor, Village Panchpakhadi, Nirmaladevi Dighe Marg, Opp. ESIS Kamagar Hospital, Ambica Nagar, Whagle Industrial Estate, Thane (West) - 400604 – Maharashtra, India.

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
                  <a href="mailto:info@vigroup.in" className="hover:text-primary transition">
                    info@vigroup.in
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
