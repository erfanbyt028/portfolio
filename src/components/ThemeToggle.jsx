import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
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
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-4 sm:top-5 sm:right-5 z-50",
        "p-2.5 sm:p-3 rounded-full transition-all duration-300",
        "bg-background/90 backdrop-blur-md border border-border/60",
        "hover:bg-background hover:scale-105 active:scale-95",
        "shadow-lg hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "touch-manipulation", // برای بهبود عملکرد تاچ در موبایل
        "hidden md:block" // مخفی در موبایل، نمایش در دسکتاپ
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative">
        {isDarkMode ? (
          <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-slate-300 transition-colors duration-300" />
        ) : (
          <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 dark:text-amber-400 transition-colors duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
