'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import ThreeCharacter from './ThreeCharacter';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                '.hero-text-line',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power4.out',
                }
            ).fromTo(
                '.hero-social a',
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                },
                '-=0.5'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* 3D Background */}
            <ThreeBackground />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

            <div className="container relative z-10 px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div ref={textRef} className="space-y-6">
                    <h1 className="hero-text-line text-5xl md:text-7xl font-bold leading-tight">
                        Hello All! <br />
                        I&apos;m <span className="text-purple-500">Vishesh</span>
                        <span className="inline-block animate-wave origin-bottom-right ml-4">👋</span>
                    </h1>
                    <p className="hero-text-line text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        I’m a recent high school graduate (12th passed, with 87%) with a growing passion for web development and programming.
                        <br /><br />
                        I’ve completed certifications in Python, HTML, CSS, Bootstrap (Udemy), and built projects using Flask, Tkinter, and WordPress.
                        Recently, I’ve also started learning Git, JavaScript, React JS, and SQL to expand my development skills. I love building things—whether
                        it’s a responsive website, a GUI app, or experimenting with new frameworks. Currently seeking opportunities to intern, collaborate
                        on projects, or learn from experienced developers. Always open to connect and grow! 🌱
                    </p>

                    <div className="hero-social flex space-x-4 pt-4">
                        <a
                            href="https://www.instagram.com/__sonu_nagar305/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card rounded-full hover:bg-purple-600 hover:scale-110 transition-all text-foreground hover:text-white"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vishesh-nagar-1320361a2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card rounded-full hover:bg-blue-600 hover:scale-110 transition-all text-foreground hover:text-white"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/Vishesh-Nagar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-card rounded-full hover:bg-gray-700 hover:scale-110 transition-all text-foreground hover:text-white"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:visheshnagar100@gmail.com"
                            className="p-3 bg-card rounded-full hover:bg-red-600 hover:scale-110 transition-all text-foreground hover:text-white"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex justify-center hero-text-line h-[500px]">
                    <ThreeCharacter />
                </div>
            </div>
        </section>
    );
}
