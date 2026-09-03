import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/feature-section";
import PortalsSection from "./components/portal-section";
import BusyPractitionersSection from "./components/busy-practitioners";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PortalsSection />
      <BusyPractitionersSection />

    </div>
  )
}