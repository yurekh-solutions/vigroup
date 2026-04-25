import { createFileRoute, Link } from "@tanstack/react-router";
import logistics from "@/assets/hero-logistics.jpg";
import packaging from "@/assets/hero-packaging.jpg";
import fleet from "@/assets/hero-fleet.jpg";
import groupLogo from "@/assets/vi-group-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vi Group — Logistics, Packaging & Fleet Solutions" },
      {
        name: "description",
        content:
          "Premium logistics, customized corrugated packaging, and temperature-controlled fleet — Vi Group moves your world worldwide.",
      },
      { property: "og:title", content: "Vi Group — Premium Global Solutions" },
      {
        property: "og:description",
        content: "Three companies, one trusted name — moving your world with precision.",
      },
    ],
  }),
  component: HomePage,
});

const companies = [
  {
    title: "Logistics Solutions Pvt. Ltd.",
    desc: "We move your world, with precision and speed.",
    image: logistics,
    to: "/logistics" as const,
    align: "center" as const,
  },
  {
    title: "Packaging Solutions",
    desc: "Elevate your brand with Customized Corrugated Boxes.",
    image: packaging,
    to: "/packaging" as const,
    align: "center" as const,
  },
  {
    title: "Fleet Pvt. Ltd.",
    desc: "Your trusted partner for temperature controlled logistics in India.",
    image: fleet,
    to: "/fleet" as const,
    align: "center" as const,
  },
];

function HomePage() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row">
      {companies.map((c, index) => (
        <div
          key={c.title}
          className="relative flex-1 min-h-[33vh] sm:min-h-[40vh] md:min-h-screen group overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={c.image}
            alt={c.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 py-12 text-center">
            <img
              src={groupLogo}
              alt="Vi Group"
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
            />

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {c.title}
            </h2>

            <p className="text-white/90 text-sm md:text-base max-w-xs mb-8 leading-relaxed">
              {c.desc}
            </p>

            <Link
              to={c.to}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-[0_8px_32px_rgba(160,126,64,0.3)]"
            >
              Enter Website
            </Link>
          </div>

          {/* Divider (not on last item) */}
          {index < companies.length - 1 && (
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/20 hidden md:block" />
          )}
        </div>
      ))}
    </section>
  );
}
