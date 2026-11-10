export type Service = {
  id: number;
  title: string;
  image: string;
  background: string;
  content: {
    heading: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "PAID TRAFFIC",
    image: "/servicesUser/1.png",
    background: "bg-eerie-black",
    content: [
      {
        heading: "Targeted Campaigns",
        description: "Craft precise paid traffic campaigns for optimal results—reach, convert, and maximize your marketing budget strategically.",
      },
      {
        heading: "ROI-Driven Ads",
        description: "Boost your brand with results-focused paid traffic campaigns. Ensure your message resonates, reaching the right audience and driving conversions effectively.",
      },
    ],
  },
  {
    id: 2,
    title: "GRAPHIC DESIGN & BRANDING",
    image: "/servicesUser/2.png",
    background: "bg-white",
    content: [
      {
        heading: "Visual Excellence",
        description: "Experience visual brilliance with our graphic design. From eye-catching visuals to cohesive branding, leave a memorable mark on your audience.",
      },
      {
        heading: "Brand Impact",
        description: "Elevate your brand with our graphic design. Our experts create visuals that reinforce your brand's identity, ensuring a lasting and brilliant impression.",
      },
    ],
  },
  {
    id: 3,
    title: "CONTENT MARKETING STRATEGY",
    image: "/servicesUser/3.png",
    background: "bg-eerie-black",
    content: [
      {
        heading: "Strategic Storytelling",
        description: "Navigate the digital landscape with purposeful content strategies. Our storytelling engages and converts, forging meaningful connections with your audience.",
      },
      {
        heading: "Impactful Content",
        description: "Drive impact with our content marketing strategy. Crafted narratives resonate, creating a lasting impression and fostering authentic connections.",
      },
    ],
  },
];
