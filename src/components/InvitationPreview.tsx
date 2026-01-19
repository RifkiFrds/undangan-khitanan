import React, { useState, useEffect, useRef } from 'react';
import { CoupleData, GeneratedContent } from '../types';
import { useGuest } from '../hooks/useGuest';
import { useComments } from '../hooks/useComments';
import { useCountdown } from '../hooks/useCountdown';
import { useFullscreen } from '../hooks/useFullscreen';
import { useGallery } from '../hooks/useGallery';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { smoothScrollTo } from '../lib/utils';
import { X } from 'lucide-react';

// Components
import { CoverOverlay } from './CoverOverlay';
import { HeroSection } from './HeroSection';
import { QuoteSection } from './QuoteSection';
import { OpeningSection } from './OpeningSection';
import { CoupleSection } from './CoupleSection';
import { EventSection } from './EventSection';
import { GallerySection } from './GallerySection';
import { GiftSection } from './GiftSection';
import { CommentSection } from './CommentSection';
import { CommentModal } from './CommentModal';
import { FooterSection } from './FooterSection';
import { Navbar } from './Navbar';
import { AudioControl } from './AudioControl';
import { FullscreenControl } from './FullscreenControl';

interface InvitationPreviewProps {
    data: CoupleData;
    aiContent: GeneratedContent | null;
    isLoadingAI: boolean;
}

const InvitationPreview: React.FC<InvitationPreviewProps> = ({ data, aiContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { guestName, isCustomGuest } = useGuest();
    const {
        comments, openModal, showModal, setShowModal, isSuccess, isSubmitting,
        existingCommentId, submitComment, newCommentName, setNewCommentName,
        newCommentMsg, setNewCommentMsg
    } = useComments(guestName, isCustomGuest);

    const { isFullscreen, toggleFullscreen } = useFullscreen();
    const timeLeft = useCountdown(data.weddingDate, data.weddingTime);
    const { currentSlide, setCurrentSlide, nextSlide, prevSlide } = useGallery(data.gallery);

    const sectionIds = ['section-home', 'section-couple', 'section-event', 'section-gallery', 'section-wishes'];
    const { activeSection, setActiveSection } = useScrollSpy(scrollContainerRef, sectionIds);

    const isKhitanan = data.eventType === 'KHITANAN';
    const isTunangan = data.eventType === 'TUNANGAN';

    // Text Logic
    const headerTitle = isKhitanan ? "Undangan Khitan" : (isTunangan ? "The Engagement Of" : "The Wedding Of");
    const coupleSectionTitle = isKhitanan ? "Putra Kami" : "Mempelai";

    const displayCouple = data.couplePhoto || (isKhitanan
        ? "https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        : "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");

    const akadTitle = data.eventName || (isKhitanan ? "Prosesi Khitan" : (isTunangan ? "Tukar Cincin" : "Akad Nikah"));
    const akadSubtitle = isKhitanan ? "The Procession" : "The Ceremony";
    const resepsiTitle = data.secondEventName || (isKhitanan ? "Walimatul Khitan" : "Resepsi");
    const resepsiSubtitle = isKhitanan ? "The Celebration" : "The Party";

    // Handlers
    const handleOpenInvitation = () => {
        setIsOpen(true);
        if (window.innerWidth < 768 && !document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => { });
        }
    };

    const handleScrollTo = (id: string) => {
        setActiveSection(id);
        smoothScrollTo(id, scrollContainerRef.current);
    };

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) audioRef.current.pause();
            else audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (isOpen && audioRef.current) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(e => console.error("Autoplay prevented:", e));
        }
    }, [isOpen]);

    if (!isOpen) {
        return (
            <CoverOverlay
                headerTitle={headerTitle}
                groomNickname={data.groomNickname}
                brideNickname={data.brideNickname}
                isKhitanan={isKhitanan}
                guestName={guestName}
                onOpen={handleOpenInvitation}
            />
        );
    }

    return (
        <div ref={scrollContainerRef} className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-java-cream hide-scrollbar relative text-java-brown font-sans">
            <audio ref={audioRef} loop src="/sunda-soundtrack.mp3" />

            {/* Floating Controls */}
            <div className="fixed bottom-24 left-6 z-40 md:bottom-6 flex flex-col gap-3">
                <FullscreenControl isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />
                <AudioControl isPlaying={isPlaying} toggleAudio={toggleAudio} />
            </div>

            <Navbar activeSection={activeSection} scrollToSection={handleScrollTo} isKhitanan={isKhitanan} />

            <HeroSection
                data={data}
                timeLeft={timeLeft}
                headerTitle={headerTitle}
                isKhitanan={isKhitanan}
            />

            <QuoteSection aiContent={aiContent} />

            <OpeningSection eventType={data.eventType} />

            <CoupleSection
                data={data}
                aiContent={aiContent}
                isKhitanan={isKhitanan}
                coupleSectionTitle={coupleSectionTitle}
                displayCouple={displayCouple}
            />

            <EventSection
                data={data}
                akadTitle={akadTitle}
                akadSubtitle={akadSubtitle}
                resepsiTitle={resepsiTitle}
                resepsiSubtitle={resepsiSubtitle}
            />

            <GallerySection
                gallery={data.gallery}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
            />

            <GiftSection
                donation={data.donation}
                multiDonations={data.multiDonations}
            />

            <CommentSection
                comments={comments}
                onCommentClick={openModal}
                isCustomGuest={isCustomGuest}
                existingCommentId={existingCommentId}
            />

            <FooterSection />

            {/* MODALS */}
            <CommentModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                isSuccess={isSuccess}
                onSubmit={submitComment}
                isSubmitting={isSubmitting}
                existingCommentId={existingCommentId}
                name={newCommentName}
                setName={setNewCommentName}
                msg={newCommentMsg}
                setMsg={setNewCommentMsg}
                isCustomGuest={isCustomGuest}
            />
        </div>
    );
};

export default InvitationPreview;
