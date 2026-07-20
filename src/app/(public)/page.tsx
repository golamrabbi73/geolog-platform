import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";
import TeamRoles from "@/components/home/TeamRoles";
import WhyGeoLog from "@/components/home/WhyGeoLog";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <WhyGeoLog />
      <TeamRoles />
      <FAQ />
      <CTA />
    </>
  );
}