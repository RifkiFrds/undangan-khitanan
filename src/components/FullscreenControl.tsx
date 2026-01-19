import React from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface FullscreenControlProps {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
}

export const FullscreenControl: React.FC<FullscreenControlProps> = ({ isFullscreen, toggleFullscreen }) => (
    <button
        onClick={toggleFullscreen}
        className="bg-java-dark/80 text-java-gold p-3 rounded-full shadow-lg hover:bg-java-dark transition-all border border-java-gold/30 backdrop-blur-sm"
        title="Toggle Fullscreen"
    >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
    </button>
);
