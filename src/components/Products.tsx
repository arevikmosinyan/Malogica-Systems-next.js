import React from "react";
import Image from "next/image";
import ButtonGroup from "./ButtonGroup";
import Price from "./Price";

const Products = () => {
  return (
    <>
      <div className="mt-[130px] xl:mt-[65px] relative lg:flex-1 2xl:top-[-20px] min-[1820px]:top-[95px] 2xl:left-[-45px] min-[1820px]:left-[-100px]">
        <Image
          src="/images/frame-most-popular.png"
          layout="responsive"
          width={425}
          height={412}
          alt="frame"
          className="2xl:hidden"
        />
        <div className="flex items-center justify-center">
          <div className="mx-[57px] 2xl:mx-0 mt-[70px] min-[500px]:mt-0 flex flex-col rounded-[20px] bg-lightGray px-[10px] 2xl:px-[50px] gap-[10px] sm:gap-4 pt-[115px] lg:pt-[324px] relative bottom-[360px] min-[410px]:bottom-[400px] sm:bottom-[560px] md:bottom-[640px] lg:bottom-[870px] xl:bottom-[1100px] 2xl:bottom-0 z-30 max-w-[450px] md:max-w-[582px]">
            <div className="flex flex-col gap-4 2xl:flex-row 2xl:items-center">
              <h1 className="text-base sm:text-xl font-semibold leading-6 text-left text-white sm:mt-12 lg:mt-[52px] 2xl:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <Price />
            </div>

            <p className="text-xs sm:text-sm font-normal leading-[18px] sm:leading-[21px] text-left text-[#FFFFFFBF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <ButtonGroup />
            <div className="w-[162px] h-[165px] sm:w-[260px] sm:h-[236px] lg:w-[363px] lg:h-[371px] 2xl:w-[375px] 2xl:h-[357px] absolute z-20 top-[-58px] sm:top-[-100px] 2xl:left-[-30px] 2xl:top-[-128px]">
              <Image
                src="/images/most-popular.png"
                fill
                alt="most popular"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
