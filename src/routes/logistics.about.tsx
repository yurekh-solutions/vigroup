import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-logistics.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/logistics/about")({
  component: LogisticsAbout,
});
function LogisticsAbout() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="About Us"
        height="md"
        tint="oklch(0.75 0.12 85 / 22%)"
        title={
          <>
            Built on trust. <br />
            <span className="text-gradient-gold">Driven by delivery.</span>
          </>
        }
        subtitle="Over 15 years of moving the world with precision."
      />

      {/* Story */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              From Mumbai to the <span className="text-gradient-gold">World</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              Vi Logistics Solutions was founded with a simple belief: freight forwarding should be
              transparent, reliable, and tailored to each client. What started as a small operation
              in Thane has grown into a full-service logistics powerhouse with a presence across
              100+ countries.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Today we manage air cargo, ocean freight, customs clearance, warehousing, and
              last-mile delivery — all under one roof. Our clients range from startups shipping
              their first container to Fortune 500 companies with complex global supply chains.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
  <img
    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=500&q=80"
    alt="Port operations"
    className="rounded-2xl h-40 sm:h-48 w-full object-cover"
  />
  <img
    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80"
    alt="Warehouse"
    className="rounded-2xl h-40 sm:h-48 w-full object-cover mt-6"
  />
<img
  src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=500&q=80"
  alt="Cargo shipping"
  className="rounded-2xl h-40 sm:h-48 w-full object-cover"
/>
  <img
    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=80"
    alt="Logistics team"
    className="rounded-2xl h-40 sm:h-48 w-full object-cover mt-6"
  />
</div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: Target,
                title: "Mission",
                desc: "To deliver seamless, cost-effective logistics solutions that empower businesses to grow beyond borders.",
              },
              {
                icon: Eye,
                title: "Vision",
                desc: "To be India's most trusted freight partner, known for reliability, transparency, and innovation.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We pursue operational excellence in every shipment — no exceptions, no compromises.",
              },
              {
                icon: Users,
                title: "People First",
                desc: "Our team and our clients are at the center of every decision we make.",
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-center ring-gold-hover"
                >
                  <div className="w-12 h-12 rounded-2xl glass-gold flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline with Images */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-flex glass-gold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3 sm:mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Building <span className="text-gradient-gold">Excellence</span> Over Time
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              From humble beginnings to a global logistics leader — our story of growth and
              innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-10 md:space-y-16">
              {[
                {
                  year: "2009",
                  title: "The Beginning",
                  desc: "Our story began with a single truck and an unwavering vision to transform logistics across India. What started as a small regional operation quickly evolved into something much greater, driven by our commitment to reliability, innovation, and customer success.",
                  image:
                    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
                  icon: "🚛",
                },
                {
                  year: "2012",
                  title: "Going Global",
                  desc: "We expanded beyond borders, launching international air freight services that connected India to over 20 countries. This milestone marked our transition from a domestic carrier to a global logistics partner.",
                  image:
                    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
                  icon: "✈️",
                },
                {
                  year: "2015",
                  title: "Ocean Freight Launch",
                  desc: "The launch of our ocean freight division brought comprehensive FCL and LCL shipping solutions across major global trade routes, providing cost-effective alternatives for bulk cargo transportation.",
                  image:
                    "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80",
                  icon: "🚢",
                },
                {
                  year: "2018",
                  title: "Digital Transformation",
                  desc: "Embracing the digital revolution, we invested heavily in technology to bring real-time tracking, automated customs clearance, and complete visibility over shipments — 24/7, from anywhere.",
                  image:
                    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
                  icon: "💻",
                },
                {
                  year: "2021",
                  title: "100+ Countries",
                  desc: "Our dedication to excellence culminated in serving clients in over 100 countries worldwide. Today, Vi Logistics stands as a trusted name in global freight.",
                  image:
                    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
                  icon: "🌍",
                },
                {
                  year: "2024",
                  title: "Green Logistics",
                  desc: "We're committed to sustainable logistics practices with carbon-neutral shipping options and optimized routes to reduce emissions — because moving your world shouldn't cost the earth.",
                  image:
                    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
                  icon: "🌱",
                },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full md:w-1/2">
                    <div
                      className={`glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 ring-gold-hover transition-all duration-300 hover:scale-[1.02] ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="text-3xl sm:text-4xl">{item.icon}</span>
                        <div>
                          <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient-gold">
                            {item.year}
                          </div>
                          <h3 className="font-display text-base sm:text-lg md:text-xl font-bold mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

                  {/* Image Card */}
                 <div className="flex-1 w-full md:w-1/2">
  <div className="relative group w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-2xl sm:rounded-3xl ring-gold-hover">
    <img
      src={item.image}
      alt={item.title}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
        <div className="text-white font-display text-sm sm:text-base md:text-lg font-bold">
          {item.title}
        </div>
        <div className="text-white/80 text-[10px] sm:text-xs mt-1">
          {item.year}
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 ring-gold-hover">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                    Years
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                    Countries
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                    Shipments
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                    On-Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Certifications */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Certifications & <span className="text-gradient-gold">Memberships</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {["ISO 9001:2015", "IATA Accredited", "FIATA Member", "MTO Licensed"].map((c) => (
              <div
                key={c}
                className="glass rounded-xl sm:rounded-2xl px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Partner with <span className="text-gradient-gold">Vi Logistics</span>
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
                Experience freight forwarding that puts your business first.
              </p>
              <Link
                to="/logistics/quote"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
