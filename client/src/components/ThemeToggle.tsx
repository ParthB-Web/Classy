import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 md:p-3 rounded-full border border-primary/20 backdrop-blur-xl bg-card/80 hover:border-primary/60 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 touch-manipulation"
      aria-label="Toggle theme"
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 md:w-5 md:h-5 text-primary" />
      ) : (
        <Moon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
      )}
    </button>
  );
}
