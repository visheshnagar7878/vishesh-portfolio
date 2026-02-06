'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'Data Analytics & ML',
        description: [
            '💥 Developing Models that clean, transform and analyse raw data to discover useful information, in order to make conclusions about the data.',
            '💥 Experience of working with different languages like MYSQL, PYTHON, HTML, C++, CSS, JavaScript etc. And have knowledge of Data analysis algorithms and techniques.'
        ],
        image: '/images/Data_Analysis.svg',
        align: 'left',
    },
    {
        title: 'Web Development',
        description: [
            '💥 Building Fully responsive website frontend using HTML, CSS, Bootstrap and Javascript.',
            '💥 As of now I have knowledge only of frontend and also learning backend but in near future I will learn more skills and excited to explore React, NodeJS, Django, Flask and many more.',
            '💥 I have also used Adobe Photoshop, Illustrator and Figma to design User interface of websites and designed logos.'
        ],
        image: '/images/website.svg',
        align: 'right', // Alternate alignment if desired, or keep uniform
    },
    {
        title: 'Data Structures and Algorithms',
        description: [
            '💥 I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently.',
            '💥 I am also interested in learning Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces, Codechef, Hackerrank and many more.'
        ],
        image: '/images/Programming.svg', // Reusing an existing image or generic one
        align: 'left',
    }
];

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.feature-card').forEach((card: any, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative font-[family-name:var(--font-syne)]">
                    What I Do ?
                    <span className="block w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
                </h2>

                <div className="space-y-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="flex-1 w-full max-w-md">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                                />
                            </div>
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <h3 className="text-3xl font-bold text-foreground font-[family-name:var(--font-syne)]">{feature.title}</h3>
                                <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed space-y-4">
                                    {feature.description.map((line, i) => (
                                        <p key={i}>{line}</p>
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
