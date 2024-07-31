import { SiOpenbadges } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed z-[999] w-full px-[5.922vw] py-5 font-[NeueMontreal] flex items-center justify-between backdrop-blur-2xl">
      <div className="logo w-[11vw]">
        <img src="public\Images\metadrob-logo.png" />
      </div>

      <div className="links flex gap-[3vw] text-black">
        {["Home", "Why Metadrob", "Industries", "Solutions", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              className="text-[2.1vw] md:text-[1.3vw] font-light capitalize cursor-pointer"
            >
              <div className="linkContainer h-[1.9vw] overflow-hidden">
                <p className="upText transition-all ease-linear duration-300">
                  {item}
                </p>
                <p className="downText transition-all ease-linear duration-300">
                  {item}
                </p>
              </div>
            </a>
          )
        )}
      </div>

      <div className="flex items-center gap-7">
        <SiOpenbadges size={25} />
        <div className="buttonContainer flex flex-col h-[2.94vw] overflow-hidden cursor-pointer">
          <button className="px-3 py-2 bg-[#2bcdfe] text-black rounded-md uppercase text-[1.1vw] upBtn transition-all ease-linear duration-300">
            Book a Demo
          </button>
          <button className="px-3 py-2 bg-[#9707FC] text-white rounded-md uppercase text-[1.1vw] downBtn transition-all ease-linear duration-300">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
