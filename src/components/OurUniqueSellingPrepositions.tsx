"use client";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperData } from "../constants/swiperdata";
import ArrowForwardIcon from "../../public/icons/arrow-forward-icon.svg";
import ArrowBackIcon from "../../public/icons/arrow-back-icon.svg";
import "../app/globals.css";
import { cn } from "@/utils/helpers";

const OurUniqueSellingPrepositions = () => {
  const [swiperControll, setSwiperControll] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-white px-5 sm:px-9 md:px-24 lg:px-0 mt-[60px]">
      <div className="pb-5 sm:pb-12 lg:pb-[52px] md:px-[123px] 2xl:px-[383px]">
        <h1 className="text-xl sm:text-[32px] lg:text-6xl leading-[90px] font-bold text-center sm:pb-5 lg:pb-6">
          Our Unique Selling Prepositions
        </h1>
        <p className="text-sm sm:text-lg lg:text-2xl font-normal text-center text-[#FFFFFFBF] px-3 sm:px-[30px] lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className="">
        <Swiper
          slidesPerView={1}
          autoHeight={true}
          breakpoints={{
            1024: {
              slidesPerView: 1.7,
              centeredSlides: true,
            },
          }}
          onSwiper={(swiper) => setSwiperControll(swiper)} //swiper instance@ pahum enq state-um, vor heto ira het ashxatenq, orinak button-i vra click anelis swiper instance-i vrayic kanchenq slidePrev()
          onSlideChange={() => setActiveIndex(swiperControll?.activeIndex ?? 0)}
        >
          {swiperData.map((singleSwiperData, index) => (
            <SwiperSlide key={singleSwiperData.title}>
              <div
                className={cn(
                  "flex flex-col gap-[10px] items-center rounded-[14px] py-[23px] sm:py-14 sm:px-[52px] lg:py-[84px] lg:px-[100px] bg-darkGray",
                  index !== activeIndex ? "opacity-30 " : ""
                )}
              >
                <h1 className="text-2xl sm:text-[34px] lg:text-4xl font-bold text-center bg-gradient-to-r from-[#5FA4FF] to-[#B974FF] bg-clip-text text-transparent">
                  {singleSwiperData.title}
                </h1>
                <p className="text-sm sm:text-lg font-normal text-center px-5">
                  {singleSwiperData.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-[22px] mt-5 sm:mt-8 lg:mt-11 mb-10">
          <button
            onClick={() => swiperControll?.slidePrev()}
            className="rounded-[50%] bg-darkGray w-[42px] h-[42px] flex justify-center items-center text-[#FFFFFF80] hover:text-white"
          >
            <ArrowBackIcon />
          </button>
          <button
            onClick={() => swiperControll?.slideNext()}
            className="rounded-[50%] bg-darkGray w-[42px] h-[42px] flex justify-center items-center text-[#FFFFFF80] hover:text-white"
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurUniqueSellingPrepositions;
