import { ContactForm } from "@/components/ContactForm";
import { FeatureSection } from "@/components/FeatureSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { SecuritySection } from "@/components/SecuritySection";
import { BookDemoSection } from "@/components/BookDemoSection";
import { AutoDemoPopup } from "@/components/AutoDemoPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-light to-bg-dark">
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <About />
      <SecuritySection />
      <BookDemoSection />
      <ContactForm />
      <AutoDemoPopup />
    </div>
  );
}