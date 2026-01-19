import React from 'react';
import { Music, Pause } from 'lucide-react';

interface AudioControlProps {
    isPlaying: boolean;
    toggleAudio: () => void;
}

export const AudioControl: React.FC<AudioControlProps> = ({ isPlaying, toggleAudio }) => (
    <button
        onClick={toggleAudio}
        className="bg-java-gold text-white p-3 rounded-full shadow-lg hover:bg-java-gold-dark transition-all animate-spin-slow border-2 border-white"
        style={{ animationDuration: '4s', animationPlayState: isPlaying ? 'running' : 'paused' }}
    >
        {isPlaying ? <Music size={20} /> : <Pause size={20} />}
    </button>
);
