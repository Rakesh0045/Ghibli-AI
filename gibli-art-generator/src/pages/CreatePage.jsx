import {useState} from "react";
import PhotoToImageSection from "../components/PhotoToImageSection.jsx";
import TextToImageSection from "../components/TextToImageSection.jsx";

const CreatePage = () => {
    const [activeTab, setActiveTab] = useState('photo');

    return(
        <div className="container mx-auto py-12 px-8">
            <div className="flex justify-center mb-8 border-b border-gray-300">
                <button onClick={() => setActiveTab('photo')} className={`px-6 py-3 text-lg font-semibold transition-colors ${activeTab === 'photo' ? 'border-b-2 border-orange-900 text-orange-900' : 'text-gray-500 hover:text-gray-800'}`}>
                    Photo to Art
                </button>
                <button onClick={() => setActiveTab('text')} className={`px-6 py-3 text-lg font-semibold transition-colors ${activeTab === 'text' ? 'border-b-2 border-orange-900 text-orange-900' : 'text-gray-500 hover:text-gray-800'}`}>
                    Text to Art
                </button>
            </div>
            <div>
                {activeTab === 'photo' && <PhotoToImageSection />}
                {activeTab === 'text' && <TextToImageSection />}
            </div>
        </div>
    );
};

export default CreatePage;