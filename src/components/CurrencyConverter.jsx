import CurrencySelector from "./CurrencySelector";
import ConversionResult from "./ConversionResult";
import ExchangeRateInfo from "./ExchangeRateInfo";
import { useState } from "react";
import useCurrencyInfo from "../hook/useCurrencyInfo";

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [isToActive, setIsToActive] = useState(false);

  const rates = useCurrencyInfo(fromCurrency);
  const CURRENCIES = Object.keys(rates);
  const rate = rates[toCurrency] || 0;

  // Calculate bidirectional derived amounts during render
  let fromAmount = "";
  let toAmount = "";

  if (amount !== "" && rate) {
    const num = Number(amount);
    if (isToActive) {
      toAmount = amount;
      fromAmount = isNaN(num) ? "" : parseFloat((num / rate).toFixed(4));
    } else {
      fromAmount = amount;
      toAmount = isNaN(num) ? "" : parseFloat((num * rate).toFixed(4));
    }
  } else if (amount !== "") {
    if (isToActive) {
      toAmount = amount;
    } else {
      fromAmount = amount;
    }
  }

  // Handle changes in FROM input
  const handleFromChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    setIsToActive(false);
  };

  // Handle changes in TO input
  const handleToChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    setIsToActive(true);
  };

  // Handle swap of currencies and input active direction
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setIsToActive((prev) => !prev);
  };

  return (
    <section className="px-5 sm:px-8 pb-16" aria-label="Currency converter">
      {/* ── Centered narrow container ── */}
      <div className="max-w-[490px] mx-auto">
        {/* ── Card header (outside the card) ── */}
        <div className="mb-5">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5 text-[#8B96AD]">
            Quick Conversion
          </p>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F4F5FA]">
              Make the exchange.
            </h2>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111B30] border border-[#1A2542] text-[10px] font-semibold text-[#8B96AD] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10C98A] shadow-[0_0_6px_rgba(16,201,138,0.7)] animate-pulse" />
              <span>Real-time FX</span>
            </div>
          </div>
        </div>

        {/* ── Main Converter Card with subtle ambient & hover glow ── */}
        <div
          className="rounded-2xl overflow-hidden border border-[#1A2542] hover:border-[#6545FF]/45 bg-[#0D1428] shadow-[0_20px_50px_rgba(7,11,28,0.85),0_0_40px_rgba(101,69,255,0.08)] hover:shadow-[0_20px_50px_rgba(7,11,28,0.9),0_0_55px_rgba(101,69,255,0.16)] transition-all duration-500"
        >
          {/* ══ SOURCE SECTION (FROM) ══ */}
          <div className="p-5 sm:p-6 pb-4">
            {/* Header: Green indicator + FROM + "You send" */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-[#10C98A] shadow-[0_0_8px_rgba(16,201,138,0.7)]"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F4F5FA]">
                  FROM
                </p>
              </div>
              <span className="text-xs font-medium text-[#8B96AD]">
                You send
              </span>
            </div>

            {/* Currency selector + amount input row */}
            <div className="flex gap-3 items-end">
              {/* Currency selector — compact fixed width */}
              <div className="w-[130px] sm:w-[140px] flex-shrink-0">
                <CurrencySelector
                  id="source-currency"
                  label="Currency"
                  selectedCurrency={fromCurrency}
                  currencyOptions={CURRENCIES}
                  variant="source"
                  onChangeCurrency={setFromCurrency}
                />
              </div>

              {/* Amount input container with smooth violet focus glow */}
              <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="source-amount"
                    className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#8B96AD]"
                  >
                    Amount
                  </label>
                  <span className="text-[10px] font-mono font-bold text-[#8B96AD] uppercase tracking-wider">
                    {fromCurrency}
                  </span>
                </div>
                <div className="flex items-center rounded-xl h-[52px] px-3.5 bg-[#111B30] border border-[#1E2945] transition-all duration-300 hover:border-[#6545FF]/40 focus-within:border-[#6545FF] focus-within:ring-2 focus-within:ring-[#6545FF]/30 focus-within:shadow-[0_0_20px_rgba(101,69,255,0.25)]">
                  <input
                    id="source-amount"
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-transparent font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F4F5FA] placeholder-[#475569] outline-none transition-all duration-200"
                    aria-label="Amount to convert"
                    onChange={handleFromChange}
                    value={fromAmount}
                  />
                </div>
              </div>
            </div>

            {/* Helper label */}
            <p className="mt-2 text-[11px] text-[#8B96AD]">
              Amount to convert
            </p>
          </div>

          {/* ══ SWAP CONTROL (Centered between FROM and TO) ══ */}
          <div className="relative flex items-center justify-center px-5 py-2 my-1">
            {/* Divider rule */}
            <div className="absolute inset-x-5 h-px bg-[#1A2542]" aria-hidden="true" />

            {/* Prominent Gradient Swap Button with smooth icon rotation on click */}
            <button
              type="button"
              className="group relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#6545FF] via-[#7B59FF] to-[#9B8CFF] text-white shadow-lg shadow-[#6545FF]/35 hover:shadow-[0_0_25px_rgba(101,69,255,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Swap currencies"
              onClick={handleSwap}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white transition-transform duration-500 ease-out group-hover:rotate-180 group-active:rotate-360"
                aria-hidden="true"
              >
                <path d="M7 16V4m0 0L3 8m4-4l4 4" />
                <path d="M13 4v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* ══ DESTINATION SECTION (TO) ══ */}
          <div className="p-5 sm:p-6 pt-4 pb-5 bg-[#0A1020]/70 border-t border-b border-[#162038]">
            {/* Header: Violet indicator + TO + "You receive" */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full bg-[#6545FF] shadow-[0_0_8px_rgba(101,69,255,0.7)]"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9B8CFF]">
                  TO
                </p>
              </div>
              <span className="text-xs font-medium text-[#8B96AD]">
                You receive
              </span>
            </div>

            {/* Currency selector + result matching row */}
            <div className="flex gap-3 items-end">
              {/* Currency selector */}
              <div className="w-[130px] sm:w-[140px] flex-shrink-0">
                <CurrencySelector
                  id="destination-currency"
                  label="Currency"
                  selectedCurrency={toCurrency}
                  currencyOptions={CURRENCIES}
                  variant="destination"
                  onChangeCurrency={setToCurrency}
                />
              </div>

              {/* Converted result input area — fully bidirectional */}
              <div className="flex-1 min-w-0">
                <ConversionResult
                  toCurrency={toCurrency}
                  value={toAmount}
                  resultAmount={toAmount === "" ? "— — —" : toAmount}
                  onChange={handleToChange}
                />
              </div>
            </div>

            {/* Helper label */}
            <p className="mt-2 text-[11px] text-[#8B96AD]">
              Converted amount
            </p>
          </div>

          {/* ══ EXCHANGE RATE SECTION ══ */}
          <div className="px-5 sm:px-6 py-4 bg-[#090F1E]/80">
            <ExchangeRateInfo
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              rate={rate ? rate.toFixed(4) : "—"}
            />
          </div>
        </div>
        {/* end card */}
      </div>
    </section>
  );
}

export default CurrencyConverter;
