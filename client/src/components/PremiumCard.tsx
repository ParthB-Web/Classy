import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface PremiumCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
  external?: boolean;
  isBook?: boolean;
}

export default function PremiumCard({ title, description, linkText, href, external, isBook }: PremiumCardProps) {
  return (
    <div className="group relative touch-manipulation">
      <Card 
        className="relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 border-card-border backdrop-blur-xl bg-card/80 transition-all duration-[450ms] ease-out hover:-translate-y-2 active:scale-[0.99] hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10"
        data-testid={`card-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
      >
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out pointer-events-none group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at top left, rgba(210,180,140,0.12), transparent 60%)'
          }}
        />
        
        <div className="relative z-10">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-5 text-primary group-hover:text-primary/90 transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-title-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {title}
          </h2>
          
          <p 
            className="text-muted-foreground leading-[1.8] text-base md:text-lg mb-6 md:mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-description-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {description}
          </p>
          
          <a 
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 text-primary font-sans text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border-b border-transparent hover:border-primary hover:gap-3 active:gap-3"
            data-testid={`link-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {linkText}
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Card>
    </div>
  );
}
