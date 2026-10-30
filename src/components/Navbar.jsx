/**
 * Navbar
 * Clean, minimal premium fintech navigation bar.
 * Wordmark · brand emblem · active violet nav item · status pill.
 */
function Navbar() {
  const navLinks = ["Converter", "Currency Guide", "About"];

  return (
    <header className="sticky top-0 z-40 bg-[#070B1C]/85 backdrop-blur-xl border-b border-[#1A2542] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* ── Brand & Wordmark ── */}
        <div className="flex items-center gap-3 select-none">
          {/* Elegant fintech emblem: overlapping precision rings with violet & emerald accents */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#111B30] to-[#0D1428] border border-[#1A2542] flex items-center justify-center shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="9" cy="12" r="6.5" stroke="#6545FF" strokeWidth="1.75" />
              <circle cx="15" cy="12" r="6.5" stroke="#9B8CFF" strokeWidth="1.75" strokeDasharray="3 2" />
              <circle cx="12" cy="12" r="2" fill="#10C98A" />
            </svg>
          </div>

          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-display text-sm font-bold tracking-[0.16em] uppercase text-[#F4F5FA]">
              MINTLINE
            </span>
            <span className="text-[8px] font-semibold tracking-[0.2em] uppercase text-[#8B96AD]">
              Money Without Borders
            </span>
          </div>
        </div>

        {/* ── Navigation Links & Active Status ── */}
        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className="flex items-center gap-2" role="list">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`text-xs transition-all duration-200 ${
                      i === 0
                        ? "text-[#9B8CFF] bg-[#6545FF]/10 border border-[#6545FF]/30 px-3.5 py-1.5 rounded-full font-semibold shadow-[0_0_14px_rgba(101,69,255,0.2)]"
                        : "text-[#8B96AD] hover:text-[#F4F5FA] hover:bg-white/5 px-3 py-1.5 rounded-full font-medium"
                    }`}
                    aria-current={i === 0 ? "page" : undefined}
                    aria-label={`Navigate to ${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Market Status Pill */}
          <div
            className="flex items-center gap-2 rounded-full border border-[#1A2542] bg-[#0D1428] px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[#8B96AD] shadow-inner"
            aria-label="Live Market Status"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10C98A] shadow-[0_0_8px_rgba(16,201,138,0.7)] animate-pulse" />
            <span className="hidden xs:inline">Live Engine</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
