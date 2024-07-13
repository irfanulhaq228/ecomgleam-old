import React, { useEffect } from "react";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/RetailServicesComponents/Section2";
import Section3 from "../../components/RetailServicesComponents/Section3";

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
      <Section3 />
    </div>
  );
};

export default RetailService;
