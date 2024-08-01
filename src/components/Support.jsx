import MarqueeItem from "./MarqueeItem";

const Support = () => {
  const upperMarquee = [
    "src/assets/1.png",
    "src/assets/2b-1.png",
    "src/assets/3.png",
    "src/assets/4.png",
    "src/assets/5.png",
    "src/assets/6b.png",
    "src/assets/7.png",
  ];

  return (
    <div
      className="w-full  overflow-x-hidden rounded-3xl py-10 px-4 bg-[#FED9ED] flex items-center justify-center"
    >
      
      <div className="flex flex-col py-8">
      <h1 className="mx-auto font-['FoundersGrotesk'] leading-[7vw] uppercase text-[7vw] text-gray-800">SUPPORTED & RECOGNIZED BY</h1>
      <p className="mx-auto text-[1.3vw] text-gray-600 mb-6">Showcasing the esteemed investors and partners who support and recognize our mission.</p>
        <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      </div>
    </div>
  );
};

export default Support;
