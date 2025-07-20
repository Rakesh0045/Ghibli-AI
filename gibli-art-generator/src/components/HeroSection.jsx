import {useNavigate} from "react-router-dom";
import BeforeAfterComparison from "./BeforeAfterComparison";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-20 lg:py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Transform Your Photos into <br /> 
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Ghibli Art
                </span> {" "} with  {" "}
                <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Ghibli AI
                </span>

            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
                Turn your photos or ideas into stunning Ghibli-style art with AI.
Upload an image or type a prompt — choose from magical Ghibli-inspired styles and watch your imagination come to life.
            </p>

            <button onClick={() => navigate('/create')} className="bg-orange-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-800 transition-transform transform hover:scale-105">
                Try image to Ghibli art now
            </button>

            <BeforeAfterComparison />
        </div>
    );
};

export default HeroSection;