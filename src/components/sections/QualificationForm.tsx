"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeInUp from "@/components/ui/FadeInUp";

const spendTiers = [
    { label: "$10k – $50k / mo", value: "10k-50k" },
    { label: "$50k – $150k / mo", value: "50k-150k" },
    { label: "$150k – $500k / mo", value: "150k-500k" },
    { label: "$500k+ / mo", value: "500k+" },
];

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

export default function QualificationForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        brand: "",
        spend: "",
        name: "",
        email: "",
        query: "",
    });

    function handleNext() {
        if (step < 3) setStep(step + 1);
    }

    function handleBack() {
        if (step > 1) setStep(step - 1);
    }

    function handleSubmit() {
        console.log("Form submitted:", formData);
        setStep(4); // show thank-you
    }

    const canProceed =
        (step === 1 && formData.brand.trim().length > 0) ||
        (step === 2 && formData.spend.length > 0) ||
        (step === 3 &&
            formData.name.trim().length > 0 &&
            formData.email.trim().length > 0);

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
                            Apply Now
                        </span>
                    </FadeInUp>
                    <FadeInUp delay={0.1}>
                        <h2 className="font-editorial text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
                            Is Your Brand
                            <br />
                            <span className="text-gradient-mint">Ready to Scale?</span>
                        </h2>
                    </FadeInUp>
                    <FadeInUp delay={0.2}>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#8a9a9e]">
                            We partner with a maximum of{" "}
                            <span className="text-mint font-semibold">
                                3 brands per quarter
                            </span>{" "}
                            to ensure white-glove creative excellence. Apply below to see if
                            we&apos;re the right fit.
                        </p>
                    </FadeInUp>
                </div>

                {/* ── Trust Signals ────────────────────────────────── */}
                <FadeInUp delay={0.25}>
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 rounded-full border border-champagne/20 px-4 py-2">
                            <div className="h-2 w-2 rounded-full bg-fatigue-red animate-pulse" />
                            <span className="text-xs font-medium text-champagne">
                                Only 3 partnerships available for Q2
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

                {/* ── Form Card ───────────────────────────────────── */}
                <FadeInUp delay={0.35}>
                    <div className="mx-auto max-w-xl">
                        <div className="rounded-3xl bg-white/[0.01] border border-white/[0.05] p-8 lg:p-10">
                            {/* Progress bar */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    {[1, 2, 3].map((s) => (
                                        <div
                                            key={s}
                                            className="flex items-center gap-2"
                                        >
                                            <div
                                                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${step >= s
                                                    ? "bg-mint text-obsidian"
                                                    : "border border-champagne/30 text-[#5a6a6e]"
                                                    }`}
                                            >
                                                {step > s ? (
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                ) : (
                                                    s
                                                )}
                                            </div>
                                            {s < 3 && (
                                                <div
                                                    className={`hidden h-px w-16 sm:block lg:w-24 transition-colors duration-300 ${step > s ? "bg-mint/40" : "bg-champagne/10"
                                                        }`}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-[#5a6a6e]">
                                    Step {Math.min(step, 3)} of 3
                                </p>
                            </div>

                            {/* Step Content */}
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="font-editorial text-xl font-semibold text-white mb-2">
                                            What&apos;s your brand?
                                        </h3>
                                        <p className="text-sm text-[#8a9a9e] mb-6">
                                            Let us know who we&apos;d be partnering with.
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Enter your brand name"
                                            value={formData.brand}
                                            onChange={(e) =>
                                                setFormData({ ...formData, brand: e.target.value })
                                            }
                                            className="w-full rounded-xl border border-champagne/15 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-[#5a6a6e] outline-none transition-all focus:border-mint/40 focus:ring-1 focus:ring-mint/20 min-h-[44px]"
                                        />
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="font-editorial text-xl font-semibold text-white mb-2">
                                            Monthly ad spend
                                        </h3>
                                        <p className="text-sm text-[#8a9a9e] mb-6">
                                            This helps us understand your scale and match the right
                                            creative volume.
                                        </p>
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            {spendTiers.map((tier) => (
                                                <button
                                                    key={tier.value}
                                                    onClick={() =>
                                                        setFormData({ ...formData, spend: tier.value })
                                                    }
                                                    className={`rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all min-h-[44px] ${formData.spend === tier.value
                                                        ? "border-mint/40 bg-mint/10 text-mint"
                                                        : "border-champagne/15 bg-white/[0.02] text-[#8a9a9e] hover:border-champagne/30 hover:bg-white/[0.04]"
                                                        }`}
                                                >
                                                    {tier.label}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="font-editorial text-xl font-semibold text-white mb-2">
                                            Your details
                                        </h3>
                                        <p className="text-sm text-[#8a9a9e] mb-6">
                                            We&apos;ll reach out within 24 hours if it&apos;s a mutual
                                            fit.
                                        </p>
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full rounded-xl border border-champagne/15 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-[#5a6a6e] outline-none transition-all focus:border-mint/40 focus:ring-1 focus:ring-mint/20 min-h-[44px]"
                                            />
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="w-full rounded-xl border border-champagne/15 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-[#5a6a6e] outline-none transition-all focus:border-mint/40 focus:ring-1 focus:ring-mint/20 min-h-[44px]"
                                            />
                                            <textarea
                                                placeholder="What creative challenge are you facing? (optional)"
                                                value={formData.query}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, query: e.target.value })
                                                }
                                                rows={3}
                                                className="w-full rounded-xl border border-champagne/15 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-[#5a6a6e] outline-none transition-all focus:border-mint/40 focus:ring-1 focus:ring-mint/20 resize-none"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-center py-8"
                                    >
                                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-mint/10">
                                            <svg
                                                className="h-8 w-8 text-mint"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="font-editorial text-2xl font-semibold text-white mb-3">
                                            Application Received
                                        </h3>
                                        <p className="text-sm text-[#8a9a9e] max-w-sm mx-auto">
                                            Thank you, {formData.name}. Our creative strategist will
                                            review your application and reach out within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            {step <= 3 && (
                                <div className="mt-8 flex items-center justify-between">
                                    {step > 1 ? (
                                        <button
                                            onClick={handleBack}
                                            className="flex items-center gap-1 text-sm text-[#8a9a9e] transition-colors hover:text-white min-h-[44px] px-2"
                                        >
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
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                            Back
                                        </button>
                                    ) : (
                                        <div />
                                    )}

                                    {step < 3 ? (
                                        <MagneticButton
                                            className={`rounded-full px-8 py-3 text-sm font-semibold transition-all min-h-[44px] ${canProceed
                                                ? "bg-mint text-obsidian hover:glow-mint"
                                                : "bg-white/5 text-[#5a6a6e] cursor-not-allowed"
                                                }`}
                                            onClick={canProceed ? handleNext : undefined}
                                        >
                                            Continue
                                        </MagneticButton>
                                    ) : (
                                        <MagneticButton
                                            className={`rounded-full px-8 py-3 text-sm font-semibold transition-all min-h-[44px] ${canProceed
                                                ? "bg-mint text-obsidian hover:glow-mint"
                                                : "bg-white/5 text-[#5a6a6e] cursor-not-allowed"
                                                }`}
                                            onClick={canProceed ? handleSubmit : undefined}
                                        >
                                            Submit Application
                                        </MagneticButton>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </FadeInUp>
            </div>
        </section>
    );
}
