import React, { useEffect } from "react";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/AmazonServices/Section2";
import LeftRightCards from "../../components/ReuseableComponents/LeftRightCards";
import Section5 from "../../components/AmazonServices/Section5";
import TopBrandSection from "../../components/ReuseableComponents/TopBrandsSection";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

import { AmazonServiceData } from "../../assets/data";

const AmazonServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <PagesFirstSection
        subheading={"Amazon Private Label and Brand Management Services"}
        heading={"Maximize Your Impact in E-commerce sphere with"}
        content={
          "Maximize your Amazon business with our expert Private Label and Brand Management Services, ensuring standout performance and customer loyalty in a competitive market."
        }
      />
      <div className="flex justify-center mb-[20px]">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase text-[--heading-color] mb-[15px] px-[15px] md:w-[600px] lg:w-[750px]">
          What Includes in Our Services
        </p>
      </div>
      <Section2 />
      <LeftRightCards heading={"Why Choose US"} data={AmazonServiceData} />
      <Section5 />
      <TopBrandSection />
      <LeaveUsMessageSection />
    </div>
  );
};

export default AmazonServices;
