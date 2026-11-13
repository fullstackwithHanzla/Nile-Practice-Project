import SectionTitle from "../../shared/ui/SectionTitle";
import Heading from "../../shared/ui/Heading";
import { benefitsData } from "./BenefitsData";
import { useGSAP } from "@gsap/react";
import { servicesAnimation } from "../services/Animations/ServicesAnimation";
import { useRef } from "react";
import gsap from "gsap";
const Benefits = () => {
  gsap.registerPlugin(useGSAP)
  const container = useRef<HTMLDivElement>(null)
  useGSAP(()=>{
    servicesAnimation();
  },{scope : container})
  return (
    <div ref={container} className="flex flex-col items-center gap-5 py-15">
      <SectionTitle>Benefits</SectionTitle>
      <Heading headingType="large">Unlock your success</Heading>
      <div className="my-15 grid gap-y-10 grid-cols-1 xl:grid-cols-3 xl:gap-5">
        {benefitsData.map((benefit, index) => (
          <div
            className="grid w-full grow grid-cols-1 grid-rows-subgrid row-span-3 place-items-center  text-center gap-3"
            key={index}
          >
            {<benefit.icon className="h-10 w-10" />}
            <Heading headingType="small">{benefit.heading}</Heading>
            <p className="reveal-paragraph-benefits w-full sm:px-5 md:w-[60%] text-center text-md xl:text-lg xl:w-[80%]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;