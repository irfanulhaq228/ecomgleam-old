import React from "react";

import img from "../../assets/imgs/Home-sec-6-img.png";
import phoneIcon from "../../assets/svgs/Phone-call.svg";
import mailIcon from "../../assets/svgs/Mail.svg";

import line from "../../assets/imgs/Home-sec-6-line.png";

const Section6 = () => {
  return (
    <div className="bg-[--dark-color] py-[40px] flex flex-col items-center">
      <p className="text-[25px] sm:text-[30px] md:text-[40px] font-[700] text-center uppercase text-white max-w-[600px] px-[15px]">
        Book a time with us or drop in for a coffee
      </p>
      <div className="w-full flex flex-col xl:flex-row xl:max-w-[1300px] mt-[40px] xl:mt-0 items-center xl:items-end">
        <div className="flex-1 flex flex-col sm:flex-row justify-center items-center xl:items-end gap-1 xl:gap-10 xl:pb-[120px]">
          <div className="flex gap-2 text-white h-[43px] w-[250px] xl:w-auto">
            <img src={phoneIcon} className="w-[20px] h-[20px]" />
            <p>+1 (215) 305-8197</p>
          </div>
          <div className="flex gap-2 text-white h-[43px] w-[250px] xl:w-auto">
            <img src={mailIcon} className="w-[20px] h-[20px]" />
            <p className="flex flex-col leading-5">
              <span>info@ecomgleam.com</span>
              <span>career@ecomgleam.com</span>
            </p>
          </div>
        </div>
        <img src={img} className="max-w-[650px] w-[90%] md:w-auto" />
      </div>
      <img src={line} className="hidden xl:block w-[450px] mt-[-70px]" />
    </div>
  );
};

export default Section6;
