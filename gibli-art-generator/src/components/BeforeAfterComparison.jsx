import grid01 from '../assets/grid-06.png'; // After image
import grid09 from '../assets/b10.jpg';      // Before image
import { Link } from "react-router-dom";

const BeforeAfterComparison = () => {
    return (
        <div className="bg-[#1E1E2F] rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto mt-12 text-white shadow-lg">
            
            {/* Top Labels (optional, can be removed if using corner badges) */}
            <div className="flex justify-between text-sm sm:text-base font-semibold px-2 sm:px-4 mb-2">
                <span>Before</span>
                <span>After</span>
            </div>

            <div className="relative rounded-xl overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full divide-x divide-[#2F2F3F]">

                    {/* Before Image */}
                    <div className="relative w-full h-[450px] overflow-hidden group">
                        <img
                            src={grid09}
                            alt="Before"
                            title="Original Photo"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* <span className="absolute top-3 left-3 bg-black/50 px-2 py-1 text-xs rounded text-white font-medium">
                            Before
                        </span> */}
                    </div>

                    {/* After Image */}
                    <div className="relative w-full h-[450px] overflow-hidden group">
                        <img
                            src={grid01}
                            alt="After"
                            title="Ghibli-style Illustration"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* <span className="absolute top-3 right-3 bg-black/50 px-2 py-1 text-xs rounded text-white font-medium">
                            After
                        </span> */}
                    </div>
                </div>

                {/* Center Arrow */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Link to="/create">
                        <div className="bg-[#2C2C3C] text-white rounded-full p-2 shadow-lg hover:bg-[#3A3A4A] transition-colors duration-300 cursor-pointer group">
                            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterComparison;
