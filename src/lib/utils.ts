
export const timeAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Baru saja';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit lalu`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam lalu`;
    return `${Math.floor(diffInSeconds / 86400)} hari lalu`;
};

export const getBankLogo = (bankName: string) => {
    const name = bankName.toLowerCase();
    if (name.includes('bni')) return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bank_Negara_Indonesia_logo_%282004%29.svg/2560px-Bank_Negara_Indonesia_logo_%282004%29.svg.png";
    if (name.includes('bca')) return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_ezaPhTLJU84qim6HtqI26tC6p2kq0FEgQ&s";
    return null;
};

export const smoothScrollTo = (id: string, container: HTMLElement | null) => {
    const element = document.getElementById(id);

    if (element && container) {
        const start = container.scrollTop;
        // Get relative position
        const elementTop = element.getBoundingClientRect().top;
        const containerTop = container.getBoundingClientRect().top;
        const offset = elementTop - containerTop;

        const target = start + offset;
        const startTime = performance.now();
        const duration = 1200; // ms duration for elegance

        const easeInOutQuint = (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutQuint(progress);

            container.scrollTo(0, start + (offset * ease));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
};
