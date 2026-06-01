
import { FeaturesSection } from "@/components/layout/features-section";
import { Hero } from "@/components/layout/Hero";
import { HowItWorksSection } from "@/components/layout/how-it-works-section";
import Navbar from "@/components/layout/Navbar";
import { PricingSection } from "@/components/layout/pricing-section";
import { StatsSection } from "@/components/layout/stats-section";


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
    </main>

  );
}
