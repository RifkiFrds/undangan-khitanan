import React from 'react';
import { BatikDivider } from './Ornament';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
    gallery: string[] | undefined;
    currentSlide: number;
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
    nextSlide: () => void;
    prevSlide: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery, currentSlide, setCurrentSlide, nextSlide, prevSlide }) => {
    if (!gallery || gallery.length === 0) return null;

    return (
        <section id="section-gallery" className="py-16 md:py-24 px-4 md:px-6 bg-java-cream">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-6xl font-script text-java-dark mb-4 md:mb-6">Galeri Momen</h2>
                    <BatikDivider className="w-40 md:w-56 mx-auto text-java-gold" />
                </div>

                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                    {gallery.map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-java-dark/60 via-transparent to-transparent opacity-60"></div>
                        </div>
                    ))}

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-20">
                        {gallery.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all shadow-md ${idx === currentSlide ? 'bg-java-gold scale-125' : 'bg-white/50 hover:bg-white'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};
