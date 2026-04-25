import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Pill, Beef, FlaskConical, Factory, Wheat, Package } from "lucide-react";
import hero from "@/assets/fleet-chemical.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/fleet/industries")({
  head: () => ({
    meta: [
      { title: "Vi Fleet Industries — Specialized Logistics for Every Sector" },
      {
        name: "description",
        content: "Industry-specific logistics solutions for pharmaceuticals, food & beverage, chemicals, manufacturing, agriculture, and e-commerce.",
      },
    ],
  }),
  component: FleetIndustriesPage,
});

const industries = [
  {
    icon: Pill,
    title: "Pharmaceuticals",
    desc: "Temperature-controlled transport for vaccines, medicines, and clinical trials with GDP compliance and complete documentation.",
    requirements: [
      "GDP (Good Distribution Practice) compliant",
      "Temperature range: 2-8°C, 15-25°C",
      "Validation & qualification reports",
      "Continuous temperature monitoring",
      "Secure chain of custody",
    ],
  },
  {
    icon: Beef,
    title: "Food & Beverage",
    desc: "Cold chain logistics for frozen foods, dairy, fresh produce, and beverages with food-grade vehicles and hygiene protocols.",
    requirements: [
      "Food-grade certified vehicles",
      "HACCP compliance",
      "Multi-zone temperature control",
      "Hygiene & sanitation protocols",
      "Farm-to-fork traceability",
    ],
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    desc: "Safe transport of hazardous and non-hazardous chemicals with hazmat-certified drivers and emergency response readiness.",
    requirements: [
      "ADR & DGFT regulatory compliance",
      "Hazmat trained drivers",
      "Spill containment systems",
      "MSDS documentation support",
      "Emergency response protocols",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Raw materials, components, and finished goods transport with just-in-time delivery and factory-to-site logistics.",
    requirements: [
      "Just-in-time delivery",
      "Factory-to-site coordination",
      "Heavy & oversized cargo handling",
      "Scheduled & on-demand service",
      "Quality inspection support",
    ],
  },
  {
    icon: Wheat,
    title: "Agriculture",
    desc: "Transport for grains, seeds, fertilizers, and fresh produce with contamination prevention and seasonal capacity scaling.",
    requirements: [
      "Contamination prevention",
      "Seasonal capacity scaling",
      "Grain & bulk cargo specialists",
      "Farm-to-market logistics",
      "Moisture control systems",
    ],
  },
  {
    icon: Package,
    title: "E-Commerce",
    desc: "Express delivery and last-mile logistics for online retailers with real-time tracking and flexible scheduling.",
    requirements: [
      "Same-day & next-day delivery",
      "Real-time customer tracking",
      "Reverse logistics support",
      "COD handling capability",
      "Flexible scheduling",
    ],
  },
];

function FleetIndustriesPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Industries We Serve"
        height="md"
        tint="oklch(0.78 0.13 65 / 22%)"
        title={
          <>
            Industry-Specific Logistics <br />
            <span className="text-gradient-gold">Tailored to Your Sector</span>
          </>
        }
        subtitle="Every industry has unique requirements. Our specialized solutions ensure your cargo is handled with the expertise and care it demands."
      >
        <Link
          to="/fleet/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          Discuss Your Needs <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* Industries Grid */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="glass-strong rounded-3xl p-8 ring-gold-hover flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-5">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {ind.desc}
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-xs uppercase tracking-wider text-primary mb-3">
                      Key Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {ind.requirements.map((req) => (
                        <li key={req} className="flex gap-2">
                          <span className="text-primary mt-0.5">✓</span> {req}
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

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Your Industry, <span className="text-gradient-gold">Our Expertise</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're in pharma, food, chemicals, or any other sector — we have the vehicles,
              technology, and expertise to handle your logistics with precision.
            </p>
            <Link
              to="/fleet/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Get Industry Solution <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
