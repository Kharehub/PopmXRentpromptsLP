"use client";

import { motion } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeInUp from "@/components/ui/FadeInUp";
import Image from "next/image";

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

            {/* ── Content overlay ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pointer-events-none min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 pb-20 lg:pt-0 lg:pb-0">

                {/* ── Left Column: Copy & CTAs ── */}
                <div className="w-full lg:w-1/2 max-w-3xl flex flex-col justify-center lg:min-h-screen pt-20 lg:pt-0">
                    {/* Eyebrow */}
                    <FadeInUp delay={0.1}>
                        <span className="mb-6 inline-flex pointer-events-auto items-center gap-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-champagne w-fit">
                            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                            Elite Ad Creative Agency
                        </span>
                    </FadeInUp>

                    {/* Headline */}
                    <div className="mb-8">
                        <h1 className="font-editorial text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]">
                            {"Your Ad Creatives Are Dying. We Bring Them Back To Life."
                                .split(" ")
                                .map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.15 + i * 0.06,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                        }}
                                        className="inline-block mr-[0.28em] text-white"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    </div>

                    {/* Sub-headline */}
                    <FadeInUp delay={0.8}>
                        <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
                            Ad creative fatigue is silently killing your CTR. Our
                            AI-augmented creative pipeline delivers{" "}
                            <span className="text-mint font-semibold">
                                500+ scroll-stopping ad variations
                            </span>{" "}
                            per month — engineered for performance at scale.
                        </p>
                    </FadeInUp>

                    {/* CTAs */}
                    <FadeInUp delay={1.0}>
                        <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
                            <MagneticButton
                                className="group relative inline-flex min-h-[44px] items-center gap-2 rounded-full bg-mint px-8 py-3.5 text-sm font-semibold text-black transition-all hover:glow-mint"
                                onClick={() => {
                                    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Apply for Partnership
                                <svg
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                            </MagneticButton>

                            <MagneticButton
                                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/10"
                                onClick={() => {
                                    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Watch Our Reel
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
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
                        </div>
                    </FadeInUp>
                </div>

                {/* ── Right Column: 3D Mobile Showcase & Floating Assets ── */}
                <div className="w-full lg:w-1/2 relative h-[600px] lg:h-screen flex items-center justify-center pointer-events-auto mt-12 lg:mt-0">

                    {/* The 3D Composition Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 0 }}
                        animate={{ opacity: 1, scale: 1, rotateY: -15, rotateX: 5 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                        className="relative w-full max-w-[500px] h-[700px] flex items-center justify-center -translate-y-8"
                    >

                        {/* 1. Background Floating Floating Image (Skincare Flatlay) */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotateZ: [-5, -7, -5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-12 w-48 h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-0"
                            style={{ transform: "translateZ(-100px)" }}
                        >
                            <Image
                                src="/showcase/u6737477361_Curated_flat_lay_composition_with_Brand_X_skincar_8994c466-ef40-422e-80a0-23a1af093374_1.png"
                                alt="Creative skincare flatlay"
                                fill
                                className="object-cover"
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
                                <video
                                    src="/showcase/A_cinematic_editorial_202510042318_0xyrs.mp4"
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
                            className="absolute top-1/2 -right-16 w-56 h-40 rounded-xl overflow-hidden border border-white/10 shadow-2xl z-20 backdrop-blur-sm"
                            style={{ transform: "translateZ(150px)" }}
                        >
                            <video
                                src="/showcase/cyclist__left.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute overflow-hidden inset-0 border border-white/20 rounded-xl pointer-events-none"></div>
                        </motion.div>

                        {/* 4. Foreground Floating Image (Beauty Portrait) */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotateZ: [3, 5, 3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -bottom-12 -left-8 w-44 h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20"
                            style={{ transform: "translateZ(100px)" }}
                        >
                            <Image
                                src="/showcase/u6737477361_a_hyperrealistic_close-up_beauty_portrait_of_a_yo_91b944eb-6c57-4bfc-8378-bc6b2328ae18_2.png"
                                alt="Beauty Portrait"
                                fill
                                className="object-cover"
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
