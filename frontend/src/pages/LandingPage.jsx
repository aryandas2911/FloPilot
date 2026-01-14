import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import ArchitectureSection from '../components/ArchitectureSection';
import InsightSection from '../components/InsightSection';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <FeaturesGrid />
                <ArchitectureSection />
                <InsightSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
