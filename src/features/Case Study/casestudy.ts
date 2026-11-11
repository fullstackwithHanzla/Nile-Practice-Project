export type CaseStudy = {
  id: number;
  title: string;
  image: string;
  cardDirection: string;
  background: string;
  content: {
    heading: string;
    description: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "A CONVERSION REVOLUTION",
    cardDirection: "left",
    image: "/caseStudies/1.png",
    background: "bg-eerie-black",
    content: [
      {
        heading: "Targeted Campaigns, Big Results",
        description: "Unlock the secrets behind our targeted campaigns that transformed a struggling business, delivering significant increases in conversions and revenue.",
      },
      {
        heading: "Strategic Optimization Pays Off",
        description: "Discover how our strategic optimization techniques maximized ROI, proving that precision and analysis can turn a struggling campaign into a success story.",
      },
    ],
  },
  {
    id: 2,
    title: "VISUALIZING SUCCESS",
    cardDirection: "right",
    image: "/caseStudies/2.png",
    background: "bg-eerie-black",
    content: [
      {
        heading: "Graphic Design Magic",
        description: "Delve into the role of graphic design in this success story—how captivating visuals created a unique brand identity and set the stage for unprecedented engagement.",
      },
      {
        heading: "Branding Excellence",
        description: "Explore how our branding expertise elevated the client's presence, reinforcing their identity across various channels and driving a surge in brand recognition.",
      },
    ],
  },
];