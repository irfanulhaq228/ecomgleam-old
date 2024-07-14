import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import img from "../../assets/imgs/home-sec-1.png";

const Section1 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add(
                "animate__animated",
                "animate__fadeInLeft"
              );
              contentRef.current.classList.remove("opacity-0");
            }
            if (imageRef.current) {
              imageRef.current.classList.add(
                "animate__animated",
                "animate__fadeInRight"
              );
              imageRef.current.classList.remove("opacity-0");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row gap-8 sm:gap-14 lg:gap-10 pt-5 sm:pt-10 items-center lg:items-center justify-center overflow-x-hidden"
    >
      <header
        ref={contentRef}
        className="flex-1 px-4 sm:px-0 lg:ps-[100px] pt-5 xl:pt-14 lg:max-w-[750px] flex flex-col items-center lg:items-start pb-2 opacity-0"
      >
        <h1 className="uppercase text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-[800] sm:font-[900] text-[#585858] leading-snug text-center lg:text-start max-w-[600px]">
          All-in-one team for seamless eCommerce management
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[20px] text-[#585858] mt-[15px] xl:mt-[20px] leading-tight text-center lg:text-start max-w-[600px]">
          EcomGleam offers efficient ecommerce solutions to optimize performance
          and drive growth. Collaborate with us to leverage expert strategies
          and cutting-edge technology tailored for your online success.
        </p>
        <div className="mt-[25px] lg:mt-[35px] flex justify-center gap-4 max-w-[600px]">
          <button
            className="h-[40px] px-[16px] bg-black rounded-full text-white text-[14px] font-[600]"
            onClick={() => {
              navigate("/contact-us");
              window.location.reload();
            }}
          >
            Let's Chat
          </button>
          <button
            className="h-[40px] px-[16px] bg-[var(--main-color)] rounded-full text-white text-[14px] font-[600]"
            onClick={() => {
              navigate("/about-us");
              window.location.reload();
            }}
          >
            Our Story
          </button>
        </div>
      </header>

      <div
        ref={imageRef}
        className="px-8 sm:px-0 sm:w-[450px] lg:w-[50%] lg:pe-20 lg:max-h-[700px] flex justify-center items-end max-w-[800px] opacity-0"
      >
        <img src={img} className="object-contain" alt="Ecommerce management" />
      </div>
    </section>
  );
};

export default Section1;
