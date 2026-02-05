import React, { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';

const StickyCta: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 md:hidden transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <a
                href="https://airrsv.net/demosite0000/calendar"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-accent text-white py-3.5 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 text-lg"
            >
                <CalendarCheck className="w-5 h-5" />
                空席確認・予約する
            </a>
        </div>
    );
};

export default StickyCta;