import React, { useEffect, useState } from 'react'
import arrowdown from "../../../public/svg/arrowdown.svg"
import profile from "../../../public/svg/profile.svg"
import cart from "../../../public/svg/cart.svg"
import search from "../../../public/svg/search.svg"
import icon from "../../../public/svg/icon.svg"
import Headerjson from "../../json/Header.json"
import { Link, NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Popup from './Popup'
import { useCart } from '../cart/Cartcontext'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/Slice/CounterSlice'

const Dropdown = ({ name, items, activeDropdown, setActiveDropdown }) => {
  const down = activeDropdown === name;
  const [data, setdata] = useState("")
  return (
    <>
      <div
        onClick={() => setActiveDropdown(down ? null : name)}
        className="font-proxima cursor-pointer flex flex-col  relative">
        <div className="flex gap-[5.6px] items-center">
          <h1 className={`${data ? "text-primary-blue" : "text-primary-dark"} font-[400] text-xl   `}>{data ? data : name}</h1>
          <img className={`transition-all duration-200 ${down ? "rotate-180" : "rotate-0"}`} src={arrowdown} alt="arrowdown" />
        </div>

        <div className={`w-[100px] bg-primary-blue p-1 top-[40px] transition-all duration-200 text-white rounded flex flex-col absolute justify-center items-center ${down ? "h-[100px] z-10 opacity-100" : "h-0 -z-10 opacity-0"}`}>
          {items.map((item, index) => (
            <div key={index}>
              <h1 onClick={() => setdata(item)} className={`${index === 0 ? "w-[38.26px]" : "w-[55.26px]"} font-[400]  text-x2l   border-b-2 border-b-transparent hover:border-b-white`}>
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const Header = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const length = localStorage.getItem("length")
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [Click1, setClick1] = useState(false)
//  const { cartLength } = useCart();
//  console.log(cartLength,"-----------------")
  // const count = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    
    loading ? "" : <>
     {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
    </div> */}
      <section className={`  ${Click1 ? " hidden" : "block"} transition-all  duration-200 border-b-[2px] border-lightgray`}>
        <div className="container">
          <div className="pt-[9.74px]  md:flex justify-between items-center hidden ">
            <div className={` flex gap-4`}>
              <Dropdown
                name="EN"
                items={["EN", "HINDI", "PUNJABI"]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <Dropdown
                name="USD"
                items={["IND", "USD", "USA"]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>
            <div className="flex justify-between w-[366.15px]  items-center">
              <div className="flex justify-between items-center  w-[113.53px] ">
                <img src={profile} className='w-[20px] h-[20px]' alt="profile" />
                <h4 className='font-proxima font-[400] text-xl    text-primary'>My profile</h4>
              </div>
              <div className="w-[75px] p-[16px_25px_19px_26px]  relative">
                <Link to={"/cart"}>
                  <img src={cart} className='' alt="cart" />
                </Link>
                  <span className='bg-primary-red top-[5px] border-white border-[2px] right-[15px]  absolute flex justify-center items-center text-white font-poppins font-bold text-[10px] tracking-[0.5px] w-[22px] h-[22px]  rounded-full' >{}{length}</span>
              </div>
              <div className="flex justify-between  font-proxima font-[400] text-xl w-[137px] ">
                <h4 className='w-[53px] text-primary text-end'> Items</h4>
                <h4 className='w-[52px] text-primary opacity-[50%]'>$0.00</h4>
              </div>
              <img className='w-[20.95px] h-[20.94px] ' src={search} alt="search" />
            </div>
          </div>
        </div>
      </section>
      {/* Additional JSX code such as mobile header and nav links can go here with cartLength used similarly */}
    </>
  )
}

export default Header
