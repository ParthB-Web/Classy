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
        className="relative overflow-hidden p-10 border-card-border backdrop-blur-xl transition-all duration-[450ms] ease-out hover:-translate-y-1.5 hover:border-primary hover:shadow-2xl"
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
            className="text-3xl mb-4 text-primary"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-title-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {title}
          </h2>
          
          <p 
            className="text-muted-foreground leading-[1.75] text-[1.05rem] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-description-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {description}
          </p>
          
          <a 
            href={href}
            className="inline-flex items-center gap-1.5 text-primary font-sans transition-all duration-300 border-b border-transparent hover:border-primary"
            data-testid={`link-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {linkText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Card>
    </div>
  );
}
