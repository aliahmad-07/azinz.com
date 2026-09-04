import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/feature-section";
import PortalsSection from "./components/portal-section";
import BusyPractitionersSection from "./components/busy-practitioners";
import CommentsSection from "./components/public-comments";
import ComplianceSection from "./components/compliance-section";
import Footer from "./components/footer-section";
import PracticeCTASection from "./components/practise-section";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PortalsSection />
      <BusyPractitionersSection />
      <CommentsSection />
      <ComplianceSection />
      <PracticeCTASection/>
      <Footer />

    </div>
  )
}