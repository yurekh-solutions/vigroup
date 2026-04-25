import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Thermometer, Gauge, ShieldCheck, Clock } from "lucide-react";
import hero from "@/assets/hero-fleet.jpg";
import cold from "@/assets/fleet-cold.jpg";
import chemical from "@/assets/fleet-chemical.jpg";
import container from "@/assets/fleet-container.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/fleet/vehicles")({
  head: () => ({
    meta: [
      { title: "Vi Fleet Vehicles — Modern Temperature-Controlled Transport Fleet" },
      {
        name: "description",
        content: "Explore our diverse fleet of 300+ modern vehicles including refrigerated trucks, chemical tankers, container trailers, and dry cargo carriers.",
      },
    ],
  }),
  component: FleetVehiclesPage,
});

const vehicleCategories = [
  {
    icon: Thermometer,
    image: cold,
    title: "Refrigerated Trucks",
    count: "120+ Vehicles",
    specs: [
      "Temperature range: -25°C to +25°C",
      "Payload capacity: 5-25 tons",
      "Multi-zone cooling systems",
      "GPS & temperature tracking",
      "Backup refrigeration units",
    ],
  },
  {
    icon: ShieldCheck,
    image: chemical,
    title: "Chemical Tankers",
    count: "40+ Vehicles",
    specs: [
      "Hazmat certified (ADR/DGFT)",
      "Stainless steel & HDPE tanks",
      "Spill containment systems",
      "Emergency response kits",
      "Specialized for liquid & powder",
    ],
  },
  {
    icon: Truck,
    image: container,
    title: "Container Trailers",
    count: "80+ Trailers",
    specs: [
      "20ft, 40ft, high-cube options",
      "Reefer & dry container capable",
      "Tri-axle & multi-axle chassis",
      "Port-to-warehouse specialists",
      "GPS tracking on all units",
    ],
  },
  {
    icon: Gauge,
    image: cold,
    title: "Heavy Haulers",
    count: "35+ Vehicles",
    specs: [
      "Flatbed & low-bed trailers",
      "Hydraulic axle systems",
      "Oversized cargo capable",
      "Route survey & planning",
      "Heavy machinery transport",
    ],
  },
  {
    icon: Clock,
    image: chemical,
    title: "Express Cargo",
    count: "50+ Vehicles",
    specs: [
      "Light commercial vehicles",
      "Same-day & next-day delivery",
      "Urban & suburban coverage",
      "Real-time tracking",
      "E-commerce optimized",
    ],
  },
];

const stats = [
  { number: "300+", label: "Modern Fleet" },
  { number: "28", label: "States Covered" },
  { number: "500+", label: "Happy Clients" },
  { number: "99.5%", label: "On-Time Delivery" },
];

function FleetVehiclesPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Our Fleet"
        height="md"
        tint="oklch(0.78 0.13 65 / 22%)"
        title={
          <>
            300+ Modern Vehicles <br />
            <span className="text-gradient-gold">Built for Every Cargo Type</span>
          </>
        }
        subtitle="From refrigerated pharma trucks to heavy haulers — our diverse fleet is maintained to the highest standards and equipped with cutting-edge technology."
      >
        <Link
          to="/fleet/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          Book a Vehicle <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* Stats */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {s.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Fleet Categories
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Specialized Vehicles for <span className="text-gradient-gold">Every Need</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleCategories.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="glass-strong rounded-3xl overflow-hidden ring-gold-hover flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute top-3 left-3 glass-gold w-11 h-11 rounded-xl flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-medium">
                      {v.count}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold mb-3">{v.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                      {v.specs.map((spec) => (
                        <li key={spec} className="flex gap-2">
                          <span className="text-primary mt-0.5">•</span> {spec}
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
              Need a <span className="text-gradient-gold">Specific Vehicle?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tell us your cargo requirements and we'll match you with the perfect vehicle from our
              diverse fleet.
            </p>
            <Link
              to="/fleet/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Request Vehicle <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
