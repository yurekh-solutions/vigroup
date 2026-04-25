import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Award, Users, Target, Heart } from "lucide-react";
import hero from "@/assets/gallery-factory-floor.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/fleet/about")({
  head: () => ({
    meta: [
      { title: "About Vi Fleet Pvt. Ltd. — Temperature-Controlled Logistics Experts" },
      {
        name: "description",
        content:
          "Learn about Vi Fleet's journey, mission, and commitment to excellence in temperature-controlled logistics across India.",
      },
    ],
  }),
  component: FleetAboutPage,
});

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "Uncompromising quality in every delivery, every time.",
  },
  {
    icon: Users,
    title: "People First",
    desc: "Investing in our team's growth and safety above all.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Exact temperature control and on-time delivery guaranteed.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Transparent operations and honest partnerships.",
  },
];

const milestones = [
  { year: "2015", event: "Vi Fleet founded with 10 refrigerated trucks" },
  { year: "2017", event: "Expanded to 50+ vehicles across Western India" },
  { year: "2019", event: "Launched chemical transport division" },
  { year: "2021", event: "Pan-India network with 200+ fleet strength" },
  { year: "2023", event: "Advanced GPS & temperature monitoring deployed" },
  { year: "2025", event: "300+ modern fleet serving all major industries" },
];

function FleetAboutPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="About Vi Fleet"
        height="md"
        tint="oklch(0.78 0.13 65 / 22%)"
        title={
          <>
            Moving India's Critical Cargo <br />
            <span className="text-gradient-gold">With Precision & Care</span>
          </>
        }
        subtitle="From a small fleet of refrigerated trucks to a pan-India logistics powerhouse — our journey is driven by commitment to excellence."
      >
        <Link
          to="/fleet/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
        >
          Partner With Us <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* Our Story */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Story
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              A Journey of <span className="text-gradient-gold">Growth & Innovation</span>
            </h2>
          </div>
          <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Vi Fleet Pvt. Ltd. was established with a singular vision: to provide India's
              industries with reliable, temperature-controlled logistics that they could trust with
              their most critical cargo.
            </p>
            <p>
              What started as a modest fleet of 10 refrigerated trucks serving the western region has
              grown into a comprehensive logistics network with 300+ modern vehicles operating
              across India. Our expansion has been fueled by an unwavering commitment to quality,
              safety, and customer satisfaction.
            </p>
            <p>
              Today, Vi Fleet is a trusted partner for pharmaceutical companies, food producers,
              chemical manufacturers, and industrial enterprises — delivering their goods with
              precision timing and exact temperature control that protects product integrity from
              pickup to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every mile we travel.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass-strong rounded-3xl p-7 text-center ring-gold-hover">
                  <div className="w-14 h-14 rounded-2xl glass-gold flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient-gold">Milestones</span>
            </h2>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="glass rounded-2xl px-6 py-5 flex items-center gap-4"
              >
                <div className="glass-gold px-4 py-2 rounded-lg font-display font-bold text-primary">
                  {m.year}
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-muted-foreground">{m.event}</p>
                </div>
                <CheckCircle2 className="text-primary shrink-0 hidden md:block" size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient-gold">Partner With Us?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Vi Fleet with their critical cargo. Let's
              discuss how we can support your logistics needs.
            </p>
            <Link
              to="/fleet/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
