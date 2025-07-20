const FaqCard = ({ question, children }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">{question}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);

export default FaqCard;