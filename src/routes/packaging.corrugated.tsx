import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  CheckCircle2,
  Layers,
  Maximize,
  Palette,
  Printer,
  Ruler,
  Shield,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/box-industrial.jpg";
import boxElec from "@/assets/industry-electricals.jpg";
import boxGift from "@/assets/industry-gifting.jpg";
import boxPharma from "@/assets/industry-pharma.jpg";
import boxFood from "@/assets/industry-food.jpg";
import boxKitchen from "@/assets/industry-kitchen.jpg";
import boxIndustrial from "@/assets/industry-other.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/packaging/corrugated")({
  head: () => ({
    meta: [
      { title: "Corrugated Box Manufacturing — Vi Packaging Solutions" },
      {
        name: "description",
        content:
          "High-quality corrugated boxes engineered to perfection. NF, E-Flute options. Inner & outer boxes with multi-color printing, UV coating, embossing & more.",
      },
    ],
  }),
  component: CorrugatedPage,
});

const linerTypes = [
  {
    name: "NF Box",
    desc: "Standard single-face corrugated board ideal for light to medium-weight products. Cost-effective and versatile.",
    features: ["Lightweight", "Economical", "Versatile applications"],
  },
  {
    name: "Flute",
    desc: "Medium flute profile providing excellent cushioning and stacking strength for heavy items.",
    features: ["Superior cushioning", "High stacking strength", "Impact resistant"],
  },
  {
    name: "E Flute",
    desc: "Thin-profile micro-flute offering premium print quality with strong crush resistance.",
    features: ["Superior print surface", "Thin profile", "Retail-ready finish"],
  },
];

const boxTypes = [
  {
    name: "Inner Box",
    desc: "Primary packaging designed to hold and protect the product directly. Custom die-cut inserts for snug fit.",
    image: boxGift,
    features: [
      "Custom die-cut shapes",
      "Snug product fit",
      "Product-contact safe materials",
      "Branded interior printing",
    ],
  },
  {
    name: "Outer Box",
    desc: "Secondary packaging providing structural integrity for shipping, stacking, and warehouse storage.",
    image: boxElec,
    features: [
      "High burst & edge crush strength",
      "Stackable design",
      "Shipping & logistics optimized",
      "Multi-color branded exterior",
    ],
  },
];

const printTypes = [
  {
    name: "Four Colour Printing",
    icon: Palette,
    desc: "CMYK process printing for vibrant photo-quality graphics on corrugated surfaces.",
  },
  {
    name: "Five Colour Printing",
    icon: Palette,
    desc: "CMYK + spot color for brand-exact Pantone matching and premium visual impact.",
  },
  {
    name: "Six Colour Printing",
    icon: Palette,
    desc: "Full CMYK + 2 spot colors for luxury packaging with multiple brand elements.",
  },
  {
    name: "U.V Printing",
    icon: Sparkles,
    desc: "Ultra-violet cured inks for instant drying, high gloss, and scratch-resistant finishes.",
  },
  {
    name: "Trippof",
    icon: Layers,
    desc: "Triple-offset litho lamination for photorealistic imagery on corrugated board.",
  },
  {
    name: "Embossing",
    icon: Maximize,
    desc: "Raised surface textures creating tactile premium feel on packaging exteriors.",
  },
];

const specifications = [
  { icon: Ruler, label: "Size Range", value: "Custom — any dimension up to 1200mm" },
  { icon: Layers, label: "Ply Options", value: "3-ply, 5-ply, 7-ply, and 9-ply" },
  { icon: Shield, label: "Burst Strength", value: "Up to 30 kg/cm²" },
  { icon: Box, label: "Box Styles", value: "RSC, HSC, Die-cut, Telescope, Folder" },
  { icon: Printer, label: "Print Colors", value: "Up to 6 colors + UV & embossing" },
  { icon: Palette, label: "Finish Options", value: "Matte, Gloss, Soft-touch, Spot UV" },
];

function CorrugatedPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Corrugated Box"
        height="md"
        tint="oklch(0.75 0.12 145 / 20%)"
        title={
          <>
            High-Quality <span className="text-gradient-gold">Corrugated Boxes</span>
          </>
        }
        subtitle="Committed to delivering high-quality corrugated boxes to be used across a range of industries. Engineered for protection, designed for impact."
      />

      {/* Specifications Quick View */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="mx-auto max-w-6xl glass-strong rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specifications.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <Icon className="text-primary mx-auto mb-2" size={22} />
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {s.label}
                </div>
                <div className="font-display text-xs sm:text-sm font-bold">{s.value}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Liner Category */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Liner Category
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Board <span className="text-gradient-gold">Types</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              Choose the right flute profile based on your product weight, fragility, and display
              requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {linerTypes.map((l) => (
              <div
                key={l.name}
                className="glass-strong rounded-2xl sm:rounded-3xl p-8 ring-gold-hover"
              >
                <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-6">
                  <Layers className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{l.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{l.desc}</p>
                <ul className="space-y-2">
                  {l.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box Types */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Type of Box
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Inner & <span className="text-gradient-gold">Outer Boxes</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {boxTypes.map((b) => (
              <div
                key={b.name}
                className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden ring-gold-hover"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold mb-3">{b.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{b.desc}</p>
                  <ul className="space-y-2">
                    {b.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Types */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Printing Options
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Premium <span className="text-gradient-gold">Print Finishes</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              From standard flexo to luxury embossing — we offer the full spectrum of print and
              finish options.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {printTypes.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="glass rounded-2xl sm:rounded-3xl p-7 ring-gold-hover">
                  <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{p.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Applications Gallery */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Applications
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Boxes Engineered to{" "}
              <span className="text-gradient-gold">Perfection for Every Product</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Electronics", img: boxElec },
              { name: "Pharmaceuticals", img: boxPharma },
              { name: "Food & Beverage", img: boxFood },
              { name: "Gift Boxes", img: boxGift },
              { name: "Kitchen Appliances", img: boxKitchen },
              { name: "Industrial", img: boxIndustrial },
            ].map((item) => (
              <div
                key={item.name}
                className="group relative rounded-2xl overflow-hidden ring-gold-hover"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-48 sm:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                  <h3 className="font-display text-lg sm:text-xl font-bold">{item.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-primary mt-1">
                    Corrugated Packaging
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_oklch(0.82_0.15_85_/_40%),_transparent_60%)]" />
          <h2 className="relative font-display text-xl sm:text-2xl md:text-3xl font-bold">
            Need Custom <span className="text-gradient-gold">Corrugated Boxes?</span>
          </h2>
          <p className="relative mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Share your requirements and our team will engineer the perfect box for your product.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/packaging/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Contact Us <ArrowRight size={18} />
            </a>
            <a
              href="/packaging/industries"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition"
            >
              Go to Industry Solutions <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
