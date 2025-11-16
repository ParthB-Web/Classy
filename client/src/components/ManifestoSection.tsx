interface ManifestoSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function ManifestoSection({ id, title, children }: ManifestoSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 mb-24">
      <h2 
        className="text-3xl md:text-4xl font-light mb-12 text-primary tracking-wide"
        style={{ fontFamily: 'var(--font-serif)' }}
        data-testid={`heading-${id}`}
      >
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
