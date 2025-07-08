import React, { useState } from 'react'
import Input from '../ui/Input'
import cartjson from "../../json/Cart.json"
const Paymenydetails = ({valuefirst}) => {
      const [click, setclick] = useState(false);
    
  return (
    
    (<>
            
        <div className="flex flex-col lg:flex-row justify-between md:pl-[20px] pb-[27px]">
           <div className="flex flex-col-reverse lg:flex-col max-w-[380px] w-full">
             <div className="flex lg:flex-col flex-col-reverse   gap-[33px] mb-[24px]">
               <Input
                 classname={" w-full "}
                 placeholder={"First Name"}
                 type={"text"}
               />
               <Input
                 classname={" w-full "}
                 placeholder={"Email Address"}
                 type={"email"}
               />
             </div>
             <div className="flex flex-col gap-[14.25px]">
               <h4 className="font-Raleway font-[600] text-xl text-primary-blue">
                 Select Method of Payment
               </h4>
               <div className="flex flex-col">
                 {cartjson.bankdetal.map((item, index) => (
                   <div key={Date.now() + item + index}>
                     <div
                       onClick={() => setclick(index)}
                       className={`${
                         click === index ? "bg-[#EBF0FF]" : "bg-white"
                       } p-[16px_13px_16px_16.16px] flex transition-all cursor-pointer duration-200 rounded justify-between items-center `}
                     >
                       <div className="flex items-center gap-[19px]">
                         <img src={item.img} alt="image" />
                         <h4 className="font-poppins font-bold text-[12px] leading-[150%] tracking-[0.5px] text-natural-blue">
                           {item.title}
                         </h4>
                       </div>
                       <div
                         className={`${
                           click === index ? "bg-[#EBF0FF]" : "bg-white"
                         } transition-all duration-200 w-[24px] h-[24px] flex justify-center items-center border-[1px] border-buttongray rounded cursor-pointer`}
                       >
                         {click === index ? (
                           <>
                             <img
                               src={"../../../public/svg/true.svg"}
                               alt="imagestrue"
                             />
                           </>
                         ) : (
                           ""
                         )}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
             <div className="max-w-[383px] w-full">
             <Input
                 classname={" w-full mb-[39.41px] "}
                 placeholder={"Last Name"}
                 type={"text"}
               />
                <Input
                 classname={" w-full p-[26px_0_75px_14px] mb-[27.49px] "}
                 placeholder={"Address for Delivery"}
                 type={"text"}
               />
               <Input
                 classname={" w-full  "}
                 placeholder={"Mobile Phone"}
                 type={"number"}
               />
             </div>
         </div>
         <button onClick={valuefirst}  className={` max-w-[338px] w-full flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Go to Payment</button>
        
        </>)
  )
}

export default Paymenydetails