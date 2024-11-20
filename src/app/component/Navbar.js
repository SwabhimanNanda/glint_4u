'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  // bg-gradient-to-r #E4E4E4 to-blue-500
  return (
    <div className="font-sans fixed flex justify-center items-center w-full top-[30px] z-[1000]   ">
      {/* Navigation Bar */}
      <nav className=" bg-[#d9d9d92d] backdrop-blur-[10px] w-[230px] h-[60px] rounded-[50px] flex justify-center items-center px-[7px] gap-[10px] ">
        <Link
          href="/home"
          className={`text-[16px] font-medium w-full text-center bg-[#8c8c8c62] h-[80%] rounded-[40px] flex justify-center items-center  ${
            pathname === '/home' ? 'text-gray-200 border-[0.5px] border-gray-400/50' : 'bg-[#8c8c8c62]'
          }`}
        >
          Home
        </Link>
        <Link
          href="/work"
          className={`text-[16px] font-medium w-full text-center bg-[#8c8c8c62] h-[80%] rounded-[40px] flex justify-center items-center  ${
            pathname === '/work' ? 'text-gray-200 border-[0.5px] border-gray-400/50' : 'bg-[#8c8c8c62]'
          }`}
        >
          Work
        </Link>
      </nav>
    </div>
  );
}
