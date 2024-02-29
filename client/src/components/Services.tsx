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
            <p className="heading">Effective Services</p>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Services;
