import { Link } from "react-router-dom";
import { contact } from "../assets/data";
import { Footer } from "../components";
import { useEffect } from "react";
import { IoHome } from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (e: any) => {
    e.prevent.Default;
  };

  return (
    <>
      <div className="gradient min-h-[50vh] text-white flex flex-col items-center justify-center relative">
      <Link to={"/"} className="flex items-start justify-start p-4 absolute top-0 left-0 cursor-pointer">
        <IoHome className=" text-3xl" />
        </Link>
        <p className="h-super">Contact Us</p>        
    </div>
      <div className="section flex flex-col gap-10">
        <div>
          <p className="h1 text-center py-10">Get In Touch With Us!</p>
          <div className="flex justify-between flex-col lg:flex-row gap-5">
            {contact.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 items-center justify-center"
              >
                <div className="border-[1px] rounded-full p-2 flex items-center w-fit">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <p className="font-bold text-xl">{item.title}</p>
                <p className="lg:w-[250px] text-center">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-[1px]">
          <div className="flex flex-col gap-6 justify-center items-center pt-16">
            <p className="h1">Send Us A Message</p>
            <form
              className="md:w-[670px] flex flex-col gap-3 w-full"
              onSubmit={onSubmit}
            >
              <div className="flex flex-col md:flex-row gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-[14px]">
                    First Name
                  </label>
                  <input
                    className="md:w-[320px] rounded-md h-[40px]  border-black border-[0.5px] border-solid text-[black] w-full focus:outline-none pl-4"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-[14px]">Last Name</label>
                  <input
                    className="md:w-[320px] rounded-md h-[40px]  border-black border-[0.5px] border-solid text-[black] w-full focus:outline-none pl-4"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[14px]">
                  Email Address
                </label>
                <input
                  className="rounded-md h-[40px]  border-black border-[0.5px] border-solid text-[black] w-full focus:outline-none pl-4"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-[14px]">Subject</label>
                <input
                  className="rounded-md h-[40px]  border-black border-[0.5px] border-solid text-[black] w-full focus:outline-none pl-4"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label className="font-semibold text-[14px] ">Message</label>
                <textarea className="rounded-md  border-black border-[0.5px] border-solid text-[black] w-full focus:outline-none p-4 h-[200px]"></textarea>
              </div>
              <div className="flex items-center justify-center py-4">
                <button
                  className="px-6 py-2 gradient rounded-md text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
