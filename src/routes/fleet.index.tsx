import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Snowflake,
  FlaskConical,
  Container,
  Truck,
  Boxes,
  Users,
  ArrowRight,
  CheckCircle2,
  Thermometer,
  Navigation,
  Gauge,
  MapPin,
} from "lucide-react";
import hero from "@/assets/hero-fleet.jpg";
import cold from "@/assets/fleet-cold.jpg";
import chemical from "@/assets/fleet-chemical.jpg";
import container from "@/assets/fleet-container.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/fleet/")({
  head: () => ({
    meta: [
      {
        title: "Vi Fleet Pvt. Ltd. — Cold Chain & Temperature-Controlled Logistics India",
      },
      {
        name: "description",
        content:
          "Vi Fleet specializes in cold chain logistics, refrigerated transport, temperature-controlled trucks, chemical transport, and container trailers across India.",
      },
    ],
  }),
  component: FleetIndexPage,
});

const services = [
  {
    icon: Snowflake,
    image: cold,
    title: "Cold Chain Logistics",
    temp: "-25°C to +25°C",
    desc: "Specialized refrigerated trucks and reefer containers with advanced temperature control for pharmaceuticals, vaccines, frozen foods, and dairy.",
    points: [
      "Multi-temperature zone vehicles",
      "GPS + temperature real-time tracking",
      "Pharma & vaccine compliant",
      "Frozen & chilled cargo expertise",
      "Cold storage transshipment",
    ],
  },
  {
    icon: Boxes,
    image: container,
    title: "Dry Cargo Transport",
    temp: "Ambient",
    desc: "Secure, efficient road transport for food grains, spices, FMCG, textiles, and dry goods with zero contamination risk.",
    points: [
      "FTL & LTL dry cargo options",
      "Food-grade compliant vehicles",
      "Secure sealing & tamper proofing",
      "Pan-India network coverage",
      "Express & economy services",
    ],
  },
  {
    icon: FlaskConical,
    image: chemical,
    title: "Chemical Transport",
    temp: "Ambient / Controlled",
    desc: "Hazardous and non-hazardous chemicals transported safely under strict DGFT, ADR, and local regulatory compliance.",
    points: [
      "Hazmat certified drivers",
      "ADR & DGFT compliant",
      "Spill containment systems",
      "Emergency response protocols",
      "Industrial chemical expertise",
    ],
  },
  {
    icon: Truck,
    image: cold,
    title: "Industrial Materials",
    temp: "Ambient",
    desc: "Timely delivery of heavy machinery, raw materials, automotive parts, and finished goods with specialized trailers.",
    points: [
      "Flatbed & low-bed trailers",
      "Oversized cargo handling",
      "Hydraulic axle trailers",
      "Factory-to-site delivery",
      "Project cargo support",
    ],
  },
  {
    icon: Container,
    image: container,
    title: "Container Trailers",
    temp: "Ambient / Reefer",
    desc: "20ft, 40ft, and high-cube container trailers for port-to-warehouse and intercity movement across India.",
    points: [
      "20ft & 40ft container trailers",
      "Reefer container movement",
      "Port connectivity — JNPT, Mundra, Chennai",
      "Tri-axle & multi-axle options",
      "Flexible hire terms",
    ],
  },
  {
    icon: Users,
    image: chemical,
    title: "Diverse Cargo Expertise",
    temp: "All Ranges",
    desc: "Versatile fleet and experienced team handling any type of cargo with precision and care.",
    points: [
      "Electronics & fragile cargo",
      "Bulk commodities",
      "Automotive parts",
      "Textiles & garments",
      "E-commerce fulfillment",
    ],
  },
];

const coverage = [
  { city: "Mumbai", role: "Head Office & Western Hub" },
  { city: "Delhi NCR", role: "Northern Distribution Center" },
  { city: "Bangalore", role: "Southern Hub" },
  { city: "Chennai", role: "Port & Southern Corridor" },
  { city: "Hyderabad", role: "Central India Network" },
  { city: "Ahmedabad", role: "Western Corridor" },
  { city: "Kolkata", role: "Eastern Hub" },
  { city: "Pune", role: "Western Manufacturing Belt" },
];

const why = [
  "Unwavering quality commitment",
  "Cutting-edge temperature control",
  "Real-time GPS & temp tracking",
  "Vast pan-India network",
  "Versatile, modern fleet",
  "Highly experienced & trained team",
  "Regulatory compliance assured",
  "24/7 customer support",
];

function FleetIndexPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Vi Fleet Pvt. Ltd."
        height="lg"
        tint="oklch(0.78 0.13 65 / 22%)"
        title={
          <>
            Your Trusted Partner For <br />
            <span className="text-gradient-gold">Temperature-Controlled Logistics</span>
          </>
        }
        subtitle="Specialized in cold chain, pharmaceutical logistics, chemical transport, and container movement across India with precision, safety, and real-time tracking."
      >
        <Link
          to="/fleet/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          Request a Quote <ArrowRight size={18} />
        </Link>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition"
        >
          Explore Fleet <ArrowRight size={18} />
        </a>
      </PageHero>

      {/* Services */}
      <section id="services" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Services
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Built for <span className="text-gradient-gold">Precision Cargo</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From frozen pharmaceuticals to dry grains and hazardous chemicals — our diverse fleet
              and trained team handle every cargo type with expertise.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="glass-strong rounded-3xl overflow-hidden ring-gold-hover flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute top-3 left-3 glass-gold w-11 h-11 rounded-xl flex items-center justify-center">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Thermometer size={12} className="text-primary" />
                      {s.temp}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {p}
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

      {/* Coverage */}
      <section id="coverage" className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                Pan-India <span className="text-gradient-gold">Network</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Strategic hubs across India ensuring fast, reliable transport to every major city
                and industrial corridor.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {coverage.map((c) => (
                <div
                  key={c.city}
                  className="glass rounded-2xl px-4 py-4 text-center flex flex-col items-center"
                >
                  <MapPin size={16} className="text-primary mb-1" />
                  <div className="font-display text-lg font-bold">{c.city}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    {c.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Why <span className="text-gradient-gold">Vi Fleet</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                A versatile fleet, advanced technology, and a passionate team — purpose-built to
                deliver excellence across India's diverse terrain and climate.
              </p>
              <Link
                to="/fleet/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                Book Transport <ArrowRight size={18} />
              </Link>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {why.map((r) => (
                <li key={r} className="glass rounded-2xl px-4 py-3 text-sm flex items-center gap-2">
                  <CheckCircle2 className="text-primary shrink-0" size={18} /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Technology
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Fleet <span className="text-gradient-gold">Technology</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every vehicle is equipped with advanced tracking and monitoring systems for complete
              visibility and peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Navigation,
                title: "GPS Tracking",
                desc: "Real-time location updates with geofencing alerts and route optimization.",
              },
              {
                icon: Thermometer,
                title: "Temperature Monitoring",
                desc: "Continuous temperature logging with instant alerts for any deviation.",
              },
              {
                icon: Gauge,
                title: "Fleet Analytics",
                desc: "Dashboard reporting on delivery times, fuel efficiency, and vehicle health.",
              },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="glass-strong rounded-3xl p-7 text-center ring-gold-hover">
                  <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
