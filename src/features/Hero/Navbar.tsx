import Button from "../../shared/ui/Button";

const Navbar = () => {
  const navLinkItems: string[] = ["Services", "Case Studies", "Testimonials", "FAQ"];
  return (
    <div className="border-alabaster/10 flex h-15 items-center justify-between border px-10 backdrop-blur-xs">
      <h2 className="cursor-pointer text-3xl font-bold">Nile</h2>
      <div className="flex items-center justify-between">
        {navLinkItems?.map((item, index) => (
          <li className="cursor-pointer list-none px-8 text-sm" key={index}>
            {item}
          </li>
        ))}
      </div>

      <Button name="Get Started" />
    </div>
  );
};

export default Navbar;
