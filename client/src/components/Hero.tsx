export default function Hero() {
  return (
    <div className="text-center mt-20 md:mt-32 mb-16 md:mb-24 px-4 sm:px-6">
      <div className="mb-6 md:mb-8 opacity-0" style={{ animation: 'fadeUp 1s .5s ease forwards' }}>
        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 border border-primary/20 backdrop-blur-sm rounded-full">
          <span className="text-[10px] md:text-xs font-sans text-primary tracking-widest uppercase">
            WANDERER · Writer · Observer
          </span>
        </div>
      </div>
      
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-light tracking-[3px] md:tracking-[4px] mb-4 md:mb-6 opacity-0 leading-[1.1]"
        style={{
          animation: 'nameReveal 1.8s cubic-bezier(.25,.8,.25,1) forwards',
          fontFamily: 'var(--font-serif)'
        }}
        data-testid="text-hero-name"
      >
        PARTH B.
      </h1>
      <p 
        className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 px-4"
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
