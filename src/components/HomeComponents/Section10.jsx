import React from "react";
import { Link } from "react-router-dom";

const Section10 = () => {
  return (
    <div className="px-4 flex flex-col items-center gap-[35px] pb-[70px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] max-w-[650px]">
        Let’s bring your next project to life, together
      </p>
      <Link
        to={"/contact-us"}
        className="h-[40px] px-[20px] rounded-full bg-[--main-color] text-white font-[600] flex items-center justify-center"
      >
        Speak to ECom Gleam
      </Link>
    </div>
  );
};

export default Section10;
