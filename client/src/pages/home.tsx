import Hero from "@/components/Hero";
import PremiumCard from "@/components/PremiumCard";
import Footer from "@/components/Footer";
import CosmicBackground from "@/components/CosmicBackground";

export default function Home() {
  const sections = [
    {
      title: "The Closed Architecture",
      description: "A manifesto on causation, consciousness, and the structure beneath. An examination of the chain from which nothing escapes.",
      linkText: "Read the Manifesto",
      href: "/manifesto"
    },
    {
      title: "Watcher: The Cost of Coherence",
      description: "A document shaped by accuracy rather than performance. A quiet examination of what truth demands.",
      linkText: "Read the Book",
      href: "#"
    },
    {
      title: "Substack",
      description: "All writing lives here — ongoing work on coherence, perception, and internal mechanics.",
      linkText: "Visit Substack",
      href: "#"
    },
    {
      title: "Goodreads",
      description: "A quieter archive — cataloged reading, influence trails, and the surrounding ecosystem of thought.",
      linkText: "Goodreads Profile",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <div className="relative z-10">
        <Hero />
      
      <div className="max-w-[960px] mx-auto px-6 pb-28">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index}>
              <PremiumCard {...section} />
            </div>
          ))}
        </div>
      </div>
      
        <Footer />
      </div>
    </div>
  );
}
