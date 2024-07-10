import svg1 from "../../assets/svgs/home-sec-2-svg-1.svg";
import img from "../../assets/imgs/home-sec-2-img.png";

const Section2 = () => {
  return (
    <div className="relative bg-[var(--main-color)] flex flex-col items-center pt-[35px]">
      <p className="uppercase flex flex-col items-center text-[25px] sm:text-[33px] lg:text-[37px] xl:text-[48px] font-[900] text-white px-3">
        <span className="hidden sm:block">Ecommerce</span>
        <span className="mt-[-8px] lg:mt-[-15px] hidden sm:block">
          Management Services
        </span>
        <span className="block sm:hidden text-center">
          Ecommerce Management Services
        </span>
      </p>
      <div className="mt-[30px] w-full flex flex-col sm:flex-row justify-center gap-[25px] flex-wrap px-3">
        <div className="flex flex-col sm:flex-row gap-[25px] justify-center items-center sm:items-start">
          <div className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-[30px]">
            <img src={svg1} />
            <p className="uppercase text-[20px] font-[900] text-center text-[#585858] mt-2">
              Amazon Full Account Management Services
            </p>
            <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[#b4b4b4] mt-2">
              Explore Services
            </button>
          </div>
          <div className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-[30px]">
            <img src={svg1} />
            <p className="uppercase text-[20px] font-[900] text-center text-[#585858] mt-2">
              Amazon Full Account Management Services
            </p>
            <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[#b4b4b4] mt-2">
              Explore Services
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[25px] justify-center items-center sm:items-start">
          <div className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-[30px]">
            <img src={svg1} />
            <p className="uppercase text-[20px] font-[900] text-center text-[#585858] mt-2">
              Amazon Full Account Management Services
            </p>
            <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[#b4b4b4] mt-2">
              Explore Services
            </button>
          </div>
          <div className="bg-white rounded-[12px] w-[95%] sm:w-[300px] flex flex-col items-center py-[25px] px-[30px]">
            <img src={svg1} />
            <p className="uppercase text-[20px] font-[900] text-center text-[#585858] mt-2">
              Amazon Full Account Management Services
            </p>
            <button className="h-[40px] rounded-full px-[16px] text-white text-[14px] bg-[#b4b4b4] mt-2">
              Explore Services
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-[40px] sm:mt-[70px] max-h-[660px] w-full">
        <img src={img} className="max-h-[660px] w-full object-cover" />
      </div>
    </div>
  );
};

export default Section2;
