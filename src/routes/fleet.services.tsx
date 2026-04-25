import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Thermometer, Boxes, FlaskConical, Container, Truck } from "lucide-react";
import hero from "@/assets/fleet-cold.jpg";
import cold from "@/assets/fleet-cold.jpg";
import chemical from "@/assets/fleet-chemical.jpg";
import container from "@/assets/fleet-container.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/fleet/services")({
  head: () => ({
    meta: [
      { title: "Vi Fleet Services — Cold Chain, Chemical & Container Transport" },
      {
        name: "description",
        content: "Comprehensive temperature-controlled logistics services including cold chain, dry cargo, chemical transport, and container trailer movement across India.",
      },
    ],
  }),
  component: FleetServicesPage,
});

const services = [
  {
    icon: Thermometer,
    image: cold,
    title: "Cold Chain Logistics",
    temp: "-25°C to +25°C",
    desc: "End-to-end refrigerated transport for pharmaceuticals, vaccines, frozen foods, dairy products, and temperature-sensitive cargo. Multi-zone temperature control with real-time monitoring.",
    features: [
      "Refrigerated trucks & reefer containers",
      "Multi-temperature zone capability",
      "GPS + temperature real-time tracking",
      "Pharma & vaccine GDP compliant",
      "24/7 cold chain monitoring",
      "Backup power systems",
    ],
  },
  {
    icon: Boxes,
    image: container,
    title: "Dry Cargo Transport",
    temp: "Ambient",
    desc: "Secure road transport for food grains, spices, FMCG products, textiles, and dry goods. Food-grade vehicles with contamination prevention protocols.",
    features: [
      "FTL & LTL options available",
      "Food-grade certified vehicles",
      "Tamper-proof sealing systems",
      "Real-time GPS tracking",
      "Express & economy services",
      "Pan-India coverage",
    ],
  },
  {
    icon: FlaskConical,
    image: chemical,
    title: "Chemical Transport",
    temp: "Ambient / Controlled",
    desc: "Specialized hazardous and non-hazardous chemical transport under strict DGFT, ADR, and local regulatory compliance. Trained hazmat drivers and emergency response protocols.",
    features: [
      "Hazmat certified drivers",
      "ADR & DGFT regulatory compliance",
      "Spill containment systems",
      "Emergency response protocols",
      "MSDS documentation support",
      "Industrial chemical expertise",
    ],
  },
  {
    icon: Container,
    image: container,
    title: "Container Trailers",
    temp: "Ambient / Reefer",
    desc: "20ft, 40ft, and high-cube container trailers for port-to-warehouse movement and intercity transport. Flexible scheduling for large-volume cargo.",
    features: [
      "20ft & 40ft container trailers",
      "Reefer container movement",
      "Major port connectivity (JNPT, Mundra, Chennai)",
      "Tri-axle & multi-axle options",
      "Flexible hire terms",
      "Port documentation support",
    ],
  },
  {
    icon: Truck,
    image: chemical,
    title: "Industrial Materials",
    temp: "Ambient",
    desc: "Heavy machinery, raw materials, automotive parts, and finished goods transport. Flatbeds, low-bed trailers, and hydraulic axles for oversized cargo.",
    features: [
      "Flatbed & low-bed trailers",
      "Oversized cargo handling",
      "Hydraulic axle trailers",
      "Factory-to-site delivery",
      "Project cargo support",
      "Route survey & planning",
    ],
  },
];

function FleetServicesPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Our Services"
        height="md"
        tint="oklch(0.78 0.13 65 / 22%)"
        title={
          <>
            Comprehensive Logistics <br />
            <span className="text-gradient-gold">Solutions for Every Cargo</span>
          </>
        }
        subtitle="From frozen pharmaceuticals to hazardous chemicals — specialized transport solutions with advanced technology and experienced professionals."
      >
        <Link
          to="/fleet/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          Request a Quote <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* Services Grid */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`glass-strong rounded-3xl overflow-hidden ring-gold-hover grid md:grid-cols-2 gap-0 ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div className="relative h-64 md:h-auto min-h-[400px]">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent md:from-background md:via-background/50" />
                    <div className="absolute top-6 left-6 glass-gold w-14 h-14 rounded-xl flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="glass px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Thermometer size={12} className="text-primary" />
                        {s.temp}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-muted-foreground">
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

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need a <span className="text-gradient-gold">Custom Solution?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every cargo is unique. Let our logistics experts design a transport solution tailored
              to your specific requirements, timeline, and budget.
            </p>
            <Link
              to="/fleet/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Talk to an Expert <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
