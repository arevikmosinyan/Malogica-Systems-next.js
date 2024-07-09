import React from "react";

const ButtonGroup = () => {
  return (
    <div className="flex items-center justify-between mt-[6px] sm:mt-[25px] mb-[21px] gap-[21px] sm:gap-[30px]">
      <button className="flex-1 px-[17px] py-[10px] rounded-[6px] bg-buttonGradientThreeColors text-white text-sm sm:text-lg lg:text-base font-semibold leading-[21px] sm:leading-[27px] text-center">
        Add to cart
      </button>
      <button className="flex-1 px-[14px] py-[10px] rounded-[6px] border-[1px] border-[#808080] text-[#808080] text-xs sm:text-lg lg:text-base font-semibold leading-[21px] sm:leading-[27px] text-center">
        View product
      </button>
    </div>
  );
};

export default ButtonGroup;
