import { useRef, useState } from "react";
import Button from "../../shared/ui/Button";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  const [menuButtonActive, setMenuButtonActive] = useState(false);

  useGSAP(
    () => {
      if (!menuButtonActive || !menu.current) return;

      gsap.fromTo(
        menu.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "height",
        },
      );
    },
    {
      scope: container,
      dependencies: [menuButtonActive],
    },
  );

  return (
    <div
      ref={container}
      className="border navbar border-alabaster/10 backdrop-blur-xs px-10"
    >
      <div className="flex py-2.5 items-center justify-between">
        <h2 className="cursor-pointer text-3xl font-bold">Nile</h2>

        <div className="hidden lg:flex items-center justify-between">
          <NavLinks />
        </div>

        <div className="block lg:hidden">
          <GiHamburgerMenu
            size={20}
            onClick={() => setMenuButtonActive((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>

        <div className="hidden lg:block">
          <Button name="Get Started" navbarButton={true} />
        </div>
      </div>

      {menuButtonActive && (
        <div
          ref={menu}
          className="flex items-center flex-col gap-2 py-5 overflow-hidden lg:hidden"
        >
          <NavLinks active={menuButtonActive} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
