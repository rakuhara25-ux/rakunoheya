'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

export function Marquee({ children, direction = 'left', speed = 20, className }: MarqueeProps) {
    return (
        <div className={cn("flex overflow-hidden w-full", className)}>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: direction === 'left' ? '-50%' : '50%' }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex min-w-full shrink-0 gap-4"
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
