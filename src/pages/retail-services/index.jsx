import React, { useEffect } from "react";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/RetailServicesComponents/Section2";
import Section3 from "../../components/RetailServicesComponents/Section3";
import LeftRightCards from "../../components/ReuseableComponents/LeftRightCards";
import TopBrandSection from "../../components/ReuseableComponents/TopBrandsSection";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

import { RetailLeftRightCardsData } from "../../assets/data";

const RetailService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <PagesFirstSection
        subheading={"Wholesale Services"}
        heading={"Navigate Towards E-commerce Excellence with"}
        content={
          "Maximize Your  Wholesale Potential & Propel Your E-commerce Business with Expert wholesale Services from Ecom Gleam!"
        }
      />
      <Section2 />
      {/* <Section3 /> */}
      <LeftRightCards
        data={RetailLeftRightCardsData}
        heading={"In the realm of Ecom Gleam's wholesale service,"}
        coloredHeading={"what sets it apart?"}
      />
      <TopBrandSection />
      <LeaveUsMessageSection />
    </div>
  );
};

export default RetailService;
