'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stats animation
            gsap.from('.stat-box', {
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: 'top 80%',
                },
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
            });

            // Certs animation
            gsap.from('.cert-card', {
                scrollTrigger: {
                    trigger: '.certs-grid',
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={containerRef} className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative font-[family-name:var(--font-syne)]">
                    Education & Certifications
                    <span className="block w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
                </h2>

                {/* Competitive Programming / Stats */}
                <div className="stats-container grid md:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="flex justify-center">
                        <img src="/images/Programming.svg" alt="Programming" className="w-full max-w-sm drop-shadow-2xl" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">Competitive Programming</h3>
                        <p className="text-gray-400">Active participant on various coding platforms.</p>
                        <div className="flex gap-6">
                            <a href="https://www.hackerrank.com/Ajitverma?hr_r=1" target="_blank" className="hover:text-green-500 transition-colors">
                                <span className="text-xl font-bold">HackerRank</span>
                            </a>
                            <a href="https://www.hackerearth.com/@ajit457" target="_blank" className="hover:text-blue-500 transition-colors">
                                <span className="text-xl font-bold">HackerEarth</span>
                            </a>
                        </div>

                        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="stat-box bg-card p-4 rounded-xl border border-card-border">
                                <div className="text-4xl font-bold text-green-400">98</div>
                                <div className="text-sm text-gray-400">Marks in Computer Science</div>
                            </div>
                            <div className="stat-box bg-card p-4 rounded-xl border border-card-border">
                                <div className="text-4xl font-bold text-green-400">87%</div>
                                <div className="text-sm text-gray-400">In 12th Grade</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edu-grid grid md:grid-cols-2 gap-12">

                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold mb-8 text-purple-400">Education</h3>
                        {portfolioData.education.map((edu, idx) => (
                            <div key={idx} className="edu-card p-6 bg-card rounded-2xl border border-card-border hover:border-purple-500/50 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                                    <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">{edu.year}</span>
                                </div>
                                <p className="text-gray-400">{edu.institution}</p>
                                {edu.score && <p className="text-gray-500 text-sm mt-2">Score: {edu.score}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold mb-8 text-blue-400">Certifications</h3>
                        <div className="grid gap-6">
                            {portfolioData.certifications.map((cert, idx) => (
                                <div key={idx} className="cert-card group relative p-6 bg-card rounded-2xl border border-card-border hover:border-blue-500/50 transition-all overflow-hidden">
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{cert.name}</h4>
                                        <p className="text-gray-400">{cert.issuer}</p>
                                        <p className="text-sm text-gray-600 mt-1">{cert.date}</p>
                                    </div>
                                    {cert.image && (
                                        <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 opacity-20 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 rotate-12">
                                            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover rounded-lg" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
