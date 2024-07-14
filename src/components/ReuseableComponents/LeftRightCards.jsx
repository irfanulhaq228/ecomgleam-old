import React from "react";

const LeftRightCards = ({ data, heading, coloredHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[750px] xl:w-[1100px]">
        {heading}{" "}
        <span className="text-[--main-color]">{coloredHeading}</span>
      </p>
      <div className="w-[95%] xl:w-[1200px] flex flex-col gap-[60px] mt-[40px]">
        {data?.map((item, index) =>
          !item?.rightImage ? (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[40px] xl:gap-[60px]"
            >
              <div className="h-[230px] min-h-[230px] w-full lg:w-[500px] lg:min-w-[500px] xl:h-[260px] xl:min-h-[260px] xl:w-[550px] xl:min-w-[550px] rounded-[36px] bg-[#808080]"></div>
              <div className="flex flex-col gap-[15px] lg:gap-[30px]">
                <p className="text-[22px] sm:text-[24px] font-[700] text-[--heading-color]">
                  {item?.heading}
                </p>
                <p className="text-[17px] sm:text-[20px] leading-6 sm:leading-7 capitalize">
                  {item?.desc}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[40px] xl:gap-[60px]"
            >
              <div className="flex flex-col gap-[15px] lg:gap-[30px]">
                <p className="text-[22px] sm:text-[24px] font-[700] text-[--heading-color] lg:text-end">
                  {item?.heading}
                </p>
                <p className="text-[17px] sm:text-[20px] leading-6 sm:leading-7 capitalize lg:text-end">
                  {item?.desc}
                </p>
              </div>
              <div className="h-[230px] min-h-[230px] w-full lg:w-[500px] lg:min-w-[500px] xl:h-[260px] xl:min-h-[260px] xl:w-[550px] xl:min-w-[550px] rounded-[36px] bg-[#808080]"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LeftRightCards;
