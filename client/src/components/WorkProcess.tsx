import { process } from "../assets/data";

const WorkProcess = () => {
  return (
    <div className="section bg-[#12345B]">
      <div className="text-center pb-6">
        <p className="subheading">OUR WORK PROCESS</p>
        <p className="heading text-white">How we work</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 lg:justify-between items-center">
        {process.map((item, index) => (
          <div className="flex flex-col gap-3 text-white relative" key={index}>
            <div className="h-[40px] w-[40px] gradient rounded-full flex items-center justify-center text-white font-bold absolute -top-[15px] -left-[15px]">
              0{index + 1}
            </div>
            <img src={item?.image} alt={item?.title} />
            <p className="font-bold text-[20px]">{item?.title}</p>
            <p className="font-light">{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
