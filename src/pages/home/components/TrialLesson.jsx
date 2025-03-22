import React, { useState } from "react";
import { trialLessonData } from "../../../data/trialLessonsData";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useTranslation } from "react-i18next";
const TrialLesson = () => {
  const { i18n } = useTranslation();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    if (isLeftSwipe) {
      setSelected(selected < 2 ? selected + 1 : 0);
    }
    if (isRightSwipe) {
      setSelected(selected > 0 ? selected - 1 : 2);
    }
  };
  const [selected, setSelected] = useState(1);
  return (
    <div className="px-[5%] mt-12">
      {/* <ComponentTitle title={"Payment Plans"} /> */}
      <p className="text-third text-big lg:text-bigger font-bold">
        {i18n.language == "ar"
          ? trialLessonData.titleAr
          : trialLessonData.titleEn}
      </p>
      <div className="flex flex-row justify-center items-center h-[500px] relative my-16">
        {trialLessonData.lessons.map((item, index) => {
          return (
            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className={`transition-all duration-500 border-none outline-none absolute h-auto ${
                selected == index
                  ? "scale-[0.9] lg:scale-125 z-20"
                  : selected > index && index + 1 == selected
                  ? "scale-75 lg:scale-100 -translate-x-[15%] sm:-translate-x-[60%] lg:-translate-x-[115%] xl:-translate-x-[120%]"
                  : selected > index && index + 1 !== selected
                  ? "scale-75 lg:scale-100 translate-x-[15%] sm:translate-x-[60%] lg:translate-x-[115%] xl:translate-x-[120%]"
                  : selected < index && index - 1 == selected
                  ? "scale-75 lg:scale-100 translate-x-[15%] sm:translate-x-[60%] lg:translate-x-[115%] xl:translate-x-[120%]"
                  : selected < index &&
                    index - 1 !== selected &&
                    "scale-75 lg:scale-100 -translate-x-[15%] sm:-translate-x-[60%] lg:-translate-x-[115%] xl:-translate-x-[120%]"
              }`}
              onClick={() => setSelected(index)}
              key={index}
            >
              <div
                className={`bg-secondary shadow-2xl transition-all duration-500 text-black rounded-xl flex flex-col justify-between items-center max-w-[270px] lg:max-w-[300px] xl:max-w-[350px] h-full p-5 space-y-5`}
              >
                {/* <div className="flex justify-center items-start "> */}

                <img
                  src={item.icon}
                  alt={item.titleEn}
                  className={`h-[75px] w-[75px] scale-125`}
                />
                <div className="max-lg:h-[100px] flex justify-center items-center">
                  <p className="font-bold text-smaller md:text-small text-center">
                    {i18n.language == "ar" ? item.titleAr : item.titleEn}
                  </p>
                </div>

                {/* </div> */}
                <div
                  className={`space-y-3 ${
                    selected == index
                      ? " h-[220px] lg:h-[200px] scale-1"
                      : "h-0 scale-0"
                  } transition-all duration-300 overflow-hidden flex justify-center items-center`}
                >
                  <p
                    className="font-medium text-tiny md:text-smaller text-center"
                    key={index}
                  >
                    {i18n.language == "ar" ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <MdArrowBackIos
          onClick={() => {
            setSelected(selected > 0 ? selected - 1 : 2);
          }}
          className="text-primary text-bigger absolute left-0 top-[50%]"
        />

        <MdArrowForwardIos
          onClick={() => {
            setSelected(selected < 2 ? selected + 1 : 0);
          }}
          className="text-primary text-bigger absolute -right-0"
        />
      </div>
    </div>
  );
};

export default TrialLesson;
