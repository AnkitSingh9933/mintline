import FeatureItem from "./FeatureItem";

/**
 * FeatureSection
 * Compact editorial strip — "Made for everyday money."
 * Three items with thin dividers in midnight navy palette. Stacks on mobile.
 */
const FEATURES = [
  {
    number: "01",
    title: "Clear conversion",
    description: "Amounts and results displayed without clutter or distraction.",
  },
  {
    number: "02",
    title: "Global currencies",
    description: "170+ currency pairs spanning major and emerging world markets.",
  },
  {
    number: "03",
    title: "Instant exchange",
    description: "Automatic bidirectional calculation on every input stroke.",
  },
];

function FeatureSection() {
  return (
    <section className="px-5 sm:px-8 pb-16" aria-label="Features">
      <div className="max-w-4xl mx-auto">
        {/* Top rule */}
        <div className="h-px mb-10 bg-[#1A2542]" aria-hidden="true" />

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F4F5FA]">
            Made for everyday money.
          </h2>
          {/* Violet accent dot */}
          <div className="w-2 h-2 rounded-full bg-[#6545FF] shadow-[0_0_8px_rgba(101,69,255,0.7)]" aria-hidden="true" />
        </div>

        {/* Three-column strip on sm+, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1A2542]">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.number}
              className={`${i > 0 ? "sm:pl-7" : ""} ${i < 2 ? "sm:pr-7" : ""}`}
            >
              <FeatureItem
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
