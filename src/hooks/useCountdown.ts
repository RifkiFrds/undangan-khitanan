import { useState, useEffect } from 'react';

export const useCountdown = (date: string, time: string) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Parse time from weddingTime string (e.g., "16.00 WIB" -> "16:00")
            const timeString = time ? time.replace('.', ':').split(' ')[0] : '08:00';

            // Assume WIB (UTC+7) for valid count down
            const eventDateStr = `${date}T${timeString}:00+07:00`;
            const eventDate = new Date(eventDateStr);
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [date, time]);

    return timeLeft;
};
