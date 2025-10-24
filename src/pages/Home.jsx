import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AbouteMeSection from "../components/AbouteMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effect */}
      <StarBackground/>
      {/* navbar */}
      <Navbar/>
      {/* main content */}
      <HeroSection/>
      <AbouteMeSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Home;
