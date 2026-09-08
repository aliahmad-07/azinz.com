import Footer from "../components/footer-section";
import Navbar from "../components/navbar";
import PricingCards from "../components/pricing-cards";
import PricingHeroSection from "../pricing-hero-section";

export default function PricingSection() {
    return (
        <main>
            <Navbar />
            <PricingHeroSection />
            <PricingCards />
            <Footer />
        </main>
    )
}