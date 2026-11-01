import Footer from "@/components/sections/Footer";

interface LegalPageProps {
    title: string;
    updated?: string;
    children: React.ReactNode;
}

export default function LegalPage({ title, updated, children }: LegalPageProps) {
    return (
        <main className="min-h-screen bg-black text-white">
            <nav className="border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                    <a href="/" className="font-editorial text-lg font-bold text-white transition-opacity hover:opacity-80">
                        POPM
                    </a>
                </div>
            </nav>

            <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
                <h1 className="font-editorial text-4xl font-bold mb-4">{title}</h1>
                {updated && <p className="text-sm text-[#5a6a6e] mb-12">Last updated: {updated}</p>}
                <div className="space-y-5 text-sm leading-relaxed text-[#8a9a9e] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-editorial [&_h2]:text-xl [&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                    {children}
                </div>
            </article>

            <Footer />
        </main>
    );
}
