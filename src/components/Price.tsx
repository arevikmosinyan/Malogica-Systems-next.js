import React from "react";

const Price = ({ price = 399.99 }) => {
  return (
    <div className="text-sm sm:text-base font-bold leading-[21px] text-right bg-[#FFFFFF0D] rounded-md text-white px-[13px] py-2 max-w-[88px]">
      {price}
    </div>
  );
};

export default Price;
