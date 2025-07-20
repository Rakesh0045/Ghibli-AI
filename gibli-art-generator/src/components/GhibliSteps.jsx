import {Image, Palette, Users} from "lucide-react";
import {assets} from "../assets/assets.js";

const GhibliSteps = () => {
    return (
        <div className="rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-8 container mx-auto px-8 pb-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Photo to Ghibli Art</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                    Transform any photo into beautiful Studio Ghibli-style artwork with our Ghibli AI.
                    Simply upload your image and describe elements you want to enhance - mood,
                    scene setting, character details - and our advanced Ghibli image generator will
                    craft a complete transformation that captures the iconic Ghibli art aesthetic that
                    Studio Ghibli fans love.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <div className="p-2 rounded-full mr-3 bg-orange-900/10 text-orange-900">
                            <Image size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Simple Ghibli AI Prompting</h3>
                            <p className="text-gray-600 text-sm">
                                Use everyday language to guide the Studio Ghibli transformation with our Ghibli
                                generator. No artistic background required. Our Ghibli AI translates your vision into
                                perfect Ghibli art imagery with authentic Studio Ghibli qualities.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="p-2 rounded-full mr-3 bg-orange-900/10 text-orange-900">
                            <Palette size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Ghibli Art Style Control</h3>
                            <p className="text-gray-600 text-sm">
                                Select specific Studio Ghibli film influences like 'Spirited Away,' 'Howl's Moving
                                Castle,' or 'My Neighbor Totoro' with our Ghibli image generator to customize your
                                Ghibli artwork's aesthetic to your exact preferences.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="p-2 rounded-full mr-3 bg-orange-900/10 text-orange-900">
                            <Users size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Ghibli Character Integration</h3>
                            <p className="text-gray-600 text-sm">
                                Our Ghibli AI can seamlessly integrate pets or family members into the Studio
                                Ghibli universe, maintaining their recognizable features while giving them distinctive
                               charm in every Ghibli image we generate.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 rounded-lg overflow-hidden shadow-md">
                <img
                    src={assets.step1}
                    alt="Photo to Ghibli Art Transformation"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default GhibliSteps;