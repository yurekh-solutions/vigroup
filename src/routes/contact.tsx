import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import hero from "@/assets/hero-group.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vi Group — Get in Touch" },
      {
        name: "description",
        content:
          "Reach Vi Group for logistics, packaging and fleet enquiries. Custom shipping quotes, partnerships, and support.",
      },
      { property: "og:title", content: "Contact Vi Group" },
      {
        property: "og:description",
        content: "Tailored logistics, packaging and fleet solutions in minutes.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Contact Us"
        title={
          <>
            Let's <span className="text-gradient-gold">build something</span> together
          </>
        }
        subtitle="Get a custom shipping quote or talk to our team about packaging and fleet solutions — tailored in minutes."
        height="md"
      />

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <div className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-2">Get a Custom Quote</h2>
            <p className="text-sm text-muted-foreground mb-6">Tailored solutions in minutes.</p>

            {sent ? (
              <div className="glass-gold rounded-2xl p-6 text-center">
                <p className="font-semibold text-lg">Thank you!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const freightType = formData.get('freightType');
                  const pickup = formData.get('pickup');
                  const destination = formData.get('destination');
                  const weight = formData.get('weight');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `*New Inquiry from Vi Group Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Freight Type:* ${freightType}%0A*Pickup:* ${pickup}%0A*Destination:* ${destination}%0A*Weight/Dimensions:* ${weight}%0A*Message:* ${message}`;
                  
                  window.open(`https://wa.me/919619510906?text=${whatsappMessage}`, '_blank');
                  setSent(true);
                }}
                className="grid gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Your Name" required />
                  <Input label="Email Address" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Select label="Freight Type">
                    <option>—Please choose—</option>
                    <option>Air Freight</option>
                    <option>Ocean Freight</option>
                    <option>Cold Chain</option>
                    <option>Packaging</option>
                  </Select>
                  <Input label="Pickup Location" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Destination" />
                  <Input label="Weight & Dimensions" placeholder="e.g. 200kg / 100x80x60cm" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full glass rounded-2xl px-4 py-3 text-sm bg-transparent outline-none focus:border-primary/50 resize-none"
                    placeholder="Tell us about your shipment, add-ons (customs, insurance, warehousing)..."
                  />
                </div>
                <button
                  type="submit"
                  className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold glow-gold hover:scale-105 transition"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <ContactCard icon={MapPin} title="Head Office">
              Tropical New Era Business Park, Unit No. 303, 3rd Floor, Village Panchpakhadi,
              Nirmaladevi Dighe Marg, Wagle Industrial Estate, Thane (West) – 400604, Maharashtra,
              India.
            </ContactCard>
            <ContactCard icon={Phone} title="Phone">
              +91 961 951 0906
              <br />
              +91 865 386 0906 (Vi Fleet)
            </ContactCard>
            <ContactCard icon={Mail} title="Email">
              info@vigroup.in
              <br />
              vips@vigroup.in
              <br />
              vifleet@vigroup.in
            </ContactCard>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full glass rounded-2xl px-4 py-3 text-sm bg-transparent outline-none focus:border-primary/50"
      />
    </div>
  );
}

function Select({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <select className="w-full glass rounded-2xl px-4 py-3 text-sm bg-transparent outline-none focus:border-primary/50">
        {children}
      </select>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-strong rounded-3xl p-6 ring-gold-hover">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl glass-gold flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
        <h3 className="font-display text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
