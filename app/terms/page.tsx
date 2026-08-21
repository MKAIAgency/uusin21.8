import type { Metadata } from "next"
import { ContentPage, ContentSection } from "@/components/ContentPage"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing the use of MKAI Agency services and website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These terms govern your access to and use of the MKAI Agency website and services. By using our site or engaging our services, you agree to these terms."
      updated="17 August 2026"
    >
      <ContentSection heading="1. Agreement to terms">
        <p>
          By accessing this website or entering into a service agreement with MKAI Agency, you confirm that you have
          read, understood, and agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not
          use our website or services.
        </p>
      </ContentSection>

      <ContentSection heading="2. Services">
        <p>
          MKAI Agency provides digital automation, AI, lead generation, and web development services. The specific
          scope, deliverables, timelines, and fees for any engagement are defined in a separate written proposal or
          statement of work agreed between you and MKAI Agency.
        </p>
        <p>
          Estimates produced by tools on this website, including the revenue calculator, are illustrative only and do
          not constitute a guarantee of results.
        </p>
      </ContentSection>

      <ContentSection heading="3. Client responsibilities">
        <p>
          You agree to provide accurate information, timely access to required accounts and materials, and reasonable
          cooperation so that MKAI Agency can deliver the agreed services. Delays caused by missing information may
          affect timelines.
        </p>
      </ContentSection>

      <ContentSection heading="4. Fees and payment">
        <p>
          Fees are set out in the applicable proposal or statement of work. Unless otherwise agreed, invoices are due
          within the period stated on the invoice. Late payments may result in suspension of services.
        </p>
      </ContentSection>

      <ContentSection heading="5. Intellectual property">
        <p>
          Unless otherwise agreed in writing, MKAI Agency retains ownership of its pre-existing methods, tools, and
          frameworks. Deliverables created specifically for you transfer to you upon full payment, excluding any
          third-party or MKAI Agency background materials.
        </p>
      </ContentSection>

      <ContentSection heading="6. Confidentiality">
        <p>
          Each party agrees to keep confidential any non-public information disclosed during an engagement and to use it
          only for the purpose of delivering or receiving the services.
        </p>
      </ContentSection>

      <ContentSection heading="7. Limitation of liability">
        <p>
          To the maximum extent permitted by law, MKAI Agency is not liable for indirect, incidental, or consequential
          damages. Our total liability for any claim is limited to the fees paid for the services giving rise to the
          claim.
        </p>
      </ContentSection>

      <ContentSection heading="8. Changes to these terms">
        <p>
          We may update these terms from time to time. The updated version will be posted on this page with a revised
          &ldquo;last updated&rdquo; date. Continued use of the website or services constitutes acceptance of the
          changes.
        </p>
      </ContentSection>

      <ContentSection heading="9. Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:info@mkaiagency.com" className="text-white underline underline-offset-4">
            info@mkaiagency.com
          </a>
          .
        </p>
      </ContentSection>
    </ContentPage>
  )
}
