import { motion } from "framer-motion";

type NavlinkProps = {
  isPop?: boolean;
};

const NavLinks = ({ isPop = false }: NavlinkProps) => {
  const navLinkItems = [
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  if (isPop) {
    navLinkItems.pop();
  }

  return (
    <>
      {navLinkItems.map((item) => (
        <motion.li
          key={item.href}
          whileHover={{
            color: "var(--color-inch-worm)",
            transition: { type: "tween", duration: 0.35, ease: "easeOut" },
          }}
          className="cursor-pointer list-none px-8 text-sm"
        >
          <a href={item.href} className="block w-full">
            {item.label}
          </a>
        </motion.li>
      ))}
    </>
  );
};

export default NavLinks;
