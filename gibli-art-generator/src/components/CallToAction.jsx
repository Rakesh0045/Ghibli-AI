const CallToAction = ({ onNavigate }) => (
    <div className="py-16">
        <div className="container mx-auto px-8">
            <div className="bg-[#E4D6C8] rounded-2xl p-12 text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Magical Ghibli Artwork Today</h2>
                <p className="text-gray-600 max-w-2xl mb-8">
                    Join thousands of artists and Studio Ghibli fans who are creating stunning Miyazaki-inspired artwork with our Ghibli AI generator.
                </p>
                <button onClick={() => onNavigate('/create')} className="bg-orange-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-800 transition-transform transform hover:scale-105">
                    Try Ghibli AI For Free
                </button>
            </div>
        </div>
    </div>
);

export default CallToAction;