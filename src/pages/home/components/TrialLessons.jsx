import React from "react";
import { useTranslation } from "react-i18next";
import { trialLessonData } from "../../../data/trialLessonsData";

const TrialLessons = () => {
  const { i18n } = useTranslation();
  return (
    <div dir={i18n.language == "ar" ? "rtl" : "ltr"} className="mt-24 px-[5%]">
      <p className="text-third text-big lg:text-bigger font-bold">
        {i18n.language == "ar"
          ? trialLessonData.titleAr
          : trialLessonData.titleEn}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mt-6">
        {trialLessonData.lessons.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-t from-third via-fifth to-primary w-full rounded-lg p-0.5"
            >
              <div className="w-full bg-white p-5 space-y-3 rounded-md">
                <div className="flex justify-start items-center gap-x-2">
                  <img
                    src={item.icon}
                    alt={item.titleEn}
                    className={`h-[75px] w-[75px]`}
                  />
                  <p className="font-bold text-smaller">
                    {i18n.language == "ar" ? item.titleAr : item.titleEn}
                  </p>
                </div>
                <div
                  className={`space-y-3 transition-all duration-300 flex justify-start items-center md:h-[180px] lg:h-[220px] xl:h-[160px] 2xl:h-[130px]`}
                >
                  <p
                    className="font-medium text-tiny md:text-smaller text-start"
                    key={index}
                  >
                    {i18n.language == "ar" ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrialLessons;
