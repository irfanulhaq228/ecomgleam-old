import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Section1 from "../../components/ContactUsComponents/Section1";
import Section2 from "../../components/ContactUsComponents/Section2";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ecomgleam - Contact Us</title>
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
        <Section1 />
        <Section2 />
      </div>
    </>
  );
};

export default ContactUs;
