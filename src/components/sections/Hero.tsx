"use client";

import { motion } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeInUp from "@/components/ui/FadeInUp";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function Hero() {

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden bg-black"
        >
            {/* ── Custom Gradient Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Deep Blue Blob */}
                <div className="absolute top-[60%] left-[20%] h-[35rem] w-[45rem] -translate-y-1/2 -translate-x-1/4 rounded-[100%] bg-blue-600/30 opacity-60 blur-[100px]" />

                {/* Center Blue/Cyan Blob */}
                <div className="absolute top-[40%] left-[50%] h-[30rem] w-[50rem] -translate-y-1/2 -translate-x-1/2 rounded-[100%] bg-cyan-700/20 opacity-70 blur-[100px]" />

                {/* Orange/Gold Blob */}
                <div className="absolute top-[45%] left-[80%] h-[35rem] w-[40rem] -translate-y-1/2 -translate-x-1/2 rounded-[100%] bg-orange-500/20 opacity-60 blur-[100px]" />

                {/* SVG Noise Overlay for grain effect */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.25] mix-blend-overlay">
                    <filter id="noise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            {/* Subtle gradient overlay to ensure text is perfectly readable */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black" />

            {/* ── Fixed Logo (Top Left) ── */}
            <FadeInUp delay={0.05}>
                <div className="fixed top-8 left-8 lg:left-12 z-50 pointer-events-auto flex items-center gap-2.5">
                    <img
                        src="/popm-logo.png"
                        alt="POPM Logo"
                        className="h-6 lg:h-7 w-auto object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(184,242,230,0.4)]"
                    />
                    <h2 className="font-editorial text-xl lg:text-2xl font-semibold text-white drop-shadow-[0_0_20px_rgba(184,242,230,0.25)] tracking-wide">
                        POPM
                    </h2>
                </div>
            </FadeInUp>

            {/* ── Content overlay ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pointer-events-none min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 pb-20 lg:pt-0 lg:pb-0">

                {/* ── Left Column: Copy & CTAs ── */}
                <div className="w-full lg:w-1/2 max-w-2xl flex flex-col justify-center lg:min-h-screen pt-8 lg:pt-0">

                    {/* Premium Glassmorphic Container */}
                    <FadeInUp delay={0.1}>
                        <div className="pointer-events-auto rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-2xl p-8 sm:p-10 lg:p-11 shadow-2xl shadow-black/50">

                            {/* Eyebrow */}
                            <div className="mb-5">
                                <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 backdrop-blur-md px-3.5 py-1.5 text-[10px] lg:text-xs font-medium tracking-[0.15em] uppercase text-mint w-fit">
                                    <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                                    Elite Ad Creative Agency
                                </span>
                            </div>

                            {/* Headline with Mixed Typography - More Refined Sizing */}
                            <div className="mb-7">
                                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="block font-editorial text-white"
                                    >
                                        Your Ad Creatives
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.35 }}
                                        className="block font-editorial text-white"
                                    >
                                        Are Dying.{" "}
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="block mt-1.5"
                                    >
                                        <span className="font-editorial text-white">We Bring Them </span>
                                        <span className="italic font-light text-mint text-gradient-mint">
                                            Back To Life.
                                        </span>
                                    </motion.span>
                                </h1>
                            </div>

                            {/* Sub-headline */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <p className="mb-9 max-w-lg text-sm sm:text-base lg:text-[15px] leading-relaxed text-white/75">
                                    Ad creative fatigue is silently killing your CTR. Our
                                    AI-augmented creative pipeline delivers{" "}
                                    <span className="text-mint font-semibold">
                                        500+ scroll-stopping ad variations
                                    </span>{" "}
                                    per month — engineered for performance at scale.
                                </p>
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="flex flex-wrap items-center gap-3.5"
                            >
                                <MagneticButton
                                    className="group relative inline-flex min-h-[52px] items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-[13px] lg:text-sm font-semibold text-black transition-all hover:glow-mint shadow-lg shadow-mint/20 hover:shadow-mint/30"
                                    onClick={() => {
                                        document.getElementById('strategy-call')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                >
                                    Book Strategy Call
                                    <svg
                                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </MagneticButton>

                                <MagneticButton
                                    className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-[13px] lg:text-sm font-medium text-white/90 transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                                    onClick={() => {
                                        document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Watch Our Reel
                                    <svg
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </FadeInUp>
                </div>

                {/* ── Right Column: 3D Mobile Showcase & Floating Assets ── */}
                <div className="w-full lg:w-1/2 relative h-[450px] lg:h-screen flex items-center justify-center pointer-events-auto mt-8 lg:mt-0">

                    {/* The 3D Composition Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 0 }}
                        animate={{ opacity: 1, scale: 1, rotateY: -15, rotateX: 5 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                        className="relative w-full max-w-[500px] h-[700px] flex items-center justify-center -translate-y-8 scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-center"
                    >

                        {/* 1. Background Floating Video (Skincare/Cosmetics) */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotateZ: [-5, -7, -5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 -left-16 sm:-left-24 lg:-left-12 w-36 h-48 sm:w-44 sm:h-56 lg:w-48 lg:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0"
                            style={{ transform: "translateZ(-100px)" }}
                        >
                            <VideoPlayer
                                src="/showcase/chand 2.mp4"
                                poster="/video_thumbnails/showcase/chand 2.jpg"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>

                        {/* 2. Main Centerpiece: Mobile Phone Mockup */}
                        <div
                            className="relative z-10 w-[300px] h-[620px] rounded-[40px] bg-black border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden"
                            style={{
                                boxShadow: "-30px 30px 60px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.05)",
                                transform: "translateZ(50px)"
                            }}
                        >
                            {/* Phone Notch/Dynamic Island simulate */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                            {/* Phone Screen Content (Video) */}
                            <div className="relative w-full h-full bg-[#111] overflow-hidden rounded-[34px]">
                                <VideoPlayer
                                    src="/showcase/A_cinematic_editorial_202510042318_0xyrs.mp4"
                                    poster="/video_thumbnails/showcase/A_cinematic_editorial_202510042318_0xyrs.jpg"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                {/* Inner screen reflection gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                            </div>
                        </div>

                        {/* 3. Foreground Floating Video (Cyclist) */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 -right-16 sm:-right-24 lg:-right-16 w-36 h-48 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20 backdrop-blur-sm"
                            style={{ transform: "translateZ(150px)" }}
                        >
                            <VideoPlayer
                                src="/showcase/cyclist 'left.mp4"
                                poster="/video_thumbnails/showcase/cyclist 'left.jpg"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute overflow-hidden inset-0 border border-white/20 rounded-3xl pointer-events-none"></div>
                        </motion.div>

                        {/* 4. Foreground Floating Video (AI Course/Motion Graphics) */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotateZ: [3, 5, 3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -bottom-10 -left-12 sm:-left-20 lg:-left-8 w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20"
                            style={{ transform: "translateZ(100px)" }}
                        >
                            <VideoPlayer
                                src="/showcase/AI course 1_1 (1).mp4"
                                poster="/video_thumbnails/showcase/AI course 1_1 (1).jpg"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Subtle interactive glow tracking mouse could go here, for now a static glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] pointer-events-none z-0 rounded-full" />

                    </motion.div>
                </div>

            </div>

            {/* Bottom divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0 z-10" />
        </section>
    );
}
