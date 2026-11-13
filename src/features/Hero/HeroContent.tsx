import { useGSAP } from "@gsap/react";
import Button from "../../shared/ui/Button";
import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import { heroContentAnimation } from "./Animations/HeroContentAnimations";
import { useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";


const HeroContent = () => {

  gsap.registerPlugin(useGSAP)

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(()=>{
    heroContentAnimation()
  },{scope : container})
  
  
  const images: string[] = ["../../../public/userImages/1.png", "../../../public/userImages/2.png", "../../../public/userImages/3.png", "../../../public/userImages/4.png", "../../../public/userImages/5.png"];
  return (
    <div ref={container} className="flex flex-col gap-4 py-5 px-4">
      <div className="hero-title">
        <SectionTitle>for agency owners</SectionTitle>
      </div>
      <Heading className="hero-heading" headingType="extraLarge">
        Build a powerful agency site with Framer
      </Heading>
      <p className="hero-paragraph">
        We are committed to pushing the boundaries of what's possible.
      </p>
      <div className="flex items-center justify-start gap-2">
        <Button name="Get Started" />
        <a href="https://www.youtube.com" target="blanked" className="hero-button-2">
          <motion.button
            initial={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              scale: 1,
              color: "rgba(255, 255, 255, 1)",
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              scale: 0.97,
              color: "rgba(0, 0, 0, 1)",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="border-alabaster/40 rounded-4xl border px-4 py-2 transition-none"
          >
            Watch video
          </motion.button>
        </a>
      </div>

      <div className="flex  items-center justify-start gap-3">
        <div className="flex -space-x-1 hero-images">
          {images?.map((imgUrl, index) => (
            <div
              style={{ zIndex: 6 - index }}
              className={`border-cod-gray h-7 w-7 overflow-hidden rounded-full border`}
              key={imgUrl}
            >
              <img
                src={imgUrl}
                className="h-full w-full object-cover"
                alt="userImage"
              />
            </div>
          ))}
        </div>
        <span className="hero-clients-data">200+ happy clients</span>
      </div>
    </div>
  );
};

export default HeroContent;