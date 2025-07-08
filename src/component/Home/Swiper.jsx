// import React, { Fragment, useEffect, useState } from "react";
// import data from "../../json/saller.json";

// import Seller from "../../component/Card/Seller";
// import { Link } from "react-router-dom";
// const Swiperdata = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", ...new Set(data.saller.map((item) => item.category))];

//   const filteredProducts =
//     selectedCategory === "All"
//       ? data.saller
//       : data.saller.filter((item) => item.category === selectedCategory);


//   const [produtsdata, setProdutsdata] = useState([]);
//   console.log(produtsdata, "produtsdata")
//   const [loading, setLoading] = useState(false);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch('http://localhost:3000/api/getalldata');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setProdutsdata(data.user);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);



//   return (
//     <>
//       {/* Category Tabs */}
//       <div className="flex flex-wrap gap-4 mb-6 max-w-[627px] w-full justify-center sm:justify-between mx-auto">
//         {categories.map((category, idx) => (
//           <button
//             key={idx}
//             onClick={() => setSelectedCategory(category)}
//             className={`font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  transition duration-300 border-b-2 ${selectedCategory === category
//               ? "text-primary-blue border-primary-blue"
//               : "text-primary border-transparent hover:border-primary-blue hover:text-primary-blue"
//               }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Responsive Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[34.5px] place-items-center">
//         {/* <Seller data={filteredProducts}/> */}
//         {produtsdata && produtsdata?.map((item, index) => {
//           return (
//             <Link key={Date.now() + "productsdata" + index} to={`/Hotdeal/${item?.id}`} >
//               <Seller
//                 data={item}
//               />
//             </Link>)
//         })}
//       </div>
//     </>
//   );
// };

// export default Swiperdata;


import { useEffect, useState } from "react";
import data from "../../json/saller.json";
import Seller from "../../component/Card/Seller";
import { Link } from "react-router-dom";

const Swiperdata = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [produtsdata, setProdutsdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = ["All", ...new Set(data.saller.map((item) => item.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? data.saller
      : data.saller.filter((item) => item.category === selectedCategory);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getallproduct");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProdutsdata(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);



  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-6 max-w-[627px] w-full justify-center sm:justify-between mx-auto">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  transition duration-300 border-b-2 ${selectedCategory === category
              ? "text-primary-blue border-primary-blue"
              : "text-primary border-transparent hover:border-primary-blue hover:text-primary-blue"
              }`}
          >
            {category}
          </button>
        ))}
      </div>



      {/* Product Grid or Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[34.5px] place-items-center">
        {produtsdata && produtsdata && produtsdata.length > 0 && produtsdata?.map((item, index) => (
          <Link key={Date.now() + "productsdata" + index} to={`/product/${item?.id}`}>
            <Seller varient={index === 0 ? true : false} data={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Swiperdata; 