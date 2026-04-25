import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  Ship,
  Truck,
  TrainFront,
  Warehouse,
  FileCheck,
  ArrowRight,
  Globe,
  Clock,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero-logistic.jpg";
import air from "@/assets/service-air.jpg";
import ocean from "@/assets/service-ocean.jpg";
import { PageHero } from "@/components/PageHero";
import airImg from "@/assets/service-air.jpg";

export const Route = createFileRoute("/logistics/")({
  component: LogisticsHome,
});

const services = [
  {
    icon: Plane,
    image: air,
    title: "Air Freight",
    tag: "Fast. Flexible. Global.",
    desc: "Time-critical air cargo solutions with direct and consolidated services to 100+ destinations. Real-time tracking and customs coordination.",
    points: [
      "Door-to-door air cargo solutions",
      "Real-time shipment tracking",
      "Express & standard freight options",
      "Customs handling",
    ],
  },
  {
    icon: Ship,
    image: ocean,
    title: "Ocean Freight",
    tag: "Efficient. Economical. Reliable.",
    desc: "Full container load (FCL) and less-than-container load (LCL) shipping across major global trade lanes with competitive rates.",
    points: [
      "FCL & LCL shipping worldwide",
      "Secure cargo consolidation",
      "End-to-end supply chain support",
      "Customs documentation",
    ],
  },
];

const moreServices = [
  {
    icon: Truck,
    title: "Road Freight",
    desc: "Pan-India FTL & LTL transport with GPS tracking.",
  },
  {
    icon: TrainFront,
    title: "Rail Freight",
    desc: "Cost-effective bulk cargo movement across India.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Licensed brokers for import & export documentation.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & 3PL",
    desc: "Bonded storage, inventory management & fulfillment.",
  },
];

const reasons = [
  "98% On-time Delivery",
  "Serving 100+ Countries",
  "24/7 Shipment Visibility",
  "End-to-End Customs Expertise",
  "Dedicated Account Managers",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    title: "Air Cargo Operations",
    desc: "Time-critical shipments handled with precision at major airports worldwide.",
  },
  {
    src: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80",
    title: "Ocean Freight",
    desc: "Full container load shipping across major global trade lanes.",
  },
  {
    src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
    title: "Port Operations",
    desc: "Efficient loading and unloading at strategic port locations.",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    title: "Warehousing",
    desc: "State-of-the-art storage facilities with real-time inventory management.",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    title: "Road Freight",
    desc: "Pan-India FTL & LTL transport with GPS tracking.",
  },
  {
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    title: "Global Network",
    desc: "Connected to every major trade lane and market worldwide.",
  },
  {
    src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    title: "Container Terminal",
    desc: "High-volume container handling and intermodal transfer.",
  },
  {
    src: airImg,
    title: "Maritime Logistics",
    desc: "Optimized sea routes for efficient cargo delivery.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechCorp India",
    text: "Vi Logistics transformed our supply chain. Their air freight service is incredibly fast and reliable.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    company: "Global Exports Ltd",
    text: "Outstanding ocean freight solutions. We've reduced shipping costs by 30% with their optimized routes.",
    rating: 4,
  },
  {
    name: "Amit Patel",
    company: "Pharma Solutions",
    text: "Their cold chain expertise is unmatched. Temperature-controlled logistics handled perfectly.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    company: "European Imports",
    text: "Customs clearance used to be a nightmare. Vi Logistics made it seamless and stress-free.",
    rating: 4,
  },
  {
    name: "David Chen",
    company: "Asia Trade Co",
    text: "Real-time tracking gives us complete visibility. Best logistics partner we've worked with.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Retail Giants",
    text: "Their warehousing and 3PL solutions scaled perfectly with our e-commerce growth.",
    rating: 3,
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understand your cargo, timeline, and budget requirements.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Design the optimal route and mode mix for cost-efficiency.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Pick up, transport, clear customs, and deliver — seamlessly.",
  },
  {
    step: "04",
    title: "Visibility",
    desc: "Track every milestone with our digital platform, 24/7.",
  },
];

function LogisticsHome() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Vi Logistics Solutions Pvt. Ltd."
        height="lg"
        tint="oklch(0.75 0.12 85 / 12%)"
        title={
          <>
            We move your world, <br />
            with <span className="text-gradient-gold">precision and speed.</span>
          </>
        }
        subtitle="From factory to final mile – worldwide."
      >
        <a
          href="/logistics/quote"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          Get a Custom Quote <ArrowRight size={18} />
        </a>
      </PageHero>

      {/* Stats bar */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="mx-auto max-w-6xl glass-strong rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Globe, num: "100+", label: "Countries Served" },
            { icon: Clock, num: "24/7", label: "Tracking Support" },
            { icon: ShieldCheck, num: "98%", label: "On-Time Delivery" },
            { icon: BarChart3, num: "15+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <s.icon className="text-primary mb-1" size={22} />
              <div className="font-display text-2xl font-bold text-gradient-gold">{s.num}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — Air & Ocean */}
      <section id="services" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Services Overview
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              End-to-end <span className="text-gradient-gold">freight solutions</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
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
                    <div className="absolute bottom-3 left-4 glass-gold w-12 h-12 rounded-2xl flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <p className="text-primary text-sm mt-1 mb-5 italic">{s.tag}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-2.5 text-sm text-muted-foreground mt-auto">
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

          {/* More services */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moreServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="glass rounded-2xl p-5 flex items-start gap-3 ring-gold-hover"
                >
                  <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold">{s.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="/logistics/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              View All Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">
                Why <span className="text-gradient-gold">Choose Us</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Decades of expertise, a global network, and a relentless focus on your shipment.
              </p>
              <a
                href="/logistics/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                Talk to Our Team <ArrowRight size={18} />
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {reasons.map((r) => (
                <li key={r} className="glass rounded-2xl px-4 py-3 text-sm flex items-center gap-2">
                  <CheckCircle2 className="text-primary shrink-0" size={18} /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-flex glass-gold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3 sm:mb-4">
              Gallery
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
              Our <span className="text-gradient-gold">World in Motion</span>
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto px-2">
              A glimpse into the global operations that keep supply chains moving — from cargo
              planes to container ships.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {gallery.map((item, i) => (
              <div
                key={i}
                className="relative group w-full aspect-square overflow-hidden rounded-xl sm:rounded-2xl ring-gold-hover transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs opacity-90 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              How We Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="glass-strong rounded-3xl p-7 text-center ring-gold-hover"
              >
                <div className="font-display text-4xl font-bold text-gradient-gold mb-3">
                  {p.step}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-flex glass-gold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3 sm:mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Trusted by leading businesses worldwide for reliable logistics solutions.
            </p>
          </div>

          {/* Forward Marquee */}
          <div className="relative mb-4 sm:mb-6 md:mb-8 overflow-hidden">
            <div className="flex gap-3 sm:gap-4 md:gap-6 animate-marquee-forward">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`forward-${i}`}
                  className="glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-[250px] sm:w-[280px] md:w-[300px] h-[180px] sm:h-[190px] md:h-[200px] flex-shrink-0 flex flex-col justify-between"
                >
                  <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3 md:mb-4 flex-1 line-clamp-3">
                    "{t.text}"
                  </p>
                  <div>
                    <div className="font-display text-xs sm:text-sm font-bold">{t.name}</div>
                    <div className="text-[10px] sm:text-xs text-primary">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reverse Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 sm:gap-4 md:gap-6 animate-marquee-reverse">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`reverse-${i}`}
                  className="glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-[250px] sm:w-[280px] md:w-[300px] h-[180px] sm:h-[190px] md:h-[200px] flex-shrink-0 flex flex-col justify-between"
                >
                  <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3 md:mb-4 flex-1 line-clamp-3">
                    "{t.text}"
                  </p>
                  <div>
                    <div className="font-display text-xs sm:text-sm font-bold">{t.name}</div>
                    <div className="text-[10px] sm:text-xs text-primary">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
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
                Ready to <span className="text-gradient-gold">ship smarter?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Get a tailored freight quote in minutes. Our team is standing by to optimize your
                supply chain.
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

      {/* Footer */}
     
    </>
  );
}
