/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const FooterCard = ({
  width,
  start,
  para,
  hover,
  header,
  title,
  title2,
  title3,
  info,
}) => {
  return (
    <motion.div
      whileHover={{ padding: "25px" }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between ${
        hover ? "hover:bg-violet-500" : ""
      }`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{header}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{title}</h1>
        {info && (
          <div className="flex flex-col mt-2">
            <p className="pl-1">
              INDIA: Bengaluru | Delhi | Mumbai | Hyderabad | Pune
            </p>
            <p className="pl-1">
              USA: California | New York | Delaware | Boston | Texas
            </p>
            <p className="pl-1">
              Rest of The World: Singapore | Dubai | London | Paris | Milan
            </p>
          </div>
        )}

        {title2 && (
          <div>
            <h1 className="text-3xl font-medium mt-5">Reach Out to Us</h1>
            <p className="pl-1">+91 966-004-4020</p>
          </div>
        )}

        {title3 && (
          <div>
            <h1 className="text-3xl font-medium mt-5">For Enquiries</h1>
            <p className="pl-1">info@metadrob.com</p>
          </div>
        )}
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none uppercase">
              Start your Virtual Retail journey.
            </h1>
            <input
              className="py-2 px-5 mr-2 rounded-md focus:outline-none text-black"
              type="email"
              placeholder="Enter Email"
            ></input>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50 uppercase">
              Request a Demo
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-regular">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FooterCard;
