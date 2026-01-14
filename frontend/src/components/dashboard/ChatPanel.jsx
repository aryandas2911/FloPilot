import React from 'react';
import { MoreHorizontal, ArrowUp, CheckCircle, Zap } from 'lucide-react';

const ChatPanel = () => {
    return (
        <div className="w-[400px] h-full bg-[#0d0f12] border-r border-white/5 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <div>
                        <h3 className="text-sm font-semibold text-white">AI Consultant</h3>
                        <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">ACTIVE SESSION</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-white cursor-pointer">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* AI Message */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <div className="bg-[#16181d] border border-white/5 p-4 rounded-2xl rounded-tl-none text-sm text-gray-300 leading-relaxed mb-2">
                            I've analyzed your sales funnel. The current "Manual Quote Approval" step is creating a 3-day delay on average. Should we automate this?
                        </div>
                        <span className="text-[10px] text-gray-600 font-mono ml-1 uppercase">FloPilot AI</span>
                    </div>
                </div>

                {/* User Message */}
                <div className="flex gap-4 flex-row-reverse">
                    <div className="flex-1">
                        <div className="bg-white text-black p-4 rounded-2xl rounded-tr-none text-sm font-medium leading-relaxed mb-2 shadow-lg">
                            Yes, let's set a threshold: any quote under $5,000 can be auto-approved if it matches our standard template.
                        </div>
                        <span className="text-[10px] text-gray-600 font-mono mr-1 uppercase text-right block">Founder</span>
                    </div>
                </div>

                {/* AI Response with Action */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <div className="bg-[#16181d] border border-white/5 p-4 rounded-2xl rounded-tl-none text-sm text-gray-300 leading-relaxed mb-4">
                            Perfect. Updating the workflow now with a decision node for "Quote Value &gt; $5k".

                            <div className="mt-4 bg-[#0a0a0a] border border-white/5 rounded-xl p-3 flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                </div>
                                <span className="text-xs text-gray-400">Workflow synced across team</span>
                            </div>
                        </div>
                        <span className="text-[10px] text-gray-600 font-mono ml-1 uppercase">FloPilot AI</span>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-6 pt-0">
                <div className="bg-[#16181d] border border-white/5 rounded-xl p-2 flex items-center gap-2 pr-2">
                    <input
                        type="text"
                        placeholder="Message FloPilot..."
                        className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none"
                    />
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                            <Zap className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer">
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="flex gap-3 mt-4 px-2">
                    <button className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                        ADD NODE
                    </button>
                    <button className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                        HISTORY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPanel;
