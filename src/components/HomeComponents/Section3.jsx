import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/imgs/home-sec-3-img.png"

const Section3 = () => {
  return (
    <div className="mt-[45px] xl:px-[140px] flex items-center justify-center">
      <div
        className="bg-gray-100 w-full rounded-[12px] border px-[40px] py-[20px] flex flex-col lg:flex-row items-center justify-center gap-10 max-w-[90%] md:max-w-[500px] lg:max-w-[900px] xl:max-w-[1100px]"
        style={{ boxShadow: "0px 6px 20px 0px rgba(0, 0, 0, 0.2)" }}
      >
        <img src={img} className="w-[450px]" />
        <div className="flex flex-col gap-[20px] items-center">
          <p className="uppercase text-[25px] sm:text-[33px] lg:text-[37px] xl:text-[48px] font-[900] text-[--heading-color] text-center leading-[30px] sm:leading-[40px] xl:leading-[50px]">
            Ready to grow your revenue?
          </p>
          <Link to={"/contact-us"} className="h-[40px] rounded-full px-[16px] text-white text-[14px] font-[600] bg-black flex justify-center items-center">
            Speak to ECom Gleam
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
