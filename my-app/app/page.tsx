import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Works } from "@/components/Works";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Profile />
      <Works />
      <Footer />
    </main>
  );
}
