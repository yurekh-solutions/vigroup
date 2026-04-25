import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-group.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Vi Group" },
      { name: "description", content: "Terms governing use of Vi Group websites and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Legal"
        title={
          <>
            Terms & <span className="text-gradient-gold">Conditions</span>
          </>
        }
        subtitle="Last updated: January 2025"
        height="sm"
      />
      <section className="px-4 pb-20">
        <article className="mx-auto max-w-3xl glass-strong rounded-3xl p-8 md:p-12">
          <Section title="1. Acceptance of Terms">
            By accessing the Vi Group websites or engaging our services, you agree to be bound by
            these Terms. If you do not agree, please do not use our services.
          </Section>
          <Section title="2. Services">
            Vi Group provides logistics, packaging and fleet transportation solutions. Specific
            scope, pricing and timelines are governed by individual service agreements or
            quotations.
          </Section>
          <Section title="3. Quotations & Bookings">
            All quotations are valid for the period stated and subject to availability. Bookings are
            confirmed only upon written acceptance and receipt of any required deposit.
          </Section>
          <Section title="4. Cargo & Packaging Responsibilities">
            Customers are responsible for accurate cargo declarations, proper packing (unless
            contracted to Vi Packaging), and compliance with applicable export/import regulations.
          </Section>
          <Section title="5. Liability">
            Our liability is limited to the lesser of actual damages or the sums recoverable under
            prevailing carriage conventions and our service agreement. We are not liable for
            indirect, consequential or punitive damages.
          </Section>
          <Section title="6. Insurance">
            We strongly recommend cargo insurance. Insurance can be arranged on request and is
            subject to underwriter terms.
          </Section>
          <Section title="7. Intellectual Property">
            All content, logos, and trademarks on Vi Group websites are owned by Vi Group or its
            licensors. You may not reproduce or distribute them without prior written consent.
          </Section>
          <Section title="8. Force Majeure">
            We are not liable for failure or delay in performance caused by events beyond our
            reasonable control, including natural disasters, strikes, war, or government action.
          </Section>
          <Section title="9. Governing Law">
            These Terms are governed by the laws of India. Any dispute shall be subject to the
            exclusive jurisdiction of the courts of Mumbai, Maharashtra.
          </Section>
          <Section title="10. Contact">
            For questions about these Terms, write to{" "}
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
