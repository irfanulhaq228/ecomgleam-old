import React, { useEffect } from "react";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/AboutUsComponent/Section2";
import Section3 from "../../components/AboutUsComponent/Section3";
import LeftRightCards from "../../components/ReuseableComponents/LeftRightCards";
import Section6 from "../../components/AboutUsComponent/Section6";
import TopBrandSection from "../../components/ReuseableComponents/TopBrandsSection";
import LeaveUsMessageSection from "../../components/ReuseableComponents/LeaveUsMessageSection";

import { AboutUsData, AboutUsData2 } from "../../assets/data";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <PagesFirstSection
        heading={"WE ARE"}
        content={
          "We are Ecom Gleam. Here, we will illuminate the path for your e-commerce successes on Amazon. We are committed to empowering Amazon sellers by providing them with customized solutions and unwavering assistance."
        }
      />
      <Section2 />
      <Section3 />
      <LeftRightCards
        coloredHeading={"The Gleam Values"}
        data={AboutUsData}
      />
      <LeftRightCards
        coloredHeading={"Client Education and Empowerment"}
        data={AboutUsData2}
      />
      <Section6 />
      <TopBrandSection />
      <LeaveUsMessageSection />
    </div>
  );
};

export default AboutUs;
