import FeatureSlider from "./FeatureSlider";

const CoreFeatures = () => {
  return (
    <div
      className="w-full rounded-3xl py-10 bg-zinc-800"
      data-scroll
      data-scroll-speed=".1"
    >
      <div className="w-full px-[3.922vw] pb-10 border-b border-zinc-600">
        <h1 className="text-[4vw]">Seamless & Immersive</h1>
        <h3 className="text-[2vw] -mt-4">Uncover the Core Features</h3>
        <p className="-mt-1  text-[#7B66FF]">
          Redefining the online shopping experience with more interactive,
          realistic, and future-ready retail e-commerce features.
        </p>
      </div>
      <FeatureSlider />
    </div>
  );
};

export default CoreFeatures;
