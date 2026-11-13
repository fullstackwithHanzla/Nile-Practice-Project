import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

type buttonProps = {
  name: string;
  grow?: boolean;
};

const Button = ({ name, grow }: buttonProps) => {
  return (
    <motion.button
      whileHover = {{ scale : 1.02 , animationDuration : 1 }}
      whileTap={{scale : 0.98  }}
      transition={{type : "spring" }}
      className={`${grow ? "min-w-full  grow items-center justify-center rounded-4xl py-4 text-center" : "items-center justify-between"}border-cod-gray/20 text-cod-gray bg-inch-worm flex gap-2 rounded-3xl hero-button px-6 py-2 font-medium`}
    >
      {name}
      <span>|</span> <FaArrowRight />
    </motion.button>
  );
};

export default Button;
