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
      <Marquee speed={50} pauseOnHover={true} pauseOnClick={false} className="flex gap-5 justify-between text-center">
        {logos.map((logo) => (
          <div key={logo} className="w-[20vw] text-sm lg:text-lg font-semibold tracking-wide">
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroLogos;
