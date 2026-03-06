"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FadeInUp from "@/components/ui/FadeInUp";

export default function ProblemAgitation() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Drive dash animation from scroll
    const dashOffset = useTransform(scrollYProgress, [0.1, 0.7], [1000, 0]);
    const lineColor = useTransform(
        scrollYProgress,
        [0.1, 0.4, 0.7],
        ["#EF4444", "#d97706", "#B8F2E6"]
    );

    // Animated counter values
    const ctrDrop = useTransform(scrollYProgress, [0.15, 0.5], [0, 67]);
    const ctrRecovery = useTransform(scrollYProgress, [0.5, 0.8], [67, 215]);

    // Generate path points for a declining then recovering line chart
    const chartPath =
        "M 40 60 C 100 55, 160 65, 220 90 C 280 115, 340 155, 400 180 C 430 190, 460 185, 490 170 C 520 155, 550 120, 580 90 C 610 60, 640 40, 680 35 C 720 30, 750 25, 780 20";

    return (
        <section
            ref={sectionRef}
            id="problem"
            className="relative py-32 lg:py-40 overflow-hidden bg-transparent"
        >
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(49,31,27,0.3),transparent)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section label */}
                <FadeInUp>
                    <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                        The Problem
                    </span>
                </FadeInUp>

                <FadeInUp delay={0.1}>
                    <h2 className="font-editorial text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
                        Creative Fatigue Is
                        <br />
                        <span className="text-gradient-mint">Silently Killing Your CTR</span>
                    </h2>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <p className="max-w-2xl text-lg leading-relaxed text-[#8a9a9e] mb-16">
                        Every 72 hours, your audience develops blindness to your ads. The
                        same visual, the same hook, the same angle — your{" "}
                        <span className="text-fatigue-red font-medium">CTR decays by 45%</span>{" "}
                        within the first two weeks. Without a systematic creative engine,
                        you&apos;re burning budget on dead inventory.
                    </p>
                </FadeInUp>

                {/* ── CTR Decay Visualizer ─────────────────────────── */}
                <FadeInUp delay={0.3}>
                    <div className="relative rounded-2xl bg-white/[0.01] border border-white/[0.05] p-8 lg:p-12">
                        {/* Labels */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-sm text-[#5a6a6e] mb-1">Without Us</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-fatigue-red font-editorial">
                                        <motion.span>
                                            {/* Display the counter */}
                                            {"-"}
                                        </motion.span>
                                        67%
                                    </span>
                                    <span className="text-sm text-[#5a6a6e]">CTR Drop</span>
                                </div>
                            </div>

                            <div className="h-12 w-px bg-gradient-to-b from-transparent via-champagne/30 to-transparent" />

                            <div className="text-right">
                                <p className="text-sm text-[#5a6a6e] mb-1">With POPM × Rentprompts</p>
                                <div className="flex items-baseline gap-2 justify-end">
                                    <span className="text-4xl font-bold text-mint font-editorial">
                                        +215%
                                    </span>
                                    <span className="text-sm text-[#5a6a6e]">CTR Recovery</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="relative w-full h-[200px] lg:h-[280px]">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 820 220"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                {/* Grid lines */}
                                {[40, 80, 120, 160, 200].map((y) => (
                                    <line
                                        key={y}
                                        x1="40"
                                        y1={y}
                                        x2="780"
                                        y2={y}
                                        stroke="rgba(201,169,110,0.06)"
                                        strokeWidth="1"
                                    />
                                ))}

                                {/* Background path */}
                                <path
                                    d={chartPath}
                                    stroke="rgba(201,169,110,0.1)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                {/* Animated path */}
                                <motion.path
                                    d={chartPath}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                    style={{
                                        stroke: lineColor,
                                        strokeDasharray: 1000,
                                        strokeDashoffset: dashOffset,
                                    }}
                                />

                                {/* Glow path */}
                                <motion.path
                                    d={chartPath}
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    fill="none"
                                    style={{
                                        stroke: lineColor,
                                        strokeDasharray: 1000,
                                        strokeDashoffset: dashOffset,
                                        opacity: 0.15,
                                        filter: "blur(4px)",
                                    }}
                                />

                                {/* Fatigue zone label */}
                                <text
                                    x="280"
                                    y="205"
                                    fill="rgba(239,68,68,0.5)"
                                    fontSize="11"
                                    fontFamily="Inter"
                                >
                                    Creative Fatigue Zone
                                </text>

                                {/* Recovery zone label */}
                                <text
                                    x="600"
                                    y="205"
                                    fill="rgba(184,242,230,0.5)"
                                    fontSize="11"
                                    fontFamily="Inter"
                                >
                                    Recovery Zone
                                </text>
                            </svg>

                            {/* Timeline */}
                            <div className="absolute bottom-0 left-[5%] right-[5%] flex justify-between text-xs text-[#5a6a6e]">
                                <span>Week 1</span>
                                <span>Week 2</span>
                                <span>Week 3</span>
                                <span>Week 4</span>
                                <span>Week 5</span>
                                <span>Week 6</span>
                            </div>
                        </div>
                    </div>
                </FadeInUp>
            </div>

            {/* Bottom divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
