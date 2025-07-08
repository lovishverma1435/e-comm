import { motion } from "framer-motion";
import caracterimg from "../../public/images/call.png"
import Input from '../component/ui/Input';

const verticalFlip = {
  initial: {
    rotateX: 180,
    opacity: 0,
    transformOrigin: "bottom",
  },
  animate: {
    rotateX: 0,
    opacity: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    rotateX: -180,
    opacity: 0,
    transformOrigin: "bottom",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Contect = () => {
  return (
    <motion.div
     variants={verticalFlip}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,}}
    >
      <section>
        <main>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center bg-sidegray py-4 gap-2 text-base md:text-lg mb-[135px]">
            <h1 className="text-primary-blue">Home</h1>
            <h4 className="text-lightgray-white"> /</h4>
            <h4 className="text-primary"> Contact Us</h4>
          </div>

          {/* Main Content */}
          <div className="container px-4">
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-[50.9px] items-center pb-[135px]">
              
              {/* Image and Contact Info */}
              <div className="relative  text-white flex flex-col items-end bg-primary-blue w-full xl:max-w-[626px] sm:h-[600px] xl:h-[715.62px] ">
                <div className="flex pl-[30px] pb-[10px] flex-col mt-16 xl:mt-[89px] mr-6 xl:mr-[100px] z-10">
                  <div className="absolute bg-primary-blue w-[100px] h-[100px] xl:w-[130.4px] xl:h-[133.17px] rounded-full top-[250px] xl:top-[291.22px] right-[-20px]"></div>
                  <img className="sm:absolute static left-4 xl:left-[-120px] top-[-20px] xl:top-[21.36px] w-[400px] md:w-[500px] xl:w-[718px] h-auto z-0 " src={caracterimg} alt="img" />
                  <h4 className="w-auto xl:w-[156px] font-Raleway font-semibold text-2xl xl:text-[40px] mb-16">get in touch</h4>
                  <h4 className="font-Raleway font-medium text-sm xl:text-[14px] mb-6">contact@e-comm.ng</h4>
                  <h4 className="font-Raleway font-medium text-sm xl:text-[14px] mb-10">+234 4556 6665 34</h4>
                  <h4 className="font-Raleway font-medium text-sm xl:text-[14px] w-[220px]">
                    20 Prince Hakerem Lekki Phase 1, Lagos.
                  </h4>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full xl:w-[510.14px] flex flex-col gap-6">
                <Input classname={"text-[#969393]"} forlabel={"id1"} labelvalue={"Fullname"} varient={true} inputid={"id1"} placeholder={"James Doe"} />
                <Input classname={"text-[#969393]"} forlabel={"id2"} labelvalue={"Email"} varient={true} inputid={"id2"} placeholder={"jamesdoe@gmail.com"} />
                <div className="flex flex-col gap-2">
                  <label className='outline-none font-Raleway font-medium text-sm text-[#373737]' htmlFor="id3">Message</label>
                  <textarea className='text-[#969393] font-Raleway font-medium text-base h-[230px] pt-10 pl-7 w-full border border-[#969393] outline-none resize-none' placeholder='Type your message' id="id3" />
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center pb-[135px] px-4">
            <input className="w-full md:w-[508px] text-primary opacity-35 p-4 h-[64px] font-poppins text-base outline-none border-2 border-primary-blue rounded md:rounded-bl-md md:rounded-tl-md" type="text" placeholder="Search query..." />
            <button className="w-full md:w-[127px] h-[64px] px-6 font-poppins font-semibold text-xl text-white bg-primary-blue rounded md:rounded-r-md">
              Search
            </button>
          </div>
        </main>
      </section>
    </motion.div>
  );
};

export default Contect;
