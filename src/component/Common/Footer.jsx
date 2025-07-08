import React from "react";
import footerjson from "../../json/Footer.json";
import Westernunion from "../../../public/svg/Western-union.svg";
import card2 from "../../../public/svg/card2.svg";
import Paypal from "../../../public/svg/Paypal.svg";
import backgroundvisa from "../../../public/svg/visabackground.svg";
import visaname from "../../../public/svg/visaname.svg";
import visasidebar from "../../../public/svg/visasidebar.svg";

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[40px] bg-lightskyblue">
      <main>
        <div className="max-w-[1200px] w-full mx-auto flex flex-col px-4">
          {/* Footer Sections */}
          <div className="w-full pb-16">
            <div className="flex flex-wrap justify-between gap-6">
              {footerjson.data.map((item, index) => (
                <div key={item + index + Date.now()} className="w-full sm:w-[48%] md:w-[30%] lg:w-auto">
                  <div className={`flex flex-col gap-4 w-[221.1px] `}>
                    <div className="flex items-center gap-3">
                      {item.img && (
                        <img
                          className="w-[39px] h-[39px]"
                          src={item.img}
                          alt="icon"
                        />
                      )}
                      {item.heading ? (
                        <h4 className="font-poppins font-bold text-[18px] text-primary-dark">
                          {item.heading}
                        </h4>
                      ) : (
                        <div className="font-poppins font-[500]  text-[18px] text-primary-dark">{item.data}</div>
                      )}
                    </div>

                    {item.tittle ? (
                      <p className="font-proxima font-[500] text-[12px] text-primary-dark">
                        {item.tittle}
                      </p>
                    ) : (
                      <p className="font-proxima font-[400] text-[14px] text-primary-dark">
                        E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                      </p>
                    )}

                    {item.facebook && (
                      <div className="flex gap-6 ">
                        <img src="../../../public/svg/facebook.svg" alt="facebook" />
                        <img src="../../../public/svg/twitter.svg" alt="twitter" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-wrap justify-between gap-6 pb-12">
            {footerjson.information.map((item, index) => (
              <div key={Date.now() + item + index} className="w-full sm:w-[48%] md:w-auto">
                <div className="flex flex-col gap-4">
                  <h1 className="font-poppins font-normal text-[18px] text-primary-dark">
                    {item.heading}
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">About Us</p>
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">Information</p>
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">Privacy Policy</p>
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">Terms & Conditions</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <span className="w-full h-[1px] bg-[#F6F7F8] mb-8"></span>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h1 className="text-lightgray-white font-poppins font-[400] text-[14px] text-center md:text-left">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </h1>

            <div className="relative flex items-center gap-3 flex-wrap">
              <img src={Westernunion} alt="Westernunion" />
              <img src={card2} alt="card2" />
              <img src={Paypal} alt="Paypal" />

              {/* VISA Composite */}
              <div className="relative w-[50px] h-[30px] flex justify-center items-center">
                <img className="absolute w-full h-full" src={backgroundvisa} alt="visa-bg" />
                <img className="absolute " src={visaname} alt="visa-name" />
                <img className="absolute top-[11px] left-[11px]" src={visasidebar} alt="visa-sidebar" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
