import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import viLogo from "@/assets/vi-group-logo.png";

export function LogisticsFooter() {
  return (
    <footer className="relative mt-24">
      <div className="mx-auto max-w-7xl px-4 pb-10">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={viLogo}
                  alt="Vi Group"
                  className="h-14 w-auto brightness-110 contrast-110"
                />
                <span className="font-display text-2xl text-gradient-gold font-bold">
                  Vi Logistics
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium freight forwarding and supply chain solutions — moving your world with
                precision.
              </p>
              <div className="flex gap-3 mt-5">
                {[Facebook, Instagram, Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition"
                  >
                    <Icon size={16} className="text-primary" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Air Freight
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Ocean Freight
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Road & Rail Freight
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition">
                    Customs Clearance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/logistics" className="hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-primary transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-primary transition">
                    Terms & Conditions
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
                  <Link to="/logistics" className="text-primary font-semibold">
                    Vi Logistics Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/packaging" className="hover:text-primary transition">
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
                
Head Office:: Tropical New Era Business Park, Unit No. 303, 3rd Floor, Village Panchpakhadi,
Nirmaladevi Dighe Marg, Opp. ESIS Kamagar Hospital, Ambica Nagar, Wagle Industrial
Estate, Thane (West) – 400604 – Maharashtra, India.


                  </span>
                </li>
                <li className="flex gap-2">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>+91 961 951 0906</span>
                </li>
                <li className="flex gap-2">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>info@vigroup.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Vi Logistics Solutions Pvt. Ltd. All Rights Reserved.</p>
            <p>Crafted with precision · Worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
