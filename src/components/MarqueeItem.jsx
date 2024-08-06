/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="h-40 w-56 pr-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain"
                src={image}
                key={index}
              />
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="h-40 w-56 pr-20 flex items-center justify-center"
            >
              <img
                className="w-full h-full object-contain"
                src={image}
                key={index}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
