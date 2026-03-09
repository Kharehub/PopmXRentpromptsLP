"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import FadeInUp from "@/components/ui/FadeInUp";
import MagneticButton from "@/components/ui/MagneticButton";

/* ── Case Study Data ──────────────────────────────────────────── */

type Category = "all" | "ugc" | "brand" | "motion" | "product" | "lifestyle";

interface CaseStudy {
    id: number;
    title: string;
    category: Category;
    categoryLabel: string;
    src: string;
    aspect: "16:9" | "9:16";
    client?: string;
}

const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All Work" },
    { key: "ugc", label: "UGC Ads" },
    { key: "brand", label: "Brand Films" },
    { key: "motion", label: "Motion Graphics" },
    { key: "product", label: "Product Ads" },
    { key: "lifestyle", label: "Food & Lifestyle" },
];

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "DripFlip — Viral Fashion Reel",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/DripFlip.mp4",
        aspect: "9:16",
        client: "DripFlip",
    },
    {
        id: 2,
        title: "GAMA Luxury Handkerchief",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/GAMA Luxury Handkerchief_005.mp4",
        aspect: "16:9",
        client: "GAMA",
    },
    {
        id: 3,
        title: "Cinematic Motion Reel I",
        category: "motion",
        categoryLabel: "Motion Graphics",
        src: "/case-studies/Comp 1_2.mp4",
        aspect: "16:9",
        client: "Studio Reel",
    },
    {
        id: 4,
        title: "Dynamic Product Showcase",
        category: "motion",
        categoryLabel: "Motion Graphics",
        src: "/case-studies/Comp 1_5.mp4",
        aspect: "16:9",
        client: "Studio Reel",
    },
    {
        id: 5,
        title: "Kinetic Typography Ad",
        category: "motion",
        categoryLabel: "Motion Graphics",
        src: "/case-studies/Comp 1_6.mp4",
        aspect: "16:9",
        client: "Studio Reel",
    },
    {
        id: 6,
        title: "3D Product Animation",
        category: "motion",
        categoryLabel: "Motion Graphics",
        src: "/case-studies/Comp 2.mp4",
        aspect: "16:9",
        client: "Studio Reel",
    },
    {
        id: 7,
        title: "January Campaign — Brand Story",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Jan-1.mp4",
        aspect: "16:9",
    },
    {
        id: 8,
        title: "January Campaign — Sequel",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Jan-2.mp4",
        aspect: "16:9",
    },
    {
        id: 9,
        title: "Patagonia — Cinematic Brand Film",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Patagonia_Brand_Film_production_story_31273_16_9_1758018651516_SD9.mp4",
        aspect: "16:9",
        client: "Patagonia",
    },
    {
        id: 10,
        title: "Premium Sneaker Ad",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/Sneaker_Ad_production_story_31253_16_9_1757319957739_SD0.01.mp4",
        aspect: "16:9",
        client: "Sneaker Brand",
    },
    {
        id: 11,
        title: "Liquid Death — Music Video",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Liquid_Death_Music_Video_production_story_31298_16_9_1759127564489_SD25.7.mp4",
        aspect: "16:9",
        client: "Liquid Death",
    },
    {
        id: 12,
        title: "De Soi — Premium Drink Ad",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/De_Soi_Drink_production_story_31279_16_9_1758099678381_SD0.5.mp4",
        aspect: "16:9",
        client: "De Soi",
    },
    {
        id: 13,
        title: "Drip Drop — Business Music Video",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Drip_Drop_Business_Music_Video_production_story_31301_16_9_1759131775511_SD0.1.mp4",
        aspect: "16:9",
    },
    {
        id: 14,
        title: "Glintros Premium Detailing",
        category: "product",
        categoryLabel: "Service Ad",
        src: "/case-studies/Glintros_Premium_Detailing_Services_production_story_31230_16_9_1756190055231_SD18.mp4",
        aspect: "16:9",
        client: "Glintros",
    },
    {
        id: 15,
        title: "Detox Tea — The Game Changer",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/Detox_Tea_The_Game_Changer_production_story_30500_9_16_1731413220441_SD5.mp4",
        aspect: "9:16",
    },
    {
        id: 16,
        title: "Homesteader Backpack — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Homesteader_Backpack_UGC_Ad_production_story_31187_9_16_1753184548751_SD3.mp4",
        aspect: "9:16",
        client: "Homesteader",
    },
    {
        id: 17,
        title: "Sequins Spotlight Dress — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Own_The_Night_With_Sequins_Spotlight_Dress_UGC_Ad_production_story_31184_9_16_1753180869467_SD19.mp4",
        aspect: "9:16",
    },
    {
        id: 18,
        title: "PureGlow — Radiant Skin",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/Pureglow_Natures_Touch_For_Radiant_Skin_production_story_30450_9_16_1731331195133_SD31.mp4",
        aspect: "9:16",
        client: "PureGlow",
    },
    {
        id: 19,
        title: "Japanese Cheesecake — Cinematic Teaser",
        category: "lifestyle",
        categoryLabel: "Food & Lifestyle",
        src: "/case-studies/Mastering_Japanese_Cheesecake_A_Cinematic_Teaser_production_story_30453_9_16_1731330536087_SD27.mp4",
        aspect: "9:16",
    },
    {
        id: 20,
        title: "Kimchi Fried Rice — Recipe Film",
        category: "lifestyle",
        categoryLabel: "Food & Lifestyle",
        src: "/case-studies/The_Ultimate_Kimchi_Fried_Rice_Recipe_production_story_30413_9_16_1731326847990_SD88.mp4",
        aspect: "9:16",
    },
    {
        id: 21,
        title: "Butter HydraSilk Primer — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Why_I_Love_The_Butter_HydraSilk_Primer_production_story_31126_9_16_1750177140110_SD11.mp4",
        aspect: "9:16",
    },
    {
        id: 22,
        title: "Hawthorne Sunglasses — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Your_Everyday_Essential_Hawthorne_Sunglasses_UGC_Ad_production_story_31180_9_16_1753173638151_SD15.mp4",
        aspect: "9:16",
        client: "Hawthorne",
    },
    {
        id: 23,
        title: "Cinematic French Toast",
        category: "lifestyle",
        categoryLabel: "Food & Lifestyle",
        src: "/case-studies/Cinematic_French_Toast_Recipe_production_story_30503_16_9_1731478684282_SD1.mp4",
        aspect: "16:9",
    },
    {
        id: 24,
        title: "A Lifetime of Love — Couples Journey",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/A_Lifetime_of_Love_A_Couples_Journey_production_story_30502_16_9_1754573560639_SD17.mp4",
        aspect: "16:9",
    },
];

const stats = [
    { value: "500+", label: "Creatives Delivered" },
    { value: "10+", label: "Brands Served" },
    { value: "3.2×", label: "Avg ROAS Lift" },
    { value: "72%", label: "Higher View-Through" },
];

/* ── Video Card Component ──────────────────────────────────────── */

function VideoCard({ study, index }: { study: CaseStudy; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const isWide = study.aspect === "16:9";

    return (
        <FadeInUp
            delay={0.05 * (index % 8)}
            className={isWide ? "col-span-1 sm:col-span-2" : "col-span-1"}
        >
            <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] cursor-pointer h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
            >
                {/* Aspect Ratio Container */}
                <div
                    className={`relative w-full ${isWide ? "aspect-video" : "aspect-[3/4]"}`}
                >
                    {/* Video */}
                    <video
                        ref={videoRef}
                        src={study.src}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Idle overlay — dark tint when not hovered */}
                    <div
                        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Play icon in center */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-70"
                            }`}
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <svg
                                className="h-6 w-6 text-white ml-0.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-white/80">
                            {study.categoryLabel}
                        </span>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                        <h3 className="text-lg font-semibold text-white leading-tight mb-1 font-editorial">
                            {study.title}
                        </h3>
                        {study.client && (
                            <p className="text-xs text-champagne/80 font-medium tracking-wide">
                                {study.client}
                            </p>
                        )}
                    </div>

                    {/* Hover border glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-mint/30" />
                </div>
            </motion.div>
        </FadeInUp>
    );
}

/* ── Main Page ──────────────────────────────────────────────────── */

export default function CaseStudiesPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filtered =
        activeCategory === "all"
            ? caseStudies
            : caseStudies.filter((s) => s.category === activeCategory);

    return (
        <main className="relative min-h-screen bg-black">
            {/* ── Fixed Aurora Background ── */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: [
                        "radial-gradient(ellipse 80% 55% at 25% 65%, rgba(25, 80, 175, 0.4), transparent 70%)",
                        "radial-gradient(ellipse 55% 45% at 60% 50%, rgba(45, 110, 195, 0.3), transparent 60%)",
                        "radial-gradient(ellipse 40% 35% at 78% 42%, rgba(215, 155, 55, 0.25), transparent 55%)",
                        "radial-gradient(ellipse 90% 70% at 50% 55%, rgba(15, 50, 110, 0.15), transparent 70%)",
                    ].join(", "),
                }}
            />

            <div className="relative z-10 w-full overflow-hidden">
                {/* ── Nav Bar ──────────────────────────────────────── */}
                <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                        <Link href="/" className="font-editorial text-lg font-bold text-white hover:opacity-80 transition-opacity">
                            POPM <span className="text-gradient-gold">×</span> Rentprompts
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                className="text-sm text-[#8a9a9e] hover:text-white transition-colors"
                            >
                                ← Back to Home
                            </Link>
                            <Link
                                href="/#apply"
                                className="hidden sm:inline-flex items-center rounded-full bg-mint px-5 py-2 text-sm font-semibold text-obsidian hover:glow-mint transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* ── Hero Section ──────────────────────────────────── */}
                <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(28,107,106,0.15),transparent)]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 text-center">
                        <FadeInUp>
                            <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                                Our Portfolio
                            </span>
                        </FadeInUp>
                        <FadeInUp delay={0.1}>
                            <h1 className="font-editorial text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
                                Our Work Speaks
                                <br />
                                <span className="text-gradient-mint">Volumes</span>
                            </h1>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#8a9a9e] mb-12">
                                From scroll-stopping UGC to cinematic brand films — every frame
                                is engineered for performance. Browse our curated collection of
                                work that drives real results for real brands.
                            </p>
                        </FadeInUp>

                        {/* Stats Row */}
                        <FadeInUp delay={0.3}>
                            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-3xl lg:text-4xl font-bold text-mint font-editorial">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-[#5a6a6e] font-medium tracking-wider uppercase mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeInUp>
                    </div>
                </section>

                {/* ── Divider ──────────────────────────────────────── */}
                <div className="section-divider" />

                {/* ── Filter + Grid ────────────────────────────────── */}
                <section className="py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        {/* Category Tabs */}
                        <FadeInUp>
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.key}
                                        onClick={() => setActiveCategory(cat.key)}
                                        className={`relative rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 min-h-[40px] ${activeCategory === cat.key
                                            ? "bg-mint/15 text-mint border border-mint/30"
                                            : "bg-white/[0.03] text-[#8a9a9e] border border-white/[0.08] hover:bg-white/[0.06] hover:text-white hover:border-white/[0.15]"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </FadeInUp>

                        {/* Video Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                {filtered.map((study, index) => (
                                    <VideoCard
                                        key={study.id}
                                        study={study}
                                        index={index}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Empty state */}
                        {filtered.length === 0 && (
                            <div className="py-20 text-center">
                                <p className="text-lg text-[#5a6a6e]">
                                    No case studies in this category yet.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* ── Divider ──────────────────────────────────────── */}
                <div className="section-divider" />

                {/* ── Bottom CTA Section ───────────────────────────── */}
                <section className="relative py-24 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(28,107,106,0.12),transparent)]" />

                    <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-12 text-center">
                        <FadeInUp>
                            <h2 className="font-editorial text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-6">
                                Ready to Create Your
                                <br />
                                <span className="text-gradient-mint">Success Story?</span>
                            </h2>
                        </FadeInUp>
                        <FadeInUp delay={0.1}>
                            <p className="text-lg text-[#8a9a9e] leading-relaxed mb-10">
                                We partner with a maximum of{" "}
                                <span className="text-mint font-semibold">
                                    3 brands per quarter
                                </span>{" "}
                                to deliver white-glove creative excellence. See if we&apos;re
                                the right fit.
                            </p>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <MagneticButton
                                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-mint px-8 py-3 text-sm font-semibold text-obsidian hover:glow-mint transition-all"
                                    onClick={() =>
                                        window.location.href = "/#apply"
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
                                <Link
                                    href="/"
                                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-champagne/20 bg-white/[0.03] px-8 py-3 text-sm font-medium text-[#8a9a9e] hover:text-white hover:border-champagne/40 transition-all"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </FadeInUp>
                    </div>
                </section>

                {/* ── Footer (inline minimal) ──────────────────────── */}
                <footer className="border-t border-champagne/10 bg-transparent">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8">
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <Link href="/" className="font-editorial text-lg font-bold text-white">
                                POPM <span className="text-gradient-gold">×</span> Rentprompts
                            </Link>
                            <p className="text-xs text-[#5a6a6e]">
                                © 2026 POPM × Rentprompts. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
