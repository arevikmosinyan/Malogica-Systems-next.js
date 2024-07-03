import React from "react";
import Image from "next/image";
import ArrowForwardBlack from "../../public/icons/arrow-forward-black.svg";
import ArrowForwardBlue from "../../public/icons/arrow-forward-blue.svg";
import Link from "next/link";

const CallCenterSection = () => {
  return (
    <div className="mt-[170px] sm:mt-[157px] flex">
      <div className="relative flex-5 grow flex justify-end">
        <Image
          src="/images/call-center-employee-background.png"
          fill
          alt="call center employee background"
          className="object-cover"
        />
        <div className="absoltute z-10 text-right text-white mr-[11px] max-w-[200px] mt-3 sm:mt-[21px]">
          <h1 className="font-bold mb-[10px] text-xs sm:text-xl leading-[18px] sm:leading-[30px]">
            Ask for a quote?
          </h1>
          <p className="font-normal text-xs sm:text-base leading-[18px] sm:leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <Link
            href="/"
            className="text-xs sm:text-sm text-lightBlue leading-[18px] sm:leading-[21px] text-right font-bold flex items-center justify-end gap-2 my-[7px]"
          >
            CLICK HERE
            <ArrowForwardBlue />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 bg-red-500 w-[112px] h-[157px] sm:w-[265px] sm:h-[201px] ">
          <Image
            src="/images/call-center-employee.png"
            fill
            alt="call Center Employee"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 grow-0 bg-white rounded-r-[10px] mr-5 sm:pl-[74px]">
        <div className="flex flex-col pl-2 items-end mr-[10px] my-[15px] h-[85%] justify-between">
          <Link href="/">
            <ArrowForwardBlack />
          </Link>
          <p className="text-xs sm:text-base leading-[24px] font-bold text-right">
            BLOGS
          </p>
        </div>
      </div>
    </div>

    // <div className="mt-[170px] relative">
    //   <div className="flex mr-5 max-h-[143px] ">
    //     <Image
    //       src={callCenterEmployeeBackground}
    //       // width={288}
    //       //height={143}
    //       alt="call center employee background"
    //       className="object-cover flex-4 grow"
    //     />

    //     <div className="flex-1 bg-white rounded-r-[10px]">
    //       <div className="flex flex-col grow-0 pl-2 items-end mr-[10px] my-[15px] h-[85%] justify-between">
    //         <Link href="/">
    //           <ArrowForwardBlack />
    //         </Link>

    //         <p className="text-xs font-bold text-right">BLOGS</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute bottom-0">
    //     <Image
    //       src={callCenterEmployee}
    //       alt="call Center Employee"
    //       className="object-cover"
    //     />
    //   </div>
    //    <div className="absolute bottom-[31px] right-[78px] text-xs text-right text-white mr-[11px] max-w-[200px]">
    //     <h1 className="font-bold mb-[10px]">Ask for a quote?</h1>
    //     <p className="font-normal leading-[18px]">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    //       vulputate libero et velit interdum, ac aliquet odio mattis.
    //     </p>

    //     <Link
    //       href="/"
    //       className="text-xs text-lightBlue leading-[18px] text-right font-bold flex items-center justify-end gap-2 mt-[6px]"
    //     >
    //       CLICK HERE
    //       <ArrowForwardBlue />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default CallCenterSection;
