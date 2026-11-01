import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
    title: "Terms of Service — POPM Consultants",
};

export default function TermsPage() {
    return (
        <LegalPage title="Terms of Service" updated="November 1, 2026">
            <p>
                These terms apply to your use of popm.in and to any services provided by POPM Consultants, registered at
                B-10, BRG Hill View 1, Nayta Mundla, Indore, Madhya Pradesh, 452020 (&quot;POPM&quot;, &quot;we&quot;, &quot;us&quot;).
            </p>

            <h2>1. Services</h2>
            <p>
                POPM provides ad creative production for brands, including UGC-style video, static ads, motion graphics,
                landing pages and email creative. The scope of each project is set out in a written proposal or order form.
            </p>

            <h2>2. Proposals and scope</h2>
            <p>
                Work starts once the proposal is accepted and the first payment is received. Changes to the agreed scope may
                change the price and timeline, and we will confirm any change in writing before doing the extra work.
            </p>

            <h2>3. Fees and payment</h2>
            <ul>
                <li>Fees, currency and payment schedule are set out in each proposal or invoice.</li>
                <li>Payments are processed through Razorpay. You are responsible for any bank or currency conversion charges.</li>
                <li>We may pause work on a project if an invoice is overdue.</li>
            </ul>

            <h2>4. Your responsibilities</h2>
            <p>
                You agree to provide the brand assets, feedback and approvals we need, in good time. You confirm that you have the
                rights to any materials you give us.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
                Once the full fee for a project is paid, you receive the rights to the final deliverables described in the
                proposal. Until then, all work remains POPM&apos;s property. We may show completed work in our portfolio unless
                you tell us otherwise in writing.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
                Each party will keep the other&apos;s confidential information private and use it only for the project.
            </p>

            <h2>7. Termination</h2>
            <p>
                Either party may end an engagement by giving 30 days written notice. You pay for work completed up to the
                end date. See our Refund &amp; Cancellation Policy for details.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
                To the extent allowed by law, POPM&apos;s total liability for any claim relating to a project is limited to the fees
                you paid for that project.
            </p>

            <h2>9. Governing law</h2>
            <p>
                These terms are governed by the laws of India. Courts in Indore, Madhya Pradesh have exclusive jurisdiction.
            </p>

            <h2>10. Contact</h2>
            <p>
                Questions about these terms can be sent to{" "}
                <a href="mailto:popmconsultants@gmail.com" className="text-mint hover:underline">popmconsultants@gmail.com</a>.
            </p>
        </LegalPage>
    );
}
