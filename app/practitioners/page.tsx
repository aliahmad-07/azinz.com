import Footer from "../components/footer-section"
import Navbar from "../components/navbar"
import PractitionersGrid from "../components/practitioners-grid"
import PractitionersHeroSection from "../components/practitioners-hero-section"
import PractitionersSearchFilters from "../components/practitioners-search-filters"


export default function PractitionersPage(){
    return(
        <main>
            <Navbar />
            <PractitionersHeroSection />
            <PractitionersSearchFilters />
            <PractitionersGrid />
            <Footer />
        </main>
    )
}