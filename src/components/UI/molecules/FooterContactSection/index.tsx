import React from "react";
import FooterLinks from "../../atoms/Links/FooterLink/index";

const FooterContactSection = () => {
  return (
    <div className="w-52 py-6 flex flex-col align-start text-start">
      <p className="text-xl py-4">Contact</p>
      <FooterLinks name="Help/FAQ" />
      <FooterLinks name="Press" />
      <FooterLinks name="Affiliates" />
    </div>
  );
};
export default FooterContactSection;
