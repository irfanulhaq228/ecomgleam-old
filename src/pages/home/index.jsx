import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Section1 from "../../components/HomeComponents/Section1";
import Section2 from "../../components/HomeComponents/Section2";
import Section3 from "../../components/HomeComponents/Section3";
import Section4 from "../../components/HomeComponents/Section4";
import Section5 from "../../components/HomeComponents/Section5";
import Section6 from "../../components/HomeComponents/Section6";
import Section7 from "../../components/HomeComponents/Section7";
import Section8 from "../../components/HomeComponents/Section8";
import Section9 from "../../components/HomeComponents/Section9";
import Section10 from "../../components/HomeComponents/Section10";
import Section11 from "../../components/HomeComponents/Section11";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - Home</title>
        <meta
          name="description"
          content="EcomGleam offers efficient ecommerce solutions to optimize performance and drive growth. Collaborate with us to leverage expert strategies and cutting-edge technology tailored for your online success."
        />
        <meta
          name="keywords"
          content="ecommerce, ecommerce solutions, online business, ecommerce management, EcomGleam"
        />
      </Helmet>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </>
  );
};

export default Home;
