import React from "react";
import Image from "next/image";
import Frame from "../../public/icons/frameFinal.svg";
import TopFrameSm from "../../public/icons/product-top-frame-sm.svg";
import LeftFrameSm from "../../public/icons/product-left-frame-sm.svg";
import RightFrameSm from "../../public/icons/product-right-frame-sm.svg";

import mostPopular from "../../public/images/most-popular.png";
import ButtonGroup from "./ButtonGroup";
import NewReleases from "./NewReleases";
import Price from "./Price";

const Products = () => {
  return (
    <>
      <div className="mt-[130px] relative">
        {/* <TopFrameSm className="mx-auto mb-[70px]" /> */}

        {/* <p className="-rotate-90 text-[#808080] absolute bottom-[318px] left-[-34px]">
        MOST POPULAR
      </p> */}
        {/* <LeftFrameSm className="absolute top-[184px] left-0" />
      <RightFrameSm className="absolute top-[15px] right-0" /> */}
        <Frame className="absolute top-[-80px] left-0" />
        <div className="flex flex-col rounded-[20px] bg-lightGray px-[10px] gap-[10px] mx-[57px] pt-[115px] relative mt-[70px] max-w-[450px]">
          <h1 className="text-base font-semibold leading-6 text-left text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <Price />
          {/* <div className="text-sm font-bold leading-[21px] text-right bg-[#FFFFFF0D] rounded-md text-white px-[13px] py-2 max-w-[88px]">
            $499.99
          </div> */}
          <p className="text-xs font-normal leading-[18px] text-left text-[#FFFFFFBF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <ButtonGroup />
          <Image
            src={mostPopular}
            alt="most popular"
            className="absolute z-20 top-[-58px] left-0"
          />
        </div>
      </div>
      <NewReleases />
    </>
  );
};

export default Products;
