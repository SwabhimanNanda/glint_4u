'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import WorkTop from "../../../public/work/WorkTop.png";
import Project1 from "../../../public/work/ShrijiEducation.png";
import Project2 from "../../../public/work/BurgerBistro.png";
import Banner from "../../../public/work/banner.png";
import { f1 } from "../fonts";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="bg-black min-h-screen h-fit lg:px-[20px] sm:px-[70px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div className="w-full h-screen relative" style={{ y }}>
          {/* Background image - ONLY shown on mobile */}
          <motion.div 
            className="absolute inset-0 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Image
              className="w-full h-full object-cover"
              src={WorkTop}
              alt=""
              priority
            />
          </motion.div>

          {/* Content container */}
          <div className="relative h-full flex items-center justify-between">
            <motion.div 
              className="flex flex-col z-10 w-full md:w-auto"
              variants={staggerChildren}
              initial="initial"
              animate={isLoaded ? "animate" : "initial"}
            >
              <motion.div
                className={`${f1.className} lg:w-[40vw] text-center md:text-left text-[70px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium`}
                variants={fadeInUp}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We Craft
                </motion.span>
                <br />
                <motion.span
                  className="font-semibold italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Web Solutions
                </motion.span>
              </motion.div>
              <motion.span
                className={`${f1.className} text-[20px] text-[#EBFF00] font-light text-center md:text-left lg:w-[280px] mt-[40px]`}
                variants={fadeInUp}
              >
                Out-Of-The-Box Solutions That Transform Digital Experiences.
              </motion.span>
            </motion.div>

            {/* Main image - only shown on md and up */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                className="max-w-[800px] w-[50vw]"
                src={WorkTop}
                alt=""
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        <div className='flex  flex-col max-md:gap-[20px]'>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          >
          <Image className="" src={Project1} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          >
          <Image className="" src={Project2} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          >
          <Image className="" src={Banner} alt="" />
        </motion.div>
          </div>
      </motion.div>
    </AnimatePresence>
  );
}