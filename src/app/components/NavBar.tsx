"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navbarLinksNames } from "../constants/layoutconstants";
import MenuIcon from "../../../public/icons/menu.svg";
import CloseIcon from "../../../public/icons/close-icon.svg";
import Logo from "../../../public/icons/logo.svg";
import TelephoneIcon from "../../../public/icons/telephone-icon.svg";
import ShoppingIcon from "../../../public/icons/shopping-cart-icon.svg";
import SearchIcon from "../../../public/icons/search-icon.svg";
import PurpuleCircleIcon from "../../../public/icons/purpule-circle-icon.svg";
import AvatarIcon from "../../../public/icons/avatar-icon.svg";
import Image from "next/image";

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // reakpoint prefix	Minimum width	CSS
  // sm	640px	@media (min-width: 640px) { ... }
  // md	768px	@media (min-width: 768px) { ... }
  // lg	1024px	@media (min-width: 1024px) { ... }
  // xl	1280px	@media (min-width: 1280px) { ... }
  // 2xl	1536px	@media (min-width: 1536px) { ... }
  console.log("navbar");
  return (
    <>
      <nav className="bg-black border-b-[0.5px] border-white text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center 2xl:justify-between px-5 md:px-10 lg:px-8 py-5">
          <div className="flex gap-[10px] justify-between">
            <Image
              src="/images/logo.png"
              width={290}
              height={88}
              alt="Malogica Systems logo"
              className="object-cover"
            />
            <button
              className="lg:hidden"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* <Logo /> */}

          <div className="lg:flex">
            <div
              className={`{absolute ${
                !isOpenMenu ? "hidden" : ""
              } left-0 top-[15%] z-10 w-full min-h-[50vh] px-5 lg:static lg:flex lg:w-auto lg:min-h-fit items-center justify-center bg-black}`}
            >
              <div className="flex justify-center items-center md:mx-[20px] lg:mx-[40px] xl:mx-[90px] 2xl:mx-[147px] mt-[42px] mb-11">
                <ul>
                  <div className="flex flex-col lg:flex-row gap-[15px] lg:gap-[20px] xl:gap-[40px] 2xl:gap-[60px]">
                    {navbarLinksNames.map((link, index) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block md:text-sm xl:text-base font-normal leading-6 text-center text-[#898989]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>

              <div className="flex gap-10 lg:gap-14 2xl:gap-[70px] items-center justify-center">
                <div className="flex gap-4 lg:gap-5 2xl:gap-10">
                  <TelephoneIcon />
                  <ShoppingIcon />
                  <SearchIcon />
                </div>

                <div className="flex items-center justify-center relative">
                  <PurpuleCircleIcon />
                  <AvatarIcon className="absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
