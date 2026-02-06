'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/education' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5,
            });
        });
        return () => ctx.revert();
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 border-black/5"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-purple-400 transition-colors">
                    vishesh nagar
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm uppercase tracking-widest hover:text-purple-400 transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <div className="pl-4 border-l border-white/20">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Toggle & Theme */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button className="text-white" onClick={toggleMenu}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 absolute top-full left-0 w-full p-6 border-b border-white/10">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium hover:text-purple-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
