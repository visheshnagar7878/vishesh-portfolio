'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-category', {
                scrollTrigger: {
                    trigger: '.skill-grid',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Skills
                    <span className="block w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
                </h2>

                <div className="skill-grid grid md:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category bg-card p-8 rounded-2xl border border-card-border hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="w-full"
                                    >
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
