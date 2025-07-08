import  { useState } from "react";
import backimg from "../../../public/svg/StatusBar.svg";
import cross from "../../../public/svg/bluecross.svg";
import Paymenydetails from "../cart/Paymenydetails";
import Carddetails from "../cart/Carddetails";
import Confirm from "../cart/Confirm";
const Popupcart = ({ data ,varient}) => {
  const [button,setbutton]=useState(0)
  
  return (
    <>
      <section >
        <main>
          <div className="lg:w-[1021px] md:w-[600px] sm:w-[400px] w-[310px]  bg-white p-[30px_15px_30px_15px] md:p-[41.19px_97.59px_78.34px_68.23px] rounded">
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center pb-0.5">
                <div onClick={()=>(button === 1 ? setbutton(false)  : button ===2  ?  setbutton(1) : setbutton(false))} className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center">
                  <img  src={backimg} alt="back" />
                </div>
                <div
                  onClick={data}
                  className="w-[40px] h-[40px] cursor-pointer  flex justify-center items-center"
                >
                  <img src={cross} alt="cross" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[43.22px] justify-center items-center pb-[40px]">
              <h4 className="flex justify-center items-center text-primary-blue font-Raleway font-[600] text-[32px]">
                Make Payment
              </h4>
              <div className="flex justify-between relative  w-[155px]  items-center font-Nunito font-bold text-[18px] tracking-[-2%] text-white">
                <div className={`${ button ===2 ? "bg-primary-blue" :"bg-buttongray"} w-[50px] h-[2px] absolute right-6 bg-buttongray`}></div>
                <div className={`${button===1 ? "bg-primary-blue" : button ===2 ? "bg-primary-blue" :"bg-buttongray"} w-[50px] h-[2px] absolute left-6 bg-buttongray`}></div>
                <div onClick={()=>setbutton(0)} className="bg-primary-blue cursor-pointer z-10 w-[36px] h-[36px] rounded-full flex justify-center items-center">
                  <h4>1</h4>
                </div>
                <div onClick={()=>setbutton(1)} className={`${button===1 ? "bg-primary-blue" : button ===2 ? "bg-primary-blue" :"bg-buttongray"} cursor-pointer bg-buttongray z-10 w-[36px] h-[36px] rounded-full flex justify-center items-center`}>
                  <h4>2</h4>
                </div>
                <div onClick={()=>setbutton(2)} className={`${ button ===2 ? "bg-primary-blue" :"bg-buttongray"} bg-buttongray z-10   w-[36px] h-[36px] cursor-pointer rounded-full flex justify-center items-center`}>
                  <h4>3</h4>
                </div>
              </div>
            </div>

            {

                // ///////////////////////////////////////////////////////////////////////////
            button === 1 ?
            
            
            
            <Carddetails valuesec={()=>setbutton(2)}/>
            
            //////////////////////////////////////////////////////////////////////
            
            : button === 2 ?  
            
          <Confirm data={data}/>
            
            :
            
            
            <Paymenydetails valuefirst={()=>setbutton(1)}/>
            ////////////////////////////////////////////////////
           }
           
        
          </div>
        </main>
      </section>
    </>
  );
};

export default Popupcart;
