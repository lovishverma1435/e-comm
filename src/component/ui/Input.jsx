import React from 'react'

const Input = ({classname,type,placeholder ,varient,labelclass,forlabel,labelvalue,inputid}) => {
  return (
    <>
    {
    varient === true ? (<>
    <div className="flex flex-col gap-[7.32px]">
    <label className={`${labelclass} outline-none font-Raleway font-[500] text-[14px] text-[#373737]`} htmlFor={forlabel}>{labelvalue}</label></div>
    <input className={`font-Raleway font-[500] text-[16px] pt-[25px] pl-[28px] pb-[21px] w-full border-[1px] border-[#969393] outline-none text-[#373737] ${classname}`} id={inputid} type={type} placeholder={placeholder}/>
    </>):<input className={`bg-[#f5f5f5] font-Nunito text-[16px] tracking-[-2%] text-[#999999] rounded p-[15px_0_13px_14px] outline-none border-none ${classname}`}  type={type} placeholder={placeholder} />
  }
    
    </>
  )
}

export default Input