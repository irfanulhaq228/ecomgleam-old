import React from "react";
import Marquee from "react-fast-marquee";

import img from "../../assets/imgs/Home-sec-9-img.png";

const Section9 = () => {
  return (
    <div className="py-10 px-4 mt-[30px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color]">
        Our Clients
      </p>
      <div className="flex overflow-x-auto sm:pb-4 sm:pt-8 gap-6 justify-start xl:justify-center items-center">
        <Marquee speed={150} className="flex-shrink-0 w-[1300px]">
          <img src={img} className="w-full" alt="Amazon Logo" />
        </Marquee>
      </div>
    </div>
  );
};

export default Section9;
