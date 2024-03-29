import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as Navigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import idme from "../assets/idme-logo.svg"
import { routes } from "../assets/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollBlack, setScrollBlack] = useState(false);
  const handleNav = () => setNav(!nav);

  // Add this effect to handle body overflow
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Make sure to reset when unmounting
    };
  }, [nav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBlack(true); // Set scrollBlack to true when scrolling occurs
      } else {
        setScrollBlack(false); // Set scrollBlack to false when at the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener on unmount
    };
  }, []);

  return (
    <div
      className={` ${
        scrollBlack ? "bg-black bg-opacity-50" : "bg-black bg-opacity-30"
      }   text-white lg:px-12 md:px-8 lg:py-2 py-1 fixed top-0 z-30 w-full`}
    >
      {/* for pcs and tabs */}
      <div className="hidden md:flex items-center justify-between ">
        <Link
          className="h1 hover:cursor-pointer"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          NPSA
        </Link>
        <ul className="flex items-center md:gap-8 lg:gap-16">
          {routes.map((route, i) => (
            <Link
              activeClass="active"
              key={i}
              to={route}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="hover:cursor-pointer hover:trans capitalize"
            >
              {route}
            </Link>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-3">

        <Navigate to="contact" className="hover: cursor-pointer hover:trans capitalize">
          Contact
        </Navigate>
        <Navigate to="/api.id.me/en/session/new" className=" cursor-pointer capitalize gradient p-1 rounded-full px-2 flex items-center justify-center gap-1">
          Verify with <img className="h-10 w-10" src={idme} alt="id.me logo" />
        </Navigate>
        </div>
      </div>

      {/* for phones */}
      <div
        className={`md:hidden flex items-center justify-between text-white px-4 ${
          nav && "bg-[#A4A2FF]"
        } `}
      >
        <Link
          className={`h1 hover:cursor-pointer ${nav && "text-transparent"} `}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          NPSA
        </Link>
        <div onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-[35px]" />
          ) : (
            <AiOutlineMenu className="text-[35px]" />
          )}
        </div>
      </div>

      {nav && (
        <div className="flex flex-col gap-12 items-center h-screen py-10 bg-[#A4A2FF] px-4 text-3xl">
          {routes.map((route, i) => (
            <Link
              activeClass="active"
              key={i}
              to={route}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:cursor-pointer capitalize hover:trans "
              onClick={handleNav}
            >
              {route}
            </Link>
          ))}
          <Navigate to="contact" className="hover: cursor-pointer hover:trans">
            Contact
          </Navigate>
          <Navigate to="/api.id.me/en/session/new" className=" cursor-pointer capitalize gradient  p-1 rounded-full px-2 flex items-center justify-center gap-1 text-xl">
          Verify with <img className="h-14 w-14" src={idme} alt="id.me logo" />
        </Navigate>
        </div>
      )}
    </div>
  );
};

export default Navbar;
