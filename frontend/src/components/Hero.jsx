import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                        Turn <span className="text-[#007AFF]">messy</span> workflows into systems.
                    </h1>
                    <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md">
                        The essential workspace for visualizing logic and streamlining operations with professional-grade clarity.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button variant="primary" className="group">
                            Start Building
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="secondary">
                            View Demo
                        </Button>
                    </div>
                </motion.div>

                {/* Right Visual (Mockup) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-[#0F1115] border border-white/10 rounded-2xl p-4 shadow-2xl">
                        {/* Window Controls */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>

                        {/* Mock Interface Content */}
                        <div className="grid grid-cols-[200px_1fr] gap-4 h-[400px]">
                            {/* Sidebar Mock */}
                            <div className="flex flex-col gap-3">
                                <div className="h-20 bg-white/5 rounded-lg animate-pulse" />
                                <div className="h-12 bg-[#007AFF]/20 border border-[#007AFF]/30 rounded-lg" />
                                <div className="h-20 bg-white/5 rounded-lg" />
                                <div className="h-8 bg-white/5 rounded-lg w-2/3" />
                            </div>

                            {/* Canvas Mock */}
                            <div className="bg-[#0A0C10] rounded-xl border border-white/5 relative overflow-hidden p-6">
                                {/* Dot Grid Background */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                                {/* Nodes */}
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-12">
                                    <div className="px-4 py-2 rounded-full border border-white/10 bg-[#16181D] text-xs font-mono text-gray-400">ENTRY</div>

                                    <div className="flex gap-12">
                                        <div className="w-32 h-20 rounded-lg border border-white/10 bg-[#16181D]"></div>
                                        <div className="w-32 h-20 rounded-lg border border-[#007AFF]/30 bg-[#007AFF]/10 shadow-[0_0_15px_rgba(0,122,255,0.1)]"></div>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#007AFF] bg-[#007AFF]/10 px-2 py-1 rounded-md border border-[#007AFF]/20 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse" />
                                    Syncing v1.0.4
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[32px] blur-2xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
