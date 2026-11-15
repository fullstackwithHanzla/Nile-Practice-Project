import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../../shared/ui/Button";
import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import { servicesAnimation } from "./Animations/ServicesAnimation";

gsap.registerPlugin(useGSAP);

type ContentItem = {
  heading: string;
  description: string;
};

type ServiceItem = {
  id: number;
  title: string;
  image: string;
  cardDirection: string;
  background: string;
  content: ContentItem[];
};

type CardsProp = {
  data: ServiceItem[];
  caseStudy: boolean;
};

const Cards = ({ data, caseStudy }: CardsProp) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      return servicesAnimation(container.current);
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      {data.map((service, index) => (
        <div
          key={index}
          style={{
            color: service.background === "bg-alabaster" ? "black" : "white",
          }}
          className={`${service.background} cards sm:mx-10 mt-10 flex ${
            service.cardDirection === "left" ? "flex-col" : "flex-col-reverse"
          } items-center justify-between gap-25 rounded-lg p-5 md:p-10 sm:mx-5 sm:gap-25 xl:flex-row`}
        >
          {service.cardDirection === "left" && (
            <img
              className="w-full rounded-lg object-cover xl:w-[45vw]"
              src={service.image}
              alt="User Using Laptop"
            />
          )}

          <div className="flex min-w-0 flex-1 flex-col gap-7 xl:w-[35vw] xl:gap-5">
            {caseStudy && (
              <div className="flex items-center">
                <SectionTitle>Case Study</SectionTitle>
              </div>
            )}

            <Heading headingType="medium">{service.title}</Heading>

            {service.content.map((item, index) => (
              <div key={index} className="space-y-5">
                <Heading headingType="small">{item.heading}</Heading>

                <p className="reveal-paragraph">{item.description}</p>
              </div>
            ))}

            <div className="my-5">
              <Button name="Get Started" />
            </div>
          </div>

          {service.cardDirection === "right" && (
            <img
              className="w-full rounded-lg object-cover xl:w-[45vw]"
              src={service.image}
              alt="User Using Laptop"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
