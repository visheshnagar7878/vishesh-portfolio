'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import SayHello from './SayHello';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-item', {
                scrollTrigger: {
                    trigger: '.contact-grid',
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
        <section id="contact" ref={containerRef} className="py-20 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Contact Me
                    <span className="block w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full" />
                </h2>

                <div className="contact-grid grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="contact-item flex items-center gap-6 p-6 bg-card rounded-2xl border border-card-border hover:border-purple-500/50 transition-all group">
                            <div className="p-4 bg-card rounded-full group-hover:bg-red-500/20 transition-colors">
                                <Mail className="w-6 h-6 text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <a href="mailto:visheshnagar100@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                                    visheshnagar100@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-item flex items-center gap-6 p-6 bg-card rounded-2xl border border-card-border hover:border-green-500/50 transition-all group">
                            <div className="p-4 bg-card rounded-full group-hover:bg-green-500/20 transition-colors">
                                <Phone className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Phone</h3>
                                <p className="text-gray-400">
                                    +91 9999999999
                                </p>
                            </div>
                        </div>

                        <div className="contact-item flex items-center gap-6 p-6 bg-card rounded-2xl border border-card-border hover:border-blue-500/50 transition-all group">
                            <div className="p-4 bg-card rounded-full group-hover:bg-blue-500/20 transition-colors">
                                <MapPin className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Location</h3>
                                <p className="text-gray-400">
                                    Noida, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="contact-item relative flex justify-center items-center">
                        <div className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden border-4 border-card-border shadow-2xl">
                            <img
                                src="/images/photo1.jpg"
                                alt="Vishesh Nagar"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute inset-0 rounded-full border border-purple-500/30 scale-110 animate-pulse" />
                    </div>

                </div>

                <div className="mt-20 flex justify-center space-x-8">
                    <a href="https://www.instagram.com/__sonu_nagar305/" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-125 duration-300">
                        <Instagram className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/vishesh-nagar-1320361a2" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-125 duration-300">
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/Vishesh-Nagar" target="_blank" className="text-gray-400 hover:text-white transition-colors transform hover:scale-125 duration-300">
                        <Github className="w-8 h-8" />
                    </a>
                </div>

                <div className="flex justify-center mt-12">
                    <SayHello />
                </div>
            </div>
        </section>
    );
}
