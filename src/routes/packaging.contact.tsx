import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import hero from "@/assets/hero-group.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/packaging/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vi Packaging Solutions — Get a Quote" },
      {
        name: "description",
        content:
          "Get in touch with Vi Packaging Solutions for custom corrugated boxes. Request a quote, discuss your packaging needs, or visit our facility in Mumbai, India.",
      },
    ],
  }),
  component: PackagingContact,
});

function PackagingContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    industry: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Contact Us"
        height="sm"
        tint="oklch(0.75 0.12 145 / 20%)"
        title={
          <>
            Get in <span className="text-gradient-gold">Touch</span>
          </>
        }
        subtitle="We are committed to delivering high-quality corrugated boxes to our clients across a range of industries. Let's discuss your packaging needs."
      />

      {/* Contact Info Cards */}
      <section className="px-4 -mt-10 relative z-10">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Phone,
              title: "Phone",
              value: "+91 961 951 0906",
              href: "tel:+919619510906",
            },
            {
              icon: Mail,
              title: "Email",
              value: "vips@vigroup.in",
              href: "mailto:vips@vigroup.in",
            },
            {
              icon: MapPin,
              title: "Location",
              value: "Vasai East, Maharashtra",
              href: "https://maps.google.com/?q=Waliv+Vasai+East+401208",
            },
            {
              icon: Clock,
              title: "Working Hours",
              value: "Mon — Sat, 9AM — 7PM",
              href: undefined,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-strong rounded-2xl p-5 text-center ring-gold-hover"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl glass-gold flex items-center justify-center mb-3">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-sm font-bold mb-1">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-xs text-muted-foreground hover:text-primary transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                Say <span className="text-gradient-gold">Hello</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Please feel free to get in touch with us. We&apos;d love to hear from you and help
                with your packaging requirements.
              </p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto rounded-full glass-gold flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-primary" size={40} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    We&apos;ve received your message and will get back to you within 24 hours. Our
                    team is excited to help with your packaging needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition bg-transparent"
                      >
                        <option value="">Select Industry</option>
                        <option value="electronics">Electronics</option>
                        <option value="pharma">Pharmaceuticals</option>
                        <option value="food">Food & Beverages</option>
                        <option value="gifting">Gifting & Retail</option>
                        <option value="kitchen">Kitchen Appliances</option>
                        <option value="industrial">Industrial & Export</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Estimated Quantity
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition bg-transparent"
                      >
                        <option value="">Select Quantity</option>
                        <option value="500-1000">500 — 1,000</option>
                        <option value="1000-5000">1,000 — 5,000</option>
                        <option value="5000-25000">5,000 — 25,000</option>
                        <option value="25000-100000">25,000 — 100,000</option>
                        <option value="100000+">100,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                      placeholder="Custom corrugated box inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                      placeholder="Tell us about your packaging requirements — product details, box dimensions, quantity, printing needs, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold mb-4">Our Address</h3>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <p>
                  Plot no-16, Ground Floor, &lsquo;Annasagar Compound&rsquo;, Survey no. 48/1 &
                  Hissa Number: 1B, Opp Vitthal Mandir, Waliv, Vasai East (401208) — Maharashtra,
                  India.
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass rounded-2xl sm:rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold mb-4">Quick Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                  <a href="tel:+919619510906" className="hover:text-primary transition">
                    +91 961 951 0906
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                  <a href="mailto:vips@vigroup.in" className="hover:text-primary transition">
                    vips@vigroup.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8!2d72.85!3d19.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIyJzQ4LjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vi Packaging Solutions Location"
              />
            </div>

            {/* Industry Solutions CTA */}
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-7 text-center">
              <h3 className="font-display text-lg font-bold mb-3">
                Explore Our Industry Solutions
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Corrugated boxes engineered to perfection for every product.
              </p>
              <a
                href="/packaging/industries"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold glow-gold hover:scale-105 transition"
              >
                View Solutions <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
