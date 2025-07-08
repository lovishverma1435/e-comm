import React from "react";
import data from "../../json/Shipping.json";

const Shipping = () => {
  return (
    <section>
      <main>
        {/* SHIPPING SECTION */}
        <div className="max-w-[1091px] mx-auto px-5 pb-[60px] lg:pb-[121.34px]">
          <div className="flex flex-wrap justify-center lg:justify-between gap-8">
            {data.data.map((item, index) => (
              <div
                key={index + item + Date.now()}
                className="max-w-[197.56px] w-full flex flex-col justify-center items-center gap-4"
              >
                <div className="flex flex-col justify-center items-center gap-8">
                  <img
                    className="w-[80px] md:w-[100.76px] h-auto"
                    src={item.img}
                    alt="shippingimg"
                  />
                  <h4 className="font-poppins text-primary-dark font-medium text-[20px] md:text-[27px] text-center">
                    {item.tittle}
                  </h4>
                </div>
                <p className="font-proxima text-center text-base md:text-[18px] text-primary-dark">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LATEST NEWS */}
        <div className="flex flex-col justify-center items-center gap-10 max-w-[1212.93px] w-full px-5 mx-auto pb-[60px] lg:pb-[110.04px]">
          <h1 className="font-poppins font-semibold text-[26px] md:text-[34px] text-primary-dark text-center">
            LATEST NEWS
          </h1>
          <div className="flex flex-col gap-8 lg:flex-row justify-between items-center w-full">
            {data.datanews.map((item, index) => (
              <div key={index + item + Date.now()} className="w-full ">
                <div
                  className={`flex flex-col sm:flex-row items-center gap-4 ${item.width}`}
                >
                  <img src={item.img} alt="NIKE" className="" />
                  <div className="flex flex-col sm:w-[197.56px] xl:w-full text-center sm:text-left">
                    <h4 className="text-lightgray-white mb-1 font-poppins font-medium text-base md:text-[18px]">
                      01 Jan, 2015
                    </h4>
                    <h4 className="text-primary-dark  xl:w-[200px] font-poppins font-semibold text-lg md:text-[22px]">
                      {item.tittle}
                    </h4>
                    <p className="text-primary-dark font-proxima text-sm md:text-[18px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="flex flex-col pb-[60px] lg:pb-[110.04px] justify-center items-center max-w-[1304.98px] w-full mx-auto px-5 gap-12">
          <h1 className="text-primary-dark font-poppins font-semibold text-[28px] md:text-[35px] text-center">
            FEATURED PRODUCTS
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {data.datanews.map((item, index) => (
              <div key={index + item + Date.now()} className="w-full">
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[428px] mx-auto">
                  <img
                    className="h-[154px] w-[154px] mx-auto sm:mx-0"
                    src={"../../public/images/RectangleSNICKER.png"}
                    alt="RectangleSNICKER"
                  />
                  <div className="flex flex-col  gap-3 sm:w-[249.29px]">
                    <h1 className="text-primary font-proxima font-normal text-[18px] md:text-[22px]">
                      Blue Swade Nike Sneakers
                    </h1>
                    <img
                      className="w-[86.02px] mx-auto xl:m-0 h-[11.88px]"
                      src={"../../public/svg/rate.svg"}
                      alt="rate"
                    />
                    <div className="flex  sm:justify-between xl:items-start xl:justify-start items-center gap-4">
                      <h4 className="text-primary-red font-poppins font-medium text-lg md:text-[20px]">
                        $499
                      </h4>
                      <h4 className="text-lightgray-white line-through font-poppins font-medium text-lg md:text-[20px]">
                        $599
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="container px-5">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0 pb-[95.41px]">
            <input
              className="w-full sm:w-[508px] text-primary opacity-35 px-5 py-4 h-[64px] font-poppins text-base md:text-[18px] border-t-2 border-b-2 border-l-2 border-r-2 rounded-r md:border-r-0 md:rounded-r-none border-primary-blue rounded-tl-md rounded-bl-md outline-none"
              type="text"
              placeholder="Search query..."
            />
            <button className="w-full sm:w-[127px] px-6 py-4 h-[64px] font-poppins rounded-l-md md:rounded-l-none font-semibold text-lg text-white bg-primary-blue rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Shipping;
