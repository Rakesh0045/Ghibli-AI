import HeroSection from "../components/HeroSection.jsx";
import GhibliSteps from "../components/GhibliSteps.jsx";
import CallToAction from "../components/CallToAction.jsx";
import {useNavigate} from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import FaqSection from "../components/FaqSection.jsx";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <GallerySection />
            <GhibliSteps />
            <FaqSection />
            <CallToAction onNavigate={navigate}/>
        </div>
    )
}

export default LandingPage;