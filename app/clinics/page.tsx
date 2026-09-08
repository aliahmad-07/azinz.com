import ClinicsHeroSection from "../components/clinics-hero-section";
import ClinicsSearchFilters from "../components/clinics-search-filters";
import Footer from "../components/footer-section";
import Navbar from "../components/navbar";
import ClinicsGrid from "../components/clinics-grid";

export default function ClinicsPage() {
  return (
    <main>
      <Navbar />
      <ClinicsHeroSection />
      <ClinicsSearchFilters />
      <ClinicsGrid />
      <Footer />
    </main>
  );
}