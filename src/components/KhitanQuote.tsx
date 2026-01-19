import React from 'react';
import { FloralDivider } from './Ornament';

export const KhitanQuote: React.FC = () => {
    return (
        <section className="py-12 px-6 text-center relative overflow-hidden inset-0">
            <div className="max-w-3xl mx-auto font-display text-java-brown space-y-6 relative">

                <div className="mb-4">
                    <img src="/bismillah.svg" alt="Bismillah" className="h-12 mx-auto filter sepia opacity-80 hidden" />
                    {/* Using text for better compatibility if svg is missing, or can use a standard font */}
                    <p className="font-arabic text-2xl md:text-3xl text-java-dark">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
                </div>

                <div className="prose prose-lg mx-auto text-java-dark">
                    <p className="leading-relaxed text-base md:text-lg font-serif italic text-gray-700">
                        “Khitan adalah bagian dari fitrah yang Allah tetapkan bagi
                        hamba-Nya sebagai bentuk penyucian diri dan ketaatan kepada
                        ajaran Nabi Ibrahim <span className="font-arabic">مﻼﺴﻟا ﻪﻴﻠﻋ</span>, sebagaimana disabdakan oleh
                        Rasulullah ﷺ bahwa khitan termasuk dari fitrah manusia.
                        Semoga ananda yang dikhitan menjadi pribadi yang suci, sehat,
                        dan bertakwa kepada Allah SWT.”
                    </p>
                </div>

                <div className="flex justify-center pt-4">
                    <FloralDivider className="h-8 w-48 text-java-gold opacity-80" />
                </div>
            </div>
        </section>
    );
};
