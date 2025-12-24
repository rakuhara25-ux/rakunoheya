'use client';

import { motion } from 'framer-motion';
import { Marquee } from '@/components/ui/Marquee';
import Image from 'next/image';

const heroImages = [
    "/hero_1.jpg",
    "/hero_2.jpg",
    "/hero_3.jpg",
    "/hero_4.jpg",
];

export function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Marquee */}
            <div className="absolute inset-0 z-0 opacity-20 rotate-[-5deg] scale-110">
                <Marquee speed={40}>
                    {heroImages.map((src, index) => (
                        <div key={index} className="relative w-[30vw] h-[80vh] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                            <Image
                                src={src}
                                alt="Hero background"
                                fill
                                className="object-cover rounded-sm"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950/80 z-0 pointer-events-none" />
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 text-center px-6 mix-blend-screen">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h2 className="text-blue-300 tracking-[0.3em] font-sans text-sm md:text-lg mb-4 uppercase drop-shadow-[0_0_15px_rgba(147,197,253,0.5)]">
                        Actor Portfolio
                    </h2>
                    <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-display font-bold text-white mb-2 tracking-tighter mix-blend-difference leading-none">
                        RAKU
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-japanese font-bold text-slate-200 mb-8 tracking-wide">
                        原嶋 樂
                    </h1>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-px h-24 bg-linear-to-b from-transparent via-blue-400 to-transparent mx-auto" />
                <p className="text-xs text-blue-200/50 mt-2 tracking-widest uppercase animate-pulse">Scroll</p>
            </motion.div>
        </section>
    );
}
