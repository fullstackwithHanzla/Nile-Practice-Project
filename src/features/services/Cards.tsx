import Button from "../../shared/ui/Button";
import Heading from "../../shared/ui/Heading";
import { services } from "./servicesData";
const PaidTraffic = () => {
  return (
    <>
      {services.map((service, index) => (
        <div key={index} className="bg-eerie-black mx-10 mt-10 flex flex-col items-center justify-between gap-25 p-10 sm:mx-5 sm:gap-25 sm:p-5 xl:flex-row">
          <img className="w-full rounded-lg object-cover xl:w-[45vw]" src={service.image} alt="User Using Laptop" />
          <div className="flex min-w-0 flex-1 flex-col gap-7 xl:w-[35vw] xl:gap-5">
            <Heading headingType="medium">{service.title}</Heading>

            {service.content.map((item, index) => (
              <div key={index} className="space-y-5">
                <Heading headingType="small">{item.heading}</Heading>

                <p>{item.description}</p>
              </div>
            ))}

            <div className="my-5">
              <Button name="Get Started" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PaidTraffic;