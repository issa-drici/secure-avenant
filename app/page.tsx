import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";
import FacebookViewContent from "./components/FacebookViewContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <FacebookViewContent contentName="Landing Page SecureAvenant" />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <BottomCTA />
      <Footer />
    </main>
  );
}
