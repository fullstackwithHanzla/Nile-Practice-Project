import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

type buttonProps = {
  name: string;
  grow?: boolean;
  navbarButton?: boolean;
  className?: string;
};

const Button = ({
  name,
  grow,
  navbarButton = false,
  className = "",
}: buttonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring" }}
      className={`
        border-cod-gray/20 text-cod-gray bg-inch-worm
        flex gap-2 rounded-3xl hero-button px-6 py-2 font-medium
        ${grow ? "min-w-full grow items-center justify-center rounded-4xl py-4 text-center" : "items-center justify-between"}
        ${navbarButton ? "hidden lg:flex" : ""}
        ${className}
      `}
    >
      {name}
      <span>|</span>
      <FaArrowRight />
    </motion.button>
  );
};

export default Button;
