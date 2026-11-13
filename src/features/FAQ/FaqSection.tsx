import SectionTitle from "../../shared/ui/SectionTitle";
import Heading from "../../shared/ui/Heading";
import { faqData } from "./FaqDetails";
import { FaChevronDown } from "react-icons/fa";
import { useState, useRef } from "react";
import Button from "../../shared/ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(useGSAP , ScrollTrigger);

const FaqSection = () => {
  const [faqOpened, setFaqOpened] = useState<number[]>([]);
  const container = useRef<HTMLDivElement>(null);

  function checkIndex(index: number) {
    setFaqOpened((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  }

  useGSAP(
    () => {
      const answers =
        container.current?.querySelectorAll<HTMLElement>(".faq-answer");

      answers?.forEach((answer) => {
        const index = Number(answer.dataset.index);
        const isOpen = faqOpened.includes(index);

        gsap.to(answer, {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.5,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });
    },
    {
      scope: container,
      dependencies: [faqOpened],
    },
  );

  useGSAP(()=> {
    gsap.utils.toArray<HTMLDivElement>(".faq-divs").forEach((div) => {
      gsap.from(div, {
        y: 20,
        stagger: 0.05,
        opacity: 0,

        scrollTrigger: {
          trigger: div,
          start: "bottom 100%",
          toggleActions: "play none none reverse",
        },
      });
    });
  },{scope : container})

  
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

      <div
        ref={container}
        className="w-full max-w-full px-5 text-start xl:max-w-[75vw]"
      >
        {faqData.map((faq, index) => {
          const isOpen = faqOpened.includes(index);

          return (
            <div
              key={index}
              className="faq-item my-2 faq-divs rounded-lg border border-alabaster/20 bg-eerie-black px-5 py-5"
            >
              <button
                type="button"
                onClick={() => checkIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between text-start text-sm font-semibold md:text-lg"
              >
                <span>{faq.question}</span>

                <FaChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                data-index={index}
                aria-hidden={!isOpen}
                className="faq-answer overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <p className="mt-5">{faq.answer}</p>
              </div>
            </div>
          );
        })}

        <Button grow={true} name="Get Started" />
      </div>
    </div>
  );
};

export default FaqSection;
