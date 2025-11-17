import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import CosmicBackground from "@/components/CosmicBackground";
import Footer from "@/components/Footer";

export default function Book() {
  const bookLinks = [
    {
      name: "Universal Book Link",
      description: "Access all available formats and retailers in one place",
      url: "https://books2read.com/u/bOKGGQ",
      primary: true
    },
    {
      name: "Amazon.com",
      description: "Paperback and Kindle editions",
      url: "https://www.amazon.com/WATCHER-Cost-Coherence-PARTH-B/dp/B0FM5TYYDS"
    },
    {
      name: "Amazon.in",
      description: "For readers in India",
      url: "https://www.amazon.in/Watcher-Cost-Coherence-Parth-B/dp/B0FM5TYYDS"
    },
    {
      name: "Google Play Books",
      description: "Digital edition for Android and web",
      url: "https://play.google.com/store/books/details/PARTH_B_WATCHER?id=VA6WEQAAQBAJ"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CosmicBackground />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link href="/">
            <a
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 font-sans mb-12 md:mb-16 touch-manipulation group"
              data-testid="link-back-home"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Return
            </a>
          </Link>

          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 border border-primary/20 backdrop-blur-sm rounded-full mb-8 opacity-0" style={{ animation: 'fadeUp 0.8s 0.2s ease forwards' }}>
              <span className="text-xs font-sans text-primary tracking-widest uppercase">
                Book
              </span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
              data-testid="heading-book-title"
            >
              WATCHER
            </h1>
            <p 
              className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The Cost of Coherence
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'var(--font-serif)' }}>
              A document shaped by accuracy rather than performance. A quiet examination of what truth demands.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
            {bookLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group touch-manipulation"
                data-testid={`link-${link.name.toLowerCase().replace(/[\s.]/g, '-')}`}
              >
                <Card className={`p-6 md:p-8 border-card-border backdrop-blur-xl bg-card/80 transition-all duration-[450ms] ease-out hover:-translate-y-1 active:scale-[0.99] hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 ${link.primary ? 'border-primary/40' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 
                        className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-2 group-hover:text-primary/90 transition-colors"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {link.name}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center text-muted-foreground text-sm font-sans">
            <p>Available globally in multiple formats</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
