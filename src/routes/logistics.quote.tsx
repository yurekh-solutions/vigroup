import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, Clock, HelpCircle, ChevronDown } from "lucide-react";
import hero from "@/assets/cap-tracking.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/logistics/quote")({
  component: LogisticsQuote,
});

const faqs = [
  {
    q: "How quickly can I get a quote?",
    a: "Most quotes are returned within 2-4 business hours. For complex project cargo or multi-modal shipments, we may need up to 24 hours to secure the best rates.",
  },
  {
    q: "What information do I need to provide?",
    a: "Cargo type, dimensions & weight, pickup and delivery locations, incoterm, and any special requirements (temperature control, hazardous materials, etc.).",
  },
  {
    q: "Do you handle customs clearance?",
    a: "Yes. We are licensed customs brokers and handle both import and export clearance, documentation, and duty calculations.",
  },
  {
    q: "Can I track my shipment?",
    a: "Absolutely. All shipments come with 24/7 real-time tracking via our digital platform. You will receive milestone updates via email and SMS.",
  },
  {
    q: "What regions do you cover?",
    a: "We operate across 100+ countries with strong lanes in Asia Pacific, Europe, North America, Middle East, Africa, and South America.",
  },
];

function LogisticsQuote() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Get a Quote"
        height="md"
        tint="oklch(0.75 0.12 85 / 22%)"
        title={
          <>
            Request a <span className="text-gradient-gold">custom quote</span>
          </>
        }
        subtitle="Tailored freight solutions in minutes."
      />

      {/* Form + Info */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Shipping <span className="text-gradient-gold">Details</span>
                </h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Company</label>
                      <input
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Freight Type</label>
                      <select className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option>— Please choose an option —</option>
                        <option>Air Freight</option>
                        <option>Ocean Freight — FCL</option>
                        <option>Ocean Freight — LCL</option>
                        <option>Road Freight</option>
                        <option>Rail Freight</option>
                        <option>Multi-modal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Add-ons</label>
                      <select className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option>— Please choose an option —</option>
                        <option>Customs Clearance</option>
                        <option>Cargo Insurance</option>
                        <option>Warehousing</option>
                        <option>Packaging / Crating</option>
                        <option>Door Delivery</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Pickup Location</label>
                      <input
                        type="text"
                        placeholder="City / Port / Address"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Delivery Location</label>
                      <input
                        type="text"
                        placeholder="City / Port / Address"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Cargo Weight</label>
                      <input
                        type="text"
                        placeholder="e.g. 500 kg"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Dimensions</label>
                      <input
                        type="text"
                        placeholder="L x W x H (cm)"
                        className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Additional Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your cargo, special requirements, incoterm, target delivery date..."
                      className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
                  >
                    Submit Quote Request <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="glass-strong rounded-3xl p-6">
              <h3 className="font-display text-lg font-bold mb-4">Contact Directly</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+919619510906"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition"
                >
                  <Phone size={16} className="text-primary" />
                  +91 961 951 0906
                </a>
                <a
                  href="mailto:info@vigroup.in"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition"
                >
                  <Mail size={16} className="text-primary" />
                  info@vigroup.in
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-6">
              <h3 className="font-display text-lg font-bold mb-3">Why Request a Quote?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                  Competitive rates across all modes
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                  Tailored route optimization
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                  Dedicated account manager
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                  Transparent pricing — no hidden fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-strong rounded-2xl group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <HelpCircle size={16} className="text-primary shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-muted-foreground shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
