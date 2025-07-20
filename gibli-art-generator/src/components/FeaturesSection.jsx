import FeatureCard from "./FeatureCard.jsx";
import {Eye, FileClock, Sparkles} from "lucide-react";

const FeaturesSection = () => (
    <div className="container mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Ghibli AI Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Eye size={24} />} title="High Accuracy Ghibli Art Generation">
                Our advanced Ghibli AI algorithms ensure your photos maintain their essence while transforming into authentic Studio Ghibli art style. Every Ghibli image preserves the original character while adopting the distinctive Ghibli aesthetic.
            </FeatureCard>
            <FeatureCard icon={<FileClock size={24} />} title="Fast Image Processing">
                Get your transformed Ghibli art images in seconds with our optimized Ghibli AI generator technology. Our efficient processing ensures quick delivery of high-quality Studio Ghibli style artwork.
            </FeatureCard>
            <FeatureCard icon={<Sparkles size={24} />} title="Stunning Studio Ghibli Quality">
                Our Ghibli AI creates beautiful high-resolution Ghibli art that perfectly captures the magical Studio Ghibli aesthetic. Every detail in your generated Ghibli image reflects the authentic charm of Studio Ghibli's world.
            </FeatureCard>
        </div>
    </div>
);

export default FeaturesSection;