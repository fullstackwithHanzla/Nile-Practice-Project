import Button from "../../shared/ui/Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  
  return (
    <div className="border-alabaster/10 flex h-15 items-center justify-between border px-10 backdrop-blur-xs">
      <h2 className="cursor-pointer text-3xl font-bold">Nile</h2>
      <div className="flex items-center justify-between">
        <NavLinks/>
      </div>

      <Button name="Get Started" />
    </div>
  );
};

export default Navbar;
