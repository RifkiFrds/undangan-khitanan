import React, { useState } from 'react';
import { CoupleData } from '../types';
import { getBankLogo } from '../lib/utils';
import { Check, Copy } from 'lucide-react';

interface GiftSectionProps {
    donation: CoupleData['donation'];
    multiDonations: CoupleData['multiDonations'];
}

export const GiftSection: React.FC<GiftSectionProps> = ({ donation, multiDonations }) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section id="section-gift" className="py-16 md:py-24 px-6 bg-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-java-dark mb-4 md:mb-6 tracking-wide">Tanda Kasih</h2>
                <p className="text-java-brown mb-8 md:mb-12 font-sans leading-relaxed text-base md:text-lg">Tanpa mengurangi rasa hormat, bagi bapak/ibu/saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>

                {/* Single Card Container */}
                <div className="bg-java-cream rounded-3xl border border-java-gold/30 shadow-xl overflow-hidden max-w-2xl mx-auto">
                    {/* Card Header */}
                    <div className="bg-java-dark py-3 md:py-4 px-6">
                        <h3 className="text-white font-display text-lg md:text-xl tracking-wider text-center">Rekening Tujuan</h3>
                    </div>

                    {/* Accounts List */}
                    <div className="divide-y divide-java-gold/20">
                        {multiDonations && multiDonations.length > 0 ? (
                            multiDonations.map((acc, idx) => (
                                <div key={idx} className="p-5 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 hover:bg-white transition-colors">
                                    {/* Logo Area */}
                                    <div className="w-full md:w-32 flex-shrink-0 flex justify-center md:justify-start">
                                        {getBankLogo(acc.bankName) ? (
                                            <img src={getBankLogo(acc.bankName)!} alt={acc.bankName} className="h-8 md:h-12 object-contain" />
                                        ) : (
                                            <div className="h-10 w-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold text-xs">{acc.bankName}</div>
                                        )}
                                    </div>

                                    {/* Details Area */}
                                    <div className="flex-1 text-center md:text-left">
                                        <p className="font-mono text-lg md:text-xl tracking-wider text-java-dark font-bold mb-1">{acc.accountNumber}</p>
                                        <p className="text-xs md:text-sm text-java-brown font-sans">a.n {acc.accountHolder}</p>
                                    </div>

                                    {/* Action Area */}
                                    <button
                                        onClick={() => copyToClipboard(acc.accountNumber, idx)}
                                        className="flex items-center gap-2 text-xs font-bold text-white bg-java-gold hover:bg-java-gold-dark px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
                                    >
                                        {copiedIndex === idx ? <Check size={16} /> : <Copy size={16} />}
                                        {copiedIndex === idx ? 'Tersalin' : 'Salin'}
                                    </button>
                                </div>
                            ))
                        ) : (
                            donation && (
                                <div className="p-5 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 hover:bg-white transition-colors">
                                    <div className="w-full md:w-32 flex-shrink-0 flex justify-center md:justify-start">
                                        {getBankLogo(donation.bankName) ? (
                                            <img src={getBankLogo(donation.bankName)!} alt={donation.bankName} className="h-8 md:h-12 object-contain" />
                                        ) : (
                                            <h4 className="font-bold text-2xl text-java-dark">{donation.bankName}</h4>
                                        )}
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <p className="font-mono text-lg md:text-xl tracking-wider text-java-dark font-bold mb-1">{donation.accountNumber}</p>
                                        <p className="text-xs md:text-sm text-java-brown font-sans">a.n {donation.accountHolder}</p>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(donation.accountNumber, 0)}
                                        className="flex items-center gap-2 text-xs font-bold text-white bg-java-gold hover:bg-java-gold-dark px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all shadow-md hover:scale-105"
                                    >
                                        {copiedIndex === 0 ? <Check size={16} /> : <Copy size={16} />}
                                        {copiedIndex === 0 ? 'Tersalin' : 'Salin'}
                                    </button>
                                </div>
                            )
                        )}
                    </div>

                    <div className="bg-java-cream p-3 md:p-4 text-center border-t border-java-gold/10">
                        <p className="text-xs text-gray-500 italic">Mohon konfirmasi setelah melakukan transfer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
