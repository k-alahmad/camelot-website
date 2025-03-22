import React from "react";
import { homeData } from "../../../data/homeData";
import { useTranslation } from "react-i18next";
const HowToSpeak = () => {
  const { i18n } = useTranslation();

  return (
    <div className="my-24 px-[5%] relative">
      <div className="flex flex-col items-start justify-start space-y-3">
        <p className="text-third text-big lg:text-bigger font-bold">
          {i18n.language == "ar"
            ? homeData.SpeakEnglish.titleAr
            : homeData.SpeakEnglish.titleEn}
        </p>

        <div className="relative flex justify-center items-center gap-x-3 rounded-full bg-fifth p-3">
          <img
            src={homeData.SpeakEnglish.mainImage}
            alt={homeData.SpeakEnglish.mainImageAlt}
            className="w-[100px] h-[100px] rounded-full object-cover object-top"
          />
          <p className="text-third text-small lg:text-med font-regular">
            {i18n.language == "ar"
              ? homeData.SpeakEnglish.subTitleAr
              : homeData.SpeakEnglish.subTitleEn}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center max-lg:gap-y-16 lg:gap-6 mt-20">
        {homeData.SpeakEnglish.step.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center p-5 rounded-lg shadow-lg drop-shadow-lg h-[200px] md:h-[250px] w-full max-w-[250px] xl:h-[300px] xl:max-w-[300px]"
              style={{
                backgroundColor: item.bg,
                color: item.textColor,
              }}
            >
              <div className="bg-gradient-to-t from-third via-fifth to-primary p-0.5 rounded-full h-[75px] w-[75px] xl:h-[100px] xl:w-[100px] flex justify-center items-center absolute -top-[37.5px] xl:-top-[50px] left-1/2 -translate-x-1/2">
                <div className="w-full h-full bg-white rounded-full">
                  <img
                    src={item.icon}
                    alt={item.titleEn}
                    className="w-full h-full p-3"
                  />
                </div>
              </div>
              {/* <p className="text-smaller md:text-small text-center font-bold [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.8)] leading-snug font-manrope font-extrabold"> */}
              <p className="text-smaller md:text-small xl:text-[25px] text-center font-bold">
                {i18n.language == "ar" ? item.titleAr : item.titleEn}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowToSpeak;
