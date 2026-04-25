import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-group.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vi Group" },
      {
        name: "description",
        content: "How Vi Group collects, uses and protects your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-gradient-gold">Policy</span>
          </>
        }
        subtitle="Last updated: January 2025"
        height="sm"
      />
      <section className="px-4 pb-20">
        <article className="mx-auto max-w-3xl glass-strong rounded-3xl p-8 md:p-12 prose-content">
          <Section title="1. Introduction">
            Vi Group ("we", "our", "us") respects your privacy and is committed to protecting your
            personal information. This policy explains how we collect, use, and safeguard data when
            you use our websites and services.
          </Section>
          <Section title="2. Information We Collect">
            We collect information you provide directly (name, email, phone, company), data
            automatically collected (IP address, browser, device info, cookies), and
            shipment-related information when you request a quote.
          </Section>
          <Section title="3. How We Use Information">
            To respond to enquiries, deliver our logistics, packaging, and fleet services, comply
            with legal obligations, prevent fraud, and improve our offerings and customer
            experience.
          </Section>
          <Section title="4. Sharing of Information">
            We do not sell your personal data. We may share information with trusted partners
            (carriers, customs agents) strictly to fulfill your shipment, and with authorities when
            legally required.
          </Section>
          <Section title="5. Cookies">
            We use cookies for analytics and to improve site performance. You may disable cookies
            via your browser settings; some site features may then be limited.
          </Section>
          <Section title="6. Data Security">
            We implement industry-standard technical and organizational safeguards to protect your
            information from unauthorized access, alteration, or disclosure.
          </Section>
          <Section title="7. Your Rights">
            You may request access, correction, or deletion of your personal data, or object to
            certain processing, by writing to <span className="text-primary">info@vigroup.in</span>.
          </Section>
          <Section title="8. Changes to This Policy">
            We may update this policy periodically. The latest version will always be posted on this
            page with the updated date.
          </Section>
          <Section title="9. Contact">
            For privacy-related questions, contact Vi Group, Thane (West), Maharashtra, India —{" "}
            <span className="text-primary">info@vigroup.in</span>.
          </Section>
        </article>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl font-bold mb-3 text-gradient-gold">{title}</h2>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
