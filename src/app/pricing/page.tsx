import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
    title: "Pricing — POPM Consultants",
};

const packages = [
    { name: "UGC video ad", price: "$80 per video", inr: "₹7,600 per video", detail: "Creator-style vertical video, scripted and edited." },
    { name: "Static ad set", price: "$15 per static ad", inr: "₹1,425 per static ad", detail: "$5 (₹475) for each additional variation of the same ad." },
    { name: "Motion graphics", price: "$150 per video", inr: "₹14,250 per video", detail: "Animated product and brand video." },
    { name: "Monthly retainer", price: "$4,000 per month", inr: "₹3,80,000 per month", detail: "Ongoing creative output for a fixed monthly volume." },
    { name: "Paid pilot", price: "$999 for 10 videos", inr: "₹94,905 for 10 videos", detail: "10 videos, up to 1 minute each. A trial engagement before a retainer." },
];

export default function PricingPage() {
    return (
        <LegalPage title="Pricing">
            <p>
                Prices are shown in US dollars (USD) and Indian rupees (INR) at an exchange rate of ₹95 to US$1. Every project gets a written proposal with a fixed price before work starts.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2 not-prose">
                {packages.map((p) => (
                    <div key={p.name} className="rounded-2xl border border-champagne/10 bg-white/[0.02] p-6">
                        <h3 className="font-editorial text-lg font-bold text-white">{p.name}</h3>
                        <p className="mt-2 text-sm text-mint">{p.price}</p>
                        <p className="mt-1 text-sm text-[#8a9a9e]">{p.inr}</p>
                        <p className="mt-3 text-sm text-[#8a9a9e]">{p.detail}</p>
                    </div>
                ))}
            </div>

            <h2>Payment</h2>
            <p>
                Payments are made through Razorpay. International clients pay in USD. Indian clients pay in INR at ₹95 to US$1. See our{" "}
                <a href="/refund-policy" className="text-mint hover:underline">Refund &amp; Cancellation Policy</a>.
            </p>
        </LegalPage>
    );
}
