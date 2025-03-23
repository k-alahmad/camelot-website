import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { teachersData } from "../../../data/teachersData";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/UI/SliderArrows";

import { useDispatch } from "react-redux";
import { showFilterModal } from "../../../redux/modal.slice";
const Teachers = () => {
  const { i18n } = useTranslation();
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="mt-24">
      <div dir={i18n.language == "ar" ? "rtl" : "ltr"}>
        <p className="text-third text-big lg:text-bigger font-bold px-[5%]">
          {i18n.language == "ar" ? "المعلمون" : "Teachers"}
        </p>
        <p className="text-third text-smaller lg:text-small font-medium xl:w-3/4 px-[5%]">
          {i18n.language == "ar" ? teachersData.titleAr : teachersData.titleEn}
        </p>
      </div>
      <div className="h-[500px]">
        <Slider
          className="w-full h-full"
          centerMode={true}
          infinite={true}
          centerPadding="60px"
          slidesToShow={5}
          slidesToScroll={1}
          speed={500}
          lazyLoad="ondemand"
          touchMove={true}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          beforeChange={(current, next) => setImageIndex(next)}
          onSwipe={() => {}}
          responsive={[
            {
              breakpoint: 1700,
              settings: {
                slidesToShow:
                  teachersData.teachers.length >= 5
                    ? 5
                    : teachersData.teachers.length,
                centerPadding: "20px",
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow:
                  teachersData.teachers.length >= 3
                    ? 3
                    : teachersData.teachers.length,
                centerPadding: "200px",
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow:
                  teachersData.teachers.length >= 3
                    ? 3
                    : teachersData.teachers.length,
                centerPadding: "100px",
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow:
                  teachersData.teachers.length >= 3
                    ? 3
                    : teachersData.teachers.length,
                centerPadding: "50px",
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                centerPadding: "200px",
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerPadding: "150px",
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                centerPadding: "80px",
              },
            },
          ]}
        >
          {teachersData.teachers.map((item, index) => {
            return (
              <div
                dir={i18n.language == "ar" ? "rtl" : "ltr"}
                key={index}
                className={`w-[260px] sm:w-[300px] !flex !justify-center !items-center transition-all duration-500 py-28  ${
                  index == imageIndex
                    ? "md:scale-[1.3] 2xl:scale-[1.5] opacity-100 relative z-10"
                    : "scale-[0.7] md:scale-[1] 2xl:scale-[1.2] opacity-[1]"
                }`}
              >
                <div className="rounded-xl overflow-hidden border-secondary border-2 w-full flex flex-col justify-center items-center max-w-[200px]">
                  <img
                    src={item.image}
                    alt={item.nameEN}
                    className={`h-[150px] w-full object-cover object-top`}
                  />
                  <div
                    className={`w-full bg-secondary p-5 space-y-3 transition-all duration-300  ${
                      index == imageIndex
                        ? "h-[140px] md:h-[150px]"
                        : "h-[50px] md:h-[60px]"
                    }`}
                  >
                    <p className="font-bold text-tiny md:text-smaller capitalize">
                      {i18n.language == "ar" ? item.nameAr : item.nameEN}
                    </p>
                    <p className="font-regular text-tiny text-gray-700 line-clamp-2">
                      {i18n.language == "ar" ? item.titleAr : item.titleEn}
                    </p>
                    <p
                      className="underline text-primary cursor-pointer"
                      onClick={() => {
                        dispatch(
                          showFilterModal({
                            data: (
                              <div
                                dir={i18n.language == "ar" ? "rtl" : "ltr"}
                                className="space-y-5 p-[5%]"
                              >
                                <div className="flex max-sm:flex-col sm:justify-center sm:items-center gap-x-5">
                                  <img
                                    src={
                                      item.gender == "male"
                                        ? item.image !== ""
                                          ? item.image
                                          : male
                                        : item.image !== ""
                                        ? item.image
                                        : female
                                    }
                                    alt={item.nameEN}
                                    className={`h-[200px] w-[200px] object-contain object-top rounded-full self-center`}
                                  />
                                  <div className="max-sm:text-center space-y-5">
                                    <p className="font-bold text-small md:text-med capitalize text-primary">
                                      {i18n.language == "ar"
                                        ? item.nameAr
                                        : item.nameEN}
                                    </p>
                                    <p className="font-regular text-smaller md:text-small text-gray-700">
                                      {i18n.language == "ar"
                                        ? item.titleAr
                                        : item.titleEn}
                                    </p>
                                  </div>
                                </div>

                                <p className="font-regular text-tiny md:text-smaller text-black">
                                  {i18n.language == "ar"
                                    ? item.descAr
                                    : item.descEn}
                                </p>
                              </div>
                            ),
                          })
                        );
                      }}
                    >
                      {i18n.language == "ar" ? "اعرض المزيد" : "View More"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Teachers;
