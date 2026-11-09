import Button from "../../shared/ui/Button";

const HeroContent = () => {
  const images: string[] = ["../../../public/userImages/1.png", "../../../public/userImages/2.png", "../../../public/userImages/3.png", "../../../public/userImages/4.png", "../../../public/userImages/5.png"];
  return (
    <div className="flex flex-col gap-4 px-4">
      <div>
        <span className="text-inch-worm bg-inch-worm/20 cursor-pointer rounded-3xl px-4 py-1 font-medium uppercase">for agency owners</span>
      </div>
      <h1 className="text-9xl font-bold uppercase">Build a powerful agency site with Framer</h1>
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