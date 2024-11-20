import Image from "next/image";
import pic1 from "../../../public/about-us/pic1.png";
import point from "../../../public/about-us/point.png";

export default function Page() {
  return (
    <div className='bg-black pt-[30px]'>
    <div
      className="h-screen bg-no-repeat bg-cover md:bg-none flex justify-center items-center "
      style={{
        backgroundImage: `url(${pic1.src})`,
      }}
    >
      <div className="text-white text-center pt-10 flex flex-col gap-6 max-md:px-4">
        <h1 className="text-[60px] sm:text-[100px] md:text-[100px] lg:text-[150px] font-bold leading-[60px] sm:leading-[90px] md:leading-[120px] lg:leading-[170px] drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]">
          we make tech <br /> feel better.
        </h1>
        <p className="text-[#EBFF00] lg:text-[20px]">
          We‘re a web product company focused on design-driven, <br />
          out-of-the-box solutions that transform digital experiences.
        </p>
      </div>
    </div>
      <div>
          <div>
            <Image src={point} alt='point'></Image>
            <h1 className='text- '>Our Expertise</h1>
          </div>
      </div>
      </div>
  );
}
