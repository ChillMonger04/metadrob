// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, src, color }) => {
  return (
    <div className="cardContainer h-screen flex items-center justify-center sticky top-0">
      <div
        style={{ backgroundColor: color }}
        className="card rounded-3xl w-full h-[100vh] flex items-center justify-center"
      >
        <div className="m-20 w-full h-full flex">
          {/* Left Section */}
          <div className="solLeft w-1/2 h-full flex flex-col items-start justify-center p-8">
            <h1 className="font-['FoundersGrotesk'] leading-[5.5vw] uppercase text-[6vw] mb-4">
              {title}
            </h1>
            <p className="text-[1.6vw] font-light leading-tight opacity-80 text-left w-[90%] mb-6">
              {description}
            </p>
            <button className="px-4 py-3 bg-zinc-600 rounded-lg font-semibold tracking-wider">
              BOOK A DEMO
            </button>
          </div>

          {/* Right Section */}
          <div className="solRight w-1/2 h-full flex flex-col items-center justify-center p-8 bg-gray-200">
            <div className="imgContainer w-[90%] h-[50%] bg-purple-600 rounded-lg overflow-hidden">
              <img src={src} className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
