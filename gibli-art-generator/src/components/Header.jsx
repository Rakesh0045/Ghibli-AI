import {Link, NavLink} from "react-router-dom";

const Header = () => (
    <header className="border-b border-gray-300/80 sticky top-0 bg-[#F5F3EF]/90 backdrop-blur-sm z-40">
        <nav className="container mx-auto flex justify-between items-center p-4 px-8">
            <Link to="/" className="flex items-center text-xl font-bold tracking-wider cursor-pointer">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-2">
                    G
                </div>
                Ghibli AI
            </Link>
            <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/" className={({ isActive }) => `hover:text-gray-900 transition-colors ${isActive ? 'font-semibold text-gray-900' : ''}`}>Home</NavLink>
                <NavLink to="/create" className={({ isActive }) => `hover:text-gray-900 transition-colors ${isActive ? 'font-semibold text-gray-900' : ''}`}>Create</NavLink>
                <NavLink to="/features" className="hover:text-gray-900">Features</NavLink>
                <NavLink to="/gallery" className="hover:text-gray-900">Gallery</NavLink>
                <NavLink to="/faq" className="hover:text-gray-900">FAQ</NavLink>
            </div>
            <Link to="/create">
                <button className="bg-orange-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-800 transition-colors">
                    Create
                </button>
            </Link>
        </nav>
    </header>
);

export default Header;