import Button from "../../shared/ui/Button";
import Heading from "../../shared/ui/Heading";
import SectionTitle from "../../shared/ui/SectionTitle";

const HeroContent = () => {
  const images: string[] = ["../../../public/userImages/1.png", "../../../public/userImages/2.png", "../../../public/userImages/3.png", "../../../public/userImages/4.png", "../../../public/userImages/5.png"];
  return (
    <div className="flex flex-col gap-4 px-4">
      <div>
        <SectionTitle>for agency owners</SectionTitle>
      </div>
      <Heading headingType="extraLarge">Build a powerful agency site with Framer</Heading>
      <p>We are committed to pushing the boundaries of what's possible.</p>
      <div className="flex items-center justify-start gap-2">
        <Button name="Get Started" />
        <button className="border-alabaster/40 rounded-4xl border px-4 py-2">Watch video</button>
      </div>

      <div className="flex items-center justify-start gap-3">
        <div className="flex -space-x-1">
          {images?.map((imgUrl, index) => (
            <div style={{ zIndex: 6 - index }} className={`border-cod-gray h-7 w-7 overflow-hidden rounded-full border`} key={imgUrl}>
              <img src={imgUrl} className="h-full w-full object-cover" alt="userImage" />
            </div>
          ))}
        </div>
        <span>200+ happy clients</span>
      </div>
    </div>
  );
};

export default HeroContent;