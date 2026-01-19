import React from 'react';
import { CommentData } from '../types';
import { MessageCircle } from 'lucide-react';

interface CommentSectionProps {
    comments: CommentData[];
    onCommentClick: () => void;
    isCustomGuest: boolean;
    existingCommentId: number | null;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments, onCommentClick, isCustomGuest, existingCommentId }) => {
    return (
        <section id="section-wishes" className="py-16 md:py-24 px-6 bg-java-dark text-white relative bg-batik-pattern bg-blend-multiply bg-cover">
            <div className="absolute inset-0 bg-java-dark/90"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-java-gold mb-2 md:mb-3">Ucapan & Doa</h2>
                    <p className="text-gray-300 text-sm md:text-base font-sans">Berikan ucapan selamat dan doa restu untuk kami</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 mb-8 md:mb-10 max-h-[400px] md:max-h-[500px] overflow-y-auto custom-scrollbar shadow-2xl">
                    {comments.length === 0 ? (
                        <div className="text-center py-10 text-gray-400 italic">
                            Belum ada ucapan. Jadilah yang pertama memberikan doa restu.
                        </div>
                    ) : (
                        comments.map((c, i) => (
                            <div key={i} className="mb-5 md:mb-6 border-b border-white/10 pb-5 md:pb-6 last:border-0 last:pb-0">
                                <div className="flex items-start gap-3 md:gap-4 mb-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-java-gold to-yellow-600 flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg flex-shrink-0">
                                        {c.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h5 className="font-bold text-sm md:text-base text-java-cream font-display tracking-wide">{c.name}</h5>
                                            <span className="text-[10px] md:text-xs text-gray-400 font-sans">{c.time}</span>
                                        </div>
                                        <p className="text-gray-200 text-xs md:text-sm font-sans leading-relaxed bg-black/20 p-2 md:p-3 rounded-lg rounded-tl-none">{c.msg}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="text-center">
                    {(!isCustomGuest || !existingCommentId) ? (
                        <button
                            onClick={onCommentClick}
                            className={`bg-java-gold hover:bg-white text-java-dark font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2 mx-auto text-sm md:text-base ${!isCustomGuest ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!isCustomGuest}
                        >
                            <MessageCircle size={18} className="md:w-5 md:h-5" />
                            {!isCustomGuest ? "Khusus Tamu Undangan" : "Kirim Ucapan"}
                        </button>
                    ) : (
                        <div className="space-y-3">
                            <div className="text-java-gold text-sm font-bold">Anda sudah mengirimkan ucapan</div>
                            <button
                                onClick={onCommentClick}
                                className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-6 rounded-full transition-all border border-white/30 text-xs md:text-sm"
                            >
                                Edit Ucapan
                            </button>
                        </div>
                    )}
                    {!isCustomGuest && <p className="text-xs text-gray-500 mt-2">Hanya tamu dengan undangan personal yang dapat mengirim ucapan.</p>}
                </div>
            </div>
        </section>
    );
};
