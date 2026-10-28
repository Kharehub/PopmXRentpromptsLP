"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import FadeInUp from "@/components/ui/FadeInUp";
import MagneticButton from "@/components/ui/MagneticButton";
import VideoPlayer from "@/components/ui/VideoPlayer";

/* ── Case Study Data ──────────────────────────────────────────── */

type Category = "all" | "ugc" | "brand" | "motion" | "product" | "lifestyle";

interface CaseStudy {
    id: number;
    title: string;
    category: Category;
    categoryLabel: string;
    src: string;
    poster: string;
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
        title: "AI Course — Motion Graphics",
        category: "motion",
        categoryLabel: "Motion Graphics",
        src: "/case-studies/AI course 1_1 (1).mp4",
        poster: "/video_thumbnails/case-studies/AI course 1_1 (1).jpg",
        aspect: "9:16",
    },
    {
        id: 2,
        title: "A Lifetime of Love — Couples Journey",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/A_Lifetime_of_Love_A_Couples_Journey_production_story_30502_16_9_1754573560639_SD17.mp4",
        poster: "/video_thumbnails/case-studies/A_Lifetime_of_Love_A_Couples_Journey_production_story_30502_16_9_1754573560639_SD17.jpg",
        aspect: "16:9",
    },
    {
        id: 3,
        title: "Cinematic Motion Reel I",
        category: "motion",
        categoryLabel: "Motion Graphics",
        src: "/case-studies/Comp 1_2.mp4",
        poster: "/video_thumbnails/case-studies/Comp 1_2.jpg",
        aspect: "16:9",
        client: "Studio Reel",
    },
    {
        id: 4,
        title: "Drip Drop — Business Music Video",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Drip_Drop_Business_Music_Video_production_story_31301_16_9_1759131775511_SD0.1.mp4",
        poster: "/video_thumbnails/case-studies/Drip_Drop_Business_Music_Video_production_story_31301_16_9_1759131775511_SD0.1.jpg",
        aspect: "16:9",
    },
    {
        id: 5,
        title: "Gentle Uplifting Showers",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/Gentle_Uplifting_Showers_Right_to_Show_production_story_31125_9_16_1750177076449_SD11.mp4",
        poster: "/video_thumbnails/case-studies/Gentle_Uplifting_Showers_Right_to_Show_production_story_31125_9_16_1750177076449_SD11.jpg",
        aspect: "9:16",
    },
    {
        id: 6,
        title: "Glintros Premium Detailing",
        category: "product",
        categoryLabel: "Service Ad",
        src: "/case-studies/Glintros_Premium_Detailing_Services_production_story_31230_16_9_1756190055231_SD18.mp4",
        poster: "/video_thumbnails/case-studies/Glintros_Premium_Detailing_Services_production_story_31230_16_9_1756190055231_SD18.jpg",
        aspect: "16:9",
        client: "Glintros",
    },
    {
        id: 7,
        title: "Homesteader Backpack — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Homesteader_Backpack_UGC_Ad_production_story_31187_9_16_1753184548751_SD3.mp4",
        poster: "/video_thumbnails/case-studies/Homesteader_Backpack_UGC_Ad_production_story_31187_9_16_1753184548751_SD3.jpg",
        aspect: "9:16",
        client: "Homesteader",
    },
    {
        id: 8,
        title: "January Campaign — Brand Story",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Jan-1.mp4",
        poster: "/video_thumbnails/case-studies/Jan-1.jpg",
        aspect: "16:9",
    },
    {
        id: 9,
        title: "January Campaign — Sequel",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Jan-2.mp4",
        poster: "/video_thumbnails/case-studies/Jan-2.jpg",
        aspect: "16:9",
    },
    {
        id: 10,
        title: "Japanese Cheesecake — Cinematic Teaser",
        category: "lifestyle",
        categoryLabel: "Food & Lifestyle",
        src: "/case-studies/Mastering_Japanese_Cheesecake_A_Cinematic_Teaser_production_story_30453_9_16_1731330536087_SD27.mp4",
        poster: "/video_thumbnails/case-studies/Mastering_Japanese_Cheesecake_A_Cinematic_Teaser_production_story_30453_9_16_1731330536087_SD27.jpg",
        aspect: "9:16",
    },
    {
        id: 11,
        title: "Pearl White Night Suit — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Pearl_White_Night_Suit_UGC_Ad_production_story_31181_9_16_1753176726542_SD5.mp4",
        poster: "/video_thumbnails/case-studies/Pearl_White_Night_Suit_UGC_Ad_production_story_31181_9_16_1753176726542_SD5.jpg",
        aspect: "9:16",
    },
    {
        id: 12,
        title: "PureGlow — Radiant Skin",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/Pureglow_Natures_Touch_For_Radiant_Skin_production_story_30450_9_16_1731331195133_SD31.mp4",
        poster: "/video_thumbnails/case-studies/Pureglow_Natures_Touch_For_Radiant_Skin_production_story_30450_9_16_1731331195133_SD31.jpg",
        aspect: "9:16",
        client: "PureGlow",
    },
    {
        id: 13,
        title: "Drew Camouflage Jeans — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/UGC_Ad_Step_Into_Bold_With_Drew_Camouflage_Jeans_production_story_31182_9_16_1753178557089_SD23.mp4",
        poster: "/video_thumbnails/case-studies/UGC_Ad_Step_Into_Bold_With_Drew_Camouflage_Jeans_production_story_31182_9_16_1753178557089_SD23.jpg",
        aspect: "9:16",
    },
    {
        id: 14,
        title: "Behind The Scenes — Production",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/VID_20251114_030430_077_bsl.mp4",
        poster: "/video_thumbnails/case-studies/VID_20251114_030430_077_bsl.jpg",
        aspect: "9:16",
    },
    {
        id: 15,
        title: "Behind The Scenes — Studio",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/VID_20251117_132309_154_bsl.mp4",
        poster: "/video_thumbnails/case-studies/VID_20251117_132309_154_bsl.jpg",
        aspect: "9:16",
    },
    {
        id: 16,
        title: "Dynamic Product Showcase",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/Video-323.mp4",
        poster: "/video_thumbnails/case-studies/Video-323.jpg",
        aspect: "16:9",
    },
    {
        id: 17,
        title: "Brand Story — Video 464",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/Video-464.mp4",
        poster: "/video_thumbnails/case-studies/Video-464.jpg",
        aspect: "16:9",
    },
    {
        id: 18,
        title: "Client Review — November Campaign",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/WhatsApp Video 2025-11-17 at 13.29.16.mp4",
        poster: "/video_thumbnails/case-studies/WhatsApp Video 2025-11-17 at 13.29.16.jpg",
        aspect: "9:16",
    },
    {
        id: 19,
        title: "Hawthorne Sunglasses — UGC",
        category: "ugc",
        categoryLabel: "UGC Ad",
        src: "/case-studies/Your_Everyday_Essential_Hawthorne_Sunglasses_UGC_Ad_production_story_31180_9_16_1753173638151_SD15.mp4",
        poster: "/video_thumbnails/case-studies/Your_Everyday_Essential_Hawthorne_Sunglasses_UGC_Ad_production_story_31180_9_16_1753173638151_SD15.jpg",
        aspect: "9:16",
        client: "Hawthorne",
    },
    {
        id: 20,
        title: "Chand Beauty Collection",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/chand 2.mp4",
        poster: "/video_thumbnails/case-studies/chand 2.jpg",
        aspect: "9:16",
    },
    {
        id: 21,
        title: "Final Cut — Brand Story",
        category: "brand",
        categoryLabel: "Brand Film",
        src: "/case-studies/final-01.mp4",
        poster: "/video_thumbnails/case-studies/final-01.jpg",
        aspect: "16:9",
    },
    {
        id: 22,
        title: "Just — Minimalist Campaign",
        category: "lifestyle",
        categoryLabel: "Lifestyle",
        src: "/case-studies/just.mp4",
        poster: "/video_thumbnails/case-studies/just.jpg",
        aspect: "16:9",
    },
    {
        id: 23,
        title: "New Collection Launch",
        category: "product",
        categoryLabel: "Product Ad",
        src: "/case-studies/new.mp4",
        poster: "/video_thumbnails/case-studies/new.jpg",
        aspect: "16:9",
    },
    {
        id: 24,
        title: "North Place — Location Film",
        category: "lifestyle",
        categoryLabel: "Lifestyle",
        src: "/case-studies/north-place.mp4",
        poster: "/video_thumbnails/case-studies/north-place.jpg",
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
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const isWide = study.aspect === "16:9";

    return (
        <FadeInUp
            delay={0.05 * (index % 8)}
            className={isWide ? "col-span-1 sm:col-span-2" : "col-span-1"}
        >
            <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] cursor-pointer h-full shadow-lg shadow-black/20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Aspect Ratio Container */}
                <div
                    className={`relative w-full ${isWide ? "aspect-video" : "aspect-[3/4]"}`}
                >
                    {/* Video */}
                    <VideoPlayer
                        src={study.src}
                        poster={study.poster}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        autoPlay={isHovered}
                        className="transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Idle overlay — dark tint when not hovered */}
                    <div
                        className={`absolute inset-0 bg-black/30 transition-all duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Play icon in center */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${isHovered ? "opacity-0 scale-90" : "opacity-80 scale-100"
                            }`}
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-lg border border-white/30 shadow-xl shadow-black/40">
                            <svg
                                className="h-7 w-7 text-white ml-0.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom gradient overlay */}
                    <div className={`absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t transition-opacity duration-500 ${isHovered ? "from-black/80 via-black/30" : "from-black/95 via-black/50"} to-transparent`} />

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
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-mint/40 group-hover:shadow-[0_0_20px_rgba(28,107,106,0.3)]" />
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
                            POPM
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
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
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
                                    20 brands per quarter
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
                                POPM
                            </Link>
                            <a
                                href="mailto:popmconsultants@gmail.com"
                                className="text-xs text-[#5a6a6e] transition-colors hover:text-mint"
                            >
                                popmconsultants@gmail.com
                            </a>
                            <p className="text-xs text-[#5a6a6e]">
                                © 2026 POPM Consultants. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
