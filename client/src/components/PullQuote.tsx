interface PullQuoteProps {
  children: React.ReactNode;
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <div className="my-12 md:my-16 px-6 md:px-8 lg:px-16 py-6 md:py-8 border-l-[2px] md:border-l-[3px] border-primary relative">
      <blockquote 
        className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-primary italic"
        style={{ fontFamily: 'var(--font-serif)' }}
        data-testid="blockquote-pullquote"
      >
        {children}
      </blockquote>
    </div>
  );
}
