import React from 'react'
import Swiperdata from './Swiper'
import { Link } from 'react-router-dom'

const Saller = () => {
  return (
    <>
      <section>
        <main className="xl:pb-[90.83px] pb-[35.83px] xl:mt-0 mt-[30px]">
          <div className="max-w-[1315px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center">
              {/* Title + Swiper */}
              <div className="flex flex-col justify-center w-full items-center pb-[23.5px] text-center">
                <h1 className="font-poppins font-[600] text-[28px] sm:text-[32px] md:text-[35px]  mb-[26px]">
                  BEST SELLER
                </h1>
                <Swiperdata />
              </div>
            </div>

            {/* Load More Button */}
            <div className="flex justify-center">
              <Link to={"/error"} ><button
                className="cursor-pointer h-[33px]  text-primary-blue font-poppins font-[500] text-lg sm:text-xl border-b-[3px] border-primary-blue"
              >
                LOAD MORE
              </button></Link>
              
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Saller
