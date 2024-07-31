import { RiScrollToBottomLine } from "react-icons/ri";
import { projects } from "../solutionsData";
import ProjectCard from "./ProjectCard";

const Solutions = () => {
  return (
    <div className="solutions-container" data-scroll data-scroll-speed="-0.2">
      <div className=" intro-section w-full py-20 bg-[#7B66FF] rounded-3xl flex flex-col items-center justify-center text-white">
        <p className="text-xl font-bold font-['FoundersGrotesk'] text-[3vw] mb-7 text-white px-4 py-1 tracking-wide bg-gray-700 rounded-md">
          BESPOKE SOLUTIONS
        </p>
        <p className="text-4xl font-semibold mb-8 border-y border-white py-4">
          Elevate & Expand with Our Tailored Solutions
        </p>
        <p className="text-[1.6vw] font-light leading-tight opacity-80 px-40 text-center mb-10">
          Discover how our customized solutions can elevate and expand your
          business. We offer tailor-made strategies that address your unique
          challenges and opportunities, ensuring that our services align
          perfectly with your goals. From personalized technology integrations
          to strategic consulting, we provide the expertise and innovation you
          need to drive success and achieve remarkable growth. Explore how our
          bespoke approach can transform your business and deliver exceptional
          results.
        </p>
        <p className="text-xl font-bold font-['FoundersGrotesk'] text-[3vw] mb-3 text-white uppercase tracking-wide">
          Scroll to discover how we can transform your business!
        </p>
        <RiScrollToBottomLine size={30} />
      </div>

      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
