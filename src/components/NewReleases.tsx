import React from "react";
import { newReleases } from "../constants/newreleases";
import FrameNewRealize from "../../public/images/frame-new-realize.png";
import ButtonGroup from "./ButtonGroup";
import Image from "next/image";
import Price from "./Price";

const NewReleases = () => {
  return (
    <div className="mr-[20px] md:mr-[40px] ml-[35px] md:ml-[50px] sm:mt-[-300px] md:mt-[-420px] 2xl:mt-[0px] pl-[15px] 2xl:ml-[100px] relative lg:flex-1 2xl:top-[-50px] min-[1820px]:top-[140px]">
      <Image
        src={FrameNewRealize}
        quality={100}
        alt="frame"
        className="2xl:hidden absolute top-[10px] left-[-40px] min-[510px]:left-[-55px] sm:left-[-70px] md:left-[-60px] lg:left-[-80px] 2xl:left-[-150px] h-full w-full"
      />
      <div className="realtive mt-[-50px] xl:mt-[100px] 2xl:mt-0 xl:ml-[100px] 2xl:ml-0 sm:pl-[20px]">
        {newReleases.map((product) => (
          <div key={product.title} className="flex flex-col gap-4">
            <div className="flex items-start 2xl:items-center justify-between mb-4 gap-[25px]">
              <div className="flex-1 relative">
                <div className="relative w-[94px] sm:w-[217px] 2xl:w-[190] h-[69px] sm:h-[157px] 2xl:h-[137px]">
                  <Image
                    src={product.image}
                    alt="product"
                    fill
                    quality={100}
                    className="absolute z-20"
                  />
                  <div className="bg-[#FFFFFF1A] rounded-[8px] w-[84%] h-[75%] absolute left-[26px] top-[20px] sm:left-[40px] sm:top-[46px]"></div>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-[10px]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <p className="text-sm md:text-base lg:text-xl font-bold leading-[21px] md:leading-[24px] text-left text-white">
                    {product.title}
                  </p>
                  <Price price={product.price} />
                </div>

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
