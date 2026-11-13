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

      <div id="services" className="scroll-mt-20">
        <Services />
      </div>

      <Benefits />

      
      <div id="case-studies" className="scroll-mt-20">
        <Revolution />
      </div>

      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>

      <div id="faq" className="scroll-mt-20">
        <FaqSection />
      </div>

      <Footer />
    </div>
  );
};

export default App;