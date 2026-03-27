import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HotTopics } from "@/components/sections/HotTopics";
import { AboutFirm } from "@/components/sections/AboutFirm";
import { InspirationInsights } from "@/components/sections/InspirationInsights";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HotTopics />
      <AboutFirm />
      <InspirationInsights />
      <Footer />
    </main>
  );
}
