import { FaArrowRight } from "react-icons/fa";

type buttonProps = {
  name: string;
};

const Button = ({ name }: buttonProps) => {
  return (
    <button className="border-cod-gray/20 font-medium text-cod-gray bg-inch-worm flex items-center justify-between rounded-3xl py-2 px-6 gap-2">
      {name}
      <span>|</span> <FaArrowRight />
    </button>
  );
};

export default Button;
