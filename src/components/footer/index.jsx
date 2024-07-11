import React from "react";

import Ecomgleam from "../../assets/svgs/Ecomgleam.svg";
import PhoneCall from "../../assets/svgs/Phone-call.svg";
import mail from "../../assets/svgs/Mail.svg";
import locationIcon from "../../assets/svgs/location-icon.svg";

const Footer = () => {
  return (
    <div className="bg-[--main-color] px-[15px] md:px-[40px] lg:px-[50px] xl:px-[60px] gap-[30px] sm:gap-[50px] lg:gap-[20px] xl:gap-[37px] pt-[40px] pb-[60px] sm:pb-[80px] flex xl:justify-center flex-wrap text-white">
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[200px]">
        <img src={Ecomgleam} className="bg-white" />
      </div>
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[200px] lg:mb-[50px] xl:mb-0">
        <p className="uppercase mb-[10px] sm:mb-[15px] font-[500] text-[14px] sm:text-[16px]">QUICK LINKS</p>
        <p className="text-[12px] sm:text-[16px]">About Us</p>
        <p className="text-[12px] sm:text-[16px]">Services</p>
        <p className="text-[12px] sm:text-[16px]">Warehouse</p>
        <p className="text-[12px] sm:text-[16px]">Contact Us</p>
      </div>
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[400px]">
        <p className="uppercase mb-[10px] sm:mb-[15px] font-[500]">Our Services</p>
        <p className="text-[12px] sm:text-[16px]">Amazon Full Account Management Service</p>
        <p className="text-[12px] sm:text-[16px]">Amazon Full Account Management Service</p>
        <p className="text-[12px] sm:text-[16px]">Amazon Wholesale FBA Services</p>
        <p className="text-[12px] sm:text-[16px]">3PL and Warehouse Services</p>
      </div>
      <div className="min-w-full lg:min-w-[450px] xl:min-w-[200px]">
        <p className="flex items-center gap-2 text-[12px] sm:text-[16px]">
          <img src={PhoneCall} className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px]" />
          <span>+1 (215) 305-8197</span>
        </p>
        <p className="flex gap-2 mt-[10px] text-[12px] sm:text-[16px]">
          <img src={mail} className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] mt-[3px]" />
          <p className="flex flex-col">
            <span>info@ecomgleam.com</span>
            <span className="mt-[-5px]">career@ecomgleam.com</span>
          </p>
        </p>
        <p className="flex gap-1 mt-[7px] sm:mt-[10px] text-[12px] sm:text-[16px]">
          <img src={locationIcon} className="w-[19px] h-[19px] sm:w-[22px] sm:h-[22px]" />
          <p className="flex flex-col">
            <span>Dubai, UAE</span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
