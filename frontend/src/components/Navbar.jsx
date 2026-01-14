import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="FloPilot" className="h-10 w-auto object-contain" />
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Product', 'Solutions', 'Pricing', 'Enterprise'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Log In</button>
                    <Button variant="primary" className="!py-2 !px-4 text-sm shadow-none hover:shadow-none">Get Started</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
