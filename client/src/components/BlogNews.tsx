import { AiOutlineRightCircle } from "react-icons/ai";
import { articles } from "../assets/data";

const BlogNews = () => {
  return (
    <div className="section bg-[#A4A2FF] lg:min-h-screen" id="blog">
      <div className="flex flex-col gap-3 lg:flex-row justify-between lg:items-end">
        <div>
          <p className="subheading">BLOG & NEWS</p>
          <p className="heading">Latest Articles</p>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineRightCircle className="hover:trans text-3xl text-[#7270DD]" />
          <p>View all articles</p>
        </div>
      </div>
      <div className="pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
          {articles.map((item, index) => (
            <div key={index}>
              <img src={item?.image} alt={item?.title} className="w-full" />
              <div className="p-5 flex flex-col gap-3 bg-white">
                <p className="font-[700]">{item?.title}</p>
                <p>{item?.desc}</p>
                <p>{item?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
