import React from 'react';
import { FloralDivider } from './Ornament';
import { CoupleData } from '../types';

interface OpeningSectionProps {
    eventType: CoupleData['eventType'];
}

export const OpeningSection: React.FC<OpeningSectionProps> = ({ eventType }) => {
    const isKhitanan = eventType === 'KHITANAN';
    const isTunangan = eventType === 'TUNANGAN';

    // Determine title based on event type
    const eventNameText = isKhitanan ? "Khitanan putra kami" : (isTunangan ? "Pertunangan kami" : "Pernikahan kami");

    return (
        <section className="py-12 px-6 bg-white text-center relative overflow-hidden border-b border-java-gold/10">
            <div className="absolute inset-0 bg-paper-texture opacity-30"></div>
            <div className="max-w-3xl mx-auto font-display text-java-brown space-y-4 md:space-y-6 relative z-10 animate-fade-in-up">
                <h3 className="text-xl md:text-3xl font-bold text-java-dark">Assalamu’alaikum Warahmatullahi Wabarakatuh</h3>
                <p className="leading-relaxed text-base md:text-lg text-gray-700 font-sans">
                    Dengan memanjatkan puji syukur ke hadirat Allah SWT atas limpahan rahmat dan karunia-Nya, kami sekeluarga bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara {eventNameText}:
                </p>

                {/* Decorative Divider */}
                <div className="flex justify-center pt-4">
                    <FloralDivider className="h-8 w-48 text-java-gold" />
                </div>
            </div>
        </section>
    );
};
