import mainImage from "../assets/images/mainpackagingpage.webp";

import cutter from "../assets/images/cutter.png";
import welding from "../assets/images/welding.png";
import combination from "../assets/images/combination.webp";

export const packagingData = {
  mainImage: mainImage,
  Brief: [
    {
      en: "Our machines have Suisse quality that is capable of manufacturing cans from different diameter sizes 65,73,83,99,153 with heights from 50 mm to 270 mm with production capability to produce 25000 can per hour",
      ar: "يوجد لدينا آلات بجودة سويسرية قابلة على تصنيع عبوات معدنية بمختلف الأقطار 65,73,83,99,153  والارتفاعات من 50مم إلى 270 بطاقة إنتاجية تصل إلى  25000 علبة بالساعة",
    },
  ],

  parts: [
    {
      image: [cutter],
      title: {
        en: "The Cutter Machine",
        ar: "مكنة المقص",
      },
      desc: {
        en: "It cut the metal tablet and cut it into different sizes of sheets in order to transform it into cans in the second stage.",
        ar: "وظيفته تقطيع اللوح الى شرائح حتى يقدمها الى المرحلة التالية",
      },
      color: "#E98005",
    },
    {
      image: [welding],
      title: { en: "The Welding Machine", ar: "مكنة الدرازة" },
      desc: {
        en: "It transfers the sheets into welded can that will be covered inside by layer of powder that get stuck on the can after the affection of the heat, and covered from outside by layer of lacquer stuck also by the heat.",
        ar: "وظيفتها تحويل الشرائح إلى علب ملحومة بالاضافة لوضع طبقة حماية عند اللحام من الداخل تتكون من جزيئات مطاطية من البودرة تلتصق بالحرارة وحماية من الخراج بطبقة لكر تلتصق أيضا بالحرارة",
      },
      color: "#672971",
    },
    {
      image: [combination],
      title: { en: "The Combination Machine", ar: "مكنة السكارة" },
      desc: {
        en: "It closes the can with high techniques by easy open end or normal end",
        ar: "وظيفتها إغلاق العلبة بغطاء معدني سهل الفتح أو غطاء عادي ",
      },
      color: "#094C6C",
    },
  ],
};
