import React from "react";

import img from "../../assets/imgs/Home-sec-9-img.png";

const Section9 = () => {
  return (
    <div className="py-10 px-4 mt-[30px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color]">
        Our Clients
      </p>
      <div className="flex overflow-x-auto pb-4 pt-8 gap-6 justify-start xl:justify-center items-center">
        <div className="flex-shrink-0 w-[1300px]">
          <img src={img} className="w-full" alt="Amazon Logo" />
        </div>
      </div>
    </div>
  );
};

export default Section9;
