import React from "react";
import { homeData } from "../../../data/homeData";
import { useTranslation } from "react-i18next";
const HomeHeader = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-full h-[90vh] bg-primary grid md:grid-cols-2 gap-10 place-items-center">
      <div className="text-white">
        <p className="text-big md:text-bigger font-bold text-center p-5">
          {i18n.language == "ar"
            ? homeData.HeroSection.titleAr
            : homeData.HeroSection.titleEn}
        </p>
        <p className="text-small md:text-med font-medium text-center p-5">
          {i18n.language == "ar"
            ? homeData.HeroSection.subTitleAr
            : homeData.HeroSection.subTitleEn}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default HomeHeader;
