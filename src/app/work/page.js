import Image from "next/image";
import WorkTop from "../../../public/work/WorkTop.png";
import Project1 from "../../../public/work/ShrijiEducation.png";
import Project2 from "../../../public/work/BurgerBistro.png";
import Banner from "../../../public/work/banner.png";
export default function Page() {
  return (
    <div className="bg-black min-h-screen h-fit px-[20px] sm:px-[70px]">
      <div className="w-full h-screen flex justify-between items-center">
        <div className="flex flex-col">
          <span className="w-[40vw] text-[6vw] text-white font-medium leading-[5vw]">
            We Craft Web Solutions
          </span>
          <span className="text-[20px] text-[#EBFF00] font-light w-[280px] mt-[40px]">
            Out-Of-The-Box Solutions That Transform Digital Experiences.
          </span>
        </div>
        <div>
          <Image className="max-w-[800px] w-[50vw] " src={WorkTop} alt=""></Image>
        </div>
      </div>
      <div>
        <Image className="" src={Project1} alt=""></Image>
      </div>
      <div>
        <Image className="" src={Project2} alt=""></Image>
      </div>
      <div>
        <Image className="" src={Banner} alt=""></Image>
      </div>
    </div>
  );
}
