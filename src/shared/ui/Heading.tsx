import type React from "react";

type headingContent = {
  headingType: "small" | "medium" | "large" | "extraLarge";
  children: React.ReactNode;
};
const Heading = ({ headingType = "small", children = "Heading" }: headingContent) => {
  const variants = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
    extraLarge: "text-9xl",
  };
  return <h1 className={`${variants[headingType]} font-bold ${headingType === "small" ? "" : "uppercase"}`}>{children}</h1>;
};

export default Heading;