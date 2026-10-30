import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CurrencyConverter from "./components/CurrencyConverter";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

/**
 * App
 * Root composition component for MINTLINE.
 * Premium Dark Fintech Dashboard interface.
 */
function App() {
  return (
    <div
      className="min-h-screen flex flex-col selection:bg-[#6545FF] selection:text-white"
      style={{ background: "#070B1C" }}
    >
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <CurrencyConverter />
        <FeatureSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
