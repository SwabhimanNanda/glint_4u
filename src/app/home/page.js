import Image from "next/image";
import pic1 from "../../../public/about-us/pic1.png";
import point from "../../../public/about-us/point.png";
import box1 from "../../../public/about-us/box1.png";
import box2 from "../../../public/about-us/box2.png";
import box3 from "../../../public/about-us/box3.png";
import page from "../../../public/about-us/page.png";

export default function Page() {
  const boxes = [
    {
      image: box1,
      alt: "box1",
      text: "We Craft Cutting-Edge Solutions Tailored To Diverse Business Needs.",
    },
    {
      image: box2,
      alt: "box2",
      text: "Tailored Web Applications That Solve Real-World Problems.",
    },
    {
      image: box3,
      alt: "box3",
      text: "Focused On Delivering Exceptional And Seamless User Experience.",
    },
  ];

  const founders = [
    { name: "Jaiman Soni", role: "Co-founder" },
    { name: "Swabhiman Nanda", role: "Co-founder" },
    { name: "Vimarh Tiwari", role: "Co-founder" },
    { name: "Jenish Soni", role: "Co-founder" },
  ];

  return (
    <div className="bg-black pt-6 sm:pt-8 md:pt-10">
      <div
        className="min-h-screen bg-no-repeat bg-cover  flex justify-center items-center px-4 sm:px-6 md:px-8"
        style={{
          backgroundImage: `url(${pic1.src})`,
          
        }}
      >
        <div className="text-white text-center flex flex-col gap-4 sm:gap-6 md:gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]">
            we make tech <br /> feel better.
          </h1>
          <p className="text-[#EBFF00] text-sm sm:text-base md:text-lg lg:text-xl">
            We're a web product company focused on design-driven, <br className="hidden sm:block" />
            out-of-the-box solutions that transform digital experiences.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Image src={point} alt="point" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <h2 className="text-xl sm:text-2xl md:text-3xl text-bg">Gradient Text</h2>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="relative h-[350px] sm:h-[400px] md:h-[450px] border-4 rounded-3xl border-[#313513] overflow-hidden flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-gradient-radial from-[#777a56] via-[#414422] to-black/90 opacity-70 animate-pulse"></div>
                <div className="relative z-10 flex flex-col justify-center items-center gap-6 p-4 sm:p-6">
                  <Image src={box.image} alt={box.alt} className="w-24 sm:w-32 md:w-40" />
                  <p className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl">
                    {box.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16 sm:mt-24 md:mt-32">
          <h2 className="drop-shadow-[0_0_40px_rgba(235,255,0,0.7)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            glint for you
          </h2>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 sm:mt-24 md:mt-32">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Image src={point} alt="point" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <h2 className="text-xl sm:text-2xl md:text-3xl text-bg">Our Expertise</h2>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <Image src={page} alt="page" className="w-full max-w-4xl h-auto" />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 sm:mt-24 md:mt-32">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Image src={point} alt="point" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <h2 className="text-xl sm:text-2xl md:text-3xl text-bg">Think Tank</h2>
        </div>

        <div className="text-[#EBFF00] text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8">
          <p>
            Composed of visionary designers, developers, and strategists, this
            team thrives on out-of-the-box thinking and collaboration. With a
            passion for exploring new ideas and pushing technological
            boundaries, the Think Tank is dedicated to crafting solutions that
            not only meet client needs but also shape the future of digital
            experiences.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 sm:mt-24 md:mt-32 pb-16 sm:pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="relative h-[200px] sm:h-[225px] md:h-[250px] border-4 rounded-3xl border-[#313513] overflow-hidden flex items-center px-4 sm:px-6">
              <div className="absolute inset-0 bg-gradient-radial from-[#4e5038] via-[#313319] to-black/80 opacity-70"></div>
              <div className='relative z-10 text-left'>
                <h3 className='text-white/90 text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>{founder.name}</h3>
                <p className='text-[#8D8D8D] text-lg sm:text-xl md:text-2xl'>{founder.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}