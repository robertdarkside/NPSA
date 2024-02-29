import { AiFillStar } from "react-icons/ai";

interface IconRendererProps {
  numberOfIcons: number;
}

const IconRenderer: React.FC<IconRendererProps> = ({ numberOfIcons }) => {
  return (
    <div className="flex">
      {Array.from({ length: numberOfIcons }, (_, index) => (
        <AiFillStar key={index} className="text-[#F5A647]" />
      ))}
    </div>
  );
};

interface Prop {
  index: number;
  item: {
    id: number;
    name: string;
    displayPicture: string;
    story: string;
    stars: number;
  };
}

const Stories = ({ item, index }: Prop) => {
  const { name, story, stars } = item;

  return (
    <div
      className="rounded-3xl p-6 flex flex-col gap-4 min-w-[300px] min-h-[250px] shadow-xl relative bg-white hover:bg-[#7270DD] hover:text-white transition duration-300 ease-in-out  cursor-pointer"
      key={index}
    >
      <div>
        <IconRenderer numberOfIcons={stars} />
      </div>
      <p>"{story}"</p>
      <div className="flex gap-3 items-center absolute bottom-3">
        <p className="h4">{name}</p>
      </div>
    </div>
  );
};

export default Stories;
