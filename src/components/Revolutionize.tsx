import React from "react";
import Image from "next/image";
import revolutionizeImage from "../../public/images/revolutionize-image.png";

const Revolutionize = () => {
  return (
    <div className="flex justify-center items-center relative mb-[30px] bg-[url('/images/background-revolutionize-sm.png')] bg-no-repeat md:bg-[url('/images/background-revolutionize-md.png')] lg:bg-[url('/images/background-revolutionize-lg.png')] bg-cover bg-center">
      <Image
        src={revolutionizeImage}
        alt="revolutionize"
        className="object-cover px-[88px] pt-10 pb-4"
      />
      <div className="flex flex-col items-center absolute top-[128px] sm:top-[201px] lg:top-[252px] bg-gradient-to-r from-[#34343408] to-[#FFFFFF08] backdrop-blur-[6px] z-10 rounded-[20px] py-[15px] md:py-[35px] lg:py-[52px] px-[10px] md:px-[46px] lg:px-[97px] mx-5 sm:mx-[77px] xl:mx-[287px]">
        <h1 className="text-xl md:text-[32px] lg:text-6xl leading-[30px] md:leading-[48px] lg:leading-[90px] font-bold text-center mb-4 lg:mb-6">
          <span className="bg-gradient-to-r from-[#5FA4FF] to-[#B974FF] bg-clip-text text-transparent">
            Revolutionize
          </span>{" "}
          <span className="text-white">your computing experience with us</span>
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl leading-[21px] md:leading-[27px] lg:leading-[36px] font-normal text-center text-[#FFFFFFBF] mb-5 md:mb-[34px] lg:mb-[53px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <button className="rounded-[10px] py-[12px] lg:py-[15px] px-[45px] md:px-[63px] lg:px-[73px] text-white text-base text-center font-semibold bg-gradient-to-r from-[#1A86A1] via-[#4245CD] to-[#FF15E5]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Revolutionize;
