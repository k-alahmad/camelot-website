import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

import { homeData } from "../../../data/homeData";
import { NavElement } from "../../../data/navData";
import { useTranslation } from "react-i18next";
import { handleScroll } from "../../../helpers/scroll";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="max-w-[1920px] w-full flex flex-col justify-start items-center">
      <div className=" w-full gap-16 md:gap-6 text-white bg-primary h-full grid md:grid-cols-3 p-[5%] place-items-center">
        <div className="h-full flex flex-col justify-start items-center text-center">
          <img
            src={homeData.Footer.left.logo}
            alt="LOGO"
            className="w-[250px] sm:w-[300px] h-auto -mt-16"
          />
          <div className="flex justify-center items-center gap-x-6 -mt-12">
            <FaFacebook className="text-small md:text-med cursor-pointer" />
            <FaInstagram className="text-small md:text-med cursor-pointer" />
            <FaTwitter className="text-small md:text-med cursor-pointer" />
          </div>

          <p className="text-tiny md:text-smaller mt-6">
            @{" "}
            {i18n.language == "ar"
              ? homeData.Footer.left.copyrightAr
              : homeData.Footer.left.copyrightEn}
          </p>
          <p className="text-tiny md:text-smaller mt-6">
            {i18n.language == "ar"
              ? homeData.Footer.left.companyInfo.llcAr
              : homeData.Footer.left.companyInfo.llcEn}
          </p>

          <div className="flex justify-center items-center gap-x-2 text-tiny">
            <p>INN {homeData.Footer.left.companyInfo.inn} </p>
            <p>ORGN {homeData.Footer.left.companyInfo.ogrn} </p>
          </div>
        </div>
        <div className="h-full flex flex-col justify-start items-start space-y-6">
          <p className="text-smaller md:text-small font-bold">
            {i18n.language == "ar" ? "القائمة" : "Menu"}
          </p>
          {NavElement.map((item, index) => {
            return (
              <p
                key={index}
                className="cursor-pointer text-tiny md:text-smaller"
                onClick={() => {
                  handleScroll(item.link);
                }}
              >
                {t(item.name)}
              </p>
            );
          })}
        </div>
        <div className="h-full flex flex-col justify-start items-start space-y-6">
          <p className="text-smaller md:text-small font-bold">
            {i18n.language == "ar" ? "تواصل معنا" : "Contact Us"}
          </p>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <FaPhone className="text-smaller md:text-small rotate-90" />
            <p className="text-tiny md:text-smaller">
              {homeData.Footer.right.contactUs.phone}
            </p>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <MdEmail className="text-smaller md:text-small" />
            <p className="text-tiny md:text-smaller">
              {homeData.Footer.right.contactUs.email}
            </p>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <MdLocationOn className="text-smaller md:text-small" />
            <p className="text-tiny md:text-smaller">
              {i18n.language == "ar"
                ? homeData.Footer.right.contactUs.addressAr
                : homeData.Footer.right.contactUs.addressEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
