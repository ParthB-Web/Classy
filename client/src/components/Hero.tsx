export default function Hero() {
  return (
    <div className="text-center mt-24 mb-20 px-6">
      <h1 
        className="text-6xl md:text-7xl lg:text-[4.8rem] font-light tracking-[3px] mb-5 opacity-0"
        style={{
          animation: 'nameReveal 1.8s cubic-bezier(.25,.8,.25,1) forwards',
          fontFamily: 'var(--font-serif)'
        }}
        data-testid="text-hero-name"
      >
        PARTH B.
      </h1>
      <p 
        className="font-sans text-base text-muted-foreground opacity-0"
        style={{
          animation: 'fadeUp 1.4s .9s ease forwards'
        }}
        data-testid="text-hero-subtitle"
      >
        Work rooted in perception, precision, and moral clarity.
      </p>
    </div>
  );
}
