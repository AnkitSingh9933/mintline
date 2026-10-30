/**
 * HeroSection
 * Premium fintech hero with high-contrast typography, violet-to-blue gradient
 * highlight, and subtle ambient background glow.
 */
function HeroSection() {
  return (
    <section className="relative px-5 sm:px-8 pt-14 pb-10 overflow-hidden" aria-label="Hero">
      {/* Subtle background radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-gradient-to-r from-[#6545FF]/10 via-[#9B8CFF]/08 to-transparent rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111B30] border border-[#1A2542] mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6545FF]" aria-hidden="true" />
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#9B8CFF]">
            The Everyday Currency Tool
          </p>
        </div>

        {/* Headline — Bold modern typography with violet-to-blue gradient accent */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 max-w-2xl text-[#F4F5FA]">
          Currency,{" "}
          <span className="bg-gradient-to-r from-[#6545FF] via-[#8565FF] to-[#38BDF8] bg-clip-text text-transparent">
            without
          </span>
          <br />
          the complexity.
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-lg leading-relaxed max-w-md text-[#8B96AD] font-normal">
          A more considered, real-time way to convert money and track foreign exchange rates across global borders.
        </p>

        {/* Subtle accent rule */}
        <div className="mt-7 flex items-center gap-2">
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#6545FF] to-[#9B8CFF] rounded-full" aria-hidden="true" />
          <div className="h-0.5 w-2 bg-[#6545FF]/40 rounded-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
