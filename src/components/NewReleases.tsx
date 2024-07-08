import React from "react";
import { newReleases } from "../constants/newreleases";
import FrameNewRealize from "../../public/images/frame-new-realize.png";
import ButtonGroup from "./ButtonGroup";
import Image from "next/image";
import Price from "./Price";

const NewReleases = () => {
  return (
    <div className="mr-[20px] md:mr-[40px] ml-[35px] md:ml-[50px] pl-[15px] xl:ml-[100px] xl:mb-[100px] relative lg:flex-1">
      <Image
        src={FrameNewRealize}
        quality={100}
        alt="frame"
        className="xl:hidden absolute top-[10px] left-[-40px] min-[510px]:left-[-55px] sm:left-[-70px] md:left-[-100px] lg:left-[-120px] xl:left-[-150px] h-full w-full"
      />
      <div className="realtive bottom-[300px]">
        {newReleases.map((product) => (
          <div key={product.title} className="flex flex-col gap-4">
            <div className="flex items-start justify-between mb-4 gap-[25px]">
              <div className="flex-1 relative">
                <div className="relative w-[94px] sm:w-[217px] h-[69px] sm:h-[157px]">
                  <Image
                    src={product.image}
                    alt="product"
                    fill
                    quality={100}
                    className="absolute z-20"
                  />
                  <div className="bg-[#FFFFFF1A] rounded-[8px] w-[94%] h-[85%] absolute left-[26px] top-[20px] sm:left-[40px] sm:top-[46px]"></div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-[10px]">
                <p className="text-sm md:text-base lg:text-xl font-bold leading-[21px] md:leading-[24px] text-left text-white lg:mt-10">
                  {product.title}
                </p>
                <Price price={product.price} />
                <p className="text-sm md:text-sm lg:text-base font-normal leading-[15px] md:leading-[18px] text-left text-[#FFFFFF80]">
                  {product.description}
                </p>
                <div className="hidden md:block">
                  <ButtonGroup />
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <ButtonGroup />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
