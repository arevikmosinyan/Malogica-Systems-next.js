"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperData } from "../constants/swiperdata";
import ArrowForwardIcon from "../../../public/icons/arrow-forward-icon.svg";
import ArrowBackIcon from "../../../public/icons/arrow-back-icon.svg";

const OurUniqueSellingPrepositions = () => {
  const [swiperControll, setSwiperControll] = useState(null);
  const [swiperControllSecond, setSwiperControllSecond] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);

  return (
    <div className="text-white px-5">
      <div className="pb-5">
        <h1 className="text-xl font-bold text-center pb-4">
          Our UniqueSellingPrepositions
        </h1>
        <p className="text-sm font-normal text-center text-[#FFFFFFBF]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className="felx flex-col gap-5 items-center">
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperControll(swiper)}
          onSlideChange={() => setActiveIndex(swiperControll?.activeIndex)}
          modules={[Controller]}
          loop={true}
          controller={{ control: swiperControllSecond }}
        >
          {swiperData.map((singleSwiperData, index) => (
            <SwiperSlide key={index} className="px-[10px]">
              <div className="flex flex-col gap-[10px] items-center rounded-[14px] py-[23px] bg-darkGray">
                <h1 className="text-2xl font-bold text-left bg-gradient-to-r from-[#5FA4FF] to-[#B974FF] bg-clip-text text-transparent">
                  {singleSwiperData.title}
                </h1>
                <p className="text-sm font-normal text-center px-5">
                  {singleSwiperData.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-[22px] mt-5 mb-10">
          <button
            onClick={() => swiperControll?.slidePrev()}
            className="rounded-[50%] bg-darkGray w-[42px] h-[42px] flex justify-center items-center"
          >
            <ArrowBackIcon className="opacity-50" />
          </button>
          <button
            onClick={() => swiperControll?.slideNext()}
            className="rounded-[50%] bg-darkGray w-[42px] h-[42px] flex justify-center items-center"
          >
            <ArrowForwardIcon className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurUniqueSellingPrepositions;
