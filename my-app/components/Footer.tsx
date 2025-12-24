'use client';

import { Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-japanese font-bold text-white mb-6">Contact</h2>
                <p className="text-slate-400 mb-8 font-japanese">
                    出演依頼・お問い合わせは<br />
                    インスタグラムまでお願いいたします。
                </p>

                <a
                    href="https://www.instagram.com/rakurage8?igsh=NXZnZ3BmZDRycGx0&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
                >
                    <Instagram className="w-6 h-6" />
                    <span className="text-sm tracking-wider font-sans">@raku_harashima_official</span>
                </a>

                <p className="text-slate-600 text-sm font-sans">
                    &copy; {new Date().getFullYear()} Raku Harashima. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
