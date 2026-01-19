import React from 'react';
import { GeneratedContent } from '../types';
import { BatikDivider, MandalaFlower } from './Ornament';

interface QuoteSectionProps {
    aiContent: GeneratedContent | null;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ aiContent }) => {
    const JAVA_GUNUNGAN_URL = "https://i.pinimg.com/originals/fa/31/d7/fa31d7c7845aa910ec6aed6a46f97387.png";
    return (
        <section className="py-16 md:py-24 px-6 bg-java-cream relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <img src={JAVA_GUNUNGAN_URL} alt="Gunungan" className="h-24 md:h-32 mx-auto mb-6 md:mb-8 opacity-100 drop-shadow-sm" />
                <h3 className="text-2xl md:text-3xl font-display text-java-dark mb-6 md:mb-8 font-bold tracking-wide">Doa & Harapan</h3>
                <p className="text-java-brown font-display text-lg md:text-2xl leading-relaxed italic mb-8 md:mb-10 px-2 md:px-12">
                    "{aiContent?.quote || "Mugi-mugi Gusti Allah tansah paring berkah..."}"
                </p>

                {/* Divider */}
                <div className="w-full max-w-xs mx-auto opacity-80 animate-fade-in-up flex justify-center">
                    <BatikDivider className="h-8 text-java-gold" />
                </div>
            </div>

            {/* Background Ornaments */}
            <div className="absolute top-10 left-[-50px] w-64 h-64 opacity-10 text-java-dark pointer-events-none">
                <MandalaFlower className="w-full h-full animate-spin-slow" />
            </div>
            <div className="absolute bottom-10 right-[-50px] w-64 h-64 opacity-10 text-java-dark pointer-events-none">
                <MandalaFlower className="w-full h-full animate-spin-slow-reverse" />
            </div>
        </section>
    );
};
