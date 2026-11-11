import HeroSection from "./features/Hero/HeroSection";
import Services from "./features/services/Services";
import Benefits from "./features/Benefits/Benefits";
const App = () => {
  return (
    <div className="bg-cod-gray">
      <HeroSection />
      <Services />
      <Benefits />
    </div>
  );
};

export default App;