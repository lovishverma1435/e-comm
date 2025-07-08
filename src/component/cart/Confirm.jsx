import React from 'react'
import successicon from "../../../public/svg/SuccessIcon.svg"

const Confirm = ({data}) => {
  return (
    <>

            
            <div className="flex flex-col justify-center items-center gap-[49px]">
              <div className="flex flex-col justify-center">
                  <img src={successicon} alt="icon" />
                  <h4 className="font-poppins font-bold text-[24px] leading-[150%] tracking-[0.5px] text-center h-[65px] text-[#223263]">Success</h4>
              </div>
              <button onClick={data}  className={` max-w-[338px] w-full flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Complete</button>
             
          
            </div>
          
                    
    </>
  )
}

export default Confirm