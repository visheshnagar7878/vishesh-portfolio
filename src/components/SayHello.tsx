'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function SayHello() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(prev => prev + 1);

        // Confetti explosion
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            zIndex: 1000,
        };

        function fire(particleRatio: number, opts: any) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    };

    return (
        <div className="mt-12 text-center">
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 transition-transform">
                <button
                    onClick={handleClick}
                    className="px-8 py-3 bg-black rounded-full text-white font-bold text-lg relative overflow-hidden group"
                >
                    <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 transition-colors">
                        👋 Say Hello!
                    </span>
                </button>
            </div>
            {clicks > 0 && <p className="mt-4 text-gray-500 text-sm animate-bounce">Hello x {clicks}!</p>}
        </div>
    );
}
