import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import Ecomgleam from "../../assets/svgs/Ecomgleam.svg";
import PhoneCall from "../../assets/svgs/Phone-call.svg";
import Mail from "../../assets/svgs/Mail.svg";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { GiNotebook } from "react-icons/gi";
import { FaBlenderPhone } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    setSelectedTab(window.location.pathname);
  }, [window.location.pathname]);

  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = (email) => {
    const emailUrl = `mailto:${email}`;
    window.location.href = emailUrl;
  };

  return (
    <>
      <Helmet>
        <title>
          Ecomgleam -{" "}
          {selectedTab === "/"
            ? "home"
            : selectedTab.slice(1).replaceAll("-", " ")}
        </title>
        <meta
          name="description"
          content="Ecomgleam is a leading e-commerce platform providing top-notch services."
        />
        <meta
          name="keywords"
          content="e-commerce, online shopping, Ecomgleam"
        />
      </Helmet>

      <header className="lg:h-[100px] flex">
        <div className="bg-white h-full w-[max-content] md:w-[280px] lg:w-[365px] flex items-end justify-end px-[10px] py-2 lg:py-0 md:ps-0 md:pe-[25px]">
          <img
            src={Ecomgleam}
            className="h-[40px] sm:h-[50px] md:h-[67px] cursor-pointer"
            alt="Ecomgleam Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <nav className="relative bg-[var(--main-color)] flex-1 flex justify-between ps-[40px] xl:ps-[80px] pe-[20px] xl:pe-[40px] 2xl:pe-[80px]">
          <button
            className="absolute block lg:hidden p-1 rounded-sm bg-[white] w-[max-content] h-[max-content] right-[13px] bottom-[13px]"
            onClick={() => setShowNav(!showNav)}
          >
            <HiMenuAlt3 />
          </button>
          <div className="hidden lg:flex items-end text-[12px] 2xl:text-[14px] text-gray-200 gap-[5px] pb-[15px]">
            <Link
              to="/"
              className={`p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px] ${
                selectedTab === "/" && "bg-[#ffffff27]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px] ${
                selectedTab === "/about-us" && "bg-[#ffffff27]"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`p-2 cursor-pointer hover:bg-[#ffffff27] rounded-[5px] ${
                selectedTab === "/contact-us" && "bg-[#ffffff27]"
              }`}
            >
              Contact Us
            </Link>
          </div>
          <div className="hidden lg:flex flex-col gap-1.5 justify-center text-[15px]">
            <p
              className="font-[700] flex items-center gap-2 text-white cursor-pointer"
              onClick={() => handleWhatsAppClick("+12153058197")}
            >
              <img src={PhoneCall} className="w-[20px] h-[20px]" alt="Phone" />
              +1 (215) 305-8197
            </p>
            <p className="font-[600] flex gap-2 text-white">
              <img
                src={Mail}
                className="w-[20px] h-[20px] mt-[2px]"
                alt="Mail"
              />
              <span className="flex flex-col">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => handleEmailClick("info@ecomgleam.com")}
                >
                  info@ecomgleam.com
                </span>
                <span
                  className="mt-[-4px] cursor-pointer hover:underline"
                  onClick={() => handleEmailClick("career@ecomgleam.com")}
                >
                  career@ecomgleam.com
                </span>
              </span>
            </p>
          </div>
        </nav>
      </header>

      <section
        className={`bg-[#000000c2] fixed top-0 z-[9999] w-[100vw] h-full flex flex-col justify-center px-4 gap-[50px] transition-all duration-700 ${
          !showNav ? "left-[-100%]" : "left-0"
        } transition-all duration-1000`}
      >
        <button
          className="absolute right-[10px] top-[20px] md:top-[40px] w-[30px] h-[30px] bg-[#ffffffb6] rounded-[5px] flex justify-center items-center"
          onClick={() => setShowNav(!showNav)}
        >
          <RxCross2 />
        </button>
        <nav className="w-[200px] text-white flex flex-col gap-[5px]">
          <p
            className={`flex items-center gap-[10px] text-[16px] font-[600] cursor-pointer w-[max-content] hover:bg-[#ffffff69] px-3 h-[40px] rounded-[5px] ${
              selectedTab === "/" && "bg-[#ffffff69]"
            }`}
            onClick={() => {
              navigate("/");
              setShowNav(false);
            }}
          >
            <IoMdHome className="w-[23px] h-[23px]" />
            Home
          </p>
          <p
            className={`flex items-center gap-[10px] text-[16px] font-[600] cursor-pointer w-[max-content] hover:bg-[#ffffff69] px-3 h-[40px] rounded-[5px] ${
              selectedTab === "/about-us" && "bg-[#ffffff69]"
            }`}
            onClick={() => {
              navigate("/about-us");
              setShowNav(false);
            }}
          >
            <GiNotebook className="w-[23px] h-[23px]" />
            About Us
          </p>
          <p
            className={`flex items-center gap-[10px] text-[16px] font-[600] cursor-pointer w-[max-content] hover:bg-[#ffffff69] px-3 h-[40px] rounded-[5px] ${
              selectedTab === "/contact-us" && "bg-[#ffffff69]"
            }`}
            onClick={() => {
              navigate("/contact-us");
              setShowNav(false);
            }}
          >
            <FaBlenderPhone className="w-[23px] h-[23px]" />
            Contact Us
          </p>
        </nav>
        <hr />
        <aside className="w-[200px] text-white flex flex-col gap-[5px] ms-[20px]">
          <div
            className="flex items-center gap-[10px] text-[16px] font-[600] cursor-pointer"
            onClick={() => handleWhatsAppClick("+12153058197")}
          >
            <img src={PhoneCall} alt="Phone" />
            +1 (215) 305-8197
          </div>
          <div className="flex gap-[10px] text-[16px] font-[600]">
            <img src={Mail} className="mt-[-22px]" alt="Mail" />
            <span className="flex flex-col">
              <span onClick={() => handleEmailClick("info@ecomgleam.com")}>
                info@ecomgleam.com
              </span>
              <span
                className="mt-[-5px]"
                onClick={() => handleEmailClick("career@ecomgleam.com")}
              >
                career@ecomgleam.com
              </span>
            </span>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Navbar;
