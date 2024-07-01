import Image from 'next/image';
import { navbarLinksNames } from '../constants/layoutconstants';
import Link from 'next/link';
import TelegramIcon from '../../../public/icons/telegram-icon.svg';
import LinkedinIcon from '../../../public/icons/linkedin-icon.svg';
import YoutubeIcon from '../../../public/icons/youtube-icon.svg';
import InstagramIcon from '../../../public/icons/instagram-icon.svg';
import FacebookIcon from '../../../public/icons/facebook-icon.svg';
import TwitterIcon from '../../../public/icons/twitter-icon.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='bg-darkGray p-5 flex flex-col gap-5'>
          <Image
            src='/images/logo.png'
            width={290}
            height={88}
            alt='Malogica Systems logo'
            className='object-cover'
          />
          <ul>
            <div className='flex flex-col'>
              {navbarLinksNames.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`{text-sm font-medium leading-5 text-[#FFFFFF]`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>

          <div className='flex flex-col gap-[10px] text-[#FFFFFF]'>
            <p className='text-base font-bold'>Contact us</p>
            <div className='flex flex-col gap-2 text-sm font-normal leading-5 '>
              <p>
                Email: <span className='opacity-50'>info@yourwebsite.com</span>
              </p>
              <p>
                Phone: <span className='opacity-50'>+1-555-123-4567</span>
              </p>
              <p>
                Address:
                <span className='opacity-50'>
                  123 Main Street, Anytown, USA 12345
                </span>
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-[10px] text-white'>
            <p className='text-base font-bold'>Newsletter</p>
            <p className='opacity-50'>
              Stay in the loop with our latest offers, updates, and news.
              Subscribe to our newsletter now and get exclusive access to
              discounts and promotions!
            </p>

            <div>
              <input
                placeholder='Send email'
                className='relative py-[10px] px-5 rounded-md bg-lightGray'
              />
              <Link href='/'>
                <TelegramIcon className='absolute left-[-31px] top-[14px]' />
              </Link>
            </div>

            {/* <div className="flex w-full">
              <input
                placeholder="Send email"
                className="flex-15 grow-1 shrink-1 py-[10px] px-5 rounded-l-md bg-lightGray"
              />
              <div className="flex flex-1 grow-0 shrink-0 items-center justify-center rounded-r-md bg-lightGray p-5 ml-[-1px]">
                <TelegramIcon />
              </div>
            </div> */}
          </div>
        </div>

        <div className='flex flex-col gap-5 text-white text-sm font-normal leading-5 bg-lightGray p-5'>
          <div className='flex'>
            <Link href='/'>Privacy Policy</Link>
            <div className='w-[1px] h-6 bg-white opacity-20 mx-5'></div>
            <Link href='/'>Terms and Conditions</Link>
          </div>
          <div className='flex flex-col gap-5'>
            <div>Copyright © 2023 Malogica Systems. All Rights Reserved.</div>
            <div className='flex items-center justify-start gap-5'>
              <Link href='/'>
                <LinkedinIcon />
              </Link>
              <Link href='/'>
                <YoutubeIcon />
              </Link>
              <Link href='/'>
                <InstagramIcon />
              </Link>
              <Link href='/'>
                <FacebookIcon />
              </Link>
              <Link href='/'>
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
