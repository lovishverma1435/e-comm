import React, { useEffect, useRef, useState } from 'react'

import { motion } from "framer-motion";
import Flashoff from '../component/Home/Flashoff';
import Bannerproducts from '../component/Home/Bannerproducts';
import Saller from '../component/Home/Saller';
import Sneacker from '../component/Card/Sneacker';
import Shipping from '../component/Home/Shipping';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// const pageVariants = {
//   initial: { x: "100vw", opacity: 0 }, 
//   animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
//   exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
// };

const verticalFlip = {
  initial: {
    rotateX: 180,
    opacity: 0,
    transformOrigin: "bottom",
  },
  animate: {
    rotateX: 0,
    opacity: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    rotateX: -180,
    opacity: 0,
    transformOrigin: "bottom",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 2000);
  }, []);

  return (
    <>




      {
        loading ?
          <div className="container flex items-center">
            <Skeleton height={100} width={200} borderRadius={12} />
            <div className="flex">
              <Skeleton height={20} width={150} className="mt-4" />
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={100} />
              <Skeleton height={20} width={100} />
            </div>
          </div>
          :
          <motion.div
            variants={verticalFlip}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
            }}

          // variants={pageVariants}
          // initial="initial"
          // animate="animate"
          // exit="exit"
          >
            <Flashoff />
            <Bannerproducts />
            <Saller />
            <Sneacker relative={"flex flex-col gap-[30px] lg:flex-row"} section={"xl:pb-[97.2px] pb-[40px] flex xl:flex-col justify-center   flex-row m-auto"} width={"xl:w-[592px] w-[300px] justify-center mt-[30px] xl:mt-0 lg:w-[400px]  xl:h-[600px]"} container={"container  items-center justify-center   flex xl:block"} height={"xl:h-[600px]  w-full justify-center items-center xl:block   flex "} imgclass={"xl:right-[-120px] m-auto static xl:absolute sm:w-[400px] w-[300px] h-[200px] sm:h-[300px] xl:h-fit xl:w-fit xl:top-[-93px] "} headingstyle={"font-[500] xl:text-[55px] text-[25px]  mb-[23.34px]"} pstyle={"mb-[12.11px]  font-[400] lg:text-[15px] xl:text-[24px]"} buttonstyle={"w-[111px] h-[30px] flex justify-start font-[600] xl:text-[20px] text-[15px] "} spanstyle={" w-[75px] h-[3px]"} />
            <Shipping />
          </motion.div>
      }

    </>
  )
}

export default Home