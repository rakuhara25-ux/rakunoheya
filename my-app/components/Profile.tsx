'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Profile() {
    return (
        <section id="profile" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute top-10 right-0 text-[10rem] md:text-[20rem] font-bold text-slate-100 select-none -z-10 leading-none overflow-hidden opacity-50">
                PROFILE
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <AnimatedSection className="relative order-2 md:order-1">
                        <div className="relative w-full aspect-3/4 md:aspect-4/5 overflow-hidden rounded-sm shadow-2xl">
                            <Image
                                src="/profile.jpg"
                                alt="原嶋 樂 (Raku Harashima)"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-sm"></div>
                        </div>
                        {/* Outline decoration */}
                        <div className="absolute -top-4 -left-4 w-full h-full border border-slate-300 -z-10 hidden md:block" />
                    </AnimatedSection>

                    {/* Text Side */}
                    <AnimatedSection delay={0.2} className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-japanese font-bold text-slate-900 mb-8 flex items-baseline gap-4">
                            原嶋 樂
                            <span className="text-lg md:text-xl font-sans font-normal text-slate-400">Raku Harashima</span>
                        </h2>

                        <div className="space-y-6 text-slate-700 font-japanese leading-relaxed">
                            <p className="text-lg">
                                2008年8月25日生まれ。<br />
                                石川県金沢市出身の17歳。
                            </p>

                            <div className="grid grid-cols-[100px_1fr] gap-y-4 text-sm md:text-base">
                                <span className="text-slate-400 font-sans uppercase tracking-wider">Origin</span>
                                <span>石川県金沢市</span>

                                <span className="text-slate-400 font-sans uppercase tracking-wider">Birth</span>
                                <span>2008.08.25</span>

                                <span className="text-slate-400 font-sans uppercase tracking-wider">Family</span>
                                <span>姉と妹がいる３人兄弟</span>
                            </div>

                            <div className="pt-6 border-t border-slate-200 mt-6">
                                <h3 className="text-lg font-bold mb-3 text-slate-900">Background</h3>
                                <p>
                                    演劇好きな姉の影響を受け、中学生から演劇の道を志す。<br />
                                    現役高校生として学業に励みながら、舞台俳優としてのキャリアを積み重ねている。<br />
                                    凛とした佇まいと、役柄に深く没入する憑依型の演技が持ち味。
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
