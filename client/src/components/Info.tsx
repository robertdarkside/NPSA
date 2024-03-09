import { infoData } from "../assets/data";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-center gap-8">
      {infoData.map((item, index) => (
        <div className="flex flex-col gap-4 md:max-w-[350px]" key={index}>
          <p className="font-bold text-[#12345B] text-[24px]">{item?.title}</p>
          <p className="font-light">{item?.description}</p>
          <div className="flex flex-col gap-2">
            {item?.list.map((li, i) => (
              <div key={i} className="flex gap-3 items-center">
                <span className="h-2 w-2 gradient rounded-full" />
                <p>{li}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
