import React from "react";
import { homeData } from "../../../data/homeData";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const SampleTest = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="mt-24 w-full bg-primary grid md:grid-cols-5 place-items-center text-fifth xl:px-[10%] overflow-x-clip"
    >
      <div className="md:col-span-3 p-[5%] xl:p-10 space-y-6 text-center md:text-start">
        <p className="text-med md:text-big font-bold">
          {i18n.language == "ar"
            ? homeData.TestSection.titleAr
            : homeData.TestSection.titleEn}
        </p>
        <p className="text-smaller md:text-small font-regular">
          {i18n.language == "ar"
            ? homeData.TestSection.subTitleAr
            : homeData.TestSection.subTitleEn}
        </p>
        <img
          src={homeData.TestSection.mainImage}
          alt={homeData.TestSection.mainImageAlt}
          className="object-contain h-[300px] w-full md:hidden"
        />
        <button
          onClick={() => {
            navigate("/test");
          }}
          className="w-full max-w-[400px] text-center p-2 bg-fifth text-primary rounded-lg text-tiny lg:text-smaller font-bold"
        >
          {i18n.language == "ar"
            ? homeData.TestSection.buttonNameAr
            : homeData.TestSection.buttonNameEn}
        </button>
      </div>
      <div className="max-md:hidden w-full h-full relative md:col-span-2">
        <img
          src={homeData.TestSection.mainImage}
          alt={homeData.TestSection.mainImageAlt}
          className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:h-[400px] md:w-full object-contain md:scale-125 2xl:scale-100 "
        />
      </div>
    </div>
  );
};

export default SampleTest;
