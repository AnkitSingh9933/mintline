/**
 * Footer
 * Compact MINTLINE footer in midnight navy palette.
 * Wordmark · tagline · static navigation links.
 */
function Footer() {
  const links = ["About", "Currency Guide", "GitHub"];

  return (
    <footer
      className="px-5 sm:px-8 py-8 border-t border-[#1A2542] bg-[#070B1C]"
      aria-label="Site footer"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        {/* Wordmark + tagline */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold tracking-[0.16em] uppercase text-[#F4F5FA]">
              MINTLINE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10C98A]" />
          </div>
          <span className="text-xs text-[#8B96AD]">
            A more considered, real-time way to convert currencies.
          </span>
        </div>

        {/* Static links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-5" role="list">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-xs font-medium text-[#8B96AD] hover:text-[#9B8CFF] transition-colors duration-200"
                  aria-label={link}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
