import Navbar from "./Navbar";
import HeroLogos from "./HeroLogos";
import HeroContent from "./HeroContent";
const HeroSection = () => {
  return (
    <div className="bg-cod-gray -z-10 flex min-h-screen flex-col justify-between bg-[url('../../../public/image.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <HeroContent />
      <HeroLogos />
    </div>
  );
};

export default HeroSection;
