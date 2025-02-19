import { useState } from "react";
import buy from "../assets/buy.svg";
import close from "../assets/close.svg";

const Menu: React.FC = () => {
  const [menuExpand, setMenuExpand] = useState(false);
  const className = menuExpand
    ? "w-[70%] sm:w-[50%] xl:w-[30%] h-full px-4 flex-col py-4"
    : "w-full h-16 items-center justify-end pr-7";

  const [imageSrc, setImageSrc] = useState(true);
  const imageIsTrueOrNot = imageSrc ? buy : close;

  return (
    <div className="w-full h-full flex justify-end ">
      <div
        className={`${className} bg-whiteClean fixed z-[2] flex transition-all duration-500`}
      >
        <img
          onClick={() => {
            setMenuExpand(!menuExpand);
            setImageSrc(!imageSrc);
          }}
          className="cursor-pointer hover:w-11 h-auto transition-all"
          width={40}
          src={imageIsTrueOrNot}
          alt=""
        />
      </div>
    </div>
  );
};

export default Menu;
