import type React from "react";

type headingContent = {
  headingType?: "small" | "medium" | "large" | "extraLarge";
  children: React.ReactNode;
  className?: string;
};

const Heading = ({
  headingType = "small",
  children,
  className = "reveal-heading",
}: headingContent) => {
  const variants = {
    small: "text-2xl",
    medium: "text-2xl sm:text-4xl",
    large: "text-3xl sm:text-5xl lg:text-6xl",
    extraLarge: "text-5xl md:text-7xl xl:text-9xl",
  };

  return (
    <h1
      className={`${variants[headingType]} font-bold ${className} ${
        headingType === "small" ? "" : "uppercase"
      }`}
    >
      {children}
    </h1>
  );
};

export default Heading;
