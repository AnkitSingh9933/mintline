/**
 * ExchangeRateInfo
 * Minimal, clean exchange rate strip.
 * Features an emerald live status indicator, clean typography and proper alignment.
 *
 * Props:
 *   fromCurrency {string} e.g. "USD"
 *   toCurrency   {string} e.g. "INR"
 *   rate         {string|number} Computed or formatted rate
 */
function ExchangeRateInfo({ fromCurrency, toCurrency, rate }) {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap text-xs">
      {/* Left: Green live dot + Exchange Rate info */}
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10C98A] opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10C98A]" />
        </span>

        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#8B96AD]">
          Rate:
        </span>

        <p className="font-display text-xs sm:text-sm font-semibold text-[#F4F5FA] tracking-tight">
          1 {fromCurrency} = <span className="text-[#9B8CFF] font-bold">{rate}</span> {toCurrency}
        </p>
      </div>

      {/* Right: Status note */}
      <div className="flex items-center gap-1.5 text-[11px] text-[#8B96AD]">
        <span className="w-1 h-1 rounded-full bg-[#8B96AD]/40" />
        <span>Live interbank market data</span>
      </div>
    </div>
  );
}

export default ExchangeRateInfo;
