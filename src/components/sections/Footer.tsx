"use client";

import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
    { label: "Problem", href: "/#problem" },
    { label: "Pipeline", href: "/#pipeline" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Apply", href: "/#apply" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-champagne/10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="font-editorial text-2xl font-bold text-white mb-4">
                            POPM{" "}
                            <span className="text-gradient-gold">×</span>{" "}
                            Rentprompts
                        </h3>
                        <p className="text-sm leading-relaxed text-[#8a9a9e] max-w-sm">
                            Elite ad creative production for 8-figure e-commerce brands.
                            AI-augmented. Performance-engineered. Scale-ready.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-champagne mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[#8a9a9e] transition-colors hover:text-mint"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-champagne mb-6">
                            Ready to Start?
                        </h4>
                        <p className="text-sm text-[#8a9a9e] mb-6">
                            Only 3 partnership slots per quarter. Don&apos;t let creative
                            fatigue cost you another month of revenue.
                        </p>
                        <MagneticButton
                            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-obsidian transition-all hover:glow-mint"
                            onClick={() =>
                                document
                                    .getElementById("apply")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Apply for Q2
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
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </MagneticButton>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-champagne/10 pt-8 sm:flex-row">
                    <p className="text-xs text-[#5a6a6e]">
                        © 2026 POPM × Rentprompts. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-xs text-[#5a6a6e] transition-colors hover:text-mint"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-xs text-[#5a6a6e] transition-colors hover:text-mint"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
