import styled from "styled-components";
import { TestimonialData } from "../assets/data";
import { Stories } from "../components";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Testimonials = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider === null) {
      return "";
    }
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider === null) {
      return "";
    }
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <div className=" section bg-[#A4A2FF]">
      <div className="text-center">
        <p className="subheading">TESTIMONIALS</p>
        <p className="heading">What People Say</p>
      </div>
      <>
        <Main id="slider" className="w-[100%] py-10">
          <div className="flex items-center gap-x-8 lg:gap-x-10 ">
            {TestimonialData?.map((item, index) => (
              <>
                <Stories item={item} key={index} index={index} />
              </>
            ))}
          </div>
        </Main>

        <div className="flex justify-center pt-7 items-center">
          <div className="flex items-center justify-center gap-4">
            <span onClick={slideLeft}>
              <BsArrowLeftCircle
                size={32}
                className="text-[#7271DA] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              />
            </span>
            <span onClick={slideRight}>
              <BsArrowRightCircle
                size={32}
                className="text-[#7271DA] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              />
            </span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Testimonials;
