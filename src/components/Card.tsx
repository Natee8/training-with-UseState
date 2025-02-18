import { useState } from "react";
import Price from "../utils/Price";
import CardBack from "./CardBack";

interface propsCards {
  image: string;
  price: string;
  name: string;
  description: string;
  inventory: number;
}

const Card: React.FC<propsCards> = ({
  image,
  price,
  name,
  inventory,
  description,
}) => {
  const [expand, setExpand] = useState(false);
  const isExpanded = expand
    ? "w-[700px] sm:w-[500px] h-min-[450px] flex-col px-10 gap-8 py-10"
    : "w-[300px] h-[270px] hover:w-[360px] hover:h-[300px] ";

  const [expandImg, setExpandImg] = useState(false);
  const isExpandedImg = expandImg ? "90" : "150";

  const [visible, setVisible] = useState(false);
  const isVisible = visible ? "flex" : "hidden";

  return (
    <div className="flex flex-col items-center gap-8 ">
      <div
        className={` ${isExpanded} flex items-center justify-center bg-yellowSecondary rounded-tl-[100px] rounded-br-[100px] transition-all duration-500`}
      >
        <img
          onClick={() => {
            setExpand(!expand);
            setExpandImg(!expandImg);
            setVisible(!visible);
          }}
          className="transition-all duration-1000 cursor-pointer"
          width={isExpandedImg}
          src={image}
          alt={name}
        />
        <CardBack
          descriptionCard={description}
          inventoryNumber={inventory}
          name={name}
          isVisible={isVisible}
        />
      </div>
      <div>
        <Price price={price} />
      </div>
    </div>
  );
};

export default Card;
