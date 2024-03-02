import { useEffect, useState } from "react";
import { AiOutlineRightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { TbFidgetSpinner } from "react-icons/tb";
import moment from "moment";

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

const BlogNews = () => {
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
    <div className="section bg-[#A4A2FF] lg:min-h-screen" id="blog">
      <div className="flex flex-col gap-3 lg:flex-row justify-between lg:items-end">
        <div>
          <p className="subheading">BLOG & NEWS</p>
          <p className="heading">Latest Articles</p>
        </div>
        <Link
          to={"/blog"}
          className="flex items-center gap-2 hover:trans hover:text-white"
        >
          <AiOutlineRightCircle className=" text-3xl text-[#7270DD]" />
          <p>View all articles</p>
        </Link>
      </div>
      <div className="pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
          {posts?.slice(0, 3).map((item, index) => (
            <a
              href={item.url}
              rel="noopener noreferrer"
              key={index}
              className="border-[1px] border-black hover:cursor-pointer lg:hover:trans"
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
    </div>
  );
};

export default BlogNews;
