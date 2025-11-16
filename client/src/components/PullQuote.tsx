interface PullQuoteProps {
  children: React.ReactNode;
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <div className="my-16 px-8 md:px-16 py-8 border-l-[3px] border-primary relative">
      <blockquote 
        className="text-2xl md:text-3xl font-light leading-relaxed text-primary italic"
        style={{ fontFamily: 'var(--font-serif)' }}
        data-testid="blockquote-pullquote"
      >
        {children}
      </blockquote>
    </div>
  );
}
