import React, { useEffect, useState } from "react";
import cross from "../../../public/svg/cross.svg";
import plus from "../../../public/svg/plus.svg";
import minus from "../../../public/svg/minus.svg";
import cartjson from "../../json/Cart.json";
import Popupcart from "../Card/Popupcart";
import { motion } from "framer-motion";
import axios from "axios";

const Cart = () => {
  const [isCheck, setCheck] = useState(false);
  const userid = localStorage.getItem("id:")
  const [cartItems, setCartItems] = useState([]);
  console.log(userid)
  const pageVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } }
  };
  const getCart = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/getCart/${userid}`);
      const data = await response.json();
      setCartItems(data);
      localStorage.setItem("length", data.length)
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }
  useEffect(() => {
    getCart()
  }, []);

  const remove = async (userid, productId) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/removefromcart`, {
        data: { userid, productId }
      })
      setCartItems((item) =>
        item.filter((item) => item.productId !== productId))
    } catch (error) {
      console.error("Error removing item:", error);
    }
  }


  const update = async (userid, productId, newquantity) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/cartput`, {
        userid, productId, quantity: newquantity
      })
      setCartItems((item) =>
        item.map((item) => item.productId === productId ? { ...item, quantity: newquantity } : item
        ))
    } catch (error) {
      console.error("Error update item:", error);
    }
  }
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.Product.originalPrice * item.quantity,
    0
  );
  console.log(totalPrice)
  return (
    <>
      {cartItems.length === 0 ? (
        <p className="text-center text-primary-blue font-poppins text-3xl py-4 mb-5">Your cart is empty.</p>
      ) : (
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <section>
            <main>
              <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal sm:text-[18px] text-[15px] mb-[42.28px] ">
                <h1 className="text-primary-blue ">Home</h1>
                <h4 className=" text-lightgray-white"> /</h4>
                <h1 className="text-primary-blue"> Hot Deal</h1>
                <h4 className=" text-lightgray-white"> /</h4>
                <h4 className=" text-primary"> Nike Airmax 270 React</h4>
              </div>
              <div className="container">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="w-full hidden  pb-[23px] border-b-2 border-sidegray mb-[40px] pl-[50.46px] lg:flex justify-between items-center font-poppins font-[500] text-xl">
                      <h4>PRODUCT</h4>
                      <div className="flex items-center max-w-[488px] w-full justify-between">
                        <h4 className="w-[60px]">PRICE</h4>
                        <h4 className="w-[125px]">QTY</h4>
                        <h4 className="w-[113px]">UNIT PRICE</h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[111.35px] pb-[62.2px]">
                      {cartItems.map((item, index) => {
                        const productId = item.productId
                        const quantity = item.quantity
                        const increase = () => {
                          if (quantity < 10) {
                            const increasecount = quantity + 1
                            update(userid, productId, increasecount)
                          }
                        }

                        const deincrease = () => {
                          if (quantity > 1) {
                            const deincreasecount = quantity - 1
                            update(userid, productId, deincreasecount)
                          }
                        }
                        return (<>


                          <div key={item.productId}>
                            <div className="flex  flex-row  items-center justify-between">
                              <div className="flex lg:flex-row flex-col  lg:gap-0 gap-[10px]  lg:items-center max-w-[435.47px] w-full justify-start lg:justify-between">
                                <img onClick={() => remove(userid, item.productId)} className="w-[24px] h-[24px]" src={cross} alt="del" />
                                <div className="flex md:flex-row flex-col  items-start md:items-center gap-[28.7px]">
                                  <img
                                    className="w-[138px] h-[94px]"
                                    src={`http://localhost:3000/upload/${item.Product.headimgage}`}
                                    alt="redshoue"
                                  />
                                  <h4 className="font-poppins text-[13px] sm:text-[18px] text-primary">
                                    {item.Product.name}
                                  </h4>
                                </div>
                              </div>
                              <div className="font-poppins sm:flex-row sm:gap-0 gap-2 flex-col text-[13px] sm:text-[18px] text-primary flex items-center max-w-[488px] w-full justify-between">

                                <h4>{item.Product.originalPrice}</h4>
                                <div className="flex w-[125px]  bg-sidegray h-[49px] justify-between items-center rounded border-2 border-sidegray">
                                  <div
                                    onClick={() =>
                                      deincrease()
                                    }
                                    className="w-[27.2px] cursor-pointer h-full flex justify-end items-center"
                                  >
                                    <img src={minus} alt="minus" />

                                  </div>

                                  <h4>{item.quantity}</h4>
                                  <div
                                    onClick={() =>
                                      increase()
                                    }
                                    className="w-[27.2px] cursor-pointer h-full flex justify-start items-center"
                                  >
                                    <img src={plus} alt="plus" />
                                  </div>
                                </div>


                                <h4 className="sm:w-[113px]">{item.Product.originalPrice * item.quantity}</h4>
                              </div>
                            </div>
                          </div></>)
                      })}
                    </div>
                  </div>
                  <div className="flex md:justify-between md:items-start pb-[156.47px] flex-col gap-[20px] md:gap-0 justify-center items-center md:flex-row">
                    <div className="flex  ">
                      <input
                        className="max-w-[251px] w-full text-primary opacity-[50%] p-[19px_0_17px_20px] h-[60px] font-poppins font-normal text-[16px]  outline-none border-t-2 border-b-2 border-l-2 border-roundedgray rounded-bl-[3px] rounded-tl-[3px]"
                        type="text"
                        placeholder="Voucher code"
                      />
                      <button className="max-w-[127px] w-full p-[18px_21px_14px_21px] font-poppins h-[60px] font-[500] text-[18px] text-white bg-primary-blue rounded-r-[3px]">
                        Redeem
                      </button>
                    </div>
                    <div className="flex flex-col max-w-[377px] w-full">
                      <div className="flex flex-col gap-[23px]">
                        {cartjson.titledata.map((item, index) => (
                          <div key={item + index + Date.now()}>
                            <div
                              className={`${index === 2 &&
                                "mb-[28px] border-b-2 border-sidegray"
                                } flex  w-full justify-between font-poppins text-[18px] text-primary`}
                            >
                              <h4 className="">{item.title}</h4>
                              {index === 2 ? (
                                <>
                                  <h4 className="pb-[24px] ">{item.value}</h4>
                                </>
                              ) : index === 1 ? (
                                <>
                                  <h4>${item.data}</h4>
                                </>
                              ) : (
                                <>
                                  <h4>${totalPrice}</h4>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex pb-[24px] justify-between font-poppins font-[500] text-primary-dark text-[30px]">
                        <h4>TOTAL</h4>
                        <h4>${totalPrice + 20}</h4>
                      </div>
                      <div
                        onClick={() => setCheck(true)}
                        className="bg-primary-blue flex items-center cursor-pointer justify-center py-4 rounded "
                      >
                        <button className="font-poppins  font-medium text-lg text-white  cursor-pointer ">
                          Check out
                        </button>
                      </div>


                      {isCheck && (
                        <>
                          <div onClick={() => setCheck(false)} className="fixed inset-0  bg-[#2222224D]    z-40"></div>

                          <div className="fixed  inset-0 flex   m-auto  justify-center items-center z-50">
                            <Popupcart varient={true} data={() => setCheck(false)} />
                          </div>
                        </>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default Cart;
