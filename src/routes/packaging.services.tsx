import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  ShieldCheck,
  Printer,
  Ruler,
  Recycle,
  TreePine,
  Package,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero-packaging.jpg";
import boxElec from "@/assets/box-electronics.jpg";
import boxPharma from "@/assets/box-pharma.jpg";
import boxFood from "@/assets/box-food.jpg";
import boxGift from "@/assets/box-gift.jpg";
import boxKitchen from "@/assets/box-kitchen.jpg";
import boxIndustrial from "@/assets/box-industrial.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/packaging/services")({
  component: PackagingServices,
});

const allServices = [
  {
    icon: Box,
    image: boxElec,
    title: "Electronics Packaging",
    tag: "Anti-Static. Cushioned. Secure.",
    desc: "Specialized packaging for sensitive electronic devices with anti-static properties, custom foam inserts, and multi-layer protection ensuring safe transit.",
    features: [
      "Anti-static corrugated materials",
      "Custom foam & honeycomb inserts",
      "Multi-layer cushioning systems",
      "Drop-tested certified packaging",
      "ESD protection compliance",
      "Custom die-cut compartments",
    ],
  },
  {
    icon: Package,
    image: boxPharma,
    title: "Pharmaceutical Packaging",
    tag: "Compliant. Tamper-Evident. Safe.",
    desc: "GMP-compliant packaging solutions for medicines, medical devices, and healthcare products with full regulatory compliance and safety features.",
    features: [
      "GMP & FDA compliant materials",
      "Tamper-evident security seals",
      "Serial number & batch printing",
      "Temperature-sensitive options",
      "Child-resistant designs",
      "Moisture barrier protection",
    ],
  },
  {
    icon: Box,
    image: boxFood,
    title: "Food & Beverage Packaging",
    tag: "Food-Grade. Fresh. Compliant.",
    desc: "Food-safe corrugated containers designed for restaurants, bakeries, and food manufacturers with grease resistance and temperature tolerance.",
    features: [
      "FDA food-grade materials",
      "Grease-resistant coatings",
      "Hot & cold temperature tolerance",
      "Ventilation designs for freshness",
      "Stackable for transport",
      "Custom branding options",
    ],
  },
  {
    icon: Package,
    image: boxGift,
    title: "Premium Gift Packaging",
    tag: "Luxury. Branded. Memorable.",
    desc: "Luxury rigid and folding gift boxes with premium finishes including foil stamping, embossing, and magnetic closures for high-end products.",
    features: [
      "Rigid box construction",
      "Foil stamping & embossing",
      "Magnetic closure options",
      "Premium paper laminations",
      "Custom ribbon attachments",
      "Window cut-out designs",
    ],
  },
  {
    icon: Box,
    image: boxKitchen,
    title: "Kitchen Appliance Packaging",
    tag: "Heavy-Duty. Protective. Stackable.",
    desc: "Double-wall and triple-wall corrugated boxes engineered for heavy kitchen appliances with reinforced corners and shock absorption.",
    features: [
      "Double & triple-wall construction",
      "Reinforced corner protectors",
      "Shock-absorbing inserts",
      "Stackable load-bearing design",
      "Moisture-resistant coating",
      "Easy-open features",
    ],
  },
  {
    icon: Package,
    image: boxIndustrial,
    title: "Industrial Packaging",
    tag: "Export-Grade. Durable. Certified.",
    desc: "Heavy-duty export packaging for machinery, auto parts, and industrial equipment meeting international shipping standards and regulations.",
    features: [
      "ISPM-15 export compliant",
      "Weather-resistant coatings",
      "Steel strapping options",
      "Shock indicators available",
      "Pallet-compatible designs",
      "Custom crating solutions",
    ],
  },
];

const capabilities = [
  {
    icon: Ruler,
    title: "Structural Design",
    desc: "Custom die-cut designs, multi-point glued boxes, self-locking cartons, and display packaging.",
  },
  {
    icon: Printer,
    title: "High-Quality Printing",
    desc: "Flexo and offset printing up to 6 colors with aqueous and UV coatings.",
  },
  {
    icon: ShieldCheck,
    title: "Protective Engineering",
    desc: "Multi-layer flute combinations, reinforced edges, and moisture-resistant coatings.",
  },
  {
    icon: Recycle,
    title: "Recyclable Materials",
    desc: "100% recyclable Kraft liner and flute paper. FSC-certified options available.",
  },
];

function PackagingServices() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Our Services"
        height="md"
        tint="oklch(0.75 0.12 145 / 20%)"
        title={
          <>
            Packaging solutions <br />
            <span className="text-gradient-gold">for every need.</span>
          </>
        }
        subtitle="Electronics, pharma, food, gifting, appliances, and industrial — all under one roof."
      />

      {/* Services Grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16">
          {allServices.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.title}
                className={`glass-strong rounded-2xl sm:rounded-3xl overflow-hidden ring-gold-hover grid md:grid-cols-2 ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                <div
                  className={`relative h-64 sm:h-72 md:h-auto overflow-hidden ${
                    isEven ? "" : "md:col-start-2"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 md:bg-gradient-to-r md:from-transparent md:to-background/80" />
                </div>
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold">{s.title}</h2>
                      <p className="text-primary text-sm italic">{s.tag}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient-gold">Capabilities</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="glass-strong rounded-2xl sm:rounded-3xl p-6 text-center ring-gold-hover"
                >
                  <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Need a custom <span className="text-gradient-gold">packaging solution?</span>
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
                Tell us about your product and we will design the perfect packaging.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                Request a Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30">
        <div className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="font-display text-lg font-bold mb-4">Vi Packaging Solutions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Premier corrugated box manufacturer in Mumbai, India.
                </p>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">
                  Vi Group
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/logistics" className="text-muted-foreground hover:text-primary transition">
                      Vi Logistics
                    </a>
                  </li>
                  <li>
                    <a href="/packaging" className="text-primary font-semibold">
                      Vi Packaging
                    </a>
                  </li>
                  <li>
                    <a href="/fleet" className="text-muted-foreground hover:text-primary transition">
                      Vi Fleet
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">
                  Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/packaging" className="text-muted-foreground hover:text-primary transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/packaging/services" className="text-primary font-semibold">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-muted-foreground hover:text-primary transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">
                  Contact
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Mumbai, India</li>
                  <li>info@vipackaging.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 border-t border-border/30">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>© Copyright {new Date().getFullYear()}, Vi Group. All Rights Reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
