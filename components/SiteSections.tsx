import { PainPointQuestionnaire } from "@/components/PainPointQuestionnaire"
import { ServicesSection } from "@/components/ServicesSection"
import { CalculatorSection } from "@/components/CalculatorSection"
import { ContactSection } from "@/components/ContactSection"
import { SiteFooter } from "@/components/SiteFooter"
import { ScrollReveal } from "@/components/ScrollReveal"

export function SiteSections() {
  return (
    <main className="bg-transparent text-white">
      <ScrollReveal>
        <section id="about" className="scroll-mt-20 bg-transparent px-6 py-16 md:px-10 md:py-20">
          <div id="assessment" className="mx-auto max-w-7xl scroll-mt-24">
            <PainPointQuestionnaire />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <CalculatorSection />
      </ScrollReveal>

      <ScrollReveal delay={240}>
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal delay={320}>
        <SiteFooter />
      </ScrollReveal>
    </main>
  )
}
