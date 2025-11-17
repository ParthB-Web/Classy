export default function Hero() {
  return (
    <div className="relative mt-12 md:mt-20 mb-20 md:mb-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="mb-6 md:mb-8 opacity-0" style={{ animation: 'fadeUp 1s .5s ease forwards' }}>
              <div className="inline-block px-4 py-2 border border-primary/20 backdrop-blur-sm rounded-full">
                <span className="text-xs font-sans text-primary tracking-widest uppercase">
                  Author · Thinker · Writer
                </span>
              </div>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[3px] md:tracking-[4px] mb-6 opacity-0 leading-[1.1]"
              style={{
                animation: 'nameReveal 1.8s cubic-bezier(.25,.8,.25,1) forwards',
                fontFamily: 'var(--font-serif)'
              }}
              data-testid="text-hero-name"
            >
              PARTH B.
            </h1>
            <p
              className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 leading-relaxed"
              style={{
                animation: 'fadeUp 1.4s .9s ease forwards'
              }}
              data-testid="text-hero-subtitle"
            >
              Work rooted in perception, precision, and moral clarity. Exploring the architecture of consciousness and the structures beneath.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="relative group opacity-0"
              style={{ animation: 'fadeUp 1.6s .7s ease forwards' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-2xl border border-primary/20 backdrop-blur-sm bg-card/30 group-hover:border-primary/40 transition-all duration-500"></div>
                <img
                  src="/author-photo.jpg"
                  alt="Parth B."
                  className="relative w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 z-10"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
