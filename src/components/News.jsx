import { MdArrowOutward } from "react-icons/md";

const News = () => {
  return (
    <div className="w-full h-fit rounded-3xl bg-white px-16 py-20">
      <div className="blogTitle flex flex-col items-center justify-center">
        <p className="text-xl font-bold font-['FoundersGrotesk'] text-[3vw] mb-3 text-white px-4 py-1 tracking-wide bg-gray-700 rounded-md w-[14vw] text-center">
          NEWS & ARTICLES
        </p>
        <p className="font-['FoundersGrotesk'] uppercase text-black text-[6vw] leading-[4.8vw] font-semibold mb-7 text-center">
          Latest from The Virtual Shopping
          <br />
          and Metaverse World
        </p>
        <p className="text-lg px-20 text-black font-light leading-tight opacity-80 text-center mb-10">
          Dive into our blogs for a fresh perspective about virtual retail,
          virtual shopping, and Metaverse. Explore the latest insights, tips,
          and stories to stay informed and inspired.
        </p>
      </div>
      <div className="blogWrapper h-full w-full bg-pink">
        <div className="h-[33.3vh] w-full border-t-2 border-b-2 py-4 px-10 border-black flex items-center justify-between text-black">
          <div className="blogImgContainer w-72 h-40 bg-red-400 rounded-md overflow-hidden">
            <img
              className="h-full w-full"
              src="https://www.metadrob.com/wp-content/uploads/2024/07/3d-virtual-stores-transforming-the-fashion-industry-1.jpg"
            />
          </div>
          <h1 className="w-[20vw] font-semibold tracking-wide">
            The Future of Online Shopping: How Immersive 3D Virtual Stores are
            Revolutionizing the Fashion Industry
          </h1>
          <h3>9TH JULY</h3>
          <p className="readMore flex items-center cursor-pointer">
            Read More <MdArrowOutward />
          </p>
        </div>
        <div className="h-[33.3vh] w-full border-b-2 py-4 px-10 border-black flex items-center justify-between  text-black">
          <div className="blogImgContainer w-72 h-40 bg-red-400 rounded-md overflow-hidden">
            <img
              className="h-full w-full"
              src="https://www.metadrob.com/wp-content/uploads/2024/05/how-metaverse-is-transforming-e-commerce.png"
            />
          </div>
          <h1 className="w-[20vw] font-semibold tracking-wide">
            How Metaverse is Transforming E-Commerce Industry?
          </h1>
          <h3>27TH MAY</h3>
          <p className="readMore flex items-center cursor-pointer">
            Read More <MdArrowOutward />
          </p>
        </div>
        <div className="h-[33.3vh] w-full border-b-2 py-4 px-10 border-black flex items-center justify-between  text-black">
          <div className="blogImgContainer w-72 h-40 bg-red-400 rounded-md overflow-hidden">
            <img
              className="h-full w-full"
              src="https://www.metadrob.com/wp-content/uploads/2024/05/top-8-reasons-customers-are-more-eager-to-shop-from-3d-virtual-stores-1.png"
            />
          </div>
          <h1 className="w-[20vw] font-semibold tracking-wide">
            Top 8 Reasons Customers Are More Eager to Shop from 3D Virtual
            Stores
          </h1>
          <h3>27TH MAY</h3>
          <p className="readMore flex items-center cursor-pointer">
            Read More <MdArrowOutward />
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
