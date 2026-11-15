import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const servicesAnimation = (container: HTMLElement) => {
  const splits: SplitText[] = [];

  // 1. Services title animation
  const servicesTitle = container.querySelector(".services-title");

  if (servicesTitle) {
    gsap.fromTo(
      servicesTitle,
      {
        y: 10,
        scale: 0.95,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesTitle,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      },
    );
  }

  // 2. Word-based heading reveals
  const wordElements = container.querySelectorAll(
    ".reveal-heading, .reveal-paragraph-benefits",
  );

  wordElements.forEach((element) => {
    const split = SplitText.create(element, {
      type: "words",
      mask: "words",
      autoSplit: true,

      onSplit(self) {
        return gsap.fromTo(
          self.words,
          {
            yPercent: 110,
            autoAlpha: 0,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      },
    });

    splits.push(split);
  });

  // 3. Paragraph line reveals
  const paragraphs = container.querySelectorAll(".reveal-paragraph");

  paragraphs.forEach((paragraph) => {
    const split = SplitText.create(paragraph, {
      type: "lines",
      mask: "lines",
      autoSplit: true,

      onSplit(self) {
        return gsap.fromTo(
          self.lines,
          {
            yPercent: 110,
            autoAlpha: 0,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      },
    });

    splits.push(split);
  });

  // 4. Card entrance animations
  const cards = container.querySelectorAll(".cards");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // 5. Cleanup SplitText instances
  return () => {
    splits.forEach((split) => split.revert());
  };
};
