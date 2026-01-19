import { useState, useEffect } from 'react';

export const useGallery = (gallery: string[] | undefined, intervalTime = 4000) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!gallery || gallery.length === 0) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % gallery.length);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [gallery, intervalTime]);

    const nextSlide = () => {
        if (!gallery) return;
        setCurrentSlide((prev) => (prev + 1) % gallery.length);
    };

    const prevSlide = () => {
        if (!gallery) return;
        setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return { currentSlide, setCurrentSlide, nextSlide, prevSlide };
};
