import { FaArrowRight } from "react-icons/fa";

type buttonProps = {
  name: string;
  grow?: boolean;
};

const Button = ({ name, grow }: buttonProps) => {
  return (
    <button className={`${grow ? "min-w-full grow items-center justify-center rounded-4xl py-4 text-center" : "items-center justify-between"}border-cod-gray/20 text-cod-gray bg-inch-worm flex gap-2 rounded-3xl px-6 py-2 font-medium`}>
      {name}
      <span>|</span> <FaArrowRight />
    </button>
  );
};

export default Button;
