import React from "react";
import { newReleases } from "../constants/newreleases";
import ButtonGroup from "./ButtonGroup";
import Image from "next/image";
import Price from "./Price";

const NewReleases = () => {
  return (
    <div className="mt-[53px] mr-[20px] ml-[35px]">
      {newReleases.map((product) => (
        <div key={product.title} className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 relative">
              <Image
                src={product.image}
                alt="product"
                width={100}
                height={100}
                className="absolute z-20"
                // fill
              />

              <div className="bg-[#FFFFFF1A] rounded-[8px] w-[88px] h-[72px] absolute left-[18px] top-[13px]"></div>
            </div>

            <div className="flex flex-col flex-1  gap-[10px]">
              <p className="text-sm font-bold leading-[21px] text-left text-white">
                {product.title}
              </p>
              <Price price={product.price} />
              <p className="text-sm font-normal leading-[15px] text-left text-[#FFFFFF80]">
                {product.description}
              </p>
            </div>
          </div>
          <ButtonGroup />
        </div>
      ))}
    </div>
  );
};

export default NewReleases;
