import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export const servicesAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const t1 = gsap.timeline();

  t1.from(".services-title", {
    y: 10,
    scale: 0.95,
    opacity: 0,

    scrollTrigger: {
      trigger: ".services-title",
      start: "bottom 100%",
      end: "bottom 80%",
      scrub: true,
    },
  });

  gsap.utils.toArray<HTMLElement>(".reveal-heading").forEach((heading) => {
    SplitText.create(heading, {
      type: "words",
      mask: "words",
      autoSplit: true,

      onSplit(splitText) {
        return gsap.from(splitText.words, {
          yPercent: 110,
          duration: 1.2,
          opacity: 0,
          stagger : 0.1,
          ease: "power3.out",
          autoAlpha: 0,

          scrollTrigger: {
            trigger: heading,
            start: "bottom 100%",
            scrub : false,
            end: "bottom 80%",
            toggleActions : "play none none reverse"
          },
        });
      },
    });
  });

  gsap.utils.toArray<HTMLElement>(".cards").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration : 1,
      ease: "power3.inOut",

      scrollTrigger: {
        trigger: card,
        start: "top 100%",
        toggleActions : "play none none reverse"
      },
    });
  })

};
