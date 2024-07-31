const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full py-20 bg-[#96EFFF] rounded-t-3xl text-zinc-900"
    >
      <div className="px-[5.922vw] flex flex-col">
        <h1 className="text-[3.65vw] mb-2 leading-none">
          Crafting the Future of E-Commerce
        </h1>
        <p className="text-[2.25vw] leading-none w-[70%] opacity-75">
          Our foundation is defined by a commitment to shape the future of
          retail e-commerce, where cutting-edge technology meets creative
          brilliance.
        </p>
      </div>

      {/* ******************************************************************************************* */}
      <div className="w-full border-y border-[#5FBDFF] mt-12 px-[5.922vw]">
        <div className="flex flex-col md:flex-row gap-10 pt-4 pb-28">
          <div className="md:basis-[25vw] lg:basis-[50vw]">
            What you can expect:
          </div>
          <div className="flex flex-col basis-[25vw] w-[50vw] gap-7">
            <span>
              We transform online shopping with dynamic 3D showrooms, enhancing
              product visibility and boosting customer engagement. Metadrob
              redefines e-commerce to drive better results and brand impact
            </span>

            <span>
              We revolutionize virtual retail to wow customers and enhance brand
              presence. Because your products could use a little extra magic.
              With Metadrob’s tech, expect your sales to surprise even you.
            </span>
          </div>
          <div className="flex flex-col basis-[25vw]  justify-end md:pl-24">
            <span className="mb-3">S:</span>
            <span className="cursor-pointer">Instagram</span>
            <span className="cursor-pointer">Behance</span>
            <span className="cursor-pointer">Facebook</span>
            <span className="cursor-pointer">Linkedin</span>
          </div>
        </div>
      </div>

      {/* ******************************************************************************************* */}
      <div className="flex flex-col lg:flex-row gap-10 px-[3.922vw] mt-4 justify-between">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-[4vw]">Meet the Team:</h3>
          <button className="text-white px-6 py-4 bg-zinc-800 rounded-full text-[1.184vw] flex gap-7 items-center justify-between">
            <span>READ MORE</span>{" "}
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden flex items-center justify-center w-[400px] md:w-[600px]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className=" object-contain w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
