import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as Navigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
        scrollBlack ? "bg-black" : "bg-transparent"
      }   lg:text-white lg:px-12 md:px-8 lg:py-2 py-1 fixed top-0 z-30 w-full`}
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
        <Navigate to="contact" className="hover: cursor-pointer">
          Contact
        </Navigate>
      </div>

      {/* for phones */}
      <div
        className={`md:hidden flex items-center justify-between text-white px-4 ${
          nav && "bg-[#CCE0FF]"
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
        <div className="flex flex-col gap-16 items-center h-screen pt-10 bg-[#CCE0FF] px-4 text-3xl">
          {routes.map((route, i) => (
            <Link
              activeClass="active"
              key={i}
              to={route}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:cursor-pointer capitalize"
              onClick={handleNav}
            >
              {route}
            </Link>
          ))}
          <Navigate to="contact" className="hover: cursor-pointer">
            Contact
          </Navigate>
        </div>
      )}
    </div>
  );
};

export default Navbar;
