import React from "react";

import Ecomgleam from "../../assets/svgs/Ecomgleam.svg";
import PhoneCall from "../../assets/svgs/Phone-call.svg";
import Mail from "../../assets/svgs/Mail.svg";

import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className=" lg:h-[100px] flex">
      <div className="bg-white h-full w-[max-content] md:w-[280px] lg:w-[365px] flex items-end justify-end px-[10px] py-2 lg:py-0 md:ps-0 md:pe-[25px]">
        <img src={Ecomgleam} className="h-[40px] sm:h-[50px] md:h-[67px]" />
      </div>
      <div className="relative bg-[var(--main-color)] flex-1 flex justify-between ps-[40px] xl:ps-[80px] pe-[20px] xl:pe-[40px] 2xl:pe-[80px]">
        <button className="absolute block lg:hidden p-1 rounded-sm bg-[white] w-[max-content] h-[max-content] right-[13px] bottom-[13px]">
          <HiMenuAlt3 className="" />
        </button>
        <div className="hidden lg:flex items-end text-[12px] 2xl:text-[14px] text-gray-200 gap-[5px] pb-[15px]">
          <p className="p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px]">
            About Us
          </p>
          <p className="p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px]">
            Warehouse
          </p>
          <p className="p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px]">
            Warehouse
          </p>
          <p className="p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px]">
            Contact Us
          </p>
        </div>
        <div className="hidden lg:flex flex-col gap-1.5 justify-center text-[15px]">
          <p className="font-[700] flex items-center gap-2 text-white">
            <img src={PhoneCall} className="w-[20px] h-[20px]" />
            +1 (215) 305-8197
          </p>
          <p className="font-[600] flex gap-2 text-white">
            <img src={Mail} className="w-[20px] h-[20px] mt-[2px]" />
            <p className="flex flex-col">
              <span>info@ecomgleam.com</span>
              <span className="mt-[-4px]">career@ecomgleam.com</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
