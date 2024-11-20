import Image from "next/image";
import WorkTop from "../../../public/work/WorkTop.png";
export default function Page() {
  return (
    <div className="bg-black min-h-screen h-fit px-[70px]">
      <div className="w-full h-screen flex justify-between items-center">
        <div className="w-[50%] flex flex-col">
          <span className="text-[80px] text-white font-medium leading-[90px]">We Craft Web Solutions</span>
          <span className="text-[20px] text-[#EBFF00] font-light w-[280px] mt-[40px]">
            Out-Of-The-Box Solutions That Transform Digital Experiences.
          </span>
        </div>
        <div>
          <Image className="w-[900px] " src={WorkTop} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
