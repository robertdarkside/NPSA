import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="section bg-[#A4A2FF]">
      <div className="section gradient flex flex-col gap-6 lg:flex-row items-center justify-between min-h-[45vh] rounded text-white">
        <p className="flex-1 text-[30px] font-bold">Empower your peace of mind—contact the National Protection and Security Agency (NPSA) today</p>
        <div className="flex flex-col gap-4 flex-1 justify-end items-end">
          <p> Our dedicated team is ready to tailor strategic solutions to your unique security needs, ensuring a vigilant and resilient defense for you and your community.</p>
          <Link to={"/contact"} className="px-6 py-2 rounded bg-black bg-opacity-75 hover:trans cursor-pointer font-semibold">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
