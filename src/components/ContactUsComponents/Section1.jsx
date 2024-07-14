import React from "react";

import { MdLocationPin, MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Section1 = () => {
  return (
    <div className="flex justify-center mt-[60px]">
      <div className="w-[95%] xl:w-[1200px] flex flex-col lg:flex-row justify-center gap-[40px]">
        {/* contact details */}
        <div className="w-full lg:mt-[160px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-start uppercase text-[--heading-color] mb-[25px]">
            Lets Connect With Us
          </p>
          <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[30px]">
            <div className="flex gap-[10px]">
              <FaWhatsapp className="w-[22px] h-[22px] text-[--main-color]" />
              <p className="text-[--heading-color]">+1 (215) 305-8197</p>
            </div>
            <div className="flex gap-[10px]">
              <MdMailOutline className="w-[22px] h-[22px] text-[--main-color]" />
              <p className="flex flex-col text-[--heading-color]">
                <span>info@ecomgleam.com</span>
                <span className="mt-[-4px]">career@ecomgleam.com</span>
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mt-[5px] lg:mt-[15px]">
            <MdLocationPin className="text-[--main-color] w-[22px] h-[22px] mt-[1px]" />
            <p className="flex flex-col text-[--heading-color]">
              <span>Dubai, UAE</span>
            </p>
          </div>
        </div>
        {/* form */}
        <div className="w-full">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-start uppercase text-[--heading-color] mb-[15px]">
            Leave a Message For Us
          </p>
          <p className="text-[15px] md:text-[18px] text-[--heading-color] lg:leading-7 text-start mt-[5px]">
            Contact us today; our team is ready to support your goals, whether
            you’re seeking expert guidance, campaign management, or strategic
            consultation. 
          </p>
          <div
            className="bg-white rounded-[12px] p-[25px] border mt-[30px] flex flex-col gap-[20px]"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <div className="flex flex-col gap-[5px]">
              <p className="text-[15px] font-[600]">Name</p>
              <input
                className="h-[40px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px]"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[15px] font-[600]">Surname</p>
              <input
                className="h-[40px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px]"
                placeholder="Enter Your Surname"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[15px] font-[600]">Email</p>
              <input
                className="h-[40px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px]"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[15px] font-[600]">Message</p>
              <textarea
                className="h-[100px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px] py-[10px]"
                placeholder="Type Your Message..."
              />
            </div>
            <button className="w-full h-[40px] rounded-[5px] bg-black text-white text-[15px] font-[600]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
