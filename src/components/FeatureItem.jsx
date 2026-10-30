/**
 * FeatureItem
 * Clean editorial feature item in the "Made for everyday money" strip.
 *
 * Props:
 *   number      {string}  "01" | "02" | "03"
 *   title       {string}  Feature title
 *   description {string}  Feature description
 */
function FeatureItem({ number, title, description }) {
  return (
    <div className="flex flex-col gap-2 py-5 sm:py-0">
      {/* Number */}
      <span className="font-mono text-xs font-bold text-[#6545FF]">
        {number}
      </span>

      {/* Title */}
      <h3 className="text-sm font-bold leading-snug text-[#F4F5FA]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-[#8B96AD]">
        {description}
      </p>
    </div>
  );
}

export default FeatureItem;
