import React from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

interface CommentModalProps {
    isOpen: boolean;
    onClose: () => void;
    isSuccess: boolean;
    onSubmit: () => void;
    isSubmitting: boolean;
    existingCommentId: number | null;
    name: string;
    setName: (name: string) => void;
    msg: string;
    setMsg: (msg: string) => void;
    isCustomGuest: boolean;
}

export const CommentModal: React.FC<CommentModalProps> = ({
    isOpen, onClose, isSuccess, onSubmit, isSubmitting, existingCommentId,
    name, setName, msg, setMsg, isCustomGuest
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 md:p-8 relative animate-fade-in-up shadow-2xl">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-50">
                    <X size={24} />
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 animate-fade-in-up">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                            <CheckCircle size={48} className="text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-java-dark mb-2">Terima Kasih!</h3>
                        <p className="text-gray-500 text-center mb-8">Ucapan dan doa restu Anda telah berhasil kami terima.</p>
                        <button
                            onClick={onClose}
                            className="bg-java-dark text-white font-bold py-3 px-10 rounded-xl hover:bg-java-gold hover:text-java-dark transition-all shadow-lg"
                        >
                            Tutup
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl md:text-2xl font-bold font-display text-java-dark mb-4 md:mb-6 border-b pb-4">
                            {existingCommentId ? "Edit Ucapan" : "Kirim Ucapan"}
                        </h3>
                        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-4 md:space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-java-brown mb-2 uppercase tracking-wider">Nama</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => !isCustomGuest && setName(e.target.value)}
                                    readOnly={isCustomGuest}
                                    className={`w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none transition-all font-sans font-bold ${isCustomGuest ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-gray-50 text-gray-800 focus:ring-2 focus:ring-java-gold'}`}
                                    placeholder={!isCustomGuest ? "Tulis nama anda..." : ""}
                                    required
                                />
                                {isCustomGuest && <p className="text-[10px] text-gray-500 mt-1 italic">*Nama sesuai undangan</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-java-brown mb-2 uppercase tracking-wider">Ucapan</label>
                                <textarea
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-java-gold focus:border-transparent outline-none h-24 md:h-32 resize-none transition-all font-sans"
                                    placeholder="Tuliskan doa dan harapan..."
                                    required
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-java-dark text-white font-bold py-3 md:py-4 rounded-xl hover:bg-java-gold hover:text-java-dark transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50">
                                <Send size={18} /> {isSubmitting ? 'MENGIRIM...' : (existingCommentId ? 'UPDATE' : 'KIRIM')}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};
