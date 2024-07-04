import React from "react";

const ButtonGroup = () => {
  return (
    <div className="flex items-center justify-between mt-[6px] mb-[21px] gap-[21px]">
      <button className="flex-1 px-[17px] py-[9px] rounded-[6px] bg-gradient-to-r from-[#1A86A1] via-[#4245CD] to-[#FF15E5] text-white text-sm font-semibold leading-[21px] text-center">
        Add to cart
      </button>
      <button className="flex-1 px-[14px] py-[9px] rounded-[6px] border-[1px] border-[#808080] text-[#808080] text-xs font-semibold leading-[21px] text-center">
        View product
      </button>
    </div>
  );
};

export default ButtonGroup;
