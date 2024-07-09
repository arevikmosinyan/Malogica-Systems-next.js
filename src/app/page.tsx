import Products from "../components/Products";
import CallCenterSection from "../components/CallCenterSection";
import OurUniqueSellingPrepositions from "../components/OurUniqueSellingPrepositions";
import Revolutionize from "../components/Revolutionize";
import NewReleases from "@/components/NewReleases";
import Frame from "../../public/images/frame-most-popular-and-new-realize.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Revolutionize />
      <CallCenterSection />
      <div className="relative">
        <Image
          src={Frame}
          quality={100}
          layout="responsive"
          alt="frame"
          className="hidden 2xl:block relative 2xl:top-[265px] 2xl:left-[5px] h-full"
        />
        <div className="2xl:flex 2xl:justify-between 2xl:items-center 2xl:mt-[140px] 2xl:ml-[280px] min-[1820px]:ml-[425px] min-[2200px]:ml-[25vw] 2xl:absolute 2xl:top-[119px] z-30">
          <Products />
          <NewReleases />
        </div>
      </div>

      <OurUniqueSellingPrepositions />
    </main>
  );
}
