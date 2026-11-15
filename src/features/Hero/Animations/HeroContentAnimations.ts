import gsap, { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export const heroContentAnimation = (container: HTMLElement) => {
  const splits: SplitText[] = [];

  const title = container.querySelector(".hero-title");
  const heading = container.querySelector(".hero-heading");
  const paragraph = container.querySelector(".hero-paragraph");
  const button = container.querySelector(".hero-button");
  const button2 = container.querySelector(".hero-button-2");
  const images = container.querySelectorAll(".hero-images > *");
  const clients = container.querySelector(".hero-clients-data");

  const tl = gsap.timeline();

  // Section label
  if (title) {
    tl.from(title, {
      opacity: 0,
      y: 10,
      duration: 0.85,
      ease: "power3.out",
    });
  }

  // Main heading
  if (heading) {
    const split = SplitText.create(heading, {
      type: "words",
      mask: "words",
      autoSplit: true,

      onSplit(self) {
        return gsap.from(self.words, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 1.2,
          stagger: 0.115,
          ease: "power3.out",
        });
      },
    });

    splits.push(split);
  }

  // Paragraph
  if (paragraph) {
    const split = SplitText.create(paragraph, {
      type: "words",
      mask: "words",
      autoSplit: true,

      onSplit(self) {
        return gsap.from(self.words, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.045,
          ease: "power3.out",
        });
      },
    });

    splits.push(split);
  }

  // Buttons
  if (button) {
    tl.from(
      button,
      {
        xPercent: -110,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "-=0.4",
    );
  }

  if (button2) {
    tl.from(
      button2,
      {
        xPercent: -110,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "<0.2",
    );
  }

  // Client images
  if (images.length) {
    tl.from(
      images,
      {
        yPercent: 110,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
      },
      ">",
    );
  }

  // Client statistics
  if (clients) {
    const split = SplitText.create(clients, {
      type: "words",
      mask: "words",
      autoSplit: true,

      onSplit(self) {
        return gsap.from(self.words, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
        });
      },
    });

    splits.push(split);
  }

  // Cleanup SplitText instances
  return () => {
    splits.forEach((split) => split.revert());
    tl.kill();
  };
};
