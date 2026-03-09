"use client";

import { motion } from "motion/react";
import FadeInUp from "@/components/ui/FadeInUp";
import Image from "next/image";

interface Capability {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    icon: React.ReactNode;
    colSpan: string;
    aspectRatio?: string;
    media?: { type: "video" | "image"; src: string };
}

const capabilities: Capability[] = [
    {
        title: "UGC Ad Creatives",
        description:
            "Authentic, scroll-stopping UGC ads crafted by our 700+ vetted global creator network. Optimized for TikTok, Reels & Shorts.",
        stat: "500+",
        statLabel: "variations / month",
        colSpan: "sm:col-span-1 lg:col-span-1",
        aspectRatio: "aspect-[9/16]",
        media: { type: "video", src: "/showcase/chand_2.mp4" },
        icon: (
            <svg className="h-8 w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
    {
        title: "Static Creatives",
        description:
            "High-converting static ad designs for Meta, Google Display & Pinterest. Every pixel engineered for performance.",
        stat: "3.2×",
        statLabel: "avg. ROAS lift",
        colSpan: "sm:col-span-1 lg:col-span-1",
        aspectRatio: "aspect-square",
        media: { type: "image", src: "/showcase/u6737477361_Curated_flat_lay_composition_with_Brand_X_skincar_8994c466-ef40-422e-80a0-23a1af093374_1.png" },
        icon: (
            <svg className="h-8 w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75" />
            </svg>
        ),
    },
    {
        title: "Motion Graphics",
        description:
            "Cinematic motion ads with 3D elements, kinetic typography, and product animations that demand attention.",
        stat: "72%",
        statLabel: "higher view-through",
        colSpan: "sm:col-span-1 lg:col-span-1",
        aspectRatio: "aspect-[9/16]",
        media: { type: "video", src: "/showcase/AI_course_1_1__1_.mp4" },
        icon: (
            <svg className="h-8 w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125" />
            </svg>
        ),
    },
    {
        title: "Landing Pages",
        description:
            "Conversion-optimized landing pages that match your ad creative. Seamless funnel design from click to checkout.",
        stat: "48%",
        statLabel: "CVR improvement",
        colSpan: "sm:col-span-2 lg:col-span-2",
        media: { type: "image", src: "/showcase/u6737477361_Relaxed_woman_in_flowing_white_dress_walking_thro_2439f68c-c3be-4098-b969-e3be8b66b3cb_1.png" },
        icon: (
            <svg className="h-8 w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
            </svg>
        ),
    },
    {
        title: "Email Designs",
        description:
            "Retention-focused email creatives that keep your brand top-of-mind and drive repeat purchases.",
        stat: "34%",
        statLabel: "open rate avg",
        colSpan: "lg:col-span-1",
        media: { type: "image", src: "/showcase/u6737477361_Ultra-realistic_studio_editorial_portrait_of_Medu_b7cb8e38-dafa-4cb9-978e-e664af9d75ee_3.png" },
        icon: (
            <svg className="h-8 w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        title: "A/B Testing Lab",
        description:
            "Systematic multivariate creative testing. We isolate winning hooks, visuals, CTAs, and formats — then double down.",
        stat: "215%",
        statLabel: "CTR improvement",
        colSpan: "lg:col-span-1",
        media: { type: "image", src: "/showcase/u6737477361_Ritual_performer_covered_in_red_paint_spinning_wi_f35f09cf-2c32-4b3f-85c1-f0f292f678c5_1.png" },
        icon: (
            <svg className="h-8 w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
    },
];

export default function Capabilities() {
    return (
        <section id="capabilities" className="relative py-32 lg:py-40 overflow-hidden bg-transparent">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_60%,rgba(49,31,27,0.2),transparent)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-20">
                    <FadeInUp>
                        <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                            Capabilities
                        </span>
                    </FadeInUp>
                    <FadeInUp delay={0.1}>
                        <h2 className="font-editorial text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
                            High-Volume Creative
                            <br />
                            <span className="text-gradient-mint">Production at Scale</span>
                        </h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#8a9a9e]">
                            Every format, every platform, every angle — engineered for
                            performance. One partnership, unlimited creative firepower.
                        </p>
                    </FadeInUp>
                </div>

                {/* ── Bento Grid ──────────────────────────────────── */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-center">
                    {capabilities.map((cap, i) => (
                        <FadeInUp key={cap.title} delay={0.1 * i} className={cap.colSpan}>
                            <motion.div
                                className={`group relative rounded-2xl p-8 cursor-default overflow-hidden border border-white/5 ${cap.aspectRatio || 'h-full min-h-[320px]'}`}
                                whileHover="hover"
                                initial="initial"
                            >
                                {/* Media Background */}
                                {cap.media && (
                                    <div className="absolute inset-0 z-0">
                                        <motion.div
                                            className="w-full h-full"
                                            variants={{
                                                initial: { scale: 1 },
                                                hover: { scale: 1.05 }
                                            }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        >
                                            {cap.media.type === "video" ? (
                                                <video
                                                    src={cap.media.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Image
                                                    src={cap.media.src}
                                                    alt={cap.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            )}
                                        </motion.div>
                                        {/* Extremely dark gradient to ensure text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                                    </div>
                                )}

                                {/* Fallback Glass effect if no media */}
                                {!cap.media && (
                                    <div className="absolute inset-0 glass z-0" />
                                )}

                                {/* Hover glow */}
                                <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,rgba(184,242,230,0.06),transparent_70%)]" />

                                {/* Content Container - Relative z-20 to pull above media */}
                                <div className="relative z-20 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-6 mt-2 inline-flex rounded-xl bg-teal/20 backdrop-blur-sm border border-teal/30 p-3 text-mint transition-colors group-hover:bg-teal/30 w-14 h-14 items-center justify-center">
                                        {cap.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-semibold text-white mb-3 font-editorial dropshadow-sm">
                                        {cap.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[#c4cfd1] mb-6 max-w-[85%]">
                                        {cap.description}
                                    </p>

                                    {/* Stat */}
                                    <div className="mt-auto flex items-baseline gap-2 border-t border-champagne/20 pt-4">
                                        <span className="text-3xl font-bold text-mint font-editorial">
                                            {cap.stat}
                                        </span>
                                        <span className="text-sm text-champagne/80 font-medium tracking-wide uppercase">{cap.statLabel}</span>
                                    </div>
                                </div>

                                {/* Hover border accent */}
                                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-mint/30 z-30" />
                            </motion.div>
                        </FadeInUp>
                    ))}
                </div>

                {/* ── View All CTA ─────────────────────────────────── */}
                <FadeInUp delay={0.5}>
                    <div className="mt-12 text-center">
                        <a
                            href="/case-studies"
                            className="group inline-flex items-center gap-2 rounded-full border border-champagne/20 bg-white/[0.03] px-8 py-3 text-sm font-medium text-champagne hover:text-white hover:border-mint/40 hover:bg-white/[0.06] transition-all duration-300"
                        >
                            View All Case Studies
                            <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                    </div>
                </FadeInUp>
            </div>

            {/* Bottom divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
