import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";
import Cards from "./Cards";
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
      <Cards />
    </>
  );
};

export default Services;