import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Leaf,
  Lightbulb,
  Settings,
  Wrench,
  Zap,
  Recycle,
  TreePine,
  Printer,
  Ruler,
  Box,
  ShieldCheck,
  CheckCircle2,
  Package,
  Truck,
  Globe,
  Clock,
  Gift,
  Star,
  Users,
  Factory,
  Paintbrush,
  Shield,
} from "lucide-react";
import hero from "@/assets/hero-package.jpg";
import boxElec from "@/assets/industry-electricals.jpg";
import boxGift from "@/assets/industry-gifting.jpg";
import boxPharma from "@/assets/industry-pharma.jpg";
import boxFood from "@/assets/industry-food.jpg";
import boxKitchen from "@/assets/industry-kitchen.jpg";
import boxIndustrial from "@/assets/industry-other.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/packaging/")({
  head: () => ({
    meta: [
      {
        title: "Vi Packaging Solutions — Custom Corrugated Box Manufacturer India",
      },
      {
        name: "description",
        content:
          "Leading corrugated box manufacturer in Mumbai, India. Custom packaging boxes, sustainable eco-friendly solutions, printed branded packaging for electronics, pharma, food, and industrial sectors.",
      },
      {
        name: "keywords",
        content:
          "corrugated box manufacturer, custom packaging boxes india, sustainable packaging, eco friendly boxes, packaging design services, product packaging company, branded packaging, protective packaging, cardboard box supplier, custom printed boxes, industrial packaging, food packaging boxes, pharmaceutical packaging, export packaging, packaging company mumbai",
      },
      { property: "og:title", content: "Vi Packaging Solutions — Custom Corrugated Boxes" },
      {
        property: "og:description",
        content:
          "Elevate your brand with customized corrugated boxes — engineered to perfection for every product, every industry.",
      },
    ],
  }),
  component: PackagingHome,
});

const stats = [
  { icon: Package, num: "50M+", label: "Boxes Delivered" },
  { icon: Globe, num: "20+", label: "Countries Served" },
  { icon: Clock, num: "24/7", label: "Production Support" },
  { icon: Award, num: "15+", label: "Years Experience" },
];

const values = [
  {
    i: Award,
    t: "Quality Consciousness",
    d: "High-quality corrugated boxes that exceed client expectations. Rigorous QC at every production stage ensuring zero-defect delivery.",
  },
  {
    i: Lightbulb,
    t: "Innovation",
    d: "Researching new packaging technologies, structural designs, and sustainable materials to meet modern industry demands.",
  },
  {
    i: Leaf,
    t: "Eco-Conscious",
    d: "Sustainable, eco-friendly materials and processes that minimize environmental impact. 100% recyclable and biodegradable options.",
  },
  {
    i: Zap,
    t: "Efficiency",
    d: "Streamlined production delivering boxes on time, every time — keeping your supply chain moving without delays.",
  },
  {
    i: Wrench,
    t: "Expertise",
    d: "Skilled professionals with deep mastery in corrugated engineering and latest packaging technologies.",
  },
  {
    i: Settings,
    t: "Customization",
    d: "Boxes tailored to your exact specifications — size, print, strength, and finish — no compromises.",
  },
];

const services = [
  {
    icon: Box,
    image: boxElec,
    title: "Electronics Packaging",
    tag: "Anti-Static. Cushioned. Secure.",
    desc: "Specialized packaging for sensitive electronic devices with anti-static properties, custom foam inserts, and multi-layer protection.",
    points: [
      "Anti-static corrugated materials",
      "Custom foam & honeycomb inserts",
      "Multi-layer cushioning",
      "Drop-tested for safety",
    ],
  },
  {
    icon: Package,
    image: boxPharma,
    title: "Pharmaceutical Packaging",
    tag: "Compliant. Tamper-Evident. Safe.",
    desc: "GMP-compliant packaging solutions for medicines, medical devices, and healthcare products with tamper-evident features.",
    points: [
      "GMP & FDA compliant materials",
      "Tamper-evident seals",
      "Serial number printing",
      "Temperature-sensitive options",
    ],
  },
];

const moreServices = [
  {
    icon: Box,
    title: "Food Packaging",
    desc: "Food-grade, grease-resistant containers.",
  },
  {
    icon: Gift,
    title: "Premium Gift Boxes",
    desc: "Luxury rigid & folding gift packaging.",
  },
  {
    icon: Truck,
    title: "Industrial Packaging",
    desc: "Heavy-duty export-grade boxes.",
  },
  {
    icon: Printer,
    title: "Printed Packaging",
    desc: "High-quality flexo & offset printing.",
  },
];

const industries = [
  {
    name: "Electronics",
    img: boxElec,
    desc: "Anti-static, cushioned packaging for sensitive devices and components.",
  },
  {
    name: "Pharmaceuticals",
    img: boxPharma,
    desc: "Tamper-evident, compliant packaging for medicines and medical devices.",
  },
  {
    name: "Food & Beverage",
    img: boxFood,
    desc: "Food-grade, grease-resistant containers and bakery boxes.",
  },
  {
    name: "Gifting & Retail",
    img: boxGift,
    desc: "Premium rigid and folding gift boxes with foil stamping.",
  },
  {
    name: "Kitchen Appliances",
    img: boxKitchen,
    desc: "Heavy-duty double-wall boxes for bulky kitchen items.",
  },
  {
    name: "Industrial",
    img: boxIndustrial,
    desc: "Export-grade packaging for machinery, auto parts, and hardware.",
  },
];

const process = [
  {
    step: "01",
    title: "Consult",
    desc: "Understand your product dimensions, weight, branding, and protection requirements.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Engineer structural design, select materials, and create artwork proofs.",
  },
  {
    step: "03",
    title: "Sample",
    desc: "Produce prototypes for testing, validation, and your approval.",
  },
  {
    step: "04",
    title: "Produce",
    desc: "Mass production with strict QC and on-time dispatch to your facility.",
  },
];

function PackagingHome() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Vi Packaging Solutions"
        height="lg"
        tint="oklch(0.75 0.12 145 / 20%)"
        title={
          <>
            Elevate Your Brand With <br />
            <span className="text-gradient-gold">Customized Corrugated Boxes</span>
          </>
        }
        subtitle="Premier corrugated box manufacturer in Mumbai, India — engineered to perfection for every product, every industry. Sustainable, durable, and beautifully printed packaging solutions."
      >
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          View Our Solutions <ArrowRight size={18} />
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition"
        >
          Get a Quote <ArrowRight size={18} />
        </a>
      </PageHero>

      {/* Stats bar */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="mx-auto max-w-6xl glass-strong rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
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

      {/* Values grid */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Values
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Engineered for <span className="text-gradient-gold">Excellence</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              Six core principles guide everything we do — from raw material selection to final
              delivery.
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.i;
              return (
                <div
                  key={v.t}
                  className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-7 ring-gold-hover"
                >
                  <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{v.t}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — Electronics & Pharma */}
      <section id="services" className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Services Overview
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Packaging <span className="text-gradient-gold">Solutions</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden ring-gold-hover flex flex-col"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-3 left-4 glass-gold w-12 h-12 rounded-2xl flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <h3 className="font-display text-xl sm:text-2xl font-bold">{s.title}</h3>
                    <p className="text-primary text-sm mt-1 mb-4 sm:mb-5 italic">{s.tag}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mt-auto">
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
          <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moreServices.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="glass rounded-2xl p-4 sm:p-5 flex items-start gap-3 ring-gold-hover"
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

          <div className="text-center mt-8 sm:mt-10">
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              View All Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="solutions" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Industry Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Boxes for <span className="text-gradient-gold">Every Industry</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              Specialized corrugated packaging tailored to the unique demands of each sector —
              compliant, protective, and brand-enhancing.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div
                key={i.name}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden glass-strong ring-gold-hover"
              >
                <img
                  src={i.img}
                  alt={i.name}
                  loading="lazy"
                  className="h-56 sm:h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {i.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary mt-1">
                    Custom Packaging
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {i.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              How We Work
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-center ring-gold-hover"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold mb-3">
                  {p.step}
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_oklch(0.82_0.15_85_/_30%),_transparent_60%)]" />
          <h2 className="relative font-display text-xl sm:text-2xl md:text-3xl font-bold">
            Sustainable Packaging  {" "}
            <span className="text-gradient-gold">greener tomorrow?</span>
          </h2>
          <p className="relative mt-3 sm:mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of brands switching to eco-friendly corrugated packaging. Reduce your
            carbon footprint without compromising on quality or aesthetics.
          </p>
          <Link
            to="/packaging/contact"
            className="relative inline-flex mt-6 sm:mt-8 items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition text-sm sm:text-base"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Client Testimonials
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Trusted by <span className="text-gradient-gold">Industry Leaders</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Sharma",
                role: "Supply Chain Manager, Electronics Corp",
                quote:
                  "Vi Packaging delivered custom anti-static boxes that reduced our damage rate by 90%. Their attention to detail is unmatched.",
              },
              {
                name: "Priya Patel",
                role: "Procurement Head, Pharma Industries",
                quote:
                  "Fully compliant, tamper-evident packaging delivered on tight timelines. Vi Packaging is our go-to partner for all pharmaceutical boxes.",
              },
              {
                name: "Amit Desai",
                role: "Founder, Premium Gift Co.",
                quote:
                  "The quality of print and finish on our gift boxes is exceptional. Customers always compliment the unboxing experience.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 ring-gold-hover flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Why Vi Packaging
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Choose <span className="text-gradient-gold">Us?</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Factory,
                title: "State-of-the-Art Facility",
                desc: "Cutting-edge machinery and technology for precision manufacturing at scale.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Skilled professionals combining traditional craftsmanship with modern techniques.",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                desc: "Strict QC at every stage — from raw material sourcing to final dispatch.",
              },
              {
                icon: Paintbrush,
                title: "Custom Design",
                desc: "Full in-house design team for structural engineering and artwork creation.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-center ring-gold-hover"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl glass-gold flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_oklch(0.82_0.15_85_/_40%),_transparent_60%)]" />
          <h2 className="relative font-display text-xl sm:text-2xl md:text-3xl font-bold">
            Are You Looking for Tailored <br />
            <span className="text-gradient-gold">Corrugated Boxes?</span>
          </h2>
          <p className="relative mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Tell us about your product, quantity, and branding requirements. Our team will design
            the perfect packaging solution for your business.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/packaging/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Let&apos;s Talk <ArrowRight size={18} />
            </Link>
            <Link
              to="/packaging/industries"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition"
            >
              View Industry Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
