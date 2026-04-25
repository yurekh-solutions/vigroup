import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  Cpu,
  Gift,
  Package,
  Pill,
  Refrigerator,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import hero from "@/assets/box-electronics.jpg";
import industryElectricals from "@/assets/industry-electricals.jpg";
import industryKitchen from "@/assets/industry-kitchen.jpg";
import industryPharma from "@/assets/industry-pharma.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryGifting from "@/assets/industry-gifting.jpg";
import industryOther from "@/assets/industry-other.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/packaging/industries")({
  head: () => ({
    meta: [
      { title: "Industry Solutions — Vi Packaging Solutions" },
      {
        name: "description",
        content:
          "Corrugated packaging solutions for electronics, pharmaceuticals, food & beverage, gifting, kitchen appliances, and industrial sectors.",
      },
    ],
  }),
  component: IndustriesPage,
});

const categories = [
  "All",
  "Electricals",
  "Food & Beverages",
  "Gifting",
  "Kitchen Appliances",
  "Pharma Medical Industry",
  "Other",
];

const industries = [
  {
    name: "Electricals",
    category: "Electricals",
    icon: Cpu,
    image: industryElectricals,
    tagline: "Electricals",
    desc: "Specialized corrugated packaging solutions for electrical products and home appliances. Engineered to protect sensitive electronic components during transit and storage.",
    features: [
      "Custom-fit packaging for appliances",
      "High-strength corrugated board",
      "Protective inserts and cushioning",
      "Brand-printed exterior options",
    ],
  },
  {
    name: "Kitchen Appliances",
    category: "Kitchen Appliances",
    icon: UtensilsCrossed,
    image: industryKitchen,
    tagline: "Kitchen Appliances",
    desc: "Heavy-duty corrugated boxes designed for kitchen appliances including mixers, grinders, ovens, and water purifiers. Built to withstand shipping and handling.",
    features: [
      "Double-wall construction for heavy items",
      "Reinforced corners and edges",
      "Custom partition inserts",
      "High stacking strength",
    ],
  },
  {
    name: "Pharma Medical Industry",
    category: "Pharma Medical Industry",
    icon: Pill,
    image: industryPharma,
    tagline: "Pharma Medical Industry",
    desc: "GMP-compliant corrugated packaging for pharmaceutical products, medical devices, and healthcare equipment. Tamper-evident and safety-focused designs.",
    features: [
      "GMP & FDA compliant materials",
      "Tamper-evident closures",
      "Batch & serial number printing",
      "Temperature-sensitive options",
    ],
  },
  {
    name: "Food Industries",
    category: "Food & Beverages",
    icon: Package,
    image: industryFood,
    tagline: "Food & Beverages",
    desc: "Food-grade corrugated containers for FMCG brands, bakeries, beverages, and agricultural products. Grease-resistant and moisture-proof options available.",
    features: [
      "Food-grade certified materials",
      "Grease & moisture resistant coatings",
      "Ventilated designs for fresh produce",
      "FSSAI compliant packaging",
    ],
  },
  {
    name: "Gifting",
    category: "Gifting",
    icon: Gift,
    image: industryGifting,
    tagline: "Gifting",
    desc: "Premium gift packaging with luxury finishes for festivals, corporate gifting, and retail. Foil stamping, embossing, and custom designs available.",
    features: [
      "Rigid & folding box styles",
      "Foil stamping & embossing",
      "Spot UV & soft-touch finishes",
      "Full custom design support",
    ],
  },
  {
    name: "Other",
    category: "Other",
    icon: Truck,
    image: industryOther,
    tagline: "Other Industries",
    desc: "Versatile corrugated packaging solutions for automotive, hardware, textiles, and miscellaneous industrial products. Custom-engineered for any application.",
    features: [
      "Heavy-duty export-grade options",
      "Custom crating & palletization",
      "Waterproof barrier options",
      "ISPM-15 export compliant",
    ],
  },
];

function IndustriesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? industries : industries.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Industry Solutions"
        height="md"
        tint="oklch(0.75 0.12 145 / 20%)"
        title={
          <>
            Corrugated Boxes for <br />
            <span className="text-gradient-gold">Every Industry</span>
          </>
        }
        subtitle="Our commitment to making high-quality corrugated boxes for every industry and every product. Specialized packaging tailored to your sector's unique demands."
      />

      {/* Category Filter */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="glass-strong rounded-2xl p-4 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active === cat
                    ? "bg-gradient-gold text-primary-foreground glow-gold"
                    : "glass text-foreground/80 hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden ring-gold-hover flex flex-col"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-5 glass-gold w-12 h-12 rounded-2xl flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-bold">{ind.name}</h3>
                    <p className="text-primary text-sm mt-1 italic">{ind.tagline}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-5">
                      {ind.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground mt-auto">
                      {ind.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Packaging section */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Why Our Packaging
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Built for <span className="text-gradient-gold">Your Industry</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Box,
                title: "Custom Engineered",
                desc: "Every box is designed specifically for your product dimensions and protection needs.",
              },
              {
                icon: CheckCircle2,
                title: "Industry Compliant",
                desc: "GMP, FDA, FSSAI, ISPM-15 — we meet all relevant industry standards.",
              },
              {
                icon: Package,
                title: "Scale Ready",
                desc: "From 500 to 500,000 boxes — our facility handles any volume efficiently.",
              },
              {
                icon: Truck,
                title: "On-Time Delivery",
                desc: "Reliable logistics ensuring your packaging arrives when you need it.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl sm:rounded-3xl p-7 text-center ring-gold-hover"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl glass-gold flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_oklch(0.82_0.15_85_/_40%),_transparent_60%)]" />
          <h2 className="relative font-display text-xl sm:text-2xl md:text-3xl font-bold">
            Are You Looking for Tailored <br />
            <span className="text-gradient-gold">Corrugated Boxes for Your Unique Needs?</span>
          </h2>
          <p className="relative mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Whatever your industry, we engineer the perfect corrugated packaging solution. Contact us
            today to discuss your requirements.
          </p>
          <a
            href="/packaging/contact"
            className="relative inline-flex mt-8 items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
          >
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
