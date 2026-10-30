/**
 * ConversionResult
 * Destination "TO" amount display styled as a matching bidirectional amount input.
 * Fully editable and interactive for bidirectional conversion.
 *
 * Props:
 *   toCurrency   {string}   e.g. "INR"
 *   value        {string|number} Destination amount value
 *   resultAmount {string|number} Fallback destination amount value
 *   onChange     {function} Input change handler for bidirectional editing
 */
function ConversionResult({
  toCurrency,
  value,
  resultAmount,
  onChange,
}) {
  const displayValue = value !== undefined ? value : (resultAmount === "— — —" ? "" : resultAmount);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center justify-between">
        <label
          htmlFor="destination-amount"
          className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#8B96AD]"
        >
          Amount
        </label>
        <span className="text-[10px] font-mono font-bold text-[#9B8CFF] uppercase tracking-wider">
          {toCurrency}
        </span>
      </div>

      <div className="flex items-center rounded-xl h-[52px] px-3.5 bg-[#111B30] border border-[#1E2945] transition-all duration-300 hover:border-[#6545FF]/40 focus-within:border-[#6545FF] focus-within:ring-2 focus-within:ring-[#6545FF]/30 focus-within:shadow-[0_0_20px_rgba(101,69,255,0.25)]">
        <input
          id="destination-amount"
          type="number"
          placeholder="0.00"
          value={displayValue}
          onChange={onChange}
          className="w-full bg-transparent font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F4F5FA] placeholder-[#475569] outline-none transition-all duration-200"
          aria-label={`Converted amount in ${toCurrency}`}
        />
      </div>
    </div>
  );
}

export default ConversionResult;
