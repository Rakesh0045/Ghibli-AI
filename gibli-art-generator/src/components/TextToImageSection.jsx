import { useState } from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import Spinner from "./Spinner.jsx";
import { Download, FileText, PlusCircle } from "lucide-react";
import GhibliStyleDropdown from "./GhibliStyleDropdown.jsx";

const TextToImageSection = () => {
    const [generatedImage, setGeneratedImage] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [style, setStyle] = useState('general');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const isCreateDisabled = isLoading || !prompt.trim();

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError("Please enter a description for your artwork.");
            return;
        }

        setIsLoading(true);
        setError(null);

        const payload = { prompt, style };

        try {
            // const API_URL = 'http://localhost:1205/api/v1/generate-from-text';
            const API_URL = `${import.meta.env.VITE_API_BASE_URL}/generate-from-text`;
            console.log("Sending request to:", API_URL);

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}. Message: ${errorText}`);
            }

            const resultBlob = await response.blob();
            setGeneratedImage(URL.createObjectURL(resultBlob));

        } catch (error) {
            console.error('Error generating image from text:', error);
            setError(error.message || "Unknown error occurred");
        } finally {
            setIsLoading(false);
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `ghibli-art-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleCreateAnother = () => {
        setGeneratedImage(null);
        setPrompt('');
        setStyle('general');
        setError(null);
    }

    return (
        <div className="relative">
            {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Text to Ghibli Art</h2>
                <div className="w-full h-80 flex justify-center items-center border-2 border-gray-200 rounded-xl bg-gray-50 mb-6">
                    {isLoading ? (<Spinner />) : generatedImage ? (<img
                        src={generatedImage}
                        alt={`Ghibli art based on prompt: ${prompt}`}
                        className="h-full w-full rounded-lg object-contain p-2"
                    />
                    ) : (
                        <div className="text-center text-gray-500">
                            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                            <p>Generate Ghibli art from your text description</p>
                        </div>
                    )}
                </div>

                {!generatedImage && (
                    <>
                        <div className="space-y-4">
                            <GhibliStyleDropdown value={style} onChange={(e) => setStyle(e.target.value)} />
                            <div>
                                <label htmlFor="prompt-text" className="text-md font-semibold mb-2 block">Your Description</label>
                                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} id="prompt-text" className="w-full p-3 border border-gray-300 rounded-lg" rows="3" placeholder="Describe the Ghibli scene you want to create in detail..."></textarea>
                            </div>
                        </div>
                        <button onClick={handleGenerate} disabled={isCreateDisabled} className="mt-6 bg-orange-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed w-full">
                            {isLoading ? 'Generating...' : 'Turn your words into Ghibli art'}
                        </button>
                    </>
                )}

                {generatedImage && (
                    <div className="mt-6 flex gap-4">
                        <button onClick={handleDownload} className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2">
                            <Download size={20} /> Download
                        </button>
                        <button onClick={handleCreateAnother} className="flex-1 bg-orange-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-800 transition-colors flex items-center justify-center gap-2">
                            <PlusCircle size={20} /> Create Another
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextToImageSection;