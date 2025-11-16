import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface PremiumCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function PremiumCard({ title, description, linkText, href }: PremiumCardProps) {
  return (
    <div className="group relative">
      <Card 
        className="relative overflow-hidden p-10 md:p-12 border-card-border backdrop-blur-xl bg-card/80 transition-all duration-[450ms] ease-out hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10"
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
            className="text-3xl md:text-4xl mb-5 text-primary group-hover:text-primary/90 transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-title-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {title}
          </h2>
          
          <p 
            className="text-muted-foreground leading-[1.8] text-lg mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-description-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {description}
          </p>
          
          <a 
            href={href}
            className="inline-flex items-center gap-2 text-primary font-sans text-sm uppercase tracking-wider transition-all duration-300 border-b border-transparent hover:border-primary hover:gap-3"
            data-testid={`link-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {linkText}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Card>
    </div>
  );
}
