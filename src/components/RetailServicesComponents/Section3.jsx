import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[750px]">
        Our Working Process
      </p>
      <div className="flex-1 xl:w-[1200px] bg-[red] flex gap-[30px]">
        <div className="bg-[orange] flex-1 max-w-[350px]">a</div>
        <div className="bg-[blue] flex-1 max-w-[350px]">b</div>
        <div className="bg-[yellow] flex-1 max-w-[350px]">c</div>
        <div className="bg-[purple] flex-1 max-w-[350px]">d</div>
      </div>
    </div>
  );
};

export default Section3;
