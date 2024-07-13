import React from "react";

const PagesFirstSection = ({ subheading, content, heading }) => {
  return (
    <div className="py-[40px] lg:ps-[60px] xl:ps-[90px] lg:pe-[20px] xl:pe-[40px] flex flex-col lg:flex-row justify-center items-center gap-[20px]">
      <div className="flex-1 lg:max-w-[400px] xl:max-w-[500px] mt-[20px] lg:mt-0 px-[15px] lg:px-0">
        <p className="uppercase text-[16px] md:text-[20px] xl:text-[24px] font-[600] lg:font-[700] text-[--main-color] mb-[10px] text-center lg:text-start">
          {subheading}
        </p>
        <p className="uppercase text-[--heading-color] text-[25px] md:text-[30px] xl:text-[36px] font-[700] leading-8 lg:leading-10 text-center lg:text-start max-w-[350px] lg:max-w-full">
          {heading} <span className="text-[--main-color]">Ecom Gleam</span>
        </p>
        <p className="text-[15px] md:text-[20px] text-[--heading-color] lg:leading-7 mt-[15px] text-center lg:text-start max-w-[350px] lg:max-w-full">
          {content}
        </p>
        <div className="mt-[15px] lg:mt-[30px] flex justify-center lg:justify-start gap-4 max-w-[600px]">
          <button className="h-[40px] px-[16px] bg-black rounded-full text-white text-[14px] font-[600]">
            Let's Chat
          </button>
          <button className="h-[40px] px-[16px] bg-[var(--main-color)] rounded-full text-white text-[14px] font-[600]">
            Our Story
          </button>
        </div>
      </div>
      <div className="flex-1 bg-[#808080] h-[437px] w-[95%] lg:w-full max-w-[550px] lg:max-w-[700px] min-h-[300px] rounded-[36px]"></div>
    </div>
  );
};

export default PagesFirstSection;
