import React from 'react';
import { Home, Grid, Activity, Settings, User } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-16 h-full bg-[#0a0a0a] border-r border-white/5 flex flex-col items-center py-6 gap-8">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                    <div className="bg-black rounded-sm"></div>
                    <div className="bg-black rounded-sm opacity-50"></div>
                    <div className="bg-black rounded-sm opacity-50"></div>
                    <div className="bg-black rounded-sm"></div>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full px-2">
                <button className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex justify-center cursor-pointer">
                    <Grid className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors flex justify-center cursor-pointer">
                    <Activity className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors flex justify-center cursor-pointer">
                    <Home className="w-5 h-5" />
                </button>
            </div>

            <div className="mt-auto flex flex-col gap-6 w-full px-2">
                <button className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors flex justify-center cursor-pointer">
                    <User className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors flex justify-center cursor-pointer">
                    <Settings className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
