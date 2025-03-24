import heroOne from "../assets/images/hero-main-1.webp";
import heroTwo from "../assets/images/hero-sub-top.webp";

import sampleTest from "../assets/images/pass-exam.webp";

import howOne from "../assets/icons/howOne.svg";
import howTwo from "../assets/icons/howTwo.svg";
import howThree from "../assets/icons/howThree.svg";
import howFour from "../assets/icons/howFour.svg";

import howToSpeak from "../assets/images/howToSpeak.webp";
import { systemSettings } from "../settings";
import logo from "../assets/logos/camelotLogoWhite.png";
export const homeData = {
  HeroSection: {
    titleEn: "English Language School CAMELOT",
    titleAr: "معهد كاميلوت لتعليم اللغة الانكليزية",
    subTitleEn: "Your fast way to results",
    subTitleAr: "طريقك السريع نحو النتائج",
    subTitleTwoEn:
      "Sign up for a trial lesson and get a personalized training plan for free",
    subTitleTwoAr: "سجل للحصول على درس تجريبي واحصل على خطة تدريب شخصية مجانًا",

    buttonNameEn: "Sign Up",
    buttonNameAr: "سجل الآن",
    link: "",
    mainImage: heroOne,
    secondImage: heroTwo,
    mainImageAlt: "Hero One",
    secondImageAlt: "Hero Two",
  },
  TestSection: {
    titleEn: "Take a language level test and get feedback from your teacher",
    titleAr: "إخضع لإختبار تحديد المستوى و احصل على تقييم من احد اساتذتنا",
    subTitleEn: "Only 5 minutes online",
    subTitleAr: "خلال 5 دقائق فقط",
    buttonNameEn: "Take the test",
    buttonNameAr: "تابع للاختبار",
    mainImage: sampleTest,
    mainImageAlt: "Sample Test",
  },
  SpeakEnglish: {
    titleEn: "How to start speaking English in just a month?",
    titleAr: "كيف تتحدث اللغة الانكليزية خلال شهر؟",
    subTitleEn: "“What if I’m a complete newbie?”",
    subTitleAr: "ماذا لو كنت مبتدئًا تمامًا؟",
    buttonNameEn: "",
    buttonNameAr: "",
    mainImage: howToSpeak,
    mainImageAlt: "How To Speak",
    step: [
      {
        icon: howOne,
        titleEn: "Sign up for a free trial lesson",
        titleAr: "سجل للحصول على درس تجريبي مجاني",
        bg: systemSettings.colors.light.third,
        textColor: systemSettings.colors.light.white,
      },
      {
        icon: howTwo,
        titleEn: "Get a personalized training plan",
        titleAr: "احصل على خطة تدريب مخصصة",
        bg: systemSettings.colors.light.fourth,
        textColor: systemSettings.colors.light.white,
      },
      {
        icon: howThree,
        titleEn: "Study at a comfortable place with the support of a tutor",
        titleAr: "الدراسة بوتيرة مريحة مع دعم من مدرس خاص",
        bg: systemSettings.colors.light.primary,
        textColor: systemSettings.colors.light.white,
      },
      {
        icon: howFour,
        titleEn: "Done. You're great!",
        titleAr: "تم. أنت رائع!",
        bg: systemSettings.colors.light.secondary,
        textColor: systemSettings.colors.light.primary,
      },
    ],
  },
  Footer: {
    left: {
      logo: logo,
      copyrightEn: "Copyright 2025 by Camelot Language LLC.",
      copyrightAr: " جميع الحقوق محفوظة لـ كاميلوت لانجويج ذ م م 2025.",
      companyInfo: {
        llcEn: 'Camelot Language LLC"',
        llcAr: "كاميلوت لانجويج ذ م م",
        // inn: "INN 7841089419",
        // ogrn: "OGRN 1207800078188",
      },
    },
    right: {
      contactUs: {
        phone: "+971545851248",
        email: "info@camelotenglish.com",
        addressEn: "Dubai, JVC, Binghatti Emerald, office 303",
        addressAr: "دبي, قرية جميرا الدائرية, بناء بن غاطي اميرالد, مكتب 303",
      },
      // educationalServicesDisclaimerEn:
      //   'Educational services are provided in accordance with Federal Law No. 99-FZ of 04.05.2011 "On Licensing of Certain Types of Activities".',
      // educationalServicesDisclaimerAr:
      //   'Educational services are provided in accordance with Federal Law No. 99-FZ of 04.05.2011 "On Licensing of Certain Types of Activities".',
    },
  },
};
