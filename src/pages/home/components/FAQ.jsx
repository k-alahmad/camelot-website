import React, { useState } from "react";
import { faqData } from "../../../data/faqData";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(null);

  return (
    <div className="py-24 px-[5%]" dir={i18n.language == "ar" ? "rtl" : "ltr"}>
      <p className="text-third text-big lg:text-bigger font-bold">
        {i18n.language == "ar" ? faqData.titleAR : faqData.titleEN}
      </p>

      <div className="w-full space-y-8 mt-12 z-10">
        {faqData.questions.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {/* <div className={i18n.language == "ar" ? "px-[10%]" : "px-[5%]"}> */}
              <div className={""}>
                <div
                  className="cursor-pointer flex justify-start items-center gap-x-4"
                  onClick={() => {
                    isExpanded == index
                      ? setIsExpanded(null)
                      : setIsExpanded(index);
                  }}
                >
                  <div className="h-10 w-10 relative">
                    <div className="w-full h-1 bg-fourth absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div
                      className={`w-full h-1 bg-fourth absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                        isExpanded == index ? "rotate-0" : "rotate-90"
                      }`}
                    />
                  </div>
                  <p className="font-bold text-smaller md:text-small flex-1">
                    {i18n.language == "en" ? item.questionEN : item.questionAR}
                  </p>
                </div>
                <div
                  className={`transition-[height] duration-200 overflow-hidden text-smaller md:text-small ${
                    i18n.language == "ar" ? "pr-16" : "pl-16"
                  } ${
                    isExpanded == index
                      ? "h-[200px] md:h-[130px] lg:h-[100px] xl:h-[75px]"
                      : "h-0"
                  }`}
                >
                  {i18n.language == "en" ? item.answerEN : item.answerAR}
                </div>
              </div>
              {faqData.length > index + 1 && (
                <div className="w-full h-px bg-primary" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
