
type NavlinkProps = {
    isPop? : boolean
}

const NavLinks = ({isPop = false}:NavlinkProps) => {
    const navLinkItems: string[] = [
      "Services",
      "Case Studies",
      "Testimonials",
      "FAQ",
    ];
    if(isPop){
        navLinkItems.pop()
    }
  return (
    <>
      {navLinkItems?.map((item, index) => (
        <li className="cursor-pointer list-none px-8 text-sm" key={index}>
          {item}
        </li>
      ))}
    </>
  );
}

export default NavLinks