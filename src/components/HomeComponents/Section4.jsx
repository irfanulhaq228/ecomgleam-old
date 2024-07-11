import React from "react";

import img from "../../assets/imgs/Home-sec-4-img.png";

const Section4 = () => {
  return (
    <div className="mt-[60px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px]">
        Hear from our clients
      </p>
      <div className="px-[15px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[80px] flex justify-center">
        <img src={img} className="xl:max-w-[1150px]" />
      </div>
    </div>
  );
};

export default Section4;
