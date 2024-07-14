import React from "react";

const Section3 = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] xl:w-[1050px] flex flex-col xl:flex-row gap-[30px] xl:gap-[50px]">
        <div className="w-full bg-[--main-color] rounded-[12px] shadow-md px-[20px] py-[30px] flex flex-col items-center text-white gap-[10px]">
          <p className="uppercase text-[25px] sm:text-[30px] font-[700] text-center">
            Our Mission
          </p>
          <p className="text-gray-100 text-[13px] sm:text-[16px] text-center w-full">
            At Ecom Gleam, our mission is to empower businesses to thrive in the
            Amazon marketplace by providing innovative, personalized, and
            results-driven e-commerce solutions. We are dedicated to enhancing
            visibility, driving growth, and maximizing profitability through
            expert Amazon Account Management, 3PL Prep and Warehouse, FBA
            Wholesale, and Online Arbitrage Services.
          </p>
        </div>
        <div className="w-full bg-[--main-color] rounded-[12px] shadow-md px-[20px] py-[30px] flex flex-col items-center text-white gap-[10px]">
          <p className="uppercase text-[25px] sm:text-[30px] font-[700] text-center">
            Our Vision
          </p>
          <p className="text-gray-100 text-[13px] sm:text-[16px] text-center w-full">
            Our vision is to be the leading partner for e-commerce success,
            illuminating the path to growth and excellence for businesses
            worldwide. We strive to set the standard for innovation, integrity,
            and seamless integration in the e-commerce industry, helping our
            clients shine in a competitive landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
