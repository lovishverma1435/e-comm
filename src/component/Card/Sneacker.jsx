import React, { useEffect, useState } from "react";
import sneackerimage from "../../../public/images/sneacker.png";



const Sneacker = ({ width, container, height, imgclass, headingstyle, pstyle, buttonstyle, spanstyle, section, relative }) => {
  const [bannerdata, setbannerdata] = useState([]);
const [loading, setLoading] = useState(false);


const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/hotgetbannerall");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setbannerdata(data.data);
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
      <section className={`${section}   `} >
        <main className={`${height} bg-primary-blue `}>
          <div className={`${container}`}>
            {
              bannerdata?.map((item, index) => (
                <div key={index + Date.now()}>
                  <div className={`${relative} flex relative   text-white`}>
                    <div className={`${width}    flex flex-col  `}>
                      <h1 className={`${headingstyle} font-poppins  `}>
                        {item.title}
                      </h1>
                      <p className={`${pstyle} font-poppins  `}>
                       {item.info}
                      </p>
                      <button className={`${buttonstyle} font-poppins `}>
                        {item.button}
                      </button>
                      <span className={`${spanstyle} bg-white `}></span>
                    </div>
                    <img
                      className={`${imgclass} absolute `}
                      src={`http://localhost:3000/upload/${item.image}`}
                      alt="sneackerimage"
                    />
                  </div>
                </div>
         ))}
         </div>
        </main>
      </section>
    </>
  );
};

export default Sneacker;
