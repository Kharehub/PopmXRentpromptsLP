"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import FadeInUp from "@/components/ui/FadeInUp";
import { Users, PenTool, Sparkles, LayoutTemplate, Target, Component, Rocket } from "lucide-react";

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
                className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl glass border transition-all duration-300 hover:glow-teal hover:scale-105 ${className || 'border-champagne'}`}
            >
                {children}
            </div>
            <span className="text-xs font-medium text-[#e8e6e3] text-center max-w-[110px] leading-tight">
                {label}
            </span>
            {sublabel && (
                <span className="text-[10px] text-[#5a6a6e] text-center max-w-[110px] leading-tight">
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
    { className?: string; children?: React.ReactNode; label: string; sublabel?: string }
>(({ className = "", children, label, sublabel }, ref) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <div
                ref={ref}
                className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-teal/40 to-teal/10 border-2 border-teal/50 transition-all duration-300 hover:glow-teal hover:scale-105 shadow-[0_0_30px_rgba(28,107,106,0.5)] ${className}`}
            >
                {children}
            </div>
            <span className="text-sm font-semibold text-mint text-center">
                {label}
            </span>
            {sublabel && (
                <span className="text-[11px] text-teal-300 text-center max-w-[130px] leading-tight">
                    {sublabel}
                </span>
            )}
        </div>
    );
});
CentralNode.displayName = "CentralNode";

// ── Output Node ──────────────────────────────────────────────
const OutputNode = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; label: string; sublabel?: string }
>(({ className = "", children, label, sublabel }, ref) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                ref={ref}
                className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 border border-mint/30 transition-all duration-300 hover:glow-mint hover:scale-105 shadow-[0_0_20px_rgba(184,242,230,0.3)] ${className}`}
            >
                {children}
            </div>
            <span className="text-xs font-semibold text-mint text-center max-w-[120px]">
                {label}
            </span>
            {sublabel && (
                <span className="text-[10px] text-mint/70 text-center max-w-[120px] leading-tight">
                    {sublabel}
                </span>
            )}
        </div>
    );
});
OutputNode.displayName = "OutputNode";

// ── Main Pipeline Component ──────────────────────────────────
export default function Pipeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const creatorsRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const aiRef = useRef<HTMLDivElement>(null);

    const hubRef = useRef<HTMLDivElement>(null);

    const targetingRef = useRef<HTMLDivElement>(null);
    const leverageRef = useRef<HTMLDivElement>(null);

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
                            Ad Production at Scale
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
                            Where raw creative energy meets structural precision. We forge high-quality, targeted ad campaigns with an elite workflow designed for unprecedented scale.
                        </p>
                    </FadeInUp>
                </div>

                {/* ── Beam Diagram ─────────────────────────────────── */}
                <FadeInUp delay={0.3}>
                    <div
                        className="relative mx-auto w-full max-w-5xl rounded-3xl bg-white/[0.01] border border-white/[0.05] p-6 lg:p-12 overflow-x-auto custom-scrollbar"
                    >
                        <div ref={containerRef} className="flex min-w-[800px] w-full items-center justify-between gap-8 md:gap-12 relative">

                            {/* Col 1: Resources (Inputs) */}
                            <div className="flex flex-col items-center gap-12 z-10 w-[140px]">
                                <Node ref={creatorsRef} label="700+ Creators" sublabel="Raw Footage & UGC">
                                    <Users className="h-6 w-6 text-champagne" />
                                </Node>
                                <Node ref={teamRef} label="Creative Team" sublabel="Editors & Writers">
                                    <PenTool className="h-6 w-6 text-champagne" />
                                </Node>
                                <Node ref={aiRef} label="In-House AI" sublabel="Generative Tools">
                                    <Sparkles className="h-6 w-6 text-champagne" />
                                </Node>
                            </div>

                            {/* Col 2: The Core Hub */}
                            <div className="flex flex-col items-center z-10 w-[140px]">
                                <CentralNode ref={hubRef} label="Creative Hub" sublabel="Design & Editing Workflow">
                                    <LayoutTemplate className="h-10 w-10 text-mint" />
                                </CentralNode>
                            </div>

                            {/* Col 3: Refinement */}
                            <div className="flex flex-col items-center gap-24 z-10 w-[140px]">
                                <Node ref={targetingRef} label="Targeting & Analysis" sublabel="ICP Mapping & Competitors" className="border-teal/50 bg-teal/5">
                                    <Target className="h-6 w-6 text-teal-300" />
                                </Node>
                                <Node ref={leverageRef} label="Platform Leverage" sublabel="Multi-Formats & Trends" className="border-teal/50 bg-teal/5">
                                    <Component className="h-6 w-6 text-teal-300" />
                                </Node>
                            </div>

                            {/* Col 4: Output */}
                            <div className="flex flex-col items-center z-10 w-[140px]">
                                <OutputNode ref={outputRef} label="Winning Ad Creatives" sublabel="High-Quality, Targeted Ads">
                                    <Rocket className="h-8 w-8 text-mint" />
                                </OutputNode>
                            </div>

                            {/* ── Animated Beams (Inputs -> Hub) ─────────── */}
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={creatorsRef}
                                toRef={hubRef}
                                curvature={45}
                                gradientStartColor="#C9A96E"
                                gradientStopColor="#1C6B6A"
                                pathColor="rgba(201,169,110,0.1)"
                                duration={5}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={teamRef}
                                toRef={hubRef}
                                curvature={0}
                                gradientStartColor="#C9A96E"
                                gradientStopColor="#1C6B6A"
                                pathColor="rgba(201,169,110,0.1)"
                                duration={4}
                                delay={0.5}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={aiRef}
                                toRef={hubRef}
                                curvature={-45}
                                gradientStartColor="#C9A96E"
                                gradientStopColor="#1C6B6A"
                                pathColor="rgba(201,169,110,0.1)"
                                duration={6}
                                delay={1}
                            />

                            {/* ── Animated Beams (Hub -> Refinement) ───────── */}
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={hubRef}
                                toRef={targetingRef}
                                curvature={45}
                                gradientStartColor="#1C6B6A"
                                gradientStopColor="#1C6B6A"
                                pathColor="rgba(28,107,106,0.15)"
                                duration={4}
                                delay={1.5}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={hubRef}
                                toRef={leverageRef}
                                curvature={-45}
                                gradientStartColor="#1C6B6A"
                                gradientStopColor="#1C6B6A"
                                pathColor="rgba(28,107,106,0.15)"
                                duration={4.5}
                                delay={2.0}
                            />

                            {/* ── Animated Beams (Refinement -> Output) ─────── */}
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={targetingRef}
                                toRef={outputRef}
                                curvature={45}
                                gradientStartColor="#1C6B6A"
                                gradientStopColor="#B8F2E6"
                                pathColor="rgba(28,107,106,0.15)"
                                duration={4}
                                delay={2.5}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={leverageRef}
                                toRef={outputRef}
                                curvature={-45}
                                gradientStartColor="#1C6B6A"
                                gradientStopColor="#B8F2E6"
                                pathColor="rgba(28,107,106,0.15)"
                                duration={5}
                                delay={3.0}
                            />

                        </div>
                    </div>
                </FadeInUp>
            </div>

            {/* Bottom divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}

