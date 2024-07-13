import React, { useEffect } from "react";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/WholesaleServices/Section2";
import LeftRightCards from "../../components/ReuseableComponents/LeftRightCards";

import { OnlineLeftRightCardsData } from "../../assets/data";
import TopBrandSection from "../../components/ReuseableComponents/TopBrandsSection";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

const WholesaleService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <PagesFirstSection
        subheading={"Online Arbitrage & Retail Services"}
        heading={"Empower Your eCommerce Growth with"}
        content={
          "Discover boundless opportunities with EcomGleam's Online Arbitrage Services! Whether you're a seasoned seller or new to ecommerce, our expert team simplifies and maximizes your profits in this profitable venture"
        }
      />
      <Section2 />
      <LeftRightCards
        heading={"What Makes Us Unique"}
        data={OnlineLeftRightCardsData}
      />
      <TopBrandSection />
      <LeaveUsMessageSection />
    </div>
  );
};

export default WholesaleService;
