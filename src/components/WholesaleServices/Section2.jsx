import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col gap-[50px] items-center mb-[40px]">
      {/* first row */}
      <div className="flex flex-col gap-[25px] w-full xl:w-[max-content] xl:flex-row justify-center items-center">
        <div className="min-w-[95%] xl:min-w-[280px] min-h-[100px] xl:min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[700] text-[--heading-color]">
          What Includes in Our Services
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Product Sourcing
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Product Sourcing
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Expert Research</li>
              <li>Profitable Deals</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Market Analysis
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Market Analysis
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Analyzing market &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trends</li>
              <li>
                Developing pricing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;strategies
              </li>
              <li>
                Monitoring competitor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;activities
              </li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Inventory Management
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Inventory Management
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Seamless Integration</li>
              <li>Optimized Stock Levels</li>
            </p>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="w-[95%] xl:w-[1200px] border-4 border-[--main-color] relative flex justify-evenly xl:justify-center xl:gap-[250px] h-0">
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
        <div className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full border-4 border-[--main-color] bg-white mt-[-20px] xl:mt-[-25px]"></div>
      </div>
      {/* second row */}
      <div className="flex flex-col gap-[25px] w-full xl:w-[max-content] xl:flex-row justify-center items-center">
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Listing Optimization
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Listing Optimization
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Compelling listings</li>
              <li>
                Keyword optimization &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for
                visibility and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conversions
              </li>
              <li>High-Quality Images</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Order Fulfilment
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Order Fulfilment
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Efficient Logistics</li>
              <li>Returns Management</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Customer Support
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Customer Support
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>24/7 Assistance</li>
              <li>Proactive &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Communication</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
