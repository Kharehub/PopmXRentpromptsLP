"use client";

import { useState } from "react";
import { motion } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeInUp from "@/components/ui/FadeInUp";

const clientLogos = [
    "GenZAI University",
    "Cult Fit",
    "Heart of Oud",
    "Miler",
    "Koswi",
    "Sitara",
    "Iron Boost",
    "Joy Body Wash",
    "American Fragrance",
    "Murad",
];

const CALENDLY_LINK = "https://calendly.com/sourabhkhare2/15min";

export default function QualificationForm() {
    const [slotsRemaining] = useState(7); // Update this manually or fetch from API

    const handleBookCall = () => {
        // Open Calendly in new tab
        window.open(CALENDLY_LINK, '_blank');
    };

    return (
        <section
            id="apply"
            className="relative py-32 lg:py-40 overflow-hidden bg-transparent"
        >
            {/* Background accents */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(28,107,106,0.12),transparent)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,242,230,0.03),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <FadeInUp>
                        <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                            Exclusive Partnership
                        </span>
                    </FadeInUp>
                    <FadeInUp delay={0.1}>
                        <h2 className="font-editorial text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
                            Ready to Scale Your
                            <br />
                            <span className="text-gradient-mint">Creative Performance?</span>
                        </h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#8a9a9e]">
                            We work exclusively with{" "}
                            <span className="text-mint font-semibold">
                                high-growth DTC brands spending $50k+/month
                            </span>{" "}
                            on paid social. Book a 15-minute strategy call to explore if we&apos;re the right creative partner for your brand.
                        </p>
                    </FadeInUp>
                </div>

                {/* ── Trust Signals & Scarcity ────────────────────────────────── */}
                <FadeInUp delay={0.25}>
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 rounded-full border border-mint/30 bg-mint/5 px-4 py-2">
                            <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                            <span className="text-xs font-semibold text-mint">
                                Only {slotsRemaining} strategy calls available this month
                            </span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-champagne/20 px-4 py-2">
                            <svg
                                className="h-4 w-4 text-champagne"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-xs font-medium text-[#8a9a9e]">
                                15-Minute Call • No Obligation
                            </span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-champagne/20 px-4 py-2">
                            <svg
                                className="h-4 w-4 text-mint"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                />
                            </svg>
                            <span className="text-xs font-medium text-[#8a9a9e]">
                                NDA Protected
                            </span>
                        </div>
                    </div>
                </FadeInUp>

                {/* ── Client Logo Bar ─────────────────────────────── */}
                <FadeInUp delay={0.3}>
                    <div className="mb-16">
                        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-[#5a6a6e] mb-6">
                            Trusted by Leading Brands
                        </p>
                        <div
                            className="relative overflow-hidden"
                            style={{
                                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                            }}
                        >
                            <div
                                className="flex w-max gap-6"
                                style={{
                                    animation: "marquee 30s linear infinite",
                                }}
                            >
                                {/* First copy */}
                                {clientLogos.map((name, i) => (
                                    <div
                                        key={`a-${i}`}
                                        className="flex h-11 items-center justify-center rounded-lg border border-champagne/10 bg-white/[0.03] px-7 shrink-0"
                                    >
                                        <span className="text-sm font-semibold text-[#b0bec5] tracking-wide whitespace-nowrap">
                                            {name}
                                        </span>
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {clientLogos.map((name, i) => (
                                    <div
                                        key={`b-${i}`}
                                        className="flex h-11 items-center justify-center rounded-lg border border-champagne/10 bg-white/[0.03] px-7 shrink-0"
                                    >
                                        <span className="text-sm font-semibold text-[#b0bec5] tracking-wide whitespace-nowrap">
                                            {name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </FadeInUp>

                {/* ── Discovery Call CTA Card ───────────────────────────────────── */}
                <FadeInUp delay={0.35}>
                    <div id="strategy-call" className="mx-auto max-w-2xl scroll-mt-24">
                        <div className="rounded-3xl bg-white/[0.01] border border-white/[0.05] p-8 lg:p-12">
                            {/* What You'll Get */}
                            <div className="text-center mb-10">
                                <h3 className="font-editorial text-2xl font-semibold text-white mb-4">
                                    What You&apos;ll Get on This Call
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    {/* Benefit 1 */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 border border-mint/20">
                                            <svg className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Creative Audit</h4>
                                        <p className="text-xs text-[#8a9a9e]">Quick analysis of your current ad creative performance</p>
                                    </div>

                                    {/* Benefit 2 */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 border border-mint/20">
                                            <svg className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Growth Strategy</h4>
                                        <p className="text-xs text-[#8a9a9e]">Personalized roadmap to scale your creative output</p>
                                    </div>

                                    {/* Benefit 3 */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 border border-mint/20">
                                            <svg className="h-6 w-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Partnership Fit</h4>
                                        <p className="text-xs text-[#8a9a9e]">Clear assessment if we&apos;re aligned for partnership</p>
                                    </div>
                                </div>
                            </div>

                            {/* Main CTA */}
                            <div className="text-center">
                                <MagneticButton
                                    className="inline-flex items-center gap-3 rounded-full bg-mint px-10 py-5 text-base font-semibold text-obsidian hover:glow-mint transition-all shadow-lg shadow-mint/20"
                                    onClick={handleBookCall}
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Book Your Strategy Call
                                </MagneticButton>
                                <p className="mt-4 text-xs text-[#5a6a6e]">
                                    Response time: Typically within 4 hours
                                </p>
                            </div>

                            {/* Qualification Badge */}
                            <div className="mt-10 pt-8 border-t border-white/[0.05]">
                                <div className="flex items-center justify-center gap-2 text-xs text-[#8a9a9e]">
                                    <svg className="h-4 w-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span>
                                        <span className="text-white font-medium">Best fit for:</span> DTC brands with $50k+/mo ad spend
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInUp>
            </div>
        </section>
    );
}
