

/**
 * CurrencySelector
 * Styled currency selector dropdown.
 * Retains 100% of functional props, callback connections and select element attributes.
 *
 * Props:
 *   id               {string}   Ties <label> to <select>
 *   label            {string}   Accessible label
 *   selectedCurrency {string}   Current currency code (e.g. "USD")
 *   currencyOptions  {string[]} Available currency codes
 *   variant          {"source"|"destination"} Styling variant
 *   onChangeCurrency {function} Handler callback when currency changes
 */
function CurrencySelector({
  id,
  label,
  selectedCurrency,
  currencyOptions = [],
  variant,
  onChangeCurrency,
}) {
  const isDestination = variant === "destination";

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#8B96AD]"
      >
        {label}
      </label>

      <div
        className={`relative flex items-center gap-2 rounded-xl h-[52px] px-3.5 transition-all duration-200 ${
          isDestination
            ? "bg-[#111B30] border border-[#1E2945] hover:border-[#6545FF]/50 focus-within:border-[#6545FF] focus-within:ring-2 focus-within:ring-[#6545FF]/20 focus-within:shadow-[0_0_15px_rgba(101,69,255,0.15)]"
            : "bg-[#111B30] border border-[#1E2945] hover:border-[#6545FF]/50 focus-within:border-[#6545FF] focus-within:ring-2 focus-within:ring-[#6545FF]/20 focus-within:shadow-[0_0_15px_rgba(101,69,255,0.15)]"
        }`}
      >
        {/* Subtle currency tag icon / avatar */}
        <div className="w-6 h-6 rounded-md bg-[#0D1428] border border-[#1E2945] flex items-center justify-center text-[10px] font-bold text-[#9B8CFF] flex-shrink-0 select-none">
          {selectedCurrency ? selectedCurrency.slice(0, 2) : "FX"}
        </div>

        <select
          id={id}
          className="flex-1 bg-transparent text-sm sm:text-base font-bold text-[#F4F5FA] outline-none cursor-pointer appearance-none pr-5 z-10"
          value={selectedCurrency}
          aria-label={label}
          onChange={(e) => onChangeCurrency(e.target.value)}
        >
          {currencyOptions.map((code) => (
            <option
              key={code}
              value={code}
              className="bg-[#0D1428] text-[#F4F5FA] py-1.5"
            >
              {code}
            </option>
          ))}
        </select>

        {/* Custom Chevron Indicator */}
        <div className="pointer-events-none absolute right-3 flex items-center text-[#8B96AD]">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CurrencySelector;
