import React from "react";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <div className="mt-[80px] flex justify-center">
      <div className="bg-[#0E1F29] w-[95%] xl:w-[1200px] lg:h-[100px] rounded-[12px] text-white flex flex-col lg:flex-row justify-between items-center px-[40px] py-[15px] gap-[15px]">
        <p className="capitalize text-[25px] sm:text-[27px] lg:text-[30px] font-[700] text-center lg:text-start">
          Take Your Brand to New Heights on Amazon
        </p>
        <Link
          to={"/contact-us"}
          className="h-[40px] bg-[--main-color] px-[16px] rounded-full font-[700] flex items-center justify-center"
        >
          Speak to ECom Gleam
        </Link>
      </div>
    </div>
  );
};

export default Section5;
