import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Headerjson from "../../json/Header.json"
import arrow from "../../../public/svg/arrowlightwhite.svg"

const Popup = ({ child }) => {
  const [homedata, sethomedata] = useState(false)

  return (
    <>
      <h4 onMouseEnter={() => sethomedata(true)} className={""}>
        {child}
      </h4>
      <div onMouseLeave={() => sethomedata(false)} className={` transition-all duration-300 z-50 ${homedata ? "block" : "hidden"} w-[1029px]    absolute  mx-auto left-[-290px] top-[55px] border-t-2 border-lightgray  h-[360.51px] bg-white text-primary  p-[38.82px_32.7px_3.7px_84.14px]`}>
        <img className='absolute top-[-11px] left-[315px]' src={arrow} alt="arrowlightwhite" />
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-[12.94px]">

            <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
            <div className="flex flex-col gap-6">
              {
                Headerjson.datacatogry.map((item, index) => (
                  <div key={index}>
                    <Link to={"/error"}>
                      <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                  </div>
                ))
              }

            </div>

          </div>
          <div className="flex flex-col gap-[12.94px]">
            <div className="flex flex-col gap-6 mt-[43.55px]">
              {
                Headerjson.datacatogry.map((item, index) => (
                  <div key={index}>
                    <Link onClick={() => sethomedata(false)} to={"/error"}>
                      <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                  </div>
                ))
              }

            </div>

          </div>
          <div className="flex flex-col gap-[12.94px]">
            <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
            <div className="flex flex-col gap-6">
              {
                Headerjson.datacatogryhotdeal.map((item, index) => (
                  <div key={index}>
                    {
                      index === 0 ? (<><Link onClick={() => sethomedata(false)} to={"/Hotdeal"}>
                        <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                      </Link>
                      </>) : <Link onClick={() => sethomedata(false)} to={"/error"}>
                        <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                      </Link>
                    }
                  </div>
                ))
              }

            </div>

          </div>
          <div className="flex flex-col gap-[12.94px]">
            <div className="flex flex-col gap-6 mt-[43.55px]">
              {
                Headerjson.datacatogryhotdeal.map((item, index) => (
                  <div key={index}>
                    {
                      index === 0 ? (<><Link onClick={() => sethomedata(false)} to={"/Hotdeal"}>
                        <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                      </Link>
                      </>) : <Link onClick={() => sethomedata(false)} to={"/error"}>
                        <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                      </Link>
                    }


                  </div>
                ))
              }

            </div>

          </div>
          <div className="flex flex-col gap-[12.94px]">
            <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
            <div className="flex flex-col gap-6">
              {
                Headerjson.datacatogry.map((item, index) => (
                  <div key={index}>
                    <Link onClick={() => sethomedata(false)} to={"/error"}>
                      <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                  </div>
                ))
              }

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Popup