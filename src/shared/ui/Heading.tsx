import type React from "react";

type headingContent = {
  headingType: "small" | "medium" | "large" | "extraLarge";
  children: React.ReactNode;
  className ?: string,
};
const Heading = ({ headingType = "small", children = "Heading"  , className = "reveal-heading" }: headingContent) => {
  const variants = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
    extraLarge: "text-9xl",
  };
  return <h1 className={`${headingType === "extraLarge" ? `text-7xl xl:text-9xl` : variants[headingType]} font-bold ${className} ${headingType === "small" ? "" : "uppercase"}`}>{children}</h1>;
};

export default Heading;