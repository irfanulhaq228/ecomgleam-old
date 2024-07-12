import React, { useEffect } from "react";
import Section1 from "../../components/ServicesComponents/Section1";
import Section2 from "../../components/ServicesComponents/Section2";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Services;
