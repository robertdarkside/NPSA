import { Info } from ".";
import serviceImg from "../assets/service-bg.svg";

const Services = () => {
  return (
    <div className="section flex flex-col gap-20" id="services">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
        <div className="flex-1 flex items-center justify-center lg:order-1 order-2">
          <img
            src={serviceImg}
            alt="service image"
            className="lg:w-[500px] lg:h-[500px]"
          />
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <div className="flex flex-col gap-3 lg:max-w-[450px]">
            <p className="subheading">SERVICE</p>
            <p className="heading">NPSA Services</p>
            <p>
              The National Protection and Security Agency (NPSA) offers a range of effective services designed to safeguard the nation against various security threats. These services reflect the agency's commitment to excellence, innovation, and proactive measures to ensure the safety and security of its citizens. Below are some key effective services provided by the NPSA:
            </p>
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Services;
