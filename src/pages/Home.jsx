import React, { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AbouteMeSection from "../components/AbouteMeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";
import i18next from "i18next";

const Home = () => {
  const [isRTL, setIsRTL] = useState(i18next.language === 'fa');

  useEffect(() => {
    const updateDirection = () => {
      setIsRTL(i18next.language === 'fa');
    };

    // Listen for language changes
    i18next.on('languageChanged', updateDirection);
    
    // Initial check
    updateDirection();

    return () => {
      i18next.off('languageChanged', updateDirection);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isRTL ? "rtl" : ""}`}>
      {/* theme toggle */}
      {/* <ThemeToggle /> */}
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
