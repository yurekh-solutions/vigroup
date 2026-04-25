import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Factory,
  Globe,
  Leaf,
  Lightbulb,
  Package,
  Recycle,
  Shield,
  Target,
  TreePine,
  Users,
  Zap,
} from "lucide-react";
import hero from "@/assets/gallery-factory-floor.jpg";
import boxElec from "@/assets/industry-electricals.jpg";
import boxGift from "@/assets/industry-gifting.jpg";
import boxPharma from "@/assets/industry-pharma.jpg";
import galleryFactory from "@/assets/gallery-factory-floor.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/packaging/about")({
  head: () => ({
    meta: [
      { title: "About Vi Packaging Solutions — Corrugated Box Manufacturer in India" },
      {
        name: "description",
        content:
          "Learn about Vi Packaging Solutions — a premier corrugated box manufacturer in Mumbai, India. Committed to quality, innovation, sustainability, and customer satisfaction.",
      },
    ],
  }),
  component: PackagingAbout,
});

const milestones = [
  { year: "2008", title: "Founded", desc: "Vi Packaging Solutions established in Mumbai." },
  {
    year: "2012",
    title: "First Expansion",
    desc: "Scaled to 15,000 sq ft facility with automated corrugation line.",
  },
  {
    year: "2016",
    title: "Multi-Color Printing",
    desc: "Added 6-color flexo & UV printing capabilities.",
  },
  {
    year: "2019",
    title: "ISO Certified",
    desc: "Achieved ISO 9001:2015 quality management certification.",
  },
  {
    year: "2022",
    title: "Eco Initiative",
    desc: "Launched 100% recyclable packaging line with FSC-certified materials.",
  },
  {
    year: "2025",
    title: "50M+ Boxes",
    desc: "Crossed 50 million boxes delivered milestone across 20+ countries.",
  },
];

const sustainability = [
  {
    icon: Recycle,
    title: "100% Recyclable",
    desc: "All our boxes are fully recyclable and biodegradable.",
  },
  {
    icon: TreePine,
    title: "FSC Certified",
    desc: "Raw materials sourced from responsibly managed forests.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Inks",
    desc: "Water-based, non-toxic inks for all printed packaging.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Solar-powered facility reducing carbon footprint by 40%.",
  },
];

function PackagingAbout() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="About Us"
        height="md"
        tint="oklch(0.75 0.12 145 / 20%)"
        title={
          <>
            Making Sustainable Packaging <br />
            <span className="text-gradient-gold">for a Greener Future</span>
          </>
        }
        subtitle="We aim for balance by making sustainable packaging solutions as well as making durable corrugated boxes that fulfill our clients' requirements."
      />

      {/* Company Overview */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-6">
                Our Story
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Vi Packaging <span className="text-gradient-gold">Solutions</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Vi Packaging Solutions is a premier manufacturer of corrugated boxes based in Mumbai,
                India. With an unwavering commitment to excellence and innovative packaging
                solutions, we have established ourselves as a trusted name in the industry.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                We specialize in manufacturing customized corrugated boxes of various sizes, designs,
                and colors, catering to diverse packaging needs across different industries —
                electronics, pharmaceuticals, food & beverage, gifting, kitchen appliances, and
                industrial sectors.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our state-of-the-art manufacturing facility is equipped with cutting-edge machinery
                and technology, enabling us to produce high-quality corrugated boxes that meet the
                most stringent industry standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={galleryFactory}
                  alt="Factory floor"
                  className="rounded-2xl w-full h-48 object-cover"
                />
                <img
                  src={boxElec}
                  alt="Electronics packaging"
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={boxPharma}
                  alt="Pharma packaging"
                  className="rounded-2xl w-full h-64 object-cover"
                />
                <img
                  src={boxGift}
                  alt="Gift packaging"
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Package, num: "50M+", label: "Boxes Delivered" },
            { icon: Globe, num: "20+", label: "Countries Served" },
            { icon: Factory, num: "15,000", label: "Sq Ft Facility" },
            { icon: Award, num: "15+", label: "Years Experience" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <Icon className="text-primary" size={28} />
                <div className="font-display text-3xl font-bold text-gradient-gold">{s.num}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Quality First
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Commitment to <span className="text-gradient-gold">Quality</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl sm:rounded-3xl p-8 ring-gold-hover">
              <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-6">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Manufacturing Excellence</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "State-of-the-art machinery with cutting-edge technology",
                  "Skilled professionals combining traditional craftsmanship with modern techniques",
                  "Strict quality control measures at every production stage",
                  "Finest raw materials sourced for durability, strength, and eco-friendliness",
                  "Precision techniques ensuring optimal product protection",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl sm:rounded-3xl p-8 ring-gold-hover">
              <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">Our Mission & Vision</h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Mission:</strong> To deliver innovative,
                  sustainable, and high-quality corrugated packaging solutions that protect products,
                  enhance brands, and exceed client expectations.
                </p>
                <p>
                  <strong className="text-foreground">Vision:</strong> To be the most trusted and
                  preferred corrugated packaging partner in India — known for quality consciousness,
                  innovation, and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Core Values
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              What Drives <span className="text-gradient-gold">Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Quality Consciousness",
                desc: "High-quality corrugated box and packaging products meeting client needs and expectations.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Research and development of new packaging technologies and sustainable solutions.",
              },
              {
                icon: Leaf,
                title: "Environmentally Conscious",
                desc: "Eco-friendly materials and processes, minimizing waste and carbon footprint.",
              },
              {
                icon: Zap,
                title: "Efficiency",
                desc: "Efficient production and timely delivery meeting supply chain needs.",
              },
              {
                icon: Users,
                title: "Expertise",
                desc: "Team of skilled professionals with expertise in packaging technologies.",
              },
              {
                icon: Target,
                title: "Customization",
                desc: "Capability to tailor corrugated boxes to distinctive client requirements.",
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass rounded-2xl sm:rounded-3xl p-7 ring-gold-hover">
                  <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Milestones & <span className="text-gradient-gold">Growth</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="glass rounded-2xl p-6 ring-gold-hover inline-block">
                      <h3 className="font-display text-lg font-bold mb-1">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-full glass-gold flex items-center justify-center shrink-0 z-10">
                    <span className="font-display text-sm font-bold text-primary">{m.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Sustainability
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Green Packaging for a <span className="text-gradient-gold">Greener Future</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="glass-strong rounded-2xl sm:rounded-3xl p-7 text-center ring-gold-hover"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl glass-gold flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-base font-bold mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{s.desc}</p>
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
            Ready to Partner {"  "}
            <span className="text-gradient-gold">With Us?</span>
          </h2>
          <p className="relative mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Let us design the perfect corrugated packaging solution for your products. Get in touch
            today.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/packaging/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Let&apos;s Talk <ArrowRight size={18} />
            </a>
            <a
              href="/packaging/industries"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-foreground font-semibold hover:bg-white/10 transition"
            >
              View Industry Solutions <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
