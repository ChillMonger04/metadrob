import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="w-full py-[5.922vw] rounded-t-3xl bg-[#7B66FF] "
    >
      <div className="text border-t text-[30vw] border-b border-zinc-300 flex items-center gap-[3vw] whitespace-nowrap font-[FoundersGrotesk] uppercase overflow-hidden">
        <motion.h1
          initial={{ x: "1%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className=" leading-none -mt-[5.8vw] -mb-[2.665vw]"
        >
          Innovate. Captivate. Elevate.
        </motion.h1>
        <motion.h1
          initial={{ x: "1%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className=" leading-none -mt-[5.8vw] -mb-[2.665vw]"
        >
          Innovate. Captivate. Elevate.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
