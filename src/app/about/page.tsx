import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
    title: "About — POPM Consultants",
};

export default function AboutPage() {
    return (
        <LegalPage title="About POPM Consultants">
            <p>
                POPM Consultants is an ad creative agency for e-commerce brands. We produce high-volume, performance-focused
                creative, combining AI tools with experienced creative and editing work, so brands can test more ideas and
                fight creative fatigue.
            </p>

            <h2>What we do</h2>
            <ul>
                <li>UGC-style video ads</li>
                <li>Static ad creative</li>
                <li>Motion graphics</li>
                <li>Landing page design</li>
                <li>Email creative</li>
            </ul>

            <h2>Who we are</h2>
            <p>
                POPM Consultants is based in Indore, India. Led by Sourabh Khare, Founder.
            </p>

            <h2>Work with us</h2>
            <p>
                We work with brands on project and monthly retainer engagements. See our{" "}
                <a href="/pricing" className="text-mint hover:underline">pricing</a> or{" "}
                <a href="/contact" className="text-mint hover:underline">get in touch</a>.
            </p>
        </LegalPage>
    );
}
