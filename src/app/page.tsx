import BackgroundEffect from "@/components/BackgroundEffect";
import CursorLight from "@/components/CursorLight";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090d] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Interactive Cursor Spotlight Effect */}
      <CursorLight />

      {/* Unique Full-Background Stardust Constellation & Glow Canvas */}
      <BackgroundEffect />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
