import {Link} from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
    <footer className="bg-[#F5F3EF]">
        <div className="container mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center mb-2">
                        <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-2">
                            G
                        </div>
                        <h3 className="text-xl font-bold">Ghibli AI</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Inspired by the magical words of Studio Ghibli. This is a fan project and not affiliated with Studio Ghibli Inc.
                    </p>
                </div>

                {/* Links Column */}
                <div className="col-span-1">
                    <h4 className="font-semibold mb-3">Links</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
                        <li><Link to="/create" className="hover:text-gray-900">Create</Link></li>
                        <li><Link to="/features" className="hover:text-gray-900">Features</Link></li>
                        <li><a href="#" className="hover:text-gray-900">Gallery</a></li>
                        <li><Link to="/faq" className="hover:text-gray-900">FAQ</Link></li>
                    </ul>
                </div>

                {/* Features Column */}
                <div className="col-span-1">
                    <h4 className="font-semibold mb-3">Features</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-900">Photo to Ghibli Art</a></li>
                        <li><a href="#" className="hover:text-gray-900">Text to Ghibli Art</a></li>
                        <li><a href="#" className="hover:text-gray-900">Character Generator</a></li>
                        <li><a href="#" className="hover:text-gray-900">Background Generator</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="col-span-1">
                    <h4 className="font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-400/50 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>&copy; 2025 Ghibli AI. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://x.com/SpringDevRakesh?t=EWYtiOLVjf0N6OWj-ykcjA&s=09" className="hover:text-gray-900"><Twitter size={18} /></a>
                    <a href="https://www.linkedin.com/in/rakesh-kumar-parida-523b55308/" target="_blank" className="hover:text-gray-900"><Linkedin size={18} /></a>
                    <a href="https://www.youtube.com/@Rakesh_2801" className="hover:text-gray-900"><Youtube size={18} /></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;