import React from "react";

import clientReview from "../../assets/imgs/client-review.png"

const Section6 = () => {
  return (
    <div className="mt-[80px] flex justify-center">
      <div className="w-[95%] xl:w-[1200px] flex flex-col items-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[650px]">
          Client Testimonials
        </p>
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-[30px] mt-[30px]">
            <img src={clientReview} className="w-[90%] sm:w-[350px]" />
            <img src={clientReview} className="w-[90%] sm:w-[350px]" />
            <img src={clientReview} className="w-[90%] sm:w-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
