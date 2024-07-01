import Image from "next/image";
import { navbarLinksNames } from "../constants/layoutconstants";
import Link from "next/link";
import TelegramIcon from "../../../public/icons/telegram-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import YoutubeIcon from "../../../public/icons/youtube-icon.svg";
import InstagramIcon from "../../../public/icons/instagram-icon.svg";
import FacebookIcon from "../../../public/icons/facebook-icon.svg";
import TwitterIcon from "../../../public/icons/twitter-icon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-darkGray p-5 md:p-10 flex flex-col gap-5">
          <Image
            src="/images/logo.png"
            width={290}
            height={88}
            alt="Malogica Systems logo"
            className="object-cover md:m-auto pb-5 md:pb-[53px]"
          />
          {/* gap-er@ poxarinel flex-ov tarberakov */}
          <div className="lg:flex lg:gap-[50px] xl:gap-[70px] 2xl:gap-90px">
            <div className="md:flex md:gap-24">
              <ul>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-1">
                  {navbarLinksNames.map((link, index) => (
                    <li key={link.name} className="md:mb-4 lg:mb-2">
                      <Link
                        href={link.href}
                        className={`{text-sm font-medium leading-5 text-[#FFFFFF]`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
              <div className="flex flex-col gap-[10px] text-[#FFFFFF]">
                <p className="text-base font-bold">Contact us</p>
                <div className="flex flex-col gap-2 text-sm font-normal leading-5 ">
                  <p>
                    Email:
                    <span className="opacity-50">info@yourwebsite.com</span>
                  </p>
                  <p>
                    Phone: <span className="opacity-50">+1-555-123-4567</span>
                  </p>
                  <p>
                    Address:
                    <span className="opacity-50">
                      123 Main Street, Anytown, USA 12345
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[10px] text-white">
              <p className="text-base font-bold">Newsletter</p>
              <p className="opacity-50 sm:w-[70%]">
                Stay in the loop with our latest offers, updates, and news.
                Subscribe to our newsletter now and get exclusive access to
                discounts and promotions!
              </p>

              <div>
                <input
                  placeholder="Send email"
                  className="relative py-[10px] px-5 rounded-md bg-lightGray w-full sm:w-[70%]"
                />
                <Link href="/" className="absolute">
                  <TelegramIcon className="absolute left-[-31px] top-[14px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 text-white text-sm font-normal leading-5 bg-lightGray p-5">
          <div className="flex">
            <Link href="/">Privacy Policy</Link>
            <div className="w-[1px] h-6 bg-white opacity-20 mx-5"></div>
            <Link href="/">Terms and Conditions</Link>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:justify-between">
            <div>Copyright © 2023 Malogica Systems. All Rights Reserved.</div>
            {/* justify-self chi @ndunum, veranayel */}
            <div className="flex items-center justify-start gap-5">
              <Link href="/">
                <LinkedinIcon />
              </Link>
              <Link href="/">
                <YoutubeIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
