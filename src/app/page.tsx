import Hero from "@/components/sections/Hero";
import ProblemAgitation from "@/components/sections/ProblemAgitation";
import Pipeline from "@/components/sections/Pipeline";
import Capabilities from "@/components/sections/Capabilities";
import QualificationForm from "@/components/sections/QualificationForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* ── Fixed Aurora Global Background ── */}
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
        <Hero />
        <ProblemAgitation />
        <Pipeline />
        <Capabilities />
        <QualificationForm />
        <Footer />
      </div>
    </main>
  );
}
