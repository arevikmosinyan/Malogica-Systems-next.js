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
          // layout="responsive"
          alt="frame"
          className="hidden xl:block relative xl:top-[150px] xl:left-[-75px] h-full"
        />
        <div className="xl:flex xl:justify-between xl:items-center xl:mt-[220px] xl:ml-[220px] xl:absolute xl:top-[-125px] z-30">
          <Products />
          <NewReleases />
        </div>
      </div>

      <OurUniqueSellingPrepositions />
    </main>
  );
}
