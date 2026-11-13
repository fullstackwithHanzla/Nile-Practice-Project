import React from 'react'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Heading from '../../shared/ui/Heading';
import NavLinks from '../Hero/NavLinks';
import { motion } from 'framer-motion';
type iconsType = {
    icon : React.ElementType,
}[]

const icons:iconsType = [{ icon: BiLogoFacebookSquare }, { icon: FaLinkedin} , {icon : FaTwitter}]


const SocialAndNavlinks = () => {
  return (
    <div className="grid align-items-center grid-cols-1 place-items-center gap-y-10 xl:grid-cols-3 px-5 py-5 mt-10">
      <div className="flex gap-2 items-center">
        {icons.map((element, index) => (
          <motion.div
            whileHover={{
              color: "var(--color-inch-worm)",
              borderColor: "var(--color-inch-worm)",
              transition: { type: "tween", duration: 0.35, ease: "easeOut" },
            }}
            key={index}
            className="rounded-full border p-2 border-alabaster/20"
          >
            <element.icon />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Heading headingType="small">Nile</Heading>
        <p>
          Build a powerful agency <br /> site with Framer
        </p>
      </div>

      <div className="flex items-center justify-end">
        <NavLinks isPop={true} />
      </div>
    </div>
  );
}

export default SocialAndNavlinks