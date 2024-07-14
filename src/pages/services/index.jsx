import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import PagesFirstSection from "../../components/ReuseableComponents/PagesFirstSection";
import Section2 from "../../components/ServicesComponents/Section2";
import Section3 from "../../components/ServicesComponents/Section3";
import Section4 from "../../components/ServicesComponents/Section4";
import Section5 from "../../components/ServicesComponents/Section5";
import Section6 from "../../components/ServicesComponents/Section6";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - 3pl And Warehousing Services</title>
        <meta
          name="description"
          content="EcomGleam offers efficient ecommerce solutions to optimize performance and drive growth. Collaborate with us to leverage expert strategies and cutting-edge technology tailored for your online success."
        />
        <meta
          name="keywords"
          content="ecommerce, ecommerce solutions, online business, ecommerce management, EcomGleam"
        />
      </Helmet>

      <div>
        <PagesFirstSection
          subheading={"3PL & Warehousing Services"}
          heading={"Rectify Your Supply Chain Efficiency with"}
          content={
            "Customized warehousing solutions aimed at improving inventory management, streamlining operations, and fostering business growth."
          }
        />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
  );
};

export default Services;
