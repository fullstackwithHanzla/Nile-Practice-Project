import { MdAutoGraph } from "react-icons/md";
import { LuChartSpline } from "react-icons/lu";
import { GiWaves } from "react-icons/gi";
import type { IconType } from "react-icons";

export type Benefits = {
  icon: IconType;
  heading: string;
  description: string;
};

export const benefitsData: Benefits[] = [
  {
    icon: MdAutoGraph,
    heading: "Elevate Your Brand",
    description: "Amplify your brand with increased visibility, enhanced credibility, and a strategic edge for lasting success.",
  },
  {
    icon: LuChartSpline,
    heading: "Maximize ROI",
    description: "Experience unmatched return on investment—strategic marketing for sustained growth and profitability.",
  },
  {
    icon: GiWaves,
    heading: "Tailored Solutions for Success",
    description: "Personalized strategies, uniquely crafted for your business, ensuring certainty in every marketing endeavor."
  },
];