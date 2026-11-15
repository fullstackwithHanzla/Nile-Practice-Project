import SectionTitle from "../../shared/ui/SectionTitle";
import Heading from "../../shared/ui/Heading";
import { benefitsData } from "./BenefitsData";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const Benefits = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const paragraphs = container.current?.querySelectorAll(
        ".reveal-paragraph-benefits",
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
          stagger: 0.08,
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
      className="flex flex-col items-center gap-5 px-2 py-15"
    >
      <SectionTitle>Benefits</SectionTitle>

      <div className="text-center">
        <Heading headingType="large">Unlock your success</Heading>
      </div>

      <div className="my-15 grid grid-cols-1 gap-y-10 xl:grid-cols-3 xl:gap-5">
        {benefitsData.map((benefit, index) => (
          <div
            className="grid w-full grow grid-cols-1 grid-rows-subgrid row-span-3 place-items-center gap-3 text-center"
            key={index}
          >
            <benefit.icon className="h-10 w-10" />

            <Heading headingType="small">{benefit.heading}</Heading>

            <p className="reveal-paragraph-benefits w-full text-center text-md sm:px-5 md:w-[60%] xl:w-[80%] xl:text-lg">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
