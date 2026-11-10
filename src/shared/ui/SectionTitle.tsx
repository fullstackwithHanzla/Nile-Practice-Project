import React from "react";

type sectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children = "Section Title" }: sectionTitleProps) => {
  return <span className="text-inch-worm bg-inch-worm/20 cursor-pointer rounded-3xl px-4 py-1 font-medium uppercase">{children}</span>;
};

export default SectionTitle;