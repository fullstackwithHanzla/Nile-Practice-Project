import HeroSection from "./features/Hero/HeroSection";
import Services from "./features/services/Services";
import Benefits from "./features/Benefits/Benefits";
import Revolution from "./features/Case Study/Revolution";
import Testimonials from "./features/Testimonials/Testimonials";
import FaqSection from "./features/FAQ/FaqSection";
import Footer from "./features/Footer/Footer";
const App = () => {
  return (
    <div className="bg-cod-gray">
      <HeroSection />
      <Services />
      <Benefits />
      <Revolution />
      <Testimonials />
      <FaqSection/>
      <Footer/>
    </div>
  );
};

export default App;