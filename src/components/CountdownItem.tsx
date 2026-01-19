import React from 'react';

// Countdown Item Helper Component - Modern Glassmorphism Style
export const CountdownItem = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
        <div className="w-14 h-14 md:w-24 md:h-24 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/20 flex items-center justify-center shadow-lg mb-1 md:mb-2 relative overflow-hidden group hover:border-java-gold/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-java-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-lg md:text-4xl font-display font-bold text-java-gold drop-shadow-sm group-hover:scale-110 transition-transform">{value}</span>
        </div>
        <span className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-sans font-semibold">{label}</span>
    </div>
);
