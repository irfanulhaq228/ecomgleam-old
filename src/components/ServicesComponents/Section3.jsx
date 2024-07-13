import React from "react";
import { Carousel } from "antd";

import "antd/dist/antd";

import { ServiceSliderData } from "../../assets/data";

const responsiveSettings = [
  {
    breakpoint: 1200, // xl
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 992, // lg
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 768, // md
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 576, // sm
    settings: {
      slidesToShow: 1,
    },
  },
];

const Section3 = () => {
  return (
    <div className="flex flex-col items-center mt-[60px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[650px]">
        Experience the Perks of Our Warehousing Solutions
      </p>
      <p className="text-[15px] md:text-[20px] text-[--heading-color] lg:leading-7 text-center md:max-w-[600px] lg:max-w-[750px] mt-[5px]">
        Customized warehousing solutions aimed at improving inventory
        management, streamlining operations, and fostering business growth.
      </p>
      <div className="w-[95%] xl:w-[1150px] mt-[20px]">
        <Carousel
          arrows
          infinite={true}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={2}
          responsive={responsiveSettings}
          style={{ fontFamily: "inter", padding: "0 20px" }}
        >
          {ServiceSliderData?.map((item, index) => (
            <div key={index}>
              <p className="capitalize text-[20px] sm:text-[23px] font-[700] h-[100px] text-[--main-color] text-center flex justify-center items-center">
                {item?.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section3;
