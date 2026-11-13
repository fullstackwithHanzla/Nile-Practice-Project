import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import { testimonialsData } from "./TestimonialsData";
import { IoStar } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { servicesAnimation } from "../services/Animations/ServicesAnimation";

const Testimonials = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      servicesAnimation();
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="flex flex-col items-center gap-10 py-15 text-center"
    >
      <div>
        <SectionTitle>Testimonials</SectionTitle>
      </div>
      <Heading headingType="large">
        What our clients say <br /> about us
      </Heading>
      <div className="flex w-full justify-between  flex-wrap lg:flex-nowrap gap-10 p-10">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="grid space-y-5 text-start">
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <IoStar
                  key={index}
                  fill="#FACC15"
                  className="text-yellow-400"
                />
              ))}
            </div>
            <p className="text-lg reveal-paragraph-benefits">
              {testimonial.reviewMessage}
            </p>
            <div className="flex items-center gap-2">
              <PiUserCircleFill size={25} />
              <span className="text-xs">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
