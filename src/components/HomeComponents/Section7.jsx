import React from "react";

import amazonLogo from "../../assets/imgs/amazon-logo.png";
import walmartLogo from "../../assets/imgs/walmart-logo.png";
import amazonAddLogo from "../../assets/imgs/amazon-add-logo.png";
import metaLogo from "../../assets/imgs/meta-logo.png";
import googleAdsLogo from "../../assets/imgs/google-ads.png";
import ebayLogo from "../../assets/imgs/ebay-logo.png";
import shopifyLogo from "../../assets/imgs/shopify-logo.png";

const Section7 = () => {
  return (
    <div className="py-10 px-4">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-gray-800">
        Our Partners
      </p>
      <div className="flex overflow-x-auto pb-4 pt-8 gap-6 justify-start xl:justify-center items-center">
        <div className="flex-shrink-0 w-40">
          <img src={amazonLogo} className="w-full" alt="Amazon Logo" />
        </div>
        <div className="flex-shrink-0 w-40 mt-[-7px]">
          <img src={walmartLogo} className="w-full" alt="Walmart Logo" />
        </div>
        <div className="flex-shrink-0 w-40">
          <img src={amazonAddLogo} className="w-full" alt="Amazon Add Logo" />
        </div>
        <div className="flex-shrink-0 w-40">
          <img src={metaLogo} className="w-full" alt="Meta Logo" />
        </div>
        <div className="flex-shrink-0 w-40">
          <img src={googleAdsLogo} className="w-full" alt="Google Ads Logo" />
        </div>
        <div className="flex-shrink-0 w-40">
          <img src={ebayLogo} className="w-full" alt="Ebay Logo" />
        </div>
        <div className="flex-shrink-0 w-40">
          <img src={shopifyLogo} className="w-full" alt="Shopify Logo" />
        </div>
      </div>
    </div>
  );
};

export default Section7;