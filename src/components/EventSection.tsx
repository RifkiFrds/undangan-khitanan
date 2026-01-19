import React from 'react';
import { CoupleData } from '../types';
import { MandalaFlower } from './Ornament';
import { BookOpen, Calendar, Clock, MapPin, PartyPopper } from 'lucide-react';

interface EventSectionProps {
    data: CoupleData;
    akadTitle: string;
    akadSubtitle: string;
    resepsiTitle: string;
    resepsiSubtitle: string;
}

export const EventSection: React.FC<EventSectionProps> = ({ data, akadTitle, akadSubtitle, resepsiTitle, resepsiSubtitle }) => {
    const { weddingDate, weddingTime, locationName, locationAddress, secondEventDate, secondEventTime } = data;

    return (
        <section id="section-event" className="py-16 md:py-24 px-4 md:px-6 bg-java-dark text-white relative bg-batik-pattern bg-blend-multiply overflow-hidden">
            {/* SVG Overlay for Event Section */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-java-cream to-transparent z-10 opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none rotate-180">
                <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-6xl font-script text-java-gold mb-10 md:mb-16 drop-shadow-lg">Rangkaian Acara</h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Event 1 */}
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 hover:border-java-gold/60 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 group relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                            <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow" />
                        </div>

                        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-java-gold/10 mb-4 md:mb-6 text-java-gold group-hover:bg-java-gold group-hover:text-java-dark transition-colors relative z-10">
                            <BookOpen size={24} className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2 tracking-wide relative z-10">{akadTitle}</h3>
                        <p className="text-java-gold/90 font-sans text-xs tracking-widest uppercase mb-6 md:mb-8 font-semibold relative z-10">{akadSubtitle}</p>

                        <div className="space-y-4 md:space-y-6 text-gray-200 relative z-10">
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                                <Calendar size={20} className="text-java-gold mb-1 md:w-6 md:h-6" />
                                <span className="font-display text-lg md:text-xl">{new Date(weddingDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                                <Clock size={20} className="text-java-gold mb-1 md:w-6 md:h-6" />
                                <span className="font-display text-lg md:text-xl">{weddingTime}</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                                <MapPin size={20} className="text-java-gold mb-1 md:w-6 md:h-6" />
                                <span className="font-sans font-medium text-base md:text-lg">{locationName}</span>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 relative z-10">
                            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 leading-relaxed px-2 md:px-4">{locationAddress}</p>
                            <a
                                href={`https://maps.app.goo.gl/D2NBa9q5dQGem4Bh8`}
                                target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-java-dark bg-java-gold px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-white transition-all transform hover:scale-105"
                            >
                                <MapPin size={14} /> LIHAT LOKASI
                            </a>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 hover:border-java-gold/60 transition-all hover:transform hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 group relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                            <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow" />
                        </div>
                        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-java-gold/10 mb-4 md:mb-6 text-java-gold group-hover:bg-java-gold group-hover:text-java-dark transition-colors relative z-10">
                            <PartyPopper size={24} className="md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2 tracking-wide relative z-10">{resepsiTitle}</h3>
                        <p className="text-java-gold/90 font-sans text-xs tracking-widest uppercase mb-6 md:mb-8 font-semibold relative z-10">{resepsiSubtitle}</p>

                        <div className="space-y-4 md:space-y-6 text-gray-200 relative z-10">
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                                <Calendar size={20} className="text-java-gold mb-1 md:w-6 md:h-6" />
                                <span className="font-display text-lg md:text-xl">{new Date(secondEventDate || weddingDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                                <Clock size={20} className="text-java-gold mb-1 md:w-6 md:h-6" />
                                <span className="font-display text-lg md:text-xl">{secondEventTime || "11:00 WIB"}</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                                <MapPin size={20} className="text-java-gold mb-1 md:w-6 md:h-6" />
                                <span className="font-sans font-medium text-base md:text-lg">{locationName}</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 relative z-10">
                            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 leading-relaxed px-2 md:px-4">{locationAddress}</p>
                            <a
                                href={`https://maps.app.goo.gl/D2NBa9q5dQGem4Bh8`}
                                target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-java-dark bg-java-gold px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-white transition-all transform hover:scale-105"
                            >
                                <MapPin size={14} /> LIHAT LOKASI
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
