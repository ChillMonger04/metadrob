import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const LandingPage = () => {
  // Using useMotionValue, it is basically a state variable for motion value.
  // We will get values from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useSpring creates a motion value that animates to its target with a spring
  // Spring easing. we don't go from 0 -> 0.5 but 0 -> 0.2 -> 0.5
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  // Function to find position of mouse with respect to the outer div
  const handleMouseMove = (e) => {
    // This will give the boundary values for the div
    const rect = e.target.getBoundingClientRect();

    // console.log(e.clientX, e.clientY); This gives the boundary value with respect to the full screen

    // Calculating the width and height
    const width = rect.width;
    const height = rect.height;

    // Calculating the position of the mouse relative to the div
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculating the position of the mouse relative to the div in percentage
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // This is to store the new values in the useMotionValue hook
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // This will reset the values to 0, so if we hover out of the div it sets back the value to 0 0
    x.set(0);
    y.set(0);
  };

  return (
    <div data-scroll data-scroll-speed="-.3">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className=" relative h-[100vh] w-full rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300  scrollbar-hide"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          {/* Bottom left text */}
          <div className="absolute bottom-4 left-4 text-left">
            <p className="font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw] flex items-center text-black">
              Your Brand,
            </p>
            <p className="font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw] flex items-center text-black">
              Your Store,
            </p>
            <p className="font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw] flex items-center text-black">
              Your 3D Reality
            </p>
          </div>

          {/* Bottom right text */}
          <div className="absolute bottom-4 right-4 text-right w-full max-w-lg">
            <p className="font-[NeueMontreal] leading-[2vw] text-[2vw] text-black">
              Metadrob is revolutionizing online product displays with a
              cutting-edge platform that empowers e-commerce businesses to
              captivate and engage customers like never before.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
