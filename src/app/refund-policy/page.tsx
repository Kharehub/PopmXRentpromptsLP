import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy — POPM Consultants",
};

export default function RefundPolicyPage() {
    return (
        <LegalPage title="Refund & Cancellation Policy" updated="November 1, 2026">
            <p>
                This policy applies to all projects and retainers with POPM Consultants, operated by POPM Consultants.
            </p>

            <h2>Before production starts</h2>
            <p>
                If you cancel before we start work, we refund the advance payment minus 10% to cover
                onboarding and planning time.
            </p>

            <h2>After production starts</h2>
            <ul>
                <li>Advance and milestone payments are non-refundable once production has started, because the work is already in progress.</li>
                <li>Work already delivered and approved is non-refundable.</li>
                <li>Revisions are included as stated in your proposal. Extra rounds are billed separately.</li>
            </ul>

            <h2>Retainers</h2>
            <p>
                Monthly retainers can be cancelled with 30 days written notice. Fees for the notice period are
                payable. Months already paid are non-refundable.
            </p>

            <h2>Duplicate or failed payments</h2>
            <p>
                If you were charged twice or by mistake, we refund the extra amount within [7–10] business days.
            </p>

            <h2>How to request a refund</h2>
            <p>
                Email{" "}
                <a href="mailto:popmconsultants@gmail.com" className="text-mint hover:underline">popmconsultants@gmail.com</a>{" "}
                with your invoice number and reason. Approved refunds are returned to the original payment method through
                Razorpay. Bank or currency conversion fees may not be recoverable.
            </p>
        </LegalPage>
    );
}
