import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Zap, AlertTriangle, Sparkles } from 'lucide-react';

const Canvas = () => {
    return (
        <div className="flex-1 bg-[#050608] relative h-full flex flex-col overflow-hidden">
            {/* Dot Grid Background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Top Toolbar (Fixed Overlay) */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-white/5 hover:scale-105 transition-transform cursor-pointer">
                    Structure
                </button>
                <div className="bg-[#12141a] border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                    <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">Clarity Score</span>
                    <div className="flex items-center gap-2">
                        <span className="text-blue-500 font-bold text-sm">84.5%</span>
                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-blue-500 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable Nodes Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 custom-scrollbar">
                <div className="min-h-full flex flex-col items-center justify-start pt-32 pb-48 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="flex flex-col items-center gap-16 scale-[0.85] md:scale-90 lg:scale-100 origin-top"
                    >
                        {/* Node 1 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="relative z-10"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(50, 50, 50, 0.3)" }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="w-64 bg-[#12141a] border border-white/10 rounded-xl p-5 hover:border-blue-500/50 transition-colors cursor-pointer group shadow-2xl relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-3 mb-3 relative z-10">
                                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center icon-container group-hover:bg-blue-500/20 transition-colors">
                                        <div className="w-4 h-3 border-2 border-gray-400 rounded-sm group-hover:border-blue-400 transition-colors" />
                                    </div>
                                    <span className="font-semibold text-sm group-hover:text-blue-400 transition-colors">Lead Intake</span>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors relative z-10">
                                    Multi-source capture and CRM synchronization.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Connecting Line 1 */}
                        <motion.div
                            variants={{ hidden: { height: 0 }, visible: { height: 64 } }}
                            className="w-px bg-gradient-to-b from-white/10 to-blue-500/50 relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ top: ["0%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-1/2 bg-gradient-to-b from-transparent to-blue-400 opacity-50"
                            />
                        </motion.div>

                        {/* Diamond Node */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            className="relative z-20"
                        >
                            <motion.div
                                whileHover={{ rotate: 135, scale: 1.1 }}
                                className="w-16 h-16 bg-[#0f1115] border border-blue-500/30 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(0,112,243,0.1)] cursor-pointer hover:border-blue-400 hover:shadow-[0_0_40px_rgba(0,112,243,0.3)] transition-all"
                            >
                                <div className="-rotate-45 text-blue-500 font-bold text-xs">{'>'}$5k</div>
                            </motion.div>
                        </motion.div>

                        {/* Connecting Line 2 */}
                        <motion.div
                            variants={{ hidden: { height: 0 }, visible: { height: 64 } }}
                            className="w-px bg-gradient-to-b from-blue-500/50 to-white/10 relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ top: ["0%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                className="absolute w-full h-1/2 bg-gradient-to-b from-transparent to-white opacity-30"
                            />
                        </motion.div>

                        {/* Node 2 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                                }}
                                className="w-64 bg-[#12141a] border border-white/10 rounded-xl p-5 hover:border-orange-500/50 transition-colors cursor-pointer relative group"
                            >
                                {/* Warning/Alert */}
                                <div className="absolute -right-2 -top-2 animate-bounce">
                                    <AlertTriangle className="w-5 h-5 text-yellow-500 fill-yellow-500/10" />
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                                        <div className="w-3 h-4 border-2 border-orange-500 rounded-sm" />
                                    </div>
                                    <span className="font-semibold text-sm group-hover:text-orange-400 transition-colors">Manual Review</span>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Critical bottleneck: 72h average latency.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Info Cards (Fixed Overlay) */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 md:grid-cols-3 gap-4 z-30 pointer-events-none">
                <div className="bg-[#0d0f12]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-start gap-3 pointer-events-auto hover:bg-[#0d0f12] transition-colors cursor-default hover:border-white/10">
                    <div className="mt-1">
                        <Zap className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                        <p className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">Bottleneck Detected</p>
                        <p className="text-xs text-gray-300">Manual review adding 3 days of latency to sales velocity.</p>
                    </div>
                </div>

                <div className="bg-[#0d0f12]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-start gap-3 pointer-events-auto hover:bg-[#0d0f12] transition-colors cursor-default hover:border-white/10">
                    <div className="mt-1">
                        <Sparkles className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                        <p className="text-[10px] text-green-400 font-bold uppercase tracking-wider mb-1">Proposed Optimization</p>
                        <p className="text-xs text-gray-300">Automate quote generation for deals below $5k threshold.</p>
                    </div>
                </div>

                <div className="bg-[#0d0f12]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center justify-between pointer-events-auto hover:bg-[#0d0f12] transition-colors cursor-default hover:border-white/10">
                    <div>
                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">AI Prediction</p>
                        <p className="text-xs text-gray-300">Projected 42% increase in closed-won volume.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <button className="w-6 h-6 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 transition-colors cursor-pointer">
                            <Plus className="w-3 h-3" />
                        </button>
                        <button className="w-6 h-6 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 transition-colors cursor-pointer">
                            <Minus className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Canvas;
