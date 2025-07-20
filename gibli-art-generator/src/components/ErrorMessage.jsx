const ErrorMessage = ({ message, onClose }) => (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg z-50 flex items-center">
        <span className="block sm:inline">{message}</span>
        <button onClick={onClose} className="ml-4 text-red-500 hover:text-red-700 font-bold">
            &times;
        </button>
    </div>
);

export default ErrorMessage;