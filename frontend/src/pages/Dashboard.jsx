import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import ChatPanel from '../components/dashboard/ChatPanel';
import Canvas from '../components/dashboard/Canvas';

const Dashboard = () => {
    return (
        <div className="flex h-screen w-screen bg-[#050608] overflow-hidden font-sans text-white">
            <Sidebar />
            <ChatPanel />
            <Canvas />
        </div>
    );
};

export default Dashboard;
