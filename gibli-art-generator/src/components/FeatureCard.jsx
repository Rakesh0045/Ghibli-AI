const FeatureCard = ({ icon, title, children }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col">
        <div className="bg-orange-900/10 text-orange-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

export default FeatureCard;