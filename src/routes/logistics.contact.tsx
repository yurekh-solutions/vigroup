import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import hero from "@/assets/cap-network.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/logistics/contact")({
  component: LogisticsContact,
});

const offices = [
  {
    title: "Head Office",
    address:
      "Tropical New Era Business Park, Unit No. 303, 3rd Floor, Village Panchpakhadi, Nirmaladevi Dighe Marg, Opp. ESIS Kamagar Hospital, Ambica Nagar, Wagle Industrial Estate, Thane (West) – 400604 – Maharashtra, India.",
    phone: "+91 961 951 0906",
    email: "info@vigroup.in",
  },
  {
    title: "Mumbai Airport Office",
    address:
      "Near Chhatrapati Shivaji Maharaj International Airport, Cargo Complex, Andheri (East), Mumbai – 400099.",
    phone: "+91 961 951 0906",
    email: "info@vigroup.in",
  },
];

function LogisticsContact() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Contact Us"
        height="md"
        tint="oklch(0.75 0.12 85 / 22%)"
        title={
          <>
            Let's start a <br />
            <span className="text-gradient-gold">conversation.</span>
          </>
        }
        subtitle="Our team is ready to help with your logistics needs."
      />

      {/* Contact Cards */}
      <section className="px-4 py-16 -mt-10 relative z-10">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-5">
          <a
            href="tel:+919619510906"
            className="glass-strong rounded-2xl p-6 text-center hover:ring-1 hover:ring-primary/40 transition"
          >
            <Phone size={22} className="text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold">Call Us</h3>
            <p className="text-sm text-muted-foreground mt-1">+91 961 951 0906</p>
          </a>
          <a
            href="mailto:info@vigroup.in"
            className="glass-strong rounded-2xl p-6 text-center hover:ring-1 hover:ring-primary/40 transition"
          >
            <Mail size={22} className="text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold">Email Us</h3>
            <p className="text-sm text-muted-foreground mt-1">info@vigroup.in</p>
          </a>
          <div className="glass-strong rounded-2xl p-6 text-center">
            <Clock size={22} className="text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold">Working Hours</h3>
            <p className="text-sm text-muted-foreground mt-1">Mon – Sat: 9AM – 7PM IST</p>
          </div>
        </div>
      </section>

      {/* Offices + Form */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          {/* Offices */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">
              Our <span className="text-gradient-gold">Offices</span>
            </h2>
            {offices.map((o) => (
              <div key={o.title} className="glass-strong rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold mb-3">{o.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{o.address}</span>
                  </div>
                  <div className="flex gap-2">
                    <Phone size={16} className="text-primary shrink-0" />
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary transition"
                    >
                      {o.phone}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Mail size={16} className="text-primary shrink-0" />
                    <a href={`mailto:${o.email}`} className="hover:text-primary transition">
                      {o.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="glass-strong rounded-2xl overflow-hidden h-64">
              <iframe
                title="Vi Logistics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d72.95!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold mb-6">
              Send a <span className="text-gradient-gold">Message</span>
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject</label>
                  <select className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>— Select —</option>
                    <option>Freight Quote</option>
                    <option>Tracking Support</option>
                    <option>Customs Query</option>
                    <option>Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `*New Logistics Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Company:* ${company}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
                  
                  window.open(`https://wa.me/919619510906?text=${whatsappMessage}`, '_blank');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
              >
                Send via WhatsApp <Send size={16} />
              </button>
            </form>
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
                Need a <span className="text-gradient-gold">quote?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Get a tailored freight quote in minutes from our logistics experts.
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
