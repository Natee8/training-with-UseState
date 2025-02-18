import React from "react";

interface priceProps {
  price: string | number;
}

const Price: React.FC<priceProps> = ({ price }) => {
  return (
    <div className="bg-yellowSecondary p-4 w-[320px] text-center font-bold rounded-r-full">
      <p>{price}</p>
    </div>
  );
};
export default Price;
