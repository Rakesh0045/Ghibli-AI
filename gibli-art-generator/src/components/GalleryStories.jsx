import {assets} from "../assets/assets.js";

const GalleryStories = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ghibli Magic Meets Mountain Tranquility</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={assets.step5}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={assets.step6}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                        />
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Experience how our AI turns everyday scenes into stunning Ghibli-inspired art, filled with whimsy, charm, and the magic of Studio Ghibli’s iconic style.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Turn City Streets into Ghibli Dreams with AI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={assets.step3}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={assets.step4}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                        />
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Watch city streets transform into charming Studio Ghibli-style scenes with magical details. Every building and element captures the iconic Ghibli art aesthetic.
                </p>
            </div>
        </div>
    );
};

export default GalleryStories;