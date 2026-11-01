import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
    title: "Contact — POPM Consultants",
};

export default function ContactPage() {
    return (
        <LegalPage title="Contact Us">
            <p>Reach us for proposals, project questions, billing or support.</p>

            <h2>Business details</h2>
            <ul>
                <li>Legal name: POPM Consultants</li>
                <li>Registered address: B-10, BRG Hill View 1, Nayta Mundla, Indore, Madhya Pradesh, 452020</li>
                <li>GSTIN: 23INJPK5341G1ZZ</li>
                <li>Email: <a href="mailto:popmconsultants@gmail.com" className="text-mint hover:underline">popmconsultants@gmail.com</a></li>
                <li>Phone: +91 8597165825</li>
                <li>Business hours: 11 AM to 11 PM IST</li>
            </ul>

            <h2>Response time</h2>
            <p>We reply to enquiries within 1–2 business days.</p>
        </LegalPage>
    );
}
