import React from "react";
import { team } from "../assets/data";

const Team = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const choiceSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="section">
      <p className="subheading">OUR TEAM</p>
      <p className="heading">Professional Team</p>
      <div className="flex flex-col items-center justify-center gap-7 w-full h-full py-8">
        {/* for mobile devices */}
        <div className="lg:hidden flex items-center justify-between">
          <>
            {team.map((item, index) => (
              <div>
                {currentSlide === index && (
                  <div key={index}>
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-full"
                    />
                    <p className="text-[#12345B] font-bold">{item?.name}</p>
                    <p className=" text-[#12345B] font-light">{item?.title}</p>
                  </div>
                )}
              </div>
            ))}
          </>
        </div>
        {/* for tabs and pcs */}
        <div className="hidden lg:flex items-start justify-between gap-4 w-full">
          <>
            {team.map((item, index) => (
              <div>
                <div key={index} className="flex items-center gap-3">
                  <div className="flex flex-col gap-2">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-full"
                    />
                    <p className="text-[#12345B] font-bold">{item?.name}</p>
                    <p className="text-[#12345B] font-light">{item?.title}</p>
                  </div>
                  {/*  */}
                </div>
              </div>
            ))}
          </>
        </div>
        <div className="flex lg:hidden items-center gap-4 justify-center">
          {team?.map((item, index) => (
            <div className="flex items-center justify-center gap-4">
              <span
                className={`${
                  currentSlide === index ? " bg-[#7271DA]" : " bg-[#C0CAE7]"
                } rounded-full border-[#101E1C] border cursor-pointer h-[15px] w-[15px] text-transparent`}
                onClick={() => choiceSlide(index)}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

{
  /* <div key={index}>
  {currentSlide === index && (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
        <div className="text-black md:max-w-[500px]"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:justify-between pt-7">
          <div className="flex items-center md:justify-start justify-center gap-2">
            <span
              className={`${
                currentSlide === 0
                  ? "h-[10px] w-[10px] bg-black"
                  : "h-[10px] w-[10px]"
              } rounded-full border-[#101E1C] border cursor-pointer`}
              onClick={() => setCurrentSlide(0)}
            />
            <span
              className={`${
                currentSlide === 1
                  ? "h-[10px] w-[10px] bg-black"
                  : "h-[10px] w-[10px]"
              } rounded-full border-[#101E1C] border cursor-pointer`}
              onClick={() => setCurrentSlide(1)}
            />
            <span
              className={`${
                currentSlide === 2
                  ? "h-[10px] w-[10px] bg-black"
                  : "h-[10px] w-[10px]"
              } rounded-full border-[#101E1C]  border cursor-pointer `}
              onClick={() => setCurrentSlide(2)}
            />
            <span
              className={`${
                currentSlide === 3
                  ? "h-[10px] w-[10px] bg-black"
                  : "h-[10px] w-[10px]"
              } rounded-full border-[#101E1C] border cursor-pointer `}
              onClick={() => setCurrentSlide(3)}
            />
            <span
              className={`${
                currentSlide === 4
                  ? "h-[10px] w-[10px] bg-black"
                  : "h-[10px] w-[10px]"
              } rounded-full border-[#101E1C] border cursor-pointer `}
              onClick={() => setCurrentSlide(4)}
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <div
              className="rounded-full bg-white hover:bg-[#3D42B0] text-[#3D42B0] hover:text-white p-4 cursor-pointer "
              onClick={prevSlide}
            >
              <AiOutlineArrowLeft className="font-bold" />
            </div>
            <div
              className="rounded-full bg-white hover:bg-[#3D42B0] text-[#3D42B0] hover:text-white p-4 cursor-pointer"
              onClick={nextSlide}
            >
              <AiOutlineArrowRight className="font-bold" />
            </div>
          </div>
        </div>
      </div>
    </>
  )}
</div>; */
}
