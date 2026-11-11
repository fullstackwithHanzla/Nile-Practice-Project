import HeroSection from "./features/Hero/HeroSection";
import Services from "./features/services/Services";
import Benefits from "./features/Benefits/Benefits";
import Revolution from "./features/Case Study/Revolution";
import Testimonials from "./features/Testimonials/Testimonials";

const App = () => {
  return (
    <div className="bg-cod-gray">
      <HeroSection />
      <Services />
      <Benefits />
      <Revolution />
      <Testimonials />
    </div>
  );
};

export default App;