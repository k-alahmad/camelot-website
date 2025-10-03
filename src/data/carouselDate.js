import { homeData } from "./homeData";
import m1 from '../assets/images/carousel/m1.webp'
import m2 from '../assets/images/carousel/m2.webp'
import m3 from '../assets/images/carousel/m3.webp'
import m4 from '../assets/images/carousel/m4.webp'
export const allCarouselData = {
  en: [
    {
      mainImage: homeData.HeroSection.mainImage,
      secondImage: homeData.HeroSection.secondImage,
      title: homeData.HeroSection.titleEn,
      subtitle: homeData.HeroSection.subTitleEn,
      subtitleTwo: homeData.HeroSection.subTitleTwoEn,
      buttonText: homeData.HeroSection.buttonNameEn,
      buttonLink: "#signup"
    },
    {
      mainImage: m1,
      secondImage: m2,
      title: "Free Open Weekend: Saturday 4th Skills Day",
      subtitle: "FREE Classes, Workshops, and Fluency Boosts!",
      subtitleTwo: "Master fluency, join the IELTS Workshop, and get FREE English Classes (B1/B2). Finish the day with the Football Club (Chelsea/Liverpool).",
      buttonText: "Sign Up Now",
      buttonLink: "#signup"
    },
     {
      mainImage: m3,
      secondImage: m4,
      title: "Free Open Weekend: Sunday 5th Movie & Career",
      subtitle: "Learn a New Language and Power Up Your Career!",
      subtitleTwo: "Start with Arabic or an A1 Class, then master Job Interview & CV Writing. Conclude with our special Movie Club!",
      buttonText: "Sign Up Now",
      buttonLink: "#signup"
    },
   
  ],
  ar: [
    {
       
      mainImage: homeData.HeroSection.mainImage,
      secondImage: homeData.HeroSection.secondImage,
      title: homeData.HeroSection.titleAr,
      subtitle: homeData.HeroSection.subTitleAr,
      subtitleTwo: homeData.HeroSection.subTitleTwoAr,
      buttonText: homeData.HeroSection.buttonNameAr,
      buttonLink: "#signup"
    
    },
     {
    mainImage: m1,
    secondImage: m2,
    title: "عطلة نهاية الأسبوع المفتوحة مجانًا: يوم المهارات (السبت 4 اوكتوبر)",
    subtitle: "	انضم إلينا في يوم مجاني لتدريب المهارات! عزّز طلاقتك، واحضر ورشة عمل آيلتس (IELTS)، وشارك في حصص إنجليزية مجانية (B1/B2)",
    subtitleTwo: "جميع الجلسات مجانية بالكامل! اختتم اليوم بـنادي كرة القدم (تشيلسي/ليفربول). لا تفوت هذه الفرصة المجانية للتطوير.",
    buttonText: "سجّل الآن",
    buttonLink: "#signup"
  },
  {
    mainImage: m3,
    secondImage: m4,
    title: "عطلة نهاية الأسبوع المفتوحة مجانًا: الأفلام والوظائف (الأحد 5 اوكتوبر)",
    subtitle: "كل شيء مجاني! ابدأ بـدروس عربية مجانية أو فئة A1، ثم أتقن مهارات كتابة السيرة الذاتية والمقابلة الوظيفية دون أي تكلفة.",
    subtitleTwo: "ينتهي هذا اليوم المجاني بـنادي الأفلام المميز! اكتشف لغات جديدة وعزّز مسيرتك المهنية، كل ذلك مجانًا.",
    buttonText: "سجّل الآن",
    buttonLink: "#signup"
  }
  ],
};