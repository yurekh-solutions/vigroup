import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-fleet.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/fleet/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vi Fleet — Get a Quote for Temperature-Controlled Logistics" },
      {
        name: "description",
        content: "Contact Vi Fleet for cold chain logistics, chemical transport, and container trailer services. Get a free quote today.",
      },
    ],
  }),
  component: FleetContactPage,
});

function FleetContactPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Contact Us"
        height="md"
        tint="oklch(0.78 0.13 65 / 22%)"
        title={
          <>
            Let's Discuss Your <br />
            <span className="text-gradient-gold">Logistics Needs</span>
          </>
        }
        subtitle="Get in touch for a free quote, fleet inquiry, or partnership opportunity. Our team is ready to help 24/7."
      />

      {/* Contact Info & Form */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need a single truck or a complete logistics solution, we're here to help.
              Reach out through any of the channels below or fill out the form.
            </p>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Head Office</h3>
                  <p className="text-sm text-muted-foreground">
                    Tropical New Era Business Park,<br />
                    Thane (W) — 400604,<br />
                    Maharashtra, India.
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+919619510906"
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    +91 961 951 0906
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@vigroup.in"
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    info@vigroup.in
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center shrink-0">
                  <MessageCircle className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/919619510906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-strong rounded-3xl p-8">
            <h3 className="font-display text-xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary focus:outline-none transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary focus:outline-none transition"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary focus:outline-none transition">
                  <option value="">Select a service</option>
                  <option value="cold-chain">Cold Chain Logistics</option>
                  <option value="dry-cargo">Dry Cargo Transport</option>
                  <option value="chemical">Chemical Transport</option>
                  <option value="container">Container Trailers</option>
                  <option value="industrial">Industrial Materials</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-primary focus:outline-none transition resize-none"
                  placeholder="Tell us about your logistics requirements..."
                />
              </div>

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget.form;
                  if (!form) return;
                  
                  const formData = new FormData(form);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const phone = formData.get('phone');
                  const company = formData.get('company');
                  const service = formData.get('service');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `*New Fleet Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Company:* ${company}%0A*Service:* ${service}%0A*Message:* ${message}`;
                  
                  window.open(`https://wa.me/919619510906?text=${whatsappMessage}`, '_blank');
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                <Send size={18} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl glass-strong rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-center">
              Find <span className="text-gradient-gold">Us</span>
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden glass">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890!2d72.9781!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9e0a3f5c7d1%3A0x1234567890abcdef!2sTropical%20New%20Era%20Business%20Park%2C%20Thane%20West%2C%20Maharashtra%20400604!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vi Fleet Location - Thane West, Mumbai"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
