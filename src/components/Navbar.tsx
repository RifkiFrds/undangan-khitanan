import React from 'react';
import { Home, User, Heart, Calendar, Image, MessageCircle } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
    isKhitanan: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection, isKhitanan }) => {
    const navItems = [
        { id: 'section-home', icon: <Home size={20} />, label: 'Home' },
        { id: 'section-couple', icon: isKhitanan ? <User size={20} /> : <Heart size={20} />, label: isKhitanan ? 'Putra' : 'Couple' },
        { id: 'section-event', icon: <Calendar size={20} />, label: 'Event' },
        { id: 'section-gallery', icon: <Image size={20} />, label: 'Galeri' },
        { id: 'section-wishes', icon: <MessageCircle size={20} />, label: 'Wishes' },
    ];

    return (
        <div className="fixed bottom-4 md:bottom-8 inset-x-0 mx-auto w-fit z-40 bg-white/90 backdrop-blur-xl border border-java-gold/20 p-1.5 rounded-full shadow-2xl flex gap-1 md:gap-2 items-center">
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative flex items-center justify-center rounded-full transition-all duration-500 ease-in-out overflow-hidden ${isActive
                                ? 'bg-java-dark text-white px-4 md:px-5 py-2 md:py-3 w-auto'
                                : 'bg-transparent text-java-brown hover:bg-gray-100 w-10 h-10 md:w-12 md:h-12'
                            }`}
                    >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span className={`whitespace-nowrap font-sans font-semibold text-xs md:text-sm transition-all duration-300 overflow-hidden ${isActive ? 'opacity-100 max-w-[100px] ml-2' : 'opacity-0 max-w-0 ml-0'}`}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};
