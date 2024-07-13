import React from "react";

const Section6 = () => {
  return (
    <div className="mt-[60px] flex flex-col items-center mb-[80px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[500px] lg:w-[750px]">
        Leave a Message For Us
      </p>
      <p className="text-[15px] md:text-[20px] text-[--heading-color] lg:leading-7 text-center md:max-w-[600px] lg:max-w-[750px] mt-[5px]">
        Contact us today; our team is ready to support your goals, whether
        you’re seeking expert guidance, campaign management, or strategic
        consultation. 
      </p>
      <div
        className="w-[95%] sm:w-[550px] bg-white rounded-[12px] p-[25px] border mt-[30px] flex flex-col gap-[20px]"
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      >
        <div className="flex flex-col gap-[5px]">
          <p className="text-[15px] font-[600]">Name</p>
          <input
            className="h-[40px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px]"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[15px] font-[600]">Surname</p>
          <input
            className="h-[40px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px]"
            placeholder="Enter Your Surname"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[15px] font-[600]">Email</p>
          <input
            className="h-[40px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px]"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[15px] font-[600]">Message</p>
          <textarea
            className="h-[100px] outline outline-1 outline-gray-300 focus:outline-[--main-color] rounded-[5px] px-[10px] text-[14px] py-[10px]"
            placeholder="Type Your Message..."
          />
        </div>
        <button className="w-full h-[40px] rounded-[5px] bg-black text-white text-[15px] font-[600]">Submit</button>
      </div>
    </div>
  );
};

export default Section6;
