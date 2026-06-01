
import { FAQSection } from "@/components/layout/faq-section";
import { FeaturesSection } from "@/components/layout/features-section";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/Hero";
import { HowItWorksSection } from "@/components/layout/how-it-works-section";
import Navbar from "@/components/layout/Navbar";
import { NewsletterSection } from "@/components/layout/newsletter-section";
import { PricingSection } from "@/components/layout/pricing-section";
import { StatsSection } from "@/components/layout/stats-section";
import { TestimonialsSection } from "@/components/layout/testimonials-section";


export default function Home() {
  return (

    <main className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <HowItWorksSection></HowItWorksSection>
      {/* <TemplatesSection /> */}
      <StatsSection></StatsSection>
      <PricingSection></PricingSection>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
      <NewsletterSection></NewsletterSection>
      <Footer></Footer>
    </main>

  );
}
