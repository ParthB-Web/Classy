export default function Hero() {
  return (
    <div className="text-center mt-32 mb-24 px-6">
      <div className="mb-8 opacity-0" style={{ animation: 'fadeUp 1s .5s ease forwards' }}>
        <div className="inline-block px-4 py-2 border border-primary/20 backdrop-blur-sm rounded-full">
          <span className="text-xs font-sans text-primary tracking-widest uppercase">
            Philosopher · Writer · Observer
          </span>
        </div>
      </div>
      
      <h1 
        className="text-7xl md:text-8xl lg:text-[5.5rem] font-light tracking-[4px] mb-6 opacity-0"
        style={{
          animation: 'nameReveal 1.8s cubic-bezier(.25,.8,.25,1) forwards',
          fontFamily: 'var(--font-serif)'
        }}
        data-testid="text-hero-name"
      >
        PARTH B.
      </h1>
      <p 
        className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0"
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
