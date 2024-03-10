import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import moment from "moment";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoHome } from "react-icons/io5";

interface Source {
  name: string;
  url: string;
}

interface Article {
  title: string;
  description: string;
  image: string;
  content: string;
  publishedAt: string;
  url: string;
  source: Source;
}

const Blog = () => {
  const [posts, setPosts] = useState<Article[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const response = await axios.get("https://gnews.io/api/v4/search", {
          params: {
            q: "security",
            sortBy: "relevance",
            in: "title",
            apikey: "3bf9d68f84f5f0678abf45b6fbe8bdf0",
          },
        });
        setPosts(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
  }, []);

  if (isLoading)
    return (
      <div className="w-full min-h-screen flex  items-center justify-center p-8">
        <TbFidgetSpinner className="animate-spin text-6xl text-[#494AC7]" />
      </div>
    );

  return (
    <div className="">
      <div className="gradient min-h-[50vh] text-white flex flex-col items-center justify-center relative">
      <Link to={"/"} className="flex items-start justify-start p-4 absolute top-0 left-0 cursor-pointer">
        <IoHome className=" text-3xl" />
        </Link>
        <p className="h-super">Blog News</p>        
    </div>
      <div className="section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
          {posts?.map((item, index) => (
            <a
              href={item.url}
              rel="noopener noreferrer"
              key={index}
              className="border-[1px] border-black hover:cursor-pointer  w-fit h-fit lg:hover:trans"
            >
              <img
                src={item?.image}
                alt={item?.title}
                className="w-full md:h-[250px]"
              />
              <div className="p-5 flex flex-col gap-3 bg-white hover:bg-[#494AC7] hover:text-white">
                <p className="font-[700]">{item?.title}</p>
                <p>{item?.description}</p>

                <div className="flex items-center justify-between font-bold">
                  <p>{moment(item?.publishedAt).format("Do MMM, YYYY")}</p>
                  <p>Read More</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
