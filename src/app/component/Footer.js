import React from "react";
import Image from "next/image";

import Logo from "../../../public/work/logo.png";

export default function Footer() {
  return (
    <div className=" flex flex-col bg-black w-full min-h-[300px] h-fit py-[20px] px-[40px] text-white">
      <div className="w-[95%] mx-auto h-[0.5px] bg-[#D9D9D95f]"></div>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-[10px] items-center">
            <Image className="" src={Logo} alt=""></Image>
            <span>glint</span>
          </div>
          <div>@2024 glint4u All Rights Reserved</div>
          <div>we make tech feel better</div>
        </div>
        <div className="flex ">
          <div>
            <span>Main</span>
            <ul> 
              <li>About Us</li>
              <li>Work</li>
            </ul>
          </div>
          <div>
            <span>CONTACT</span>
            <ul> 
              <li>Linkedin</li>
              <li>Instagram</li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  );
}
