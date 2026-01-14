import React from 'react';
import { motion } from 'framer-motion';

const InsightSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-[#12141a] rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border border-white/5">
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />

                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-xs font-bold tracking-wider text-blue-500 uppercase">Example Insight</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-medium leading-normal">
                            "Reduced step redundancy by <span className="text-blue-500 font-bold">40%</span> in the 'User Onboarding' flow within minutes of deployment."
                        </p>
                    </div>

                    {/* Radial Stat */}
                    <div className="relative w-40 h-40 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                            <motion.circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="#007AFF"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray="440"
                                strokeDashoffset="440"
                                whileInView={{ strokeDashoffset: 440 * 0.6 }} // 40% visible means 60% offset? No, 40% filled means offset = total * (1 - 0.4) 
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </svg>
                        <span className="absolute text-3xl font-bold">40%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightSection;
