import SectionTitle from "../../shared/ui/SectionTitle";
import Heading from "../../shared/ui/Heading";
import { benefitsData } from "./BenefitsData";
const Benefits = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-15">
      <SectionTitle>Benefits</SectionTitle>
      <Heading headingType="large">Unlock your success</Heading>
      <div className="my-15 flex items-center justify-between gap-5">
        {benefitsData.map((benefit, index) => (
          <div className="grid w-full grow grid-cols-1 place-items-center gap-5" key={index}>
            {<benefit.icon className="h-10 w-10" />}
            <Heading headingType="small">{benefit.heading}</Heading>
            <p className="w-full text-center text-lg lg:w-[80%]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;