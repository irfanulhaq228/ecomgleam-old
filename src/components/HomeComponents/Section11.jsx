import React from "react";

import svg1 from "../../assets/svgs/Home-sec-11-svg-1.svg";
import svg2 from "../../assets/svgs/Home-sec-11-svg-2.svg";
import svg3 from "../../assets/svgs/Home-sec-11-svg-3.svg";
import svg4 from "../../assets/svgs/Home-sec-11-svg-4.svg";
import svg5 from "../../assets/svgs/Home-sec-11-svg-5.svg";

const Section11 = () => {
  return (
    <div className="bg-[--dark-color] py-[60px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-white">
        Our approach
      </p>
      <div className="mt-[40px] sm:px-[20px] xl:px-[30px] flex justify-center gap-[20px] md:gap-[30px] xl:gap-[50px] flex-wrap">
        <div className="min-w-[200px] max-w-[200px] flex flex-col items-center gap-[15px]">
          <img src={svg1} className="w-[130px] h-[130px] object-contain" />
          <p className="uppercase text-[17px] md:text-[20px] xl:text-[23px] font-[600] lg:font-[700] text-white text-center">
            Revenue first
          </p>
        </div>
        <div className="min-w-[200px] max-w-[200px] flex flex-col items-center gap-[15px]">
          <img src={svg2} className="w-[130px] h-[130px] object-contain" />
          <p className="uppercase text-[17px] md:text-[20px] xl:text-[23px] font-[600] lg:font-[700] text-white text-center leading-7">
            Dedicated management
          </p>
        </div>
        <div className="min-w-[200px] max-w-[200px] flex flex-col items-center gap-[15px]">
          <img src={svg3} className="w-[130px] h-[130px] object-contain" />
          <p className="uppercase text-[17px] md:text-[20px] xl:text-[23px] font-[600] lg:font-[700] text-white text-center leading-7">
            Quality assurance
          </p>
        </div>
        <div className="min-w-[200px] max-w-[200px] flex flex-col items-center gap-[15px]">
          <img src={svg4} className="w-[130px] h-[130px] object-contain" />
          <p className="uppercase text-[17px] md:text-[20px] xl:text-[23px] font-[600] lg:font-[700] text-white text-center leading-7">
            Quality assurance
          </p>
        </div>
        <div className="min-w-[200px] max-w-[200px] flex flex-col items-center gap-[15px]">
          <img src={svg5} className="w-[130px] h-[130px] object-contain" />
          <p className="uppercase text-[17px] md:text-[20px] xl:text-[23px] font-[600] lg:font-[700] text-white text-center leading-7">
            Authenticity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section11;
