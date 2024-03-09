import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="hp-section bg-homepage bg-opacity-85 w-full h-full lg:bg-cover lg:bg-center bg-right-top">
      <div className="flex lg:flex-row flex-col items-end lg:items-center justify-center h-fit w-fit lg:min-h-screen">
        <div className="flex-1 bg-black bg-opacity-80 flex flex-col gap-3 text-white p-10 lg:max-w-[600px] min-h-[45vh] justify-center">
          <p className="text-[#A4A2FF] font-semibold">WE PROTECT AND SECURE</p>
          <h1 className="font-bold text-[45px] lg:text-[70px]">
            Providing expertise in a specific market
          </h1>
          <div className="flex items-center justify-center">
            <Link
              to="about"
              className="gradient hover:trans rounded text-white w-fit py-2 px-10 font-bold cursor-pointer lg:text-lg"
              spy={true}
          smooth={true}
          offset={0}
          duration={500}
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
