import { Link } from "react-scroll";
import { Link as Navigate} from "react-router-dom"

const Footer = () => {
  return (
    <div className="min-h-50vh footer-gradient text-white lg:px-16 md:px-8 px-4 pb-10 pt-16">
      <div className="flex flex-col justify-center items-center gap-y-12 md:grid md:grid-cols-2 md:items-center md:justify-center lg:flex lg:flex-row lg:justify-between lg:items-start pt-5">
        <div className="text-[40px] font-bold md:text-center lg:text-left">
          NPSA
        </div>
        <div className="md:text-center lg:text-left">
          <p className="text-[#ffffff73] text-[16px]">MENU</p>
          <ul className="flex flex-col gap-3 pt-2 cursor-pointer">
            <Link to="about" spy={true}
          smooth={true}
          offset={0}
          duration={500}>About</Link>
            <Link to="services" spy={true}
          smooth={true}
          offset={0}
          duration={500}>Service</Link>
            <Link to="blog" spy={true}
          smooth={true}
          offset={0}
          duration={500}>Blog</Link>
            <Navigate to={"/contact"} >Contact</Navigate>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-[#ffffff73] text-[16px]">SERVICES</p>
          <ul className="flex flex-col gap-3 pt-2">
            <li>Intelligence Gathering</li>
            <li>Cybersecurity Measures</li>
            <li>Innovation Integration</li>
            <li>International Collaboration</li>
          </ul>
        </div>
        <div className="flex gap-3 justify-center">
          
        </div>
      </div>
      <div className="lg:mt-14 mt-10 pt-14 border-[#ffffff7c] border-t-[1px] flex flex-col gap-y-5 md:flex-row justify-between">
        <p className="text-[#ffffff81] text-center lg:text-left">
          Copyright © 2024 NPSA. All Rights Reserved.
        </p>
        <div className="flex justify-between lg:justify-end items-center md:gap-x-10">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
