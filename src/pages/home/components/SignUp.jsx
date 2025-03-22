import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomInput from "../../../components/Forms/CustomInput";
import { showMessage } from "../../../redux/messageAction.slice";
import { MdSend } from "react-icons/md";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { MdExpandMore } from "react-icons/md";
import emailjs from "@emailjs/browser";

const defaultFormState = {
  email: "",
  fullName: "",
  phoneNumber: "",
};
const SignUp = () => {
  const {
    disabled,
    errors,
    setErrors,
    setValues,
    handleSubmit,
    handleChange,
    values,
  } = useForm(submit, defaultFormState);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(
  //       showMessage({
  //         message:
  //           i18n.language == "en"
  //             ? "Thank You For Your Request"
  //             : "شكرا على طلب الاستشارة",
  //         variant: "success",
  //       })
  //     );
  //   }
  //   if (isError) {
  //     showMessage({
  //       message:
  //         i18n.language == "en"
  //           ? "Somthing went wrong, please try agian!"
  //           : "حصل خطأ ما, الرجاء المحاولة مرة اخرى",
  //       variant: "error",
  //     });
  //   }
  // }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5wdnu6j",
        "template_slqqcpm",
        values.current,
        "sxh5TJan60LQqD6Sw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  function submit(e) {
    // sendEmail(e);
    setValues(defaultFormState);
  }
  const { t, i18n } = useTranslation();
  return (
    <div className="px-[%] mt-24 bg-fourth grid md:grid-cols-2 text-white min-h-[400px]">
      <div className="p-[5%] w-full h-full flex flex-col justify-evenly items-start space-y-6">
        <p className="text-med lg:text-big font-bold">
          {i18n.language == "ar"
            ? "سجل للحصول على درس تجريبي مجاني واحصل على خصم 10٪ على الرسوم الدراسية"
            : "Sign up for a free trial lesson and get a 10% discount on tuition"}
        </p>
        <p className="text-smaller lg:text-med font-medium">
          {i18n.language == "ar"
            ? "إملأ النموذج وسوف نختار الوقت المناسب لك"
            : "Fill out the form and we will select a convenient time for you"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-[5%] space-y-3">
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
          className="rounded-lg bg-secondary text-primary w-full p-2 flex justify-center items-center gap-x-2 font-medium text-tiny md:text-smaller place-self-center"
          disabled={disabled}
          onClick={handleSubmit}
        >
          {isLoading ? t("Sending") : t("Send")}
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
  );
};

export default SignUp;
