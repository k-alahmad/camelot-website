import React from "react";
import { homeData } from "../../../data/homeData";
import sound from "../../../assets/images/sound.svg";
import { useTranslation } from "react-i18next";
import { handleScroll } from "../../../helpers/scroll";
const Header = () => {
  const { i18n } = useTranslation();
  return (
    <div
      id="Header"
      className="w-full h-screen pt-6 md:pt-10 bg-primary grid md:grid-cols-2 gap-10 place-items-center px-5 lg:px-[5%] relative overflow-hidden"
    >
      <svg
        width="607"
        height="256"
        viewBox="0 0 607 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full -bottom-1/4 left-0 opacity-70"
      >
        <path
          d="M605 2C588.325 2 584.851 35.1783 584.988 54.1217C586.308 73.139 585.661 92.1564 578.778 109.941C576.844 116.294 570.161 123.963 565.331 126.846C559.511 130.318 536.575 131.41 530.368 130.367C513.575 127.545 509.364 128.132 492.985 122.443C464.804 112.656 436.188 102.878 400.565 85.7403C370.04 73.2382 365.642 74.2367 339.017 90.0247C317.636 102.703 305.489 121.002 291.142 141.461C280.243 157.002 271.856 175.874 261.154 191.645C245.968 214.026 233.461 230.004 212.072 238.661C191.07 247.16 161.811 244.605 140.082 248.698C122.357 252.037 104.724 254.614 86.7962 253.872C74.5131 253.363 61.4071 250.222 50.2037 243.364C40.6582 237.52 34.342 232.505 36.1824 217.354C42.637 202.915 53.0047 195.868 60.5218 187.948C68.039 180.028 74.3725 169.458 76.207 156.956C78.0416 144.454 70.3971 143.306 66.9765 135.122C63.8986 127.757 62.8799 125.574 60.5218 117.094C58.2163 108.803 75.2626 98.4549 76.207 90.0247C77.185 81.2947 63.3926 70.875 43.7128 74.7489C32.1482 74.7489 14.3714 68.6028 2 68.6028"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="text-white space-y-6 xl:max-w-[500px] flex flex-col justify-center items-center">
        <p className="text-med sm:text-big lg:text-bigger font-bold text-center">
          {i18n.language == "ar"
            ? homeData.HeroSection.titleAr
            : homeData.HeroSection.titleEn}
        </p>
        <p className="text-small lg:text-med font-medium text-center">
          {i18n.language == "ar"
            ? homeData.HeroSection.subTitleAr
            : homeData.HeroSection.subTitleEn}
        </p>

        <p className="text-tiny lg:text-smaller font-light text-center w-3/5">
          {i18n.language == "ar"
            ? homeData.HeroSection.subTitleTwoAr
            : homeData.HeroSection.subTitleTwoEn}
        </p>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => {
              handleScroll("signup");
            }}
            className="w-full max-w-[200px] text-center p-2 bg-secondary text-primary rounded-lg text-tiny lg:text-smaller font-bold z-30"
          >
            {i18n.language == "ar"
              ? homeData.HeroSection.buttonNameAr
              : homeData.HeroSection.buttonNameEn}
          </button>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div className="h-[260px] w-[260px]  sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px] absolute left-1/2 -translate-x-1/2 top-1/4  md:top-1/2 -translate-y-1/2">
          <img
            src={homeData.HeroSection.mainImage}
            alt={homeData.HeroSection.mainImageAlt}
            className="rounded-full object-center object-cover w-full h-full shadow-secondary shadow-2xl drop-shadow-2xl"
          />
          <div className="h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] lg:h-[160px] lg:w-[160px] absolute -left-[10px] sm:-left-[50px] -top-[50px] rounded-full shadow-secondary shadow-2xl drop-shadow-2xl">
            <img
              src={homeData.HeroSection.secondImage}
              alt={homeData.HeroSection.secondImageAlt}
              className="rounded-full object-center object-cover w-full h-full z-30 relative"
            />
            <img
              src={sound}
              alt="sound"
              className="object-center object-cover h-[60px] w-[75px] absolute bottom-[0px] -left-[30px] sm:-left-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
