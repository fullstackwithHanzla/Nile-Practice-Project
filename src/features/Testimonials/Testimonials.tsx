import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import { testimonialsData } from "./TestimonialsData";
import { IoStar } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

const Testimonials = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paragraphs = container.current?.querySelectorAll(
        ".testimonial-review",
      );

      if (!paragraphs) return;

      const splits: SplitText[] = [];

      paragraphs.forEach((paragraph) => {
        const split = SplitText.create(paragraph, {
          type: "words",
          mask: "words",
        });

        splits.push(split);

        gsap.from(split.words, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => {
        splits.forEach((split) => split.revert());
      };
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

      <div className="flex w-full flex-wrap justify-between gap-10 p-10 lg:flex-nowrap">
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

            <p className="testimonial-review text-lg">
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
