import type React from "react";

type sectionTitleProps = {
  className?: string;
  children: React.ReactNode;
};

const SectionTitle = ({
  children,
  className = "reveal-title",
}: sectionTitleProps) => {
  return (
    <span
      className={`text-inch-worm bg-inch-worm/20 cursor-pointer rounded-3xl px-4 py-1 font-medium uppercase ${className}`}
    >
      {children}
    </span>
  );
};

export default SectionTitle;
