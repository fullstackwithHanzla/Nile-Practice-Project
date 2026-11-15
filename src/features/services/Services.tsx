import { useGSAP } from "@gsap/react";
import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import Cards from "./Cards";
import { services } from "./servicesData";
import { servicesAnimation } from "./Animations/ServicesAnimation";
import gsap from "gsap";
import { useRef } from "react";

const Services = () => {
  gsap.registerPlugin(useGSAP);

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
      <div className="mt-20 flex flex-col items-center gap-5 text-center">
        <div className="services-title">
          <SectionTitle>Services</SectionTitle>
        </div>

        <Heading headingType="large">
          Services designed to
          <br />
          grow your business
        </Heading>
      </div>

      <Cards caseStudy={false} data={services} />
    </div>
  );
};

export default Services;
