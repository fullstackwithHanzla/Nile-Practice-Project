import SectionTitle from "../../shared/ui/SectionTitle";
import Heading from "../../shared/ui/Heading";
import { faqData } from "./FaqDetails";
import { FaChevronDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Button from "../../shared/ui/Button";

const FaqSection = () => {
  const [faqOpened, setFaqOpened] = useState<number[]>([]);

  function checkIndex(index: number) {
    setFaqOpened((prev) => (prev?.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]));
  }
  return (
    <div className="flex flex-col items-center gap-10 py-10 text-center">
      <div>
        <SectionTitle>faq</SectionTitle>
      </div>
      <Heading headingType="large">
        Frequently asked
        <br />
        questions
      </Heading>
      <div className="w-full text-start max-w-full px-5 xl:max-w-[75vw]">
        {faqData.map((faq, index) => (
          <details key={index} className="border-alabaster/20 bg-eerie-black my-2 rounded-lg border px-5 py-5">
            <summary onClick={() => checkIndex(index)} className="flex list-none items-center justify-between text-sm md:text-lg font-semibold">
              <span>{faq.question}</span>
              {faqOpened?.includes(index) ? <RxCross1 /> : <FaChevronDown />}
            </summary>

            <p className="mt-5">{faq.answer}</p>
          </details>
        ))}
        <Button grow={true} name="Get Started" />
      </div>
    </div>
  );
};

export default FaqSection;