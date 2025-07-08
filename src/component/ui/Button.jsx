import React from 'react'

const Button = ({classname,title,data}) => {
  return (
  <>
  
  <button  className={`${classname} w-[338px] flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>{title}</button>
  </>
  )
}

export default Button