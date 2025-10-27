import { cn } from "@/lib/utils";
import i18next from "i18next";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../style/navbar.css'
export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [navItems, setNavItems] = useState([]);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavItems([
      { name: t('nav.home'), href: "#hero" },
      { name: t('nav.about'), href: "#about" },
      { name: t('nav.skills'), href: "#skills" },
      { name: t('nav.projects'), href: "#projects" },
      { name: t('nav.contact'), href: "#contact" },
    ]);
  }, [t]);

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

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Erfan </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <select 
              onChange={changeLanguage}
              value={i18next.language}
              className="px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              <option value="en">🇺🇸 English</option>
              <option value="fa">🇮🇷 فارسی</option>
            </select>
            <button
              onClick={toggleTheme}
              className={cn(
                "flex items-center space-x-3 px-4 py-2 rounded-md",
                "bg-background/50 border border-border/50",
                "hover:bg-background hover:scale-105 active:scale-95",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-primary/50"
              )}
            >
              {mounted && (
                <>
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-amber-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-600" />
                  )}
                  <span className="text-foreground/80 font-medium">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Language Switcher in mobile menu */}
            <div className="pt-4 border-t border-border/20 w-full flex justify-center">
              <select 
                onChange={changeLanguage}
                value={i18next.language}
                className=" px-4 py-3 rounded-full border border-border/50 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
              >
                <option value="en">🇺🇸 English</option>
                <option value="fa">🇮🇷 فارسی</option>
              </select>
            </div>

            {/* Theme Toggle in mobile menu */}
            <div className="pt-4 border-t border-border/20 w-full flex justify-center">
              <button
                onClick={toggleTheme}
                className={cn(
                  "flex items-center space-x-3 px-6 py-3 rounded-full",
                  "bg-background/50 border border-border/50",
                  "hover:bg-background hover:scale-105 active:scale-95",
                  "transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50"
                )}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {mounted && (
                  <>
                    {isDarkMode ? (
                      <Sun className="h-5 w-5 text-amber-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-slate-600" />
                    )}
                    <span className="text-foreground/80 font-medium">
                      {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
