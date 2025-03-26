import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomInput from "../../../components/Forms/CustomInput";
import { showMessage } from "../../../redux/messageAction.slice";
import { MdSend } from "react-icons/md";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { MdExpandMore } from "react-icons/md";
import emailjs from "@emailjs/browser";
import sowrd from "../../../assets/images/Sowrd.svg";
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
        "service_voa1non",
        "template_ldfp86q",
        values.current,
        "tdJc4vKW38XtiE8B-"
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
    <div
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="mt-6 md:mt-12 grid md:grid-cols-2 text-white min-h-[500px] bg-fourth"
    >
      <div className="p-[5%] w-full h-full flex flex-col justify-between items-start space-y-6 relative">
        <img
          src={sowrd}
          alt="sowrd logo"
          className="absolute bottom-0 right-0 w-[200px] h-auto max-md:hidden"
        />
        <p className="text-med lg:text-big font-bold">
          {i18n.language == "ar"
            ? "سجل للحصول على درس تجريبي مجاني واحصل على خصم 10٪ على الرسوم الدراسية"
            : "Sign up for a free trial lesson and get a 10% discount on tuition"}
        </p>
        <p className="text-smaller lg:text-med font-regular">
          {i18n.language == "ar"
            ? "إملأ النموذج وسوف نختار الوقت المناسب لك"
            : "Fill out the form and we will select a convenient time for you"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-[5%] space-y-6 bg-white m-[5%] rounded-lg shadow-lg">
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
  );
};

export default SignUp;
