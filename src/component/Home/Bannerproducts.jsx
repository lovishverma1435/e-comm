import React, { useEffect, useState } from 'react'
import bag from "../../../public/Images/blackpurspreview.png"
import shoe from "../../../public/Images/yellowproduct.png"
import redshoe from "../../../public/Images/Productred.png"

const Bannerproducts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getallhomedata');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  console.log(users)


  return (
    <>

      <div className="container    hidden xl:block relative mb-[334.88px]">
        <div className="flex absolute -top-[90px] rounded bg-lightwhite">
          {
            users.map((item, index) => (

              <div key={index + item + Date.now()} className="relative rounded-[5px] ">

                <h1 className='absolute text-natural-blue font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] top-[29px] left-[52px] max-w-[202px] w-full'>{item.name}</h1>
                <div className="">
                  <img src={`http://localhost:3000/upload/${item.images}`} alt="product" />
                </div>
                <div className="absolute flex bottom-14 left-[52px] gap-2 items-center">
                  <h4 className='font-poppins font-normal text-lg leading-[150%] tracking-[0.5px] line-through text-natural-gray'>{item.price}</h4>
                  <h4 className='font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] text-primary-red'>{item.discountPercent}</h4>
                </div>
                <h2 className='absolute flex font-Raleway font-bold text-3xl leading-[180%] tracking-[0.5px] text-primary-blue bottom-4 right-[52px]'>{item.originalPrice}</h2>
              </div>
            ))
          }


        </div>
      </div>
    </>
  )
}

export default Bannerproducts