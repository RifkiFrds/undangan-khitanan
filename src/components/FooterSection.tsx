import React from 'react';

export const FooterSection: React.FC = () => {
    const JAVA_GUNUNGAN_URL = "https://i.pinimg.com/originals/fa/31/d7/fa31d7c7845aa910ec6aed6a46f97387.png";
    return (
        <footer className="pt-10 pb-32 md:pt-12 md:pb-32 bg-java-dark text-center text-gray-400 text-xs font-sans border-t border-white/10">
            <div className="mb-4 opacity-50 flex justify-center">
                <img src={JAVA_GUNUNGAN_URL} alt="Gunungan" className="h-10 md:h-14 grayscale opacity-60" />
            </div>
            <p className="mb-2 tracking-widest uppercase">Created By <span className="font-bold text-java-gold"><a href="https://godinov.my.id">GODINOV Indonesia</a></span></p>
            <p>&copy; 2025 Undangan Digital </p>
        </footer>
    );
};
