import React, { Fragment, useEffect, useState } from "react";
import Sneacker from "../Card/Sneacker";
import sallerjson from "../../json/saller.json";
import iconninedot from "../../../public/svg/iconninedot.svg";
import arrow from "../../../public/svg/arrowdown.svg";
import iconninedotcolor from "../../../public/svg/ninedotswithoutcolor.svg";
import threelinemenu from "../../../public/svg/threelinemenu.svg";
import threelinemenuncolor from "../../../public/svg/threelinemenuwithcolor.svg";
import Seller from "../Card/Seller";
import hotdeljson from "../../json/saller.json";
import cart from "../../../public/svg/cartblue.svg";
import wishlist from "../../../public/svg/wishlistblue.svg";
import rating from "../../../public/svg/rate.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useParams } from 'react-router-dom';

const Hotdeal = () => {


  const [nike, setnike] = useState(true);
  const [popup, setpopup] = useState(false);
  const [isnike, setisnike] = useState(false);
  const [countpage, setcountpage] = useState(0);


  const nikedata = () => {
    setnike(true);
    setisnike(false);
  };
  const isnikedata = () => {
    setisnike(true);
    setnike(false);
  };
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
  const data = [
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "4",
    },
    {
      value: "5",
    },
  ];


  const [databar, setdatabar] = useState([]);
  const [datasidebar, setdatasidebar] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:3000/api/getallproduct`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setdatabar(data.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  console.log(databar)
  return (
    <>
      <motion.div
        variants={verticalFlip}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
      >
        <section className="mb-[155px]">
          <main>
            <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal text-[18px] mb-[51.53px] ">
              <h1 className="text-primary-blue ">Home</h1>
              <h4 className=" text-lightgray-white"> /</h4>
              <h1> Hot Deal</h1>
            </div>
            <div className="container ">
              <div className="flex relative   justify-between">
                <div className="hidden xl:block"> <Sidebar data={""} /></div>

                <div className={`${popup ? "w-[300px]  " : "w-[30px] "}  xl:hidden  absolute z-50 flex transition-all duration-200`}>
                  <div className={`${popup ? "w-[270px]  opacity-100 z-50" : "w-0 opacity-0 -z-50"}  transition-all duration-200`}>
                    <Sidebar data={popup} />
                  </div>
                  <div onClick={() => setpopup(!popup)} className={` w-[30px] h-[50px] rounded-r bg-buttongray flex items-center justify-center`}>
                    <img className={`${popup ? "rotate-90" : "-rotate-90"}  transition-all duration-200 w-[15px] h-[15px]`} src={arrow} alt="" />
                  </div>
                </div>




                <div className="">
                  <div className="mb-[23px]">
                    <Sneacker
                      relative={"flex flex-col xl:flex-row justify-center items-center xl:justify-start items-start"}
                      width={"h-[297.99px]  justify-center xl:ml-[110px] max-w-[351px] w-full m-auto "}
                      container={"xl:w-[962px] max-w-[962px]  w-full "}
                      height={"xl:h-[298px]"}
                      imgclass={
                        "static xl:absolute m-auto xl:m-0 right-[113px] top-[-34.32px]  sm:w-[397.93px] w-[297.93px] sm:h-[297.46px] h-[197.46px]"
                      }
                      headingstyle={"font-[500] sm:text-[30px] text-[20px]  mb-[15.34px]"}
                      pstyle={"mb-[12.11px]  font-[400] text-[14px]"}
                      buttonstyle={
                        "w-[111px] text-left h-[30px] font-[600] text-[12px] "
                      }
                      spanstyle={" w-[37px] h-[2.71px]"}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="max-w-[962px] w-full flex justify-between items-center  pt-[11px] pb-[9px] rounded bg-sidegray pl-[22.23px]">
                      <div className=" hidden md:flex  w-[526px] justify-between items-center">
                        <div className="flex w-[58px] justify-between items-center font-normal text-[16px] text-primary-dark">
                          <h4>{sallerjson.saller.length}</h4>
                          <h4>Items</h4>
                        </div>
                        <div className="flex justify-between items-center w-[192.15px] ">
                          <h4 className="font-normal text-[16px] text-primary-dark ">
                            Sort By
                          </h4>
                          <div className="flex justify-between border-2 border-roundedgray rounded items-center font-normal text-[16px] text-primary-dark w-[128px] p-[10px_17px_9px_17.55px]">
                            <h4>Name</h4>
                            <img
                              className="w-[7.37px] h-[4px]"
                              src={arrow}
                              alt="arrow"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-[172px] ml-[9px] ">
                          <h4 className="font-normal text-[16px] text-primary-dark ">
                            Show
                          </h4>
                          <div className="flex justify-between border-2 border-roundedgray rounded items-center font-normal text-[16px] text-primary-dark w-[128px] p-[10px_17px_9px_17.55px]">
                            <h4>12</h4>
                            <img
                              className="w-[7.37px] h-[4px]"
                              src={arrow}
                              alt="arrow"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex ">
                        <img
                          onClick={nikedata}
                          src={nike ? iconninedot : iconninedotcolor}
                          className="px-[16.58px] cursor-pointer pt-[8px] pb-[10px]"
                          alt="iconninedot"
                        />
                        <img
                          onClick={isnikedata}
                          src={isnike ? threelinemenuncolor : threelinemenu}
                          className="px-[18px] pt-[10px] cursor-pointer pb-[12px]"
                          alt="threelinemenu"
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    to={"/product"}
                    className={`grid grid-cols-1 w-[] sm:grid-cols-2 lg:grid-cols-3  mt-[27px]  md:grid-cols-2 xl:grid-cols-3 gap-[33px] place-items-center ${nike ? "block " : "hidden"
                      }`}
                  >
                    {
                      databar.slice(0,9).map((item, index) => (
                        <Link to={`/product/${item.id}`} key={index + item + Date.now}> <Seller varient={true} data={item} /></Link>

                      ))
                    }


                  </Link>
                  <div
                    className={`${isnike ? "block" : "hidden"} flex flex-col`}
                  >
                    {databar.slice(0,4).map((item, index) => (
                      <div
                        className={`max-w-[870px]  w-full border-sidegray relative pt-[30px] pb-[26px] flex  ${index <= 2 ? "border-b-2 " : "border-none"
                          }`}
                        key={index + item}
                      >
                        <Link>
                          <div className="flex gap-[14px] flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start">
                            {
                              <>
                                {" "}
                                <Link to={`/product/${item.id}`}>
                                  <img
                                    src={`http://localhost:3000/upload/${item.headimgage}`}
                                    className="w-[299px] h-[272px]"
                                    alt="image"
                                  />
                                  {item.hotdeal && (
                                    <span className="font-proxima  absolute  top-[32px] z-50  bg-primary-red rounded text-white font-normal text-[18px] w-[64px] h-[33px] flex justify-center items-center">
                                      {item.hotdeal}
                                    </span>
                                  )}
                                </Link>
                              </>
                            }

                            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                              <h1 className="font-poppins font-medium text-2xl text-primary-dark">
                                {item.name}
                              </h1>
                              <div className="flex items-center justify-center lg:justify-start pt-[14px] pb-5 border-b-2 border-sidegray max-w-[470px] w-full gap-[15px]">
                                <img
                                  className="max-w-[72px] w-full"
                                  src={`http://localhost:3000/upload/${item.raiting}`}
                                  alt="image"
                                />
                                <h4 className="font-proxima font-normal text-sm text-lightgray-white">
                                  {item.reviews} reviews
                                </h4>
                                <h4 className="font-proxima font-normal text-sm text-primary-blue">
                                  Submit a review
                                </h4>
                              </div>
                              <div className="flex pt-[10px] pb-5 items-center gap-[9px]">
                                <h4 className="font-poppins font-bold text-xl tracking-[0.5px] text-primary-blue leading-[180%]">
                                  {item.originalPrice}
                                </h4>
                                <h4 className="font-poppins font-medium text-sm tracking-[0.5px] text-natural-gray leading-[150%] line-through">
                                  {item.price}
                                </h4>
                                <h4 className="font-poppins font-bold text-sm tracking-[0.5px] text-primary-red leading-[150%]">
                                  {item.discountPercent}
                                </h4>
                              </div>
                              <h4 className="font-poppins mb-[28.25px] font-medium text-sm text-primary max-w-[652px] w-full">
                                Nunc facilisis sagittis ullamcorper. Proin
                                lectus ipsum, gravida et mattis vulputate,
                                tristique ut lectus. Sed et lectus lorem nunc
                                leifend laorevtr istique et congue. Vivamus
                                adipiscin vulputate g nisl ut dolor ...
                              </h4>
                              <Link to={"/cart"}>
                                <div className="flex items-center gap-4">
                                  <button className="flex items-center gap-2 bg-lightskyblue  max-w-[150px] w-full py-[15px] justify-center rounded">
                                    <img
                                      src={cart}
                                      className="w-[15.95px] h-[16px]"
                                      alt="image"
                                    />
                                    <h4 className="font-poppins font-medium text-sm text-primary-blue">
                                      Add To Cart
                                    </h4>
                                  </button>
                                  <div className="flex bg-lightskyblue h-[46px] w-[46px] justify-center items-center   rounded">
                                    <img src={wishlist} alt="image" />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="flex mt-[47px] bg-lightgray justify-center items-center  ">
                    {data.map((item, index) => (
                      <div onClick={() => {
                        index >= 0 && index <= 5 && setcountpage(index)
                      }}
                        className={`${index === countpage ? "bg-primary-blue text-white" : "bg-transparent text-primary-dark"} flex justify-center items-center  `}
                        key={index + item + Date.now()}
                      >

                        <h4 className="w-[63px]   flex justify-center  items-center font-[400] text-[18px] h-[56px] cursor-pointer">
                          {item.value}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </motion.div>
    </>
  );
};

export default Hotdeal;
