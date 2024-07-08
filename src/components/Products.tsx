import React from "react";
import Image from "next/image";
import ButtonGroup from "./ButtonGroup";
import Price from "./Price";

const Products = () => {
  return (
    <>
      <div className="mt-[130px] relative lg:flex-1">
        <Image
          src="/images/frame-most-popular.png"
          layout="responsive"
          width={425}
          height={412}
          alt="frame"
          className="xl:hidden"
        />
        <div className="flex items-center justify-center">
          <div className="mx-[57px] xl:mx-0 mt-[70px] min-[500px]:mt-0 flex flex-col rounded-[20px] bg-lightGray px-[10px] xl:px-[50px] gap-[10px] sm:gap-4 pt-[115px] lg:pt-[324px] relative bottom-[360px] min-[410px]:bottom-[400px] sm:bottom-[560px] md:bottom-[640px] lg:bottom-[870px] xl:bottom-0 z-30 max-w-[450px] md:max-w-[582px]">
            <h1 className="text-base sm:text-xl font-semibold leading-6 text-left text-white sm:mt-12 lg:mt-[52px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <Price />
            <p className="text-xs sm:text-sm font-normal leading-[18px] sm:leading-[21px] text-left text-[#FFFFFFBF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <ButtonGroup />
            <div className="w-[162px] h-[165px] sm:w-[260px] sm:h-[236px] lg:w-[363px] lg:h-[371px] xl:w-[470px] xl:h-[480px] absolute z-20 top-[-58px] sm:top-[-100px] xl:left-[-55px] xl:top-[-170px]">
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
