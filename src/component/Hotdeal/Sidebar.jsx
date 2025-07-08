import React, { Fragment, useState } from 'react'
import deals from "../../json/Hotdeal.json";
import { Link } from 'react-router-dom';

const Sidebar = ({data}) => {
      const [color, setcolor] = useState(false);
      const [price, setPrice] = useState(13.99);
      const [isborder, setIsborder] = useState(false);
      const [brand, setbrand] = useState(false);
  return (
    <>
    <div className={` bg-white transition-all duration-200 flex  flex-col gap-[30px] `}>
                  <div className=" flex flex-col bg-sidegray     rounded  pt-[19px] pl-[20px]  gap-[25px] pr-[15.3px] pb-[26px]">
                    <h1 className="font-poppins font-[500] text-[18px] text-primary-dark  ">
                      Hot Deals
                    </h1>
                    <div className="flex flex-col gap-[20px]">
                      {deals.deals.map((item, index) => (
                        <div key={index}>
                          <div
                            onClick={() => setcolor(index)}
                            className={`flex justify-between items-center cursor-pointer `}
                          >
                            <h1
                              className={`${
                                color === index && "text-skyblue"
                              } cursor-pointer text-primary font-normal text-[18px] `}
                            >
                              {item.data}
                            </h1>
                            <p
                              className={`${
                                color === index
                                  ? "text-skyblue opacity-100"
                                  : "opacity-[35%]"
                              } font-normal text-[18px] text-primary-dark `}
                            >
                              {item.point}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col max-w-[270px]  bg-sidegray w-full bg-border-gray p-[19px_15px_26px_20px] rounded gap-5">
                    <h1 className="font-poppins font-medium text-lg text-primary">
                      Prices
                    </h1>
                    <div className="flex w-full justify-between">
                      <h4 className="font-proxima font-normal text-lg text-primary">
                        Ranger:
                      </h4>
                      <span>${price.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="13.99"
                      max="25.99"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(parseFloat(e.target.value))}
                      className="
    w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:bg-blue-500
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:shadow-md
    [&::-webkit-slider-thumb]:transition
    [&::-webkit-slider-thumb]:duration-300

    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:bg-blue-500
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-none
  "
                    />
                  </div>
                  <div className="flex flex-col max-w-[270px] w-full bg-sidegray p-[19px_15px_26px_20px] rounded gap-5">
                    <h1 className="font-poppins font-medium text-lg text-primary">
                      Color
                    </h1>
                    <div className="flex gap-2">
                      {deals && (
                        <div className="flex gap-5 pt-2">
                          {deals.color.map((item, index) => (
                            <Fragment key={index}>
                              <div
                                className="flex items-center w-5 h-5 justify-center rounded-full"
                                style={{
                                  border: `2px solid  ${
                                    isborder === index
                                      ? item?.color
                                      : "transparent"
                                  }`,
                                }}
                              >
                                <button
                                  style={{ background: item.color }}
                                  onClick={() => setIsborder(index)}
                                  className={`${
                                    isborder === index ? "w-3 h-3" : "h-4 w-4"
                                  } rounded-full`}
                                ></button>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" flex flex-col bg-sidegray  w-[270px]   rounded  pt-[19px] pl-[20px]  gap-[25px] pr-[15.3px] pb-[26px]">
                    <h1 className="font-poppins font-[500] text-[18px] text-primary-dark  ">
                      BRAND
                    </h1>
                    <div className="flex flex-col gap-[20px]">
                      {deals.brand.map((item, index) => (
                        <div key={index}>
                          <div
                            onClick={() => setbrand(index)}
                            className={`flex cursor-pointer justify-between items-center `}
                          >
                            <h1
                              className={`${
                                brand === index && "text-skyblue"
                              } cursor-pointer text-primary font-normal text-[18px] `}
                            >
                              {item.data}
                            </h1>
                            <p
                              className={`${
                                brand === index
                                  ? "text-skyblue opacity-100"
                                  : "text-primary-dark opacity-[35%]"
                              } font-normal text-[18px]  `}
                            >
                              {item.point}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={"/error"}
                    className="w-full flex justify-center items-center bg-sidegray pb-[16px] pt-[19px] rounded"
                  >
                    {" "}
                    <h4 className="font-poppins font-[500] text-[14px] ">
                      MORE
                    </h4>{" "}
                  </Link>
                </div>
    </>
  )
}

export default Sidebar