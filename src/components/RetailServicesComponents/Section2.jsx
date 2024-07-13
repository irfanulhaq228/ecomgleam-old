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
          Product Sourcing & Research
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Product Sourcing & Research
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>
                Selecting wholesale &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;products
              </li>
              <li>Market research</li>
              <li>Supplier negotiations</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Brand Outreach
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Brand Outreach
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Secure distribution &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rights</li>
              <li>Negotiate terms</li>
              <li>Build relationships</li>
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
              <li>Prevent stock-outs</li>
              <li>Optimize storage</li>
              <li>Demand forecasting</li>
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
          Customer Service
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Customer Service
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Resolve inquiries</li>
              <li>Manage returns</li>
              <li>Monitor feedback</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Analytics and Reporting
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Analytics and Reporting
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Sales insights</li>
              <li>Competitive analysis</li>
              <li>Growth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;recommendations</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Compliance and Regulations
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Compliance and Regulations
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Ensure compliance</li>
              <li>Manage listings</li>
              <li>Stay updated</li>
            </p>
          </div>
        </div>
        <div
          className="min-w-[95%] xl:min-w-[280px] min-h-[290px] xl:max-w-[280px] xl:max-h-[290px] rounded-[12px] border flex justify-center items-center uppercase text-[25px] p-[16px] leading-8 text-center font-[500] text-[--main-color] relative service-card"
          style={{ boxShadow: "0px 6px 20px 0px #00000033" }}
        >
          Premium Branding
          <div className="bg-[--main-color] text-white absolute w-full h-full rounded-[12px] service-card-show py-3 z-[999] flex flex-col items-center justify-center overflow-hidden">
            <p className="text-[25px] font-[700] leading-8 w-[250px] px-3 service-card-heading">
              Premium Branding
            </p>
            <p className="text-[15px] font-[400] mt-3 leading-6 w-[250px] px-3 text-start">
              <li>Selective Distribution &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Management</li>
              <li>Exclusive Partnership &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development</li>
              <li>Brand Protection and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Market Segmentation</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
