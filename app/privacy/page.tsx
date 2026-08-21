import type { Metadata } from "next"
import { ContentPage, ContentSection } from "@/components/ContentPage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MKAI Agency collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what personal information MKAI Agency collects, how we use it, and the choices you have. We are committed to handling your data responsibly."
      updated="17 August 2026"
    >
      <ContentSection heading="1. Information we collect">
        <p>
          We collect information you provide directly, such as your name, email address, company, and any details you
          share when you contact us or request a proposal. We also collect limited technical data automatically, such as
          IP address, browser type, and pages visited, through analytics.
        </p>
      </ContentSection>

      <ContentSection heading="2. How we use your information">
        <p>We use your information to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to enquiries and provide the services you request.</li>
          <li>Prepare proposals and manage client engagements.</li>
          <li>Improve our website, content, and services.</li>
          <li>Send relevant updates where you have agreed to receive them.</li>
        </ul>
      </ContentSection>

      <ContentSection heading="3. Legal basis">
        <p>
          We process personal data on the basis of your consent, our legitimate interest in operating and improving our
          business, and to perform contracts with our clients.
        </p>
      </ContentSection>

      <ContentSection heading="4. Sharing your information">
        <p>
          We do not sell your personal information. We may share it with trusted service providers who help us operate
          the business (such as hosting and analytics providers), under agreements that require them to protect your
          data.
        </p>
      </ContentSection>

      <ContentSection heading="5. Data retention">
        <p>
          We keep personal information only for as long as necessary to fulfil the purposes described in this policy or
          to comply with legal obligations.
        </p>
      </ContentSection>

      <ContentSection heading="6. Your rights">
        <p>
          Depending on your location, you may have the right to access, correct, or delete your personal data, and to
          object to or restrict certain processing. To exercise these rights, contact us using the details below.
        </p>
      </ContentSection>

      <ContentSection heading="7. Cookies and analytics">
        <p>
          Our website may use cookies and similar technologies to understand how visitors use the site and to improve
          performance. You can control cookies through your browser settings.
        </p>
      </ContentSection>

      <ContentSection heading="8. Contact">
        <p>
          For any privacy questions or requests, email{" "}
          <a href="mailto:info@mkaiagency.com" className="text-white underline underline-offset-4">
            info@mkaiagency.com
          </a>
          .
        </p>
      </ContentSection>
    </ContentPage>
  )
}
