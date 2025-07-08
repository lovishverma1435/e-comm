import { Fragment, useEffect, useState } from 'react'
import rating from "../../../public/svg/rate.svg"
import productjson from "../../json/Product.json"
import arrow from "../../../public/svg/arrowdown.svg"
import cart from "../../../public/svg/cartblue.svg"
import wishlist from "../../../public/svg/wishlistblue.svg"
import plus from "../../../public/svg/plus.svg"
import minus from "../../../public/svg/minus.svg"
import facebook from "../../../public/svg/facebookwhite.svg"
import twitter from "../../../public/svg/twitterwhite.svg"
import swiperimg from "../../../public/images/firstProduct.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./Product.css"
import nikeprojson from "../../json/nikeinfo.json"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Seller from '../../component/Card/Seller'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAsync } from '../../redux/Slice/AddcartSlice'
// import { addToCart } from '../../redux/Slice/AddcartSlice'

const Product = () => {
    const user = useSelector((state) => state.products)
    console.log(user, "ijoujiojlkum9o87oium89onuky7")
    const { id } = useParams();


    // stats
    const [produtsdata, setProdutsdata] = useState([]);
    const [isborder, setIsborder] = useState(false);
    const [arrowdata, setarrowdata] = useState(false);
    const [count, setcount] = useState(1);
    const [isindex, setindex] = useState(0)
    const [isImage, setImage] = useState("");
    const [xldata, setxldata] = useState("XS");
    const [itemsdata, setitemsdata] = useState([]);






    // size data
    const value = [
        {
            value: "XS"
        },
        {
            value: "M"
        },
        {
            value: "S"
        },
        {
            value: "XL"
        },
        {
            value: "XXL"
        }
    ]

    // related produts api
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/getallproduct");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setProdutsdata(data.data.slice(0, 4));
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };


    // const addToCart = async (userid, productId, quantity) => {
    //     try {
    //         const response = await axios.post("http://localhost:3000/api/cartpost", {
    //             userid,
    //             productId,
    //             quantity,

    //         })

    //         alert("Item added to cart!");
    //         return response;
    //     } catch (error) {
    //         console.error("Error adding to cart:", error.message);
    //         return { success: false, error: error.message };
    //     }
    // };

    //  get product by one
    const fetchitems = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/getoneproduct/${id}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setitemsdata([data.data])
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };


    useEffect(() => {
        const fetch = async () => {
            await fetchUsers()
            if (id) {
                await fetchitems();
            }
        }
        fetch()
    }, [id]);
    // const navigate = useNavigate()
    // const hendelchange = async (params) => {
    //     const hendel = addToCart(token, proid, count)
    //     if (hendel) {
    //         navigate("/cart")
    //         // window.location.reload()
    //     }
    // }
    const dispatch = useDispatch();

   const hendelchange = () => {
  dispatch(addToCartAsync({ userid: token, productId: proid, quantity: count }))
   
};
    const token = localStorage.getItem("id:")
    const proid = id
    console.log(token, "---------------------", proid)
    return (
        <>
            <section >
                <main>
                    <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal md:text-[18px] text-[15 px] mb-[42.28px] ">
                        <h1 className="text-primary-blue ">Home</h1>
                        <h4 className=" text-lightgray-white"> /</h4>
                        <h1 className='text-primary-blue'> Hot Deal</h1>
                        <h4 className=" text-lightgray-white"> /</h4>
                        <h4 className=" text-primary"> Nike Airmax 270 React</h4>
                    </div>
                    <div className="container">
                        {
                            itemsdata.map((item, index) => {
                                return (<>
                                    <div key={item + index}>
                                        <div className="flex  lg:pl-[21.45px] pb-[49px] flex-col  gap-[30px] lg:gap-0 lg:flex-row  justify-between xl:justify-start">
                                            <div className="lg:mr-[36px]">
                                                <img className={'object-contain max-w-[375px] w-full h-[272px] bg-lightwhite rounded'} src={`http://localhost:3000/upload/${isImage || item.detailimages[2].img}`} />
                                                <div className="sm:flex grid grid-cols-2 gap-[15.50px] lg:pt-[150px] pt-[50px] w-full">
                                                    {
                                                        item.detailimages.map((item, index) => (
                                                            <div className='flex items-center justify-center' key={index}>

                                                                <img onClick={() => setImage(item.img)} className='max-w-[86px] w-full cursor-pointer hover:border-2 hover:border-primary-blue rounded' src={`http://localhost:3000/upload/${item.img}`} alt="Image" />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex flex-col max-w-[500px] w-full lg:mr-[32px] overflow-hidden  ">
                                                <div className="flex flex-col gap-[27px] pb-[22px] mb-[17px] border-b-2 border-sidegray w-full">
                                                    <h1 className=' font-poppins font-[500] text-2xl text-primary-dark'>{item.name}</h1>
                                                    <div className="flex items-center sm:gap-[17px] gap-[10px]">
                                                        <img className='w-[77px] h-[11px]' src={`http://localhost:3000/upload/${item.raiting}`} alt="rating" />
                                                        <h4 className=' font-[400] text-[16px] text-lightgray-white'>{item.rewiews} rewiews</h4>
                                                        <h4 className='font-[400] text-[16px] text-skyblue'>Submit a review</h4>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-[9.14px] mb-[18px]">
                                                    <h4 className='font-poppins font-bold text-xl leading-[180%] tracking-[0.5px] text-primary-blue '>{item.originalPrice}</h4>
                                                    <div className=" flex items-center gap-[8px]">
                                                        <h4 className='font-poppins line-through font-[400] text-[14px] leading-[150%] tracking-[0.5px] text-natural-gray'>{item.price}</h4>
                                                        <h4 className='font-poppins font-bold text-[14px] leading-[150%] tracking-[0.5px] text-primary-red'>{item.discountPercent}</h4>
                                                    </div>
                                                </div>
                                                <div className="flex font-poppins font-normal text-[14px] text-primary gap-[53px] pb-[23px] border-b-2 border-sidegray mb-[20px]">
                                                    <div className="flex flex-col gap-4">
                                                        {
                                                            item.avalible.map((item, index) => (
                                                                <div key={item + index}>

                                                                    <h4>{item.title}</h4>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="flex flex-col gap-4 ">
                                                        {
                                                            item.optionavalible.map((item, index) => (
                                                                <div key={item + index}>

                                                                    <h4>{item.title}</h4>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex sm:gap-[23px] gap-0 items-end pb-[21px]">
                                                    <h4 className='font-poppins text-[16px] text-primary w-[123px] text-start '>Select Color:</h4>
                                                    <div className="flex flex-col items-start">
                                                        {
                                                            productjson &&
                                                            <div className="flex gap-[17px] ">
                                                                {item.selectedColor.map((item, index) => (
                                                                    <Fragment key={index + item + Date.now()}>

                                                                        <div
                                                                            className="flex  items-center w-[27px] h-[27px] justify-center rounded-full"
                                                                            style={{ border: `2px solid  ${isborder === index ? item?.color : "transparent"}` }}
                                                                        >
                                                                            <button
                                                                                style={{ background: item.color }}
                                                                                onClick={() => setIsborder(index)}
                                                                                className={`cursor-pointer ${isborder === index ? "w-[17px] h-[17px]" : "h-[21px] w-[21px]"
                                                                                    } rounded-full`}
                                                                            ></button>
                                                                        </div>
                                                                    </Fragment>
                                                                ))}
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex relative gap-[98.36px] w-full mb-[20px] items-center pb-[21px] border-b-2 border-sidegray" >
                                                    <h4 className='font-poppins text-[16px] text-primary '>Size</h4>
                                                    <div onClick={() => setarrowdata(!arrowdata)} className={`  flex items-center max-w-[123px] w-full border-2 justify-between border-sidegray rounded p-[10px_18px_10px_16px]`}>
                                                        <h4 className='text-[14px] '>{xldata && xldata}</h4>
                                                        <img className={`${arrowdata ? "rotate-180" : "rotate-0"} transition-all duration-200 w-[7.9px] h-[4.25px]`} src={arrow} alt="arrow" />
                                                    </div>

                                                    <div className={` ${arrowdata ? "h-[135px] opacity-100 z-50" : "h-0 opacity-0 -z-50"} transition-all duration-200 flex flex-col w-16 left-[160px] top-[45px]  bg-sidegray rounded py-2 px-4 absolute text-start`}>
                                                        {
                                                            value.map((item, index) => (
                                                                <div onClick={() => setarrowdata(false)} key={item + index}><h4 onClick={() => setxldata(item.value)}>{item.value}</h4></div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex sm:flex-row flex-col gap-[30px] sm:gap-0 justify-between items-center pb-[22.23px] border-b-2 border-sidegray mb-[20.2px]">
                                                    <div className="flex w-[124px]  bg-sidegray h-[49px] justify-between items-center rounded border-2 border-sidegray">
                                                        <div onClick={() => setcount(count == 1 ? count : count - 1)} className="w-[27.2px] cursor-pointer h-full flex justify-end items-center"><img src={minus} alt="minus" /></div>

                                                        <h4>{count}</h4>
                                                        <div onClick={() => setcount(count >= 10 ? count : count + 1)} className="w-[27.2px] cursor-pointer h-full flex justify-start items-center"><img src={plus} alt="plus" /></div>

                                                    </div>



                                                    {/* ===================================================================================================================== */}

                                                    <div className="flex gap-[17px] max-w-[225px] w-full">
                                                        <button onClick={() => hendelchange()} className="flex items-center gap-2 bg-lightskyblue  max-w-[159px] w-full pt-[14px] pb-[16px] h-[48px] justify-center rounded">
                                                            <img src={cart} className="w-[15.95px] h-[16px]" alt="image" />
                                                            <h4 className='font-poppins font-medium text-sm text-primary-blue cursor-pointer'>Add To Cart</h4>
                                                        </button>
                                                        <div className="flex bg-lightskyblue h-[48px] w-[48px] justify-center items-center   rounded cursor-pointer">
                                                            <img src={wishlist} alt="image" />
                                                        </div>
                                                    </div>




                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-0 max-w-[499.49px] w-full justify-between items-center font-poppins font-[500] text-[16px]">
                                                    <div className="flex max-w-[244.43px] w-full bg-[#385C8E] gap-[12.32px] rounded text-white items-center pt-[13.96px] pb-[16.88px]  justify-center">
                                                        <img src={facebook} alt="facebook" />
                                                        <h4>Share on Facebook</h4>
                                                    </div>
                                                    <div className="flex max-w-[244.43px] w-full bg-skyblue gap-[14.19px] text-white rounded  items-center pt-[12.95px] pb-[17.6px] justify-center">
                                                        <img src={twitter} alt="twitter" />
                                                        <h4>Share on Twitter</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" flex-col gap-[35px] hidden xl:flex ">
                                                <h4 className='font-normal text-[18px] text-lightgray-white'>BEST SELLER</h4>
                                                <div className=" w-[284px] ">

                                                    <Swiper
                                                        modules={[Pagination, Autoplay]}
                                                        pagination={{
                                                            clickable: true,
                                                        }}
                                                        autoplay={{ delay: 2500 }}
                                                        loop={true}
                                                        className="mySwiper"
                                                    >
                                                        {
                                                            item.bestsellerimg.map((item, index) => (
                                                                <div key={index + item + Date.now()}>
                                                                    <SwiperSlide ><div className="flex flex-col mb-[30px] justify-center items-center border-2 rounded border-sidegray">
                                                                        <img className='w-[284px] h-[240px]' src={`http://localhost:3000/upload/${item.img}`} alt="" />
                                                                        <div className="flex flex-col w-[93px] gap-[12px] justify-center pt-[53px] pb-[34px] items-center  ">
                                                                            <img className='w-[77px] h-[11px] ' src={rating} alt="rating" />
                                                                            <div className="flex gap-[11.42px] items-center justify-center ">
                                                                                <h4 className='font-normal text-[16px] text-primary-red'>$499</h4>
                                                                                <h4 className='line-through text-[16px] text-lightgray-white'>$599</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div></SwiperSlide>
                                                                </div>
                                                            ))
                                                        }
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-lightgray rounded relative  flex-col  max-w-[930px] w-full mt-[49px] mb-[78px] hidden lg:flex">
                                            <div className=" flex ab gap-[79px] pl-[31.82px] z-50  pt-[34.29px]">
                                                {
                                                    item.paragraph.map((item, index) => (
                                                        <div key={index + item - Date.now()}>
                                                            <Link to={item.path}>
                                                                <div className={` ${index === 0 ? "174.82px" : index === 1 ? "87.44px" : "109.92px"} flex   h-[55px] `} >
                                                                    {
                                                                        index === 0 && (<>
                                                                            <h1 onClick={() => setindex(0)} className='font-poppins  font-normal text-lg hover:border-b-4  hover:border-primary-blue hover:text-primary-blue'>{item.title}</h1>

                                                                        </>)
                                                                    }
                                                                    {
                                                                        index === 1 && (<>
                                                                            <h1 onClick={() => setindex(1)} className='font-poppins  font-normal text-lg hover:border-b-4  hover:border-primary-blue hover:text-primary-blue'>{item.title}</h1>
                                                                            <p className='font-poppins font-normal leading-[180%] text-neutral-gray tracking-[0.5px] pl-0.5 pt-[0.3px]'>0</p>
                                                                        </>)
                                                                    }
                                                                    {
                                                                        index === 2 && (<>
                                                                            <h1 onClick={() => setindex(2)} className='font-poppins  font-normal text-lg hover:border-b-4  hover:border-primary-blue hover:text-primary-blue'>{item.title}</h1>

                                                                        </>)
                                                                    }
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="   border-b-4 border-lightborder"></div>
                                            {
                                                isindex == 0 && (
                                                    item.productInfomation.map((item, index) => (
                                                        <div key={index + item - Date.now()}>
                                                            <Link className='' to={item.path}>
                                                                <div className={`${index == 0 ? "pl-[31px] pt-[21px]" : index === 1 ? "pl-[31px]" : "pl-[31px] pb-[31px]"} max-w-[765px] w-full   gap-[15px] flex flex-col`}>
                                                                    <h4 className='font-poppins font-normal text-[12px] leading-[180%] text-neutral-gray tracking-[0.5px]'>{item.title}</h4>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))
                                                )
                                            }{
                                                isindex == 1 && (
                                                    <h1 className='font-poppins font-normal text-[12px] leading-[180%] text-neutral-gray tracking-[0.5px] pl-[31px] pt-[21px]'>Coming Soon</h1>
                                                )
                                            }{
                                                isindex == 2 && (
                                                    <h1 className='font-poppins font-normal text-[12px] leading-[180%] text-neutral-gray tracking-[0.5px] pl-[31px] pt-[21px]'>Not available</h1>
                                                )
                                            }
                                        </div>
                                    </div>
                                </>)
                            })
                        }
                        <div className="flex flex-col gap-[83.76px] pb-[86.26px] justify-center items-center">
                            <h4 className='font-poppins font-[600] sm:text-[35px] text-[28px] text-primary-dark'>RELATED PRODUCTS</h4>
                            <div className="xl:flex grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-[30px] grid-rows-2 w-full justify-between">
                                {
                                    produtsdata.map((item, index) => (
                                        <div key={item + index}>
                                            <Link key={Date.now() + "productsdata" + index} to={`/product/${item?.id}`}>
                                                <Seller varient={index === 0 ? true : false} data={item} />
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}

export default Product