import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// نسخه پیشرفته ThemeToggle با انیمیشن‌های زیبا
export const ThemeToggleAdvanced = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 sm:top-5 sm:right-5 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-md border border-border/60" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-4 sm:top-5 sm:right-5 z-50",
        "w-10 h-10 sm:w-12 sm:h-12 rounded-full",
        "bg-background/90 backdrop-blur-md border border-border/60",
        "hover:bg-background hover:scale-110 active:scale-95",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "touch-manipulation",
        "group relative overflow-hidden"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Icons with smooth transitions */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className={cn(
          "absolute transition-all duration-500 ease-in-out",
          isDarkMode ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"
        )}>
          <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-slate-300" />
        </div>
        
        <div className={cn(
          "absolute transition-all duration-500 ease-in-out",
          !isDarkMode ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
        )}>
          <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 dark:text-amber-400" />
        </div>
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-200" />
    </button>
  );
};

export default ThemeToggleAdvanced;
