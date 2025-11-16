import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

interface SectionNavProps {
  sections: Section[];
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-8 hidden lg:block">
      <div className="space-y-2">
        <div className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-4">
          Contents
        </div>
        {sections.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block text-left text-sm font-sans transition-all duration-300 py-1 border-l-2 pl-4 w-full ${
              activeSection === id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
            }`}
            data-testid={`nav-${id}`}
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
}
