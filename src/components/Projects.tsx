'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { portfolioData } from '@/data/portfolio';

const projects = portfolioData.projects;

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Projects
                    <span className="block w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
                </h2>

                <div className="projects-grid grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative bg-card rounded-3xl p-8 border border-card-border overflow-hidden hover:border-card-border/80 transition-all duration-300"
                        >
                            {/* Background Gradient Blob */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-3xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full hover:bg-white/20 transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-card border border-card-border rounded-full text-sm text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
