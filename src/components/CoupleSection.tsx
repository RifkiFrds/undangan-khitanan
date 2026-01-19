import React from 'react';
import { CoupleData, GeneratedContent } from '../types';

interface CoupleSectionProps {
    data: CoupleData;
    aiContent: GeneratedContent | null;
    isKhitanan: boolean;
    coupleSectionTitle: string;
    displayCouple: string;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ data, aiContent, isKhitanan, coupleSectionTitle, displayCouple }) => {
    const { groomName, groomParents, brideName, brideParents, couplePhoto } = data;

    return (
        <section id="section-couple" className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-script text-java-dark">{coupleSectionTitle}</h2>
                </div>

                <div className={`flex flex-col ${isKhitanan ? 'items-center' : 'md:flex-row justify-center items-center'} gap-10 md:gap-20`}>

                    {/* Groom / Child */}
                    <div className="flex flex-col items-center text-center animate-zoom-in group">
                        <div className="relative w-56 h-56 md:w-80 md:h-80 mb-6 md:mb-8">
                            <div className="absolute inset-0 border-[3px] border-java-gold rounded-full transform rotate-3 transition-transform duration-500 group-hover:rotate-12 opacity-60"></div>
                            <div className="absolute inset-0 border-[3px] border-java-dark/20 rounded-full transform -rotate-3 transition-transform duration-500 group-hover:-rotate-12"></div>

                            {/* Image Wrapper with Clipping for Zoom Effect */}
                            <div className="absolute inset-0 rounded-full overflow-hidden z-10 shadow-2xl">
                                <img
                                    src={isKhitanan ? displayCouple : (couplePhoto || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80")}
                                    alt={groomName}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${isKhitanan ? 'scale-[1.8] object-[center_15%]' : ''}`}
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-display font-bold text-java-dark mb-2 md:mb-3 tracking-wide">{groomName}</h3>
                        <p className="text-java-gold-dark font-sans text-xs tracking-[0.2em] font-bold uppercase mb-3 md:mb-4">{isKhitanan ? "Putra Tercinta Dari" : "Putra Bpk/Ibu"}</p>
                        <p className="text-java-brown font-sans text-base md:text-lg max-w-md leading-relaxed px-4">{groomParents}</p>
                        {isKhitanan && (
                            <div className="mt-6 md:mt-8 bg-java-cream px-6 md:px-8 py-3 md:py-4 rounded-xl border border-java-gold/30 shadow-sm relative overflow-hidden">
                                <p className="text-java-gold-dark font-bold font-display italic text-lg md:text-2xl relative z-10">{aiContent?.wetonAnalysis ? aiContent.wetonAnalysis.split(':')[0] : 'Sabtu Kliwon'}</p>
                            </div>
                        )}
                    </div>

                    {!isKhitanan && (
                        <>
                            <div className="text-5xl md:text-7xl font-script text-java-gold/50">&</div>

                            {/* Bride */}
                            <div className="flex flex-col items-center text-center animate-zoom-in group">
                                <div className="relative w-56 h-56 md:w-80 md:h-80 mb-6 md:mb-8">
                                    <div className="absolute inset-0 border-[3px] border-java-gold rounded-full transform -rotate-3 transition-transform duration-500 group-hover:-rotate-12 opacity-60"></div>
                                    <div className="absolute inset-0 border-[3px] border-java-dark/20 rounded-full transform rotate-3 transition-transform duration-500 group-hover:rotate-12"></div>
                                    <div className="absolute inset-0 rounded-full overflow-hidden z-10 shadow-2xl">
                                        <img
                                            src={data.couplePhoto ? data.couplePhoto : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}
                                            alt={brideName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-display font-bold text-java-dark mb-2 md:mb-3 tracking-wide">{brideName}</h3>
                                <p className="text-java-gold-dark font-sans text-xs tracking-[0.2em] font-bold uppercase mb-3 md:mb-4">Putri Bpk/Ibu</p>
                                <p className="text-java-brown font-sans text-base md:text-lg max-w-md leading-relaxed px-4">{brideParents}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
