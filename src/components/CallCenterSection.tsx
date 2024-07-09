import React from "react";
import Image from "next/image";
import ArrowForwardBlack from "../../public/icons/arrow-forward-black.svg";
import ArrowForwardBlue from "../../public/icons/arrow-forward-blue.svg";
import Link from "next/link";

const CallCenterSection = () => {
  return (
    <div className="mt-[170px] sm:mt-[157px] md:mt-[270px] lg:mt-[440px] xl:mt-[553px] 2xl:mt-[440px] flex mr-5 sm:mr-10 xl:mr-0">
      <div className="relative flex-5 grow flex justify-end">
        <Image
          src="/images/call-center-employee-background.png"
          fill
          alt="call center employee background"
          className="object-cover"
        />
        <div className="absoltute z-10 text-right text-white mr-[11px] md:mr-[54px] xl:mr-[25px] 2xl:mr-[46px] max-w-[200px] sm:max-w-[265px] md:max-w-[325px] lg:max-w-[280px] mt-3 sm:mt-[21px] lg:mt-[46px]">
          <h1 className="font-bold mb-[10px] md:mb-[21px] text-xs sm:text-xl lg:text-2xl leading-[18px] sm:leading-[30px] lg-leading-[36px]">
            Ask for a quote?
          </h1>
          <p className="font-normal text-xs sm:text-base lg:text-base leading-[18px] sm:leading-[24px] opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <Link
            href="/"
            className="text-xs sm:text-sm text-lightBlue leading-[18px] sm:leading-[21px] text-right font-bold flex items-center justify-end gap-2 my-[7px] sm:my-[21px]"
          >
            CLICK HERE
            <ArrowForwardBlue />
          </Link>
        </div>

        {/* <div className="absolute bottom-0 left-0 w-[112px] h-[157px] sm:w-[265px] sm:h-[240px] md:w-[240px] lg:w-[254px] lg:h-[287px] xl:h-[450px] 2xl:h-[334px] lg:ml-[49px]"> */}
        <div className="absolute bottom-0 left-0 w-[112px] h-[157px] sm:w-[265px] sm:h-[240px] md:w-[240px] lg:w-[254px] lg:h-[287px] xl:w-[320px] xl:h-[420px] min-[1324px]:h-[368px] min:[1324px]:w-[279px] 2xl:h-[334px] 2xl:w-[254px] lg:ml-[49px] xl:ml-[7px] min-[1324px]:ml-[49px]">
          <Image
            src="/images/call-center-employee.png"
            fill
            alt="call Center Employee"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 grow-0 bg-white rounded-r-[10px] sm:pl-[74px] lg:my-[26px] xl:relative">
        <div className="flex flex-col pl-2 items-end mr-[10px] my-[15px] h-[85%] justify-between">
          <Link href="/">
            <ArrowForwardBlack />
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-base leading-[24px] font-bold text-right"
          >
            BLOGS
          </Link>
        </div>
      </div>

      {/* <div className="flex flex-2"> browser-um @ndunum e, code-mej che flex -2*/}
      <div className="hidden xl:flex xl:max-w-[48%] 2xl:max-w-[55%]">
        <div className="bg-[#00000033] lg:my-[26px] ml-[-35px] pr-[54px] pl-[66px] py-[55px] xl:py-10 min-[1324px]:py-[55px] border-r-[1px] border-[#FFFFFF80]">
          <h1 className="text-white text-xl font-bold leading-[30px] text-left mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </h1>
          <p className="text-white text-sm font-normal leading-[21px] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="bg-[#00000033] lg:my-[26px] pr-[54px] pl-[66px] py-[55px] border-r-[1px] border-[#FFFFFF80]">
          <h1 className="text-white text-xl font-bold leading-[30px] text-left mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </h1>
          <p className="text-white text-sm font-normal leading-[21px] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallCenterSection;
//1280-1535---xl-2xl**** height: 368px;*****width: 279px******margin-left: 46px;
//1280--1324
//margin-left-----7px  //absolute bottom-0 left-0 w-[112px] h-[157px] sm:w-[265px] sm:h-[240px] md:w-[240px] lg:w-[254px] lg:h-[287px] xl:h-[368px] xl:w-[279px] 2xl:h-[334px] 2xl:w-[254px] lg:ml-[49px]
//margin-right-----25px//absoltute z-10 text-right text-white mr-[11px] md:mr-[54px] xl:mr-[46px] max-w-[200px] sm:max-w-[265px] md:max-w-[325px] lg:max-w-[280px] mt-3 sm:mt-[21px] lg:mt-[46px]
//padding y------40px//bg-[#00000033] lg:my-[26px] ml-[-35px] pr-[54px] pl-[66px] py-[55px] border-r-[1px] border-[#FFFFFF80]
