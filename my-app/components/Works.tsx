'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';

const works = [
    {
        title: "金色の湯気",
        group: "劇団遊学生",
        role: "出演",
        quote: "「オイラは河童じゃない！」",
        year: "2025",
        color: "from-amber-200 to-amber-100",
        image: "/gold smoke.jpg", // Swapped for variety
        link: "https://yugakusei.org/", // Dummy data
    },
    {
        title: "終わらぬ浮世の\nルッキングラスワンダーランド",
        group: "全方向外交",
        role: "出演",
        quote: "「帰ろうか」",
        year: "2025",
        color: "from-indigo-200 to-indigo-100",
        image: "/wonder land.jpg", // Dummy data
        link: "https://www.instagram.com/zenhokogaiko.add/", // Dummy data
    }
];

export function Works() {
    return (
        <section id="works" className="py-24 md:py-32 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-japanese font-bold text-white mb-16 text-center">
                        出演作品
                        <span className="block text-sm font-sans font-normal text-slate-400 mt-2 tracking-widest uppercase">Works</span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {works.map((work, index) => (
                        <AnimatedSection key={index} delay={index * 0.2}>
                            <Link href={work.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="relative h-[400px] md:h-[500px] bg-slate-800 rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                                    {/* Image Background (New) */}
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Background Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${work.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-overlay`} />
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500 z-10" />

                                    {/* Content */}
                                    <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12 border border-white/5 group-hover:border-white/20 transition-colors">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-xs text-white rounded-full mb-4">
                                                {work.group}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-japanese font-bold text-white leading-tight whitespace-pre-line drop-shadow-lg">
                                                {work.title}
                                            </h3>
                                        </div>

                                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <p className={`text-xl md:text-2xl font-serif italic text-white mb-2 drop-shadow-md`}>
                                                {work.quote}
                                            </p>
                                            <p className="text-sm text-slate-300 font-sans tracking-wider">
                                                See More →
                                            </p>
                                        </div>

                                        <div className="absolute bottom-8 right-8 text-6xl font-sans font-bold text-white/10 group-hover:text-white/30 transition-colors">
                                            {work.year}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
