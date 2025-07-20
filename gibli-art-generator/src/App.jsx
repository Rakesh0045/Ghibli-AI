import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-[#F5F3EF] min-h-screen font-sans text-gray-800 flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/create" element={<CreatePage />} />
                        <Route path="/features" element={<FeaturesSection />} />
                        <Route path="/faq" element={<FaqSection />} />
                        <Route path="/gallery" element={<GallerySection />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;