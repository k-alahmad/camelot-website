import React from "react";
import { secondData } from "../../../data/seoncdData";
import { useTranslation } from "react-i18next";

const WWYG = () => {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language == "ar" ? "rtl" : "ltr"} className="mt-24 px-[5%]">
      <p className="text-third text-big lg:text-bigger font-bold">
        {i18n.language == "ar" ? secondData.titleAr : secondData.titleEn}
      </p>
      <div className="bg-gradient-to-t from-third via-fifth to-primary w-full rounded-lg p-0.5 mt-6">
        <div className="w-full h-full rounded-md bg-secondary grid lg:grid-cols-2 gap-6">
          <img
            src={secondData.image}
            alt="second"
            className={`w-full h-full object-cover object-center rounded-l-lg ${
              i18n.language == "ar" ? "scale-x-[-1]" : "scale-x-1"
            }`}
          />
          <div className="p-5 space-y-6 flex flex-col justify-evenly items-start">
            {secondData.steps.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-start items-start gap-x-4"
                >
                  <img src={item.icons} alt={item.titleEn} className={`pt-1`} />
                  <div className="">
                    <p className="text-smaller md:text-small font-bold ">
                      {i18n.language == "ar" ? item.titleAr : item.titleEn}
                    </p>
                    <p className="text-tiny md:text-smaller font-light">
                      {i18n.language == "ar"
                        ? item.descriptionAr
                        : item.descriptionEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WWYG;
