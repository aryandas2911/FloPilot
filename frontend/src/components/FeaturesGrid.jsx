import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Share2, Wand2 } from 'lucide-react';

const features = [
    {
        icon: MessageSquare,
        title: "Explain",
        description: "Chat with the AI to map out your process in plain English. No complex syntax required.",
        color: "text-blue-500"
    },
    {
        icon: Share2,
        title: "Visualize",
        description: "Instant generation of professional-grade logic diagrams that sync in real-time.",
        color: "text-purple-500"
    },
    {
        icon: Wand2,
        title: "Improve",
        description: "Optimize bottlenecks with AI-driven architectural insights and structural analysis.",
        color: "text-cyan-500"
    }
];

const FeaturesGrid = () => {
    return (
        <section id="solutions" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-[#0F1115] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 shadow-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-5 h-5 opacity-90" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesGrid;
