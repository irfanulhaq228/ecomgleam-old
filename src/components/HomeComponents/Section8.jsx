import React from "react";

import img1 from "../../assets/imgs/Home-sec-8-img-1.png"

const Section8 = () => {
  return (
    <div className="px-4 mt-[30px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color]">
        Meet the team
      </p>
      <div className="flex overflow-x-auto pb-4 pt-8 gap-6 justify-start xl:justify-center items-center mt-[20px]">
        <div className="flex-shrink-0 w-[600px]">
          <img src={img1} className="w-full" alt="Amazon Logo" />
        </div>
        <div className="flex-shrink-0 w-[600px]">
          <img src={img1} className="w-full" alt="Amazon Logo" />
        </div>
      </div>
    </div>
  );
};

export default Section8;
