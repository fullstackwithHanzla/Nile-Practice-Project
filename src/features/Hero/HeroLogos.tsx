import MarqueeImport from "react-fast-marquee";

const Marquee = (
  MarqueeImport as unknown as {
    default: typeof MarqueeImport;
  }
).default;

const logos: string[] = ["Boost Conversion", "Lightning Fast", " Framer Experts", "Modern Design", "Scale Your Agency"];

const HeroLogos = () => {
  return (
    <div className="py-4">
      <Marquee speed={30} pauseOnHover={true}>
        {logos.map((logo) => (
          <div key={logo} className="w-[20vw] font-semibold tracking-wide">
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroLogos;
