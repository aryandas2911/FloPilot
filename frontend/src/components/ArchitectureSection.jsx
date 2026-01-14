import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, RefreshCw, Grid, Check } from 'lucide-react';

const items = [
    { icon: Cpu, title: 'AI Logic Engine', desc: 'Intelligent processing of complex nested workflows.' },
    { icon: RefreshCw, title: 'Live Flow Sync', desc: 'Bidirectional updates between chat and visual canvas.' },
    { icon: Grid, title: 'Collaboration', desc: 'Shared workspaces for high-performance product teams.' },
    { icon: Check, title: 'Export Ready', desc: 'High-res SVG, Mermaid, and documentation exports.' },
];

const ArchitectureSection = () => {
    return (
        <section className="py-24 bg-[#050608]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        Architecture over Agitation.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#007AFF] font-medium text-lg"
                    >
                        Design systems that scale, not just diagrams that sit.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0F1115] p-8 rounded-2xl flex flex-col h-full border border-white/5 hover:border-blue-500/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
