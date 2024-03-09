import features from "../assets/features.svg";
import { features as data } from "../assets/data";

const Features = () => {
  return (
    <div
      className="lg:min-h-screen section bg-[#A4A2FF] flex flex-col gap-10"
      id="features"
    >
      <>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-3 w-full lg:max-w-[400px]">
            <p className="subheading">Features</p>
            <p className="heading">Empowering National Security: Key Features That Define the NPSA</p>
            
            
          </div>
          <img src={features} alt="features picture" />
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-white rounded-md p-7 w-full"
              >
                <div className="h-[64px] w-[64px] flex items-center justify-center gradient">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <p className="font-extrabold text-[#7270DD]">{item?.title}</p>
                <p>{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Features;
