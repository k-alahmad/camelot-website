import React, { useEffect, useRef, useState } from "react";
import { testData } from "../../data/testData";
import { FaCheck, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import useForm from "../../hooks/useForm";
import { useTranslation } from "react-i18next";
import CustomInput from "../../components/Forms/CustomInput";
import { MdSend } from "react-icons/md";
import { client } from "../../sanity/client";
import { showMessage } from "../../redux/messageAction.slice";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const defaultFormState = {
  email: "",
  fullName: "",
  phoneNumber: "",
};
const SampleTestPage = () => {
  const [userData, setUserData] = useState([]);
  const slideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    disabled,
    errors,
    setErrors,
    setValues,
    handleSubmit,
    handleChange,
    values,
  } = useForm(submit, defaultFormState);
  const sendEmail = async (e) => {
    // e.preventDefault();
    await emailjs
      .send(
        "service_voa1non",
        "template_kybq8ln",
        {
          email: values.email,
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
        },
        "tdJc4vKW38XtiE8B-"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  const sendToSanity = async (data) => {
    try {
      const result = await client.create(data);
      setIsLoading(false);
      setValues(defaultFormState);
      sendEmail();
      navigate("/");
      dispatch(
        showMessage({
          message: i18n.language == "en" ? "Test Submitted" : "شكرا لك",
          variant: "success",
        })
      );
      return result;
    } catch (error) {
      setIsLoading(false);
      setValues(defaultFormState);
      showMessage({
        message:
          i18n.language == "en"
            ? "Somthing went wrong, please try agian!"
            : "حصل خطأ ما, الرجاء المحاولة مرة اخرى",
        variant: "error",
      });
      throw error;
    }
  };
  function submit(e) {
    setIsLoading(true);
    sendToSanity({
      _type: "testResults",
      timestamp: new Date(),
      studentName: values.fullName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      score: userData.filter((x) => x.correct).length,
      correctAnswers: userData.filter((x) => x.correct).length,
      wrongAnswers: userData.filter((x) => x.correct == false).length,
    });
  }
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData.length]);
  return (
    <div className="px-[5%] mt-24 space-y-8 text-smaller md:text-small flex flex-col justify-start items-start">
      <p className="font-bold text-third text-big md:text-bigger text-center w-full">
        Level Test
      </p>
      <Slider
        ref={slideRef}
        slidesToScroll={1}
        slidesToShow={1}
        dots={false}
        speed={500}
        touchMove={false}
        className="h-auto w-full"
        arrows={false}
        infinite={false}
        beforeChange={(prev, next) => setCurrentSlide(next)}
        adaptiveHeight
      >
        {testData.map((item, index) => {
          return (
            <div key={index} className="space-y-3 p-5 rounded-xl pb-16">
              <p className="font-bold">
                {item.id} - {item.question}
              </p>
              <div className="max-lg:space-y-2 flex flex-col justify-start items-start lg:grid lg:grid-cols-2 lg:gap-6 md:translate-x-">
                {item.answers.map((answer, i) => {
                  return (
                    <div
                      key={i}
                      className={`min-w-[250px] sm:min-w-[400px] lg:min-w-[300px] border-2 border-grey-500 p-2 rounded-lg cursor-pointer flex justify-start items-center gap-x-4 ${
                        userData.find((x) => x.questionId == item.id)
                          ?.answerId == answer.id &&
                        "shadow-2xl drop-shadow-2xl"
                      } ${
                        userData.find((x) => x.questionId == item.id)
                          ?.answerId == answer.id &&
                        userData.find((x) => x.questionId == item.id)
                          ?.correct &&
                        "border-green-500"
                      } ${
                        userData.find((x) => x.questionId == item.id)
                          ?.answerId == answer.id &&
                        !userData.find((x) => x.questionId == item.id)
                          ?.correct &&
                        "border-red-500"
                      }`}
                      onClick={() => {
                        const answered = userData.find(
                          (x) => x.questionId == item.id
                        );
                        if (!answered)
                          setUserData([
                            ...userData,
                            {
                              questionId: item.id,
                              answerId: answer.id,
                              correct: answer.flag,
                            },
                          ]);
                      }}
                    >
                      {userData.find((x) => x.questionId == item.id) &&
                      answer.flag ? (
                        <div className="w-6 h-6 rounded-full border-[1px] border-green-500 bg-green-500 flex justify-center items-center p-1">
                          <FaCheck className="text-white" />
                        </div>
                      ) : userData.find((x) => x.questionId == item.id) &&
                        !answer.flag ? (
                        <div className="w-6 h-6 rounded-full border-[1px] border-red-500 bg-red-500 flex justify-center items-center">
                          <p className="text-white text-smaller">X</p>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border-[1px] border-gray-500" />
                      )}
                      <p className={`font-medium`}>
                        {answer.id} - {answer.answer}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div
          key={testData.length + 1}
          className="!flex !justify-center !items-center"
        >
          <div className="flex flex-col justify-center items-center p-[5%] space-y-6 bg-white w-[95%] max-w-[700px]">
            <CustomInput
              placeholder={t("fullName")}
              type={"text"}
              name={"fullName"}
              onChange={handleChange}
              value={values.fullName}
              error={errors?.fullName}
            />
            <CustomInput
              placeholder={t("email")}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              value={values.email}
              error={errors?.email}
            />
            <CustomInput
              placeholder={t("phoneNumber")}
              type={"text"}
              name={"phoneNumber"}
              onChange={handleChange}
              value={values.phoneNumber}
              error={errors?.phoneNumber}
            />
            <button
              className="rounded-lg bg-fourth text-white font-bold w-full p-2 flex justify-center items-center gap-x-2 text-tiny md:text-smaller place-self-center"
              disabled={disabled}
              onClick={handleSubmit}
            >
              {isLoading ? t("sending") : t("signup")}
              {!isLoading && (
                <MdSend
                  className={`${
                    i18n.language == "en"
                      ? "group-hover:translate-x-[50%]"
                      : "group-hover:-translate-x-[50%]"
                  } transition-all duration-500 ${
                    i18n.language == "ar" && "rotate-180"
                  } `}
                  size={20}
                />
              )}
            </button>
          </div>
        </div>
      </Slider>
      <div className="max-md:w-full flex justify-center items-center bg-white -translate-y-12 px-5">
        <div
          className={`h-14 w-[100px] ${
            currentSlide !== 0 ? "bg-primary" : "bg-gray-600"
          } transition-all duration-300 text-secondary flex justify-center items-center text-smaller md:text-small font-bold cursor-pointer p-1 gap-x-1 rounded-l-lg border-2 border-primary`}
          onClick={() => {
            if (currentSlide !== 0)
              slideRef.current.slickGoTo(currentSlide - 1);
          }}
        >
          <FaAngleLeft />
          Back
        </div>
        <div className="border-t-2 border-b-2 border-primary w-[60px] h-14 flex justify-center items-center text-center font-bold text-primary">
          {currentSlide + 1 + "/" + (testData.length + 1)}
        </div>
        <div
          className={`h-14 w-[100px] ${
            userData.find((x) => x.questionId == testData[currentSlide]?.id) &&
            currentSlide !== testData.length
              ? "bg-primary"
              : "bg-gray-600"
          } transition-all duration-300 text-secondary flex justify-center items-center text-smaller md:text-small font-bold cursor-pointer p-1 gap-x-1 rounded-r-lg border-2 border-primary`}
          onClick={() => {
            if (userData.find((x) => x.questionId == testData[currentSlide].id))
              slideRef.current.slickGoTo(currentSlide + 1);
          }}
        >
          Next
          <FaAngleRight />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6 -translate-y-12 px-5 w-full">
        <div className="border-2 border-black text-black rounded-lg text-center flex justify-center items-center gap-x-2 font-bold h-14 w-full">
          {"Answered: " + userData.length}
        </div>
        <div className="border-2 border-green-600 text-green-600 rounded-lg text-center flex justify-center items-center gap-x-2 font-bold h-14 w-full">
          {"Correct: " + userData.filter((x) => x.correct).length}
        </div>
        <div className="border-2 border-red-500 text-red-500 rounded-lg text-center flex justify-center items-center gap-x-2 font-bold h-14 w-full">
          {"Wrong: " + userData.filter((x) => x.correct == false).length}
        </div>
      </div>
    </div>
  );
};

export default SampleTestPage;
