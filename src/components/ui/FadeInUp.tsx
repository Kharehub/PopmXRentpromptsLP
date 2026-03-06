"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeInUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
}

export default function FadeInUp({
    children,
    className = "",
    delay = 0,
    duration = 0.7,
    y = 40,
}: FadeInUpProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {children}
        </motion.div>
    );
}
