import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import Cards from "./Cards";
import { services } from "./servicesData";
const Services = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center gap-5 text-center">
        <SectionTitle>Services</SectionTitle>
        <Heading headingType="large">
          Services designed to
          <br />
          grow your business
        </Heading>
      </div>
      <Cards caseStudy={false} data={services} />
    </>
  );
};

export default Services;