import React from 'react';
import { CoupleData } from '../types';
import { MandalaFlower } from './Ornament';
import { CountdownItem } from './CountdownItem';

interface HeroSectionProps {
    data: CoupleData;
    timeLeft: { days: number, hours: number, minutes: number, seconds: number };
    headerTitle: string;
    isKhitanan: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, timeLeft, headerTitle, isKhitanan }) => {
    const { groomNickname, brideNickname, secondEventDate } = data;

    return (
        <section id="section-home" className="h-[100dvh] relative flex items-center justify-center overflow-hidden py-10 md:py-20 bg-batik-pattern bg-cover bg-center">
            {/* Overlay to ensure text readability on batik */}
            <div className="absolute inset-0 bg-java-dark/85"></div>

            {/* SVG Ornaments (Top Corners) */}
            <div className="absolute top-[-50px] left-[-50px] w-48 h-48 md:w-80 md:h-80 opacity-40 z-10 pointer-events-none">
                <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow" />
            </div>
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 md:w-80 md:h-80 opacity-40 z-10 transform scale-x-[-1] pointer-events-none">
                <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow-reverse" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mt-0 md:mt-12">
                <div className="animate-fade-in-up">
                    <h4 className="text-white/90 font-sans tracking-[0.3em] uppercase mb-4 md:mb-6 text-xs md:text-base drop-shadow-sm font-bold">{headerTitle}</h4>
                    <h1 className="text-4xl md:text-8xl font-script text-java-gold mb-6 md:mb-8 drop-shadow-lg leading-snug py-2">
                        {isKhitanan ? groomNickname : `${groomNickname} & ${brideNickname}`}
                    </h1>

                    {/* Countdown Timer */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-8 my-8 md:my-12">
                        <CountdownItem value={timeLeft.days} label="Hari" />
                        <CountdownItem value={timeLeft.hours} label="Jam" />
                        <CountdownItem value={timeLeft.minutes} label="Menit" />
                        <CountdownItem value={timeLeft.seconds} label="Detik" />
                    </div>

                    <div className="inline-block border-y border-white/20 py-3 md:py-4 px-6 md:px-10 backdrop-blur-sm bg-white/5 rounded-2xl shadow-lg">
                        <p className="text-lg md:text-2xl text-white font-display italic tracking-wide">
                            {new Date(secondEventDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-java-cream to-transparent z-10"></div>
        </section>
    );
};
