"use client";

import { ReactNode, useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    className = "",
    strength = 0.3,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const scale = useTransform(
        [springX, springY],
        ([latestX, latestY]: number[]) => {
            const dist = Math.sqrt(latestX * latestX + latestY * latestY);
            return 1 + dist * 0.001;
        }
    );

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * strength);
        y.set((e.clientY - centerY) * strength);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.button
            ref={ref}
            className={className}
            style={{ x: springX, y: springY, scale }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.button>
    );
}
