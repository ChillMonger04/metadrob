import MarqueeItem from "./MarqueeItem";

const Clients = () => {
  const lowerMarquee = [
    "src/assets/Signify.png",
    "src/assets/Mangal.png",
    "src/assets/Routinely.png",
    "src/assets/YEPPAR-1-2.png",
    "src/assets/Dynamic.png",
    "src/assets/Luxury-1.png",
    "src/assets/Arjiv.png",
    "src/assets/Luxury-1-2.png",
  ];

  return (
    <div className="w-full overflow-x-hidden rounded-3xl py-10 px-4 bg-[#4A2A8C] flex items-center justify-center z-10 -mt-[5vh]">
      <div className="flex flex-col py-8">
        <h1 className="mx-auto font-['FoundersGrotesk'] leading-[3vw] uppercase text-[7vw] text-[#EAEAEA]">
          Our Clients
        </h1>
        <h1 className="mx-auto font-['FoundersGrotesk'] leading-[7vw] uppercase text-[4vw] text-[#D0D0D0]">
          Trusted by Leading Brands
        </h1>
        <p className="mx-auto text-[1.3vw] text-[#B0B0B0] mb-6">
          Discover the brands that trust our expertise. We partner with leading
          companies to deliver outstanding results and drive innovation.
        </p>
        <MarqueeItem images={lowerMarquee} from={"-5%"} to={"50%"} />
      </div>
    </div>
  );
};

export default Clients;
