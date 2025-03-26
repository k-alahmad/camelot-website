import React from "react";
import { useTranslation } from "react-i18next";
import { reviewsData } from "../../../data/reviewsData";
import Slider from "react-slick";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/UI/SliderArrows";
import { useDispatch } from "react-redux";
import { showFilterModal } from "../../../redux/modal.slice";

const Reviews = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div dir={i18n.language == "ar" ? "rtl" : "ltr"} className="mt-24">
      <p className="text-third text-big lg:text-bigger font-bold px-[5%]">
        {i18n.language == "ar" ? reviewsData.titleAr : reviewsData.titleEn}
      </p>
      <Slider
        className="w-full h-full px-[5%] mt-12"
        centerMode={false}
        infinite={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        speed={500}
        touchMove={true}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 1700,
            settings: {
              slidesToShow:
                reviewsData.data.length >= 3 ? 3 : reviewsData.data.length,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow:
                reviewsData.data.length >= 2 ? 2 : reviewsData.data.length,
            },
          },

          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {reviewsData.data.map((item, index) => {
          return (
            <div
              dir={i18n.language == "ar" ? "rtl" : "ltr"}
              key={index}
              className="!flex !justify-center !items-center !w-full"
            >
              <div className="rounded-lg p-5 md:p-8 bg-fifth text-black space-y-6 !w-full max-w-[95%] min-h-[330px]">
                <div className="flex justify-normal items-center gap-x-4">
                  <img
                    src={item.image}
                    alt={item.nameEn}
                    className="h-[80px] w-[80px] object-cover object-top rounded-full border-2 border-primary"
                  />
                  <div className="space-y-1">
                    <p className="text-smaller md:text-small font-bold">
                      {i18n.language == "ar" ? item.nameAr : item.nameEn}
                    </p>
                    <p className="text-tiny md:text-smaller font-regular text-gray-700">
                      {item.titleEn && i18n.language == "ar"
                        ? item.titleAr
                        : item.titleEn}
                      {item.noteEn && i18n.language == "ar"
                        ? item.noteAr
                        : item.noteEn}
                    </p>
                  </div>
                </div>
                <p className="text-tiny md:text-smaller font-regular line-clamp-5">
                  {i18n.language == "ar" ? item.messageAr : item.messageEn}
                </p>
                <p
                  className="underline text-primary cursor-pointer text-tiny md:text-smaller"
                  onClick={() => {
                    dispatch(
                      showFilterModal({
                        data: (
                          <div
                            dir={i18n.language == "ar" ? "rtl" : "ltr"}
                            className="space-y-5 p-[5%] bg-fifth"
                          >
                            <div className="flex max-sm:flex-col sm:justify-start sm:items-center gap-x-5">
                              <img
                                src={item.image}
                                alt={item.nameEn}
                                className={`h-[200px] w-[200px] object-contain object-top rounded-full self-center`}
                              />
                              <div className="max-sm:text-center space-y-5">
                                <p className="font-bold text-small md:text-med capitalize text-primary">
                                  {i18n.language == "ar"
                                    ? item.nameAr
                                    : item.nameEn}
                                </p>
                                <p className="font-regular text-smaller md:text-small text-gray-700">
                                  {item.titleEn && i18n.language == "ar"
                                    ? item.titleAr
                                    : item.titleEn}
                                  {item.noteEn && i18n.language == "ar"
                                    ? item.noteAr
                                    : item.noteEn}
                                </p>
                              </div>
                            </div>

                            <p className="font-regular text-tiny md:text-smaller text-black">
                              {i18n.language == "ar"
                                ? item.messageAr
                                : item.messageEn}
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
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
