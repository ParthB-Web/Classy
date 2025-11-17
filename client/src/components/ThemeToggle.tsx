import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full border border-primary/20 backdrop-blur-xl bg-card/80 hover:border-primary/60 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 touch-manipulation group"
      aria-label="Toggle theme"
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-primary transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-primary transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
