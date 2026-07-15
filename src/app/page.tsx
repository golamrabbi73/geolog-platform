import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";
import WhyGeoLog from "@/components/home/WhyGeoLog";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <WhyGeoLog />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}