import React from "react";
import Image from "next/image";
import { f1, f2 } from "../fonts";
import Logo from "../../../public/work/logo.png";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" flex flex-col bg-black w-full min-h-[300px] h-fit py-[20px] px-[40px] text-white">
      <div className="w-full lg:w-[95%] mx-auto h-[0.5px] bg-[#D9D9D95f]"></div>
      <div
        className={` ${f1.className} flex max-sm:flex-col justify-between mt-[40px] lg:mt-[60px]`}
      >
        <div className="flex flex-col">
          <div className="flex gap-[10px] items-center mb-[30px]">
            <Image className="" src={Logo} alt=""></Image>
            <span className="text-[30px]">glint</span>
          </div>
          <div className="font-semibold mb-2">
            @2024 glint4u All Rights Reserved
          </div>
          <div className="font-extralight text-sm">we make tech feel better</div>
        </div>
        <div className="flex gap-x-10 max-md:justify-between max-md:mt-[40px]">
          <div className="flex flex-col gap-[15px]">
            <span className="text-[#636363]">Main</span>
            <ul className="flex flex-col  gap-[30px]">
              <Link href={"/home"}>
                <li>About Us</li>
              </Link>
              <li>Work</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <span className="text-[#636363]">CONTACT</span>
            <ul className="flex flex-col  gap-[30px]">
              <a
                href="https://www.linkedin.com/company/glint4u/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>LinkedIn</li>
              </a>

              <a
                href="https://www.instagram.com/glint4u?igsh=MXZubXY3cXgwd3k2Zg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>instagram</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
