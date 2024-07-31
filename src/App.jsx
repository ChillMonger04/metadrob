import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Marquee from "./components/Marquee";
import About from "./components/About";
import CoreFeatures from "./components/CoreFeatures";
import Reasons from "./components/Reasons";
import Solutions from "./components/Solutions";
import Integration from "./components/Integration";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hide scroll-container w-full overflow-x-hidden min-h-screen text-white font-[NeueMontreal] bg-zinc-900"
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <CoreFeatures />
      <Reasons />
      <Solutions />
      <Integration />
    </div>
  );
};

export default App;
