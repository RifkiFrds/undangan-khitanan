import React from 'react';
import { MandalaFlower } from './Ornament';
import { MessageCircle } from 'lucide-react';

interface CoverOverlayProps {
    headerTitle: string;
    groomNickname: string;
    brideNickname: string;
    isKhitanan: boolean;
    guestName: string;
    onOpen: () => void;
}

export const CoverOverlay: React.FC<CoverOverlayProps> = ({ headerTitle, groomNickname, brideNickname, isKhitanan, guestName, onOpen }) => {
    const JAVA_GUNUNGAN_URL = "https://i.pinimg.com/originals/fa/31/d7/fa31d7c7845aa910ec6aed6a46f97387.png";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-java-dark text-white overflow-hidden h-[100dvh] w-full bg-batik-pattern bg-cover bg-center"
        >
            {/* Full Cover Image Overlay */}
            <div className="absolute inset-0 z-0 bg-java-dark/90">
            </div>

            {/* SVG Background Ornaments */}
            <div className="absolute top-[-15%] left-[-15%] w-[80%] md:w-[60%] opacity-30 pointer-events-none z-10">
                <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow" />
            </div>
            <div className="absolute bottom-[-15%] right-[-15%] w-[80%] md:w-[60%] opacity-30 pointer-events-none z-10">
                <MandalaFlower className="w-full h-full text-java-gold animate-spin-slow-reverse" />
            </div>

            <div className="relative z-20 text-center p-6 md:p-8 max-w-lg w-full animate-fade-in-up border border-java-gold/30 bg-java-dark/40 backdrop-blur-sm rounded-3xl m-4 shadow-2xl">
                <div className="mb-6 md:mb-8 flex justify-center">
                    <img src={JAVA_GUNUNGAN_URL} alt="Gunungan" className="h-36 md:h-52 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-fade-in-up" />
                </div>

                <h3 className="text-xs md:text-base font-sans tracking-[0.4em] mb-4 text-white/90 uppercase font-semibold">{headerTitle}</h3>

                <h1 className="text-2xl md:text-7xl font-script text-java-gold mb-6 md:mb-8 leading-normal drop-shadow-md">
                    {isKhitanan ? groomNickname : `${groomNickname} & ${brideNickname}`}
                </h1>

                {/* GUEST NAME SECTION */}
                <div className="mb-6 md:mb-8 animate-zoom-in" style={{ animationDelay: '0.5s' }}>
                    <p className="text-white/70 text-xs md:text-sm font-sans mb-2 tracking-widest">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                    <div className="bg-white/10 border border-java-gold/30 rounded-xl p-3 backdrop-blur-md inline-block min-w-[200px]">
                        <h2 className="text-xl md:text-2xl font-bold text-white font-display tracking-wide capitalize">
                            {guestName}
                        </h2>
                    </div>
                    <p className="text-white/50 text-[10px] mt-2 italic">Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
                </div>

                <button
                    onClick={onOpen}
                    className="bg-java-gold hover:bg-java-gold-dark text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 mx-auto tracking-wide text-sm font-sans"
                >
                    <MessageCircle size={18} />
                    BUKA UNDANGAN
                </button>
            </div>
        </div>
    );
};
