import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
    title: "Privacy Policy — POPM Consultants",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPage title="Privacy Policy" updated="November 2, 2026">
            <p>
                This Privacy Policy explains how POPM Consultants (&quot;POPM&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses and protects
                your information when you visit popm.in or work with us. POPM Consultants is registered at
                B-10, BRG Hill View 1, Nayta Mundla, Indore, Madhya Pradesh, 452020.
            </p>

            <h2>Information we collect</h2>
            <ul>
                <li>Contact details you send us through our forms or by email, such as your name, email, phone number, company and website.</li>
                <li>Project information and files you share with us for a proposal or engagement.</li>
                <li>Payment information. Payments are processed by Razorpay. We do not store your card or bank details.</li>
                <li>Basic usage data, such as pages visited, browser type and approximate location, collected by our hosting providers.</li>
            </ul>

            <h2>How we use your information</h2>
            <ul>
                <li>To respond to enquiries and prepare proposals.</li>
                <li>To deliver services, send invoices and process payments.</li>
                <li>To improve our website and keep it secure.</li>
                <li>To meet legal and accounting obligations.</li>
            </ul>

            <h2>Who we share it with</h2>
            <p>
                We share information only with service providers that help us run the business, such as Razorpay (payments),
                Cloudflare and Vercel (website hosting) and email providers. We do not sell your personal information. We may
                disclose information when required by law.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
                The website uses cookies and similar technology needed for it to work. We don't use any analytics tools.
            </p>

            <h2>How long we keep information</h2>
            <p>
                We keep information for as long as needed to provide services, resolve disputes and meet legal obligations.
            </p>

            <h2>Your rights</h2>
            <p>
                You can ask us to access, correct or delete your personal information by emailing{" "}
                <a href="mailto:popmconsultants@gmail.com" className="text-mint hover:underline">popmconsultants@gmail.com</a>.
                Grievances can be sent to Sourabh Khare, at the same address.
            </p>

            <h2>Security</h2>
            <p>We use reasonable technical and organisational measures to protect your information. No system is completely secure.</p>

            <h2>Changes to this policy</h2>
            <p>We may update this policy. The date at the top shows when it was last changed.</p>
        </LegalPage>
    );
}
