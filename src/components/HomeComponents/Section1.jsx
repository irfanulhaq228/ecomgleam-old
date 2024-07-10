import React from "react";

import img from "../../assets/imgs/home-sec-1.png";

const Section1 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 sm:gap-14 lg:gap-10 pt-5 sm:pt-10 items-center lg:items-center justify-center">
      <div className="flex-1 px-4 sm:px-0 lg:ps-[100px] pt-5 xl:pt-14 lg:max-w-[750px] flex flex-col items-center lg:items-start pb-2">
        <p className="uppercase text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-[800] sm:font-[900] text-[#585858] leading-snug text-center lg:text-start max-w-[600px]">
          All-in-one team for seamless eCommerce management
        </p>
        <p className="text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[20px] text-[#585858] mt-[15px] xl:mt-[20px] leading-tight text-center lg:text-start max-w-[600px]">
          EcomGleam offers efficient ecommerce solutions to optimize performance
          and drive growth. Collaborate with us to leverage expert strategies
          and cutting-edge technology tailored for your online success.
        </p>
        <div className="mt-[25px] lg:mt-[35px] flex justify-center gap-4 max-w-[600px]">
          <button className="h-[40px] px-[16px] bg-black rounded-full text-white text-[14px] font-[600]">
            Let's Chat
          </button>
          <button className="h-[40px] px-[16px] bg-[var(--main-color)] rounded-full text-white text-[14px] font-[600]">
            Our Story
          </button>
        </div>
      </div>
      <div className="px-8 sm:px-0 sm:w-[450px] lg:w-[50%] lg:pe-20 lg:max-h-[700px] flex justify-center items-end max-w-[800px]">
        <img src={img} className="object-contain" />
      </div>
    </div>
  );
};

export default Section1;
