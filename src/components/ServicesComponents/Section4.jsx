import React, { useEffect, useState } from "react";

import svg1 from "../../assets/svgs/service-sec-4-svg-1.svg";
import svg2 from "../../assets/svgs/service-sec-4-svg-2.svg";
import svg3 from "../../assets/svgs/service-sec-4-svg-3.svg";
import svg4 from "../../assets/svgs/service-sec-4-svg-4.svg";
import svg5 from "../../assets/svgs/service-sec-4-svg-5.svg";

const Section4 = () => {
  const [desc1, setDesc1] = useState(false);
  const [desc2, setDesc2] = useState(false);
  const [desc3, setDesc3] = useState(false);
  const [desc4, setDesc4] = useState(false);
  const [desc5, setDesc5] = useState(false);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [text5, setText5] = useState(false);
  useEffect(() => {
    if (desc1) {
      setTimeout(() => {
        setText1(true);
      }, 400);
    } else {
      setText1(false);
    }
  }, [desc1]);
  useEffect(() => {
    if (desc2) {
      setTimeout(() => {
        setText2(true);
      }, 400);
    } else {
      setText2(false);
    }
  }, [desc2]);
  useEffect(() => {
    if (desc3) {
      setTimeout(() => {
        setText3(true);
      }, 400);
    } else {
      setText3(false);
    }
  }, [desc3]);
  useEffect(() => {
    if (desc4) {
      setTimeout(() => {
        setText4(true);
      }, 400);
    } else {
      setText4(false);
    }
  }, [desc4]);
  useEffect(() => {
    if (desc5) {
      setTimeout(() => {
        setText5(true);
      }, 400);
    } else {
      setText5(false);
    }
  }, [desc5]);
  return (
    <div className="mt-[20px] bg-[--main-color] text-white py-[50px] flex flex-col items-center gap-[30px]">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase text-white mb-[15px] px-[15px] md:w-[600px] lg:w-[750px]">
        With our 3PL solutions, business owners increase their profits
      </p>
      <div className="relative flex flex-col items-center gap-[60px]">
        {/* circle-1 */}
        <div className="relative z-[10] flex items-center">
          <div
            className="circle-box"
            onMouseEnter={() => setDesc1(true)}
            onMouseLeave={() => setDesc1(false)}
          >
            <img src={svg1} className="w-[80px] h-[80px]" />
          </div>
          <div
            className={`${
              !desc1 ? "circle-box-desc1" : "circle-box-desc1-show"
            }`}
          >
            {text1 && "Exceptional delivery performance"}
          </div>
        </div>
        {/* circle-2 */}
        <div className="relative z-[10] flex items-center">
          <div
            className="circle-box"
            onMouseEnter={() => setDesc2(true)}
            onMouseLeave={() => setDesc2(false)}
          >
            <img src={svg2} className="w-[80px] h-[80px]" />
          </div>
          <div
            className={`${
              !desc2 ? "circle-box-desc2" : "circle-box-desc2-show"
            }`}
          >
            {text2 && "A large amount of storage space"}
          </div>
        </div>
        {/* circle-3 */}
        <div className="relative z-[10] flex items-center">
          <div
            className="circle-box"
            onMouseEnter={() => setDesc3(true)}
            onMouseLeave={() => setDesc3(false)}
          >
            <img src={svg3} className="w-[80px] h-[80px]" />
          </div>
          <div
            className={`${
              !desc3 ? "circle-box-desc1" : "circle-box-desc1-show"
            }`}
          >
            {text3 && "Speedy shipping"}
          </div>
        </div>
        {/* circle-4 */}
        <div className="relative z-[10] flex items-center">
          <div
            className="circle-box"
            onMouseEnter={() => setDesc4(true)}
            onMouseLeave={() => setDesc4(false)}
          >
            <img src={svg4} className="w-[80px] h-[80px]" />
          </div>
          <div
            className={`${
              !desc4 ? "circle-box-desc2" : "circle-box-desc2-show"
            }`}
          >
            {text4 && "Pay-as-you-go pricing"}
          </div>
        </div>
        {/* circle-5 */}
        <div className="relative z-[10] flex items-center">
          <div
            className="circle-box"
            onMouseEnter={() => setDesc5(true)}
            onMouseLeave={() => setDesc5(false)}
          >
            <img src={svg5} className="w-[80px] h-[80px]" />
          </div>
          <div
            className={`${
              !desc5 ? "circle-box-desc1" : "circle-box-desc1-show"
            }`}
          >
            {text5 && "Pay-as-you-go pricing"}
          </div>
        </div>
        <div className="absolute top-0 text-black border-2 border-white h-full"></div>
      </div>
    </div>
  );
};

export default Section4;
