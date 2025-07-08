import React, { useEffect, useState } from "react";
import bg from "../../../public/images/PromotionImage.png";

const Flashoff = () => {

  return (
    <>
      <section>
        <div
          className="bg-center bg-no-repeat pt-[100px] bg-cover sm:pt-[150px] md:pt-[200px] lg:pt-[258.73px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[653.73px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container px-4">
            <h4 className="text-white font-poppins font-bold text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[120%] tracking-wide max-w-full sm:max-w-[500px] md:max-w-[573.17px]">
              Super Flash Sale 50% Off
            </h4>
          </div>
        </div>
      </section>

    </>
  );
};

export default Flashoff;
