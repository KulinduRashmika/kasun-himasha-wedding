import GoldenParticles from "./components/GoldenParticles";
import FloatingPetals from "./components/FloatingPetals";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import CoupleSection from "./components/CoupleSection";
import WeddingDetails from "./components/WeddingDetails";
import BlessingsSection from "./components/BlessingsSection";
import Footer from "./components/Footer";
import BellButton from "./components/BellButton";

function App() {
  return (
    <div className="relative min-h-screen" style={{ background: "#0d0205" }}>
      {/* Fixed ambient elements */}
      <GoldenParticles />
      <FloatingPetals count={20} />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <HeroSection />
        <WelcomeSection />
        <CoupleSection />
        <WeddingDetails />
        <BlessingsSection />
      </main>

      <Footer />

      {/* Bell button */}
      <BellButton />
    </div>
  );
}

export default App;
