import React from "react";

import amazonLogo from "../../assets/imgs/amazon-logo.png";
import walmartLogo from "../../assets/imgs/walmart-logo.png";
import shopifyLogo from "../../assets/imgs/shopify-logo.png";
import ebayLogo from "../../assets/imgs/ebay-logo.png";

const Section5 = () => {
  return (
    <div className="my-[40px] flex flex-col gap-[30px] items-center">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[750px]">
        Trusted by Top Brands
      </p>
      <div className="hidden sm:flex items-center gap-[20px] md:gap-[30px] overflow-auto">
        <img src={amazonLogo} className="w-[130px] md:w-[150px]" />
        <img src={walmartLogo} className="w-[150px] md:w-[170px] mt-[-15px]" />
        <img src={shopifyLogo} className="w-[130px] md:w-[150px] mt-[-10px]" />
        <img src={ebayLogo} className="w-[130px] md:w-[150px]" />
      </div>
      <marquee className={"w-full block sm:hidden"} scrollamount="10" loop="infinite">
        <img src={amazonLogo} className="w-[150px] inline-block pe-[30px]" />
        <img src={walmartLogo} className="w-[170px] mt-[-15px] inline-block pe-[30px]" />
        <img src={shopifyLogo} className="w-[150px] mt-[-10px] inline-block pe-[30px]" />
        <img src={ebayLogo} className="w-[150px] inline-block" />
      </marquee>
    </div>
  );
};

export default Section5;
