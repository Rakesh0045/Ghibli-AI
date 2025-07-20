const GalleryCard = ({ imageSrc, title }) => {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Image container with responsive padding for aspect ratio */}
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-lg"
                    // Fallback for image loading errors
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = `https://placehold.co/400x300/e2e8f0/64748b?text=Image+Error`; // Placeholder for error
                    }}
                />
            </div>
        </div>
    );
};

export default GalleryCard;