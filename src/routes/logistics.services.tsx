import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  Ship,
  Truck,
  TrainFront,
  Warehouse,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Package,
} from "lucide-react";
import hero from "@/assets/cap1.jpg";
import airCargoImg from "@/assets/cap-aircargo.jpg";
import portImg from "@/assets/cap-port.jpg";
import containerImg from "@/assets/fleet-container.jpg";
import oceanImg from "@/assets/service-ocean.jpg";
import customsImg from "@/assets/cap-customs.jpg";
import warehouseImg from "@/assets/cap-warehouse.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/logistics/services")({
  component: LogisticsServices,
});

const allServices = [
  {
    icon: Plane,
    image: airCargoImg,
    title: "Air Freight",
    tag: "Fast. Flexible. Global.",
    desc: "Time-critical air cargo solutions with direct and consolidated services to 100+ destinations. Real-time tracking and customs coordination ensure your cargo reaches its destination on schedule.",
    features: [
      "Door-to-door air cargo solutions",
      "Real-time shipment tracking",
      "Express & standard freight options",
      "Temperature-controlled air transport",
      "Charter services for oversized cargo",
      "Customs handling at origin and destination",
    ],
  },
  {
    icon: Ship,
    image: portImg,
    title: "Ocean Freight",
    tag: "Efficient. Economical. Reliable.",
    desc: "Full container load (FCL) and less-than-container load (LCL) shipping across major global trade lanes. We offer competitive rates, flexible scheduling, and end-to-end supply chain support.",
    features: [
      "FCL & LCL shipping worldwide",
      "Secure cargo consolidation",
      "End-to-end supply chain support",
      "Reefer containers for perishables",
      "Project cargo & breakbulk handling",
      "Customs documentation & clearance",
    ],
  },
  {
    icon: Truck,
    image: containerImg,
    title: "Road Freight",
    tag: "Pan-India Coverage.",
    desc: "Full truckload (FTL) and less-than-truckload (LTL) transport solutions across India. GPS-tracked fleet ensures visibility from pickup to delivery.",
    features: [
      "FTL & LTL across all major cities",
      "GPS-enabled fleet tracking",
      "Express & economy delivery options",
      "Dangerous goods handling",
      "Cross-border road freight",
      "Last-mile delivery solutions",
    ],
  },
  {
    icon: TrainFront,
    image: oceanImg,
    title: "Rail Freight",
    tag: "Cost-Effective Bulk Movement.",
    desc: "Rail-based cargo movement for bulk commodities and containerized freight across India's extensive railway network. Ideal for cost-sensitive, non-urgent shipments.",
    features: [
      "Containerized rail transport",
      "Bulk commodity movement",
      "Nationwide rail network access",
      "Intermodal solutions",
      "Cost-optimized scheduling",
      "Environment-friendly option",
    ],
  },
  {
    icon: FileCheck,
    image: customsImg,
    title: "Customs Clearance",
    tag: "Licensed. Experienced. Fast.",
    desc: "Licensed customs brokers handling import and export documentation, duty calculations, and regulatory compliance. We minimize delays and ensure smooth border crossings.",
    features: [
      "Import & export documentation",
      "Duty drawback & exemption claims",
      "HS code classification",
      "Regulatory compliance consulting",
      "Duty calculation & optimization",
      "AEO & SEZ facilitation",
    ],
  },
  {
    icon: Warehouse,
    image: warehouseImg,
    title: "Warehousing & 3PL",
    tag: "Storage. Inventory. Fulfillment.",
    desc: "Bonded and non-bonded warehousing with inventory management, order fulfillment, and value-added services. Our 3PL solutions scale with your business.",
    features: [
      "Bonded & non-bonded storage",
      "Real-time inventory management",
      "Pick, pack & ship fulfillment",
      "Cold chain warehousing",
      "Value-added services (labelling, kitting)",
      "Returns management",
    ],
  },
];

const industries = [
  "Pharmaceuticals & Healthcare",
  "Automotive & Auto Parts",
  "Electronics & Telecom",
  "Retail & E-Commerce",
  "Food & Beverage",
  "Oil & Gas",
  "Textiles & Apparel",
  "Heavy Machinery",
];

function LogisticsServices() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Our Services"
        height="md"
        tint="oklch(0.75 0.12 85 / 22%)"
        title={
          <>
            Freight solutions <br />
            <span className="text-gradient-gold">for every need.</span>
          </>
        }
        subtitle="Air, ocean, road, rail, customs, and warehousing — all in one place."
      />

      {/* Services Grid */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl space-y-16">
          {allServices.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.title}
                className={`glass-strong rounded-3xl overflow-hidden ring-gold-hover grid md:grid-cols-2 ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                <div
                  className={`relative h-64 md:h-auto overflow-hidden ${isEven ? "" : "md:col-start-2"}`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 md:bg-gradient-to-r md:from-transparent md:to-background/80" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                      <p className="text-primary text-sm italic">{s.tag}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
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

      {/* Industries */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Industries <span className="text-gradient-gold">We Serve</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Specialized logistics solutions for diverse sectors — compliant, secure, and
              efficient.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="glass rounded-2xl px-4 py-3 text-sm font-medium text-center flex items-center justify-center gap-2"
              >
                <Package size={14} className="text-primary shrink-0" />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Global <span className="text-gradient-gold">Coverage</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Connected to every major trade lane and market.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                region: "Asia Pacific",
                countries: "India, China, Singapore, UAE, Japan, Australia",
              },
              { region: "Europe", countries: "Germany, UK, Netherlands, France, Italy, Spain" },
              { region: "North America", countries: "USA, Canada, Mexico" },
              { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait, Oman" },
              { region: "Africa", countries: "South Africa, Kenya, Nigeria, Egypt, Morocco" },
              { region: "South America", countries: "Brazil, Argentina, Chile, Peru, Colombia" },
            ].map((r) => (
              <div key={r.region} className="glass-strong rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-primary" />
                  <h3 className="font-display text-sm font-bold">{r.region}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{r.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Need a custom <span className="text-gradient-gold">solution?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Tell us about your cargo and we will design the perfect logistics plan.
              </p>
              <a
                href="/logistics/quote"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                Request a Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
