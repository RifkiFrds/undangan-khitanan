import { useState, useEffect, RefObject } from 'react';

export const useScrollSpy = (containerRef: RefObject<HTMLElement>, sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            root: container,
            threshold: 0.5
        });

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [containerRef, sectionIds]); // Be careful with dependency array if sectionIds changes

    return { activeSection, setActiveSection };
}
