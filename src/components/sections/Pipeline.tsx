"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import FadeInUp from "@/components/ui/FadeInUp";

// ── Node Component ───────────────────────────────────────────
const Node = forwardRef<
    HTMLDivElement,
    {
        className?: string;
        children?: React.ReactNode;
        label: string;
        sublabel?: string;
    }
>(({ className = "", children, label, sublabel }, ref) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                ref={ref}
                className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl glass border border-champagne transition-all duration-300 hover:glow-teal hover:scale-105 ${className}`}
            >
                {children}
            </div>
            <span className="text-xs font-medium text-[#e8e6e3] text-center max-w-[100px] leading-tight">
                {label}
            </span>
            {sublabel && (
                <span className="text-[10px] text-[#5a6a6e] text-center">
                    {sublabel}
                </span>
            )}
        </div>
    );
});
Node.displayName = "Node";

// ── Central Node (larger) ────────────────────────────────────
const CentralNode = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; label: string }
>(({ className = "", children, label }, ref) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <div
                ref={ref}
                className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-teal/40 to-teal/10 border-2 border-teal/50 glow-teal ${className}`}
            >
                {children}
            </div>
            <span className="text-sm font-semibold text-mint text-center">
                {label}
            </span>
        </div>
    );
});
CentralNode.displayName = "CentralNode";

// ── Output Node ──────────────────────────────────────────────
const OutputNode = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; label: string }
>(({ className = "", children, label }, ref) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                ref={ref}
                className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 border border-mint/30 ${className}`}
            >
                {children}
            </div>
            <span className="text-xs font-semibold text-mint text-center max-w-[120px]">
                {label}
            </span>
        </div>
    );
});
OutputNode.displayName = "OutputNode";

// ── Icons ────────────────────────────────────────────────────
const Icons = {
    script: () => (
        <svg className="h-7 w-7 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
    visual: () => (
        <svg className="h-7 w-7 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
    ),
    creators: () => (
        <svg className="h-7 w-7 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
    ),
    ai: () => (
        <svg className="h-10 w-10 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    ),
    gallery: () => (
        <svg className="h-8 w-8 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-2.625 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
        </svg>
    ),
};

// ── Main Pipeline Component ──────────────────────────────────
export default function Pipeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const creatorsRef = useRef<HTMLDivElement>(null);
    const centralRef = useRef<HTMLDivElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);

    return (
        <section id="pipeline" className="relative py-32 lg:py-40 overflow-hidden bg-transparent">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(28,107,106,0.08),transparent)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-20">
                    <FadeInUp>
                        <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                            The Engine
                        </span>
                    </FadeInUp>
                    <FadeInUp delay={0.1}>
                        <h2 className="font-editorial text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
                            Content Engineering
                            <br />
                            <span className="text-gradient-mint">Pipeline</span>
                        </h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#8a9a9e]">
                            Three intelligence layers converge into one AI Creative Director
                            — producing scroll-stopping ad variations at unprecedented scale.
                        </p>
                    </FadeInUp>
                </div>

                {/* ── Beam Diagram ─────────────────────────────────── */}
                <FadeInUp delay={0.3}>
                    <div
                        ref={containerRef}
                        className="relative mx-auto flex w-full max-w-4xl items-center justify-between rounded-3xl bg-white/[0.01] border border-white/[0.05] p-8 lg:p-16"
                    >
                        {/* Input Nodes (left) */}
                        <div className="flex flex-col items-center gap-10">
                            <Node ref={scriptRef} label="AI Scriptwriters" sublabel="Hook & Copy">
                                <Icons.script />
                            </Node>
                            <Node ref={visualRef} label="AI Visual Creators" sublabel="Imagery & Motion">
                                <Icons.visual />
                            </Node>
                            <Node ref={creatorsRef} label="700+ Creators" sublabel="Global Network">
                                <Icons.creators />
                            </Node>
                        </div>

                        {/* Central Node */}
                        <CentralNode ref={centralRef} label="AI Creative Director">
                            <Icons.ai />
                        </CentralNode>

                        {/* Output Node (right) */}
                        <OutputNode ref={outputRef} label="Winning Ad Creatives">
                            <Icons.gallery />
                        </OutputNode>

                        {/* ── Animated Beams ──────────────────────────── */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={scriptRef}
                            toRef={centralRef}
                            curvature={-30}
                            gradientStartColor="#C9A96E"
                            gradientStopColor="#1C6B6A"
                            pathColor="rgba(201,169,110,0.1)"
                            duration={5}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={visualRef}
                            toRef={centralRef}
                            curvature={0}
                            gradientStartColor="#C9A96E"
                            gradientStopColor="#1C6B6A"
                            pathColor="rgba(201,169,110,0.1)"
                            duration={4}
                            delay={0.5}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={creatorsRef}
                            toRef={centralRef}
                            curvature={30}
                            gradientStartColor="#C9A96E"
                            gradientStopColor="#1C6B6A"
                            pathColor="rgba(201,169,110,0.1)"
                            duration={6}
                            delay={1}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={centralRef}
                            toRef={outputRef}
                            curvature={0}
                            gradientStartColor="#1C6B6A"
                            gradientStopColor="#B8F2E6"
                            pathColor="rgba(28,107,106,0.15)"
                            duration={4}
                            delay={1.5}
                        />
                    </div>
                </FadeInUp>
            </div>

            {/* Bottom divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
