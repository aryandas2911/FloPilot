import React from 'react';
import Button from './ui/Button';

const Footer = () => {
    return (
        <footer className="pt-32 pb-12 relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build better?</h2>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                    Join over 2,000+ architects and operations managers scaling their logic with FloPilot.
                </p>
                <div className="flex justify-center gap-4 mb-32">
                    <Button variant="primary">Create Your First Flow</Button>
                    <Button variant="secondary">Talk to Sales</Button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-gray-500 uppercase tracking-widest font-medium">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">F</div>
                        <span>FloPilot © 2026</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
