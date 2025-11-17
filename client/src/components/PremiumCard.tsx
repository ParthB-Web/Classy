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
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative block touch-manipulation h-full"
      data-testid={`link-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
    >
      <Card
        className="relative overflow-hidden p-8 md:p-10 h-full border-card-border backdrop-blur-xl bg-card/80 transition-all duration-500 ease-out hover:-translate-y-2 active:scale-[0.98] hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10"
        data-testid={`card-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out pointer-events-none group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at top left, rgba(210,180,140,0.15), transparent 70%)'
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <h2
              className="text-2xl md:text-3xl font-light text-primary group-hover:text-primary/90 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-serif)' }}
              data-testid={`text-title-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
            >
              {title}
            </h2>
            <ArrowUpRight className="w-5 h-5 text-primary/60 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-4" />
          </div>

          <p
            className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6 flex-grow"
            style={{ fontFamily: 'var(--font-serif)' }}
            data-testid={`text-description-${title.toLowerCase().replace(/[:\s]/g, '-')}`}
          >
            {description}
          </p>

          <div className="inline-flex items-center gap-2 text-primary font-sans text-sm uppercase tracking-wider transition-all duration-300 border-b-2 border-transparent group-hover:border-primary w-fit">
            {linkText}
          </div>
        </div>
      </Card>
    </a>
  );
}
