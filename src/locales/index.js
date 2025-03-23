import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const lnglocal = localStorage.getItem("lng");

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: {
        English: "English",
        Arabic: "العربية",
        code: "Ar",
        home: "الرئيسية",
        exit: "خروج",
        cancel: "الغاء",
        ok: "موافق",
        menu: "القائمة",
        register: "سجل الآن",
        download: "تحميل",
        AboutUs: "من نحن",
        JoinUs: "انضم لنا",
        ContactUs: "تواصل معنا",
        products: "المنتجات",
        Categories: "التصنيفات",
        category: "التصنيف",
        UniqueDesign: "تصميم فريد",
        OurWork: "أعمالنا",
        fullName: "الاسم الكامل",
        email: "البريد الالكتروني",
        phoneNumber: "رقم الهاتف",
        message: "الرسالة",
        getInTouch: "ابقى على تواصل",
        hearYou: "نحن نحب أن نسمع منك",
        send: "ارسال",
        sending: "...جار الارسال",
        all: "الكل",
        NoProjects: "لا يوجد مشاريع حاليا",
        OurTeam: "فريقنا",
        teamSlogan: "تعرف على فريقنا المبهر",
        FollowUs: "تابعنا على ",
        sendMessage: "أرسل رسالة",
        ContactInfo: "معلومات التواصل",
        ViewAll: "اعرض المزيد",
        OurProfile: "من نحن",
        Brands: "الشركات",
        Textures: "القوام",
        contactSlogan: "اتصل بنا وأخبرنا برأيك واقتراحاتك",
        Filter: "تصنيف",
        Profile: "من نحن",
        Reset: "مسح",
        welcome: "مرحبا بكم في تصاميمي، جوهر ما بعد الحياة الحديثة",
        ourMission: "مهمتنا",
        mission:
          "في MH Designs، نحن ملتزمون بتحويل مساحات المعيشة الخاصة بك من خلال الأثاث المصمم حسب الطلب         والإكسسوارات المنزلية التي تمزج بين أفضل جماليات ما بعد الحداثة والحرفية السورية الخالدة.مهمتنا هي جلب الابتكار والأناقة والتخصيص إلى كل منزل، مما يجعل الرفاهية في متناول الجميع.",
        ourStory: "قصتنا",
        story:
          "ولدت MH Designs من شغف التصميم واحترام الحرفية، وبدأت بفكرة بسيطة: إنشاء مساحات معيشة فريدة وشخصية. لقد سعى مؤسسونا، مستلهمين التراث الثقافي الغني لسوريا وإمكانيات التصميم الحديث، إلى سد الفجوة بين التقاليد والابتكار. واليوم، لا نقدم مجموعة مختارة من المواد المتميزة فحسب، بل نقدم أيضًا خدمات مخصصة لتخصيص كل قطعة بما يتناسب مع ذوقك ومساحتك الشخصية.",
        customizationCore: "التخصيص في جوهره.",
        customization:
          "يجب أن يعكس منزلك من أنت. تتيح لك عملية التخصيص لدينا أن تكون جزءًا من رحلة التصميم، بدءًا من اختيار المواد وحتى تحديد الأبعاد. سواء كنت تتطلع إلى الإدلاء ببيان جريء أو العثور على ما يناسبك تمامًا، فنحن هنا لإضفاء الحيوية على رؤيتك.",
        ourOffers: "ماذا نقدم؟",
        offers:
          "ءيجب أن يعكس منزلك من أنت. تتيح لك عملية التخصيص لدينا أن تكون جزءًا من رحلة التصميم، بدءًا من اختيار المواد وحتى تحديد الأبعاد. سواء كنت تتطلع إلى الإدلاء ببيان جريء أو العثور على ما يناسبك تمامًا، فنحن هنا لإضفاء الحيوية على رؤيتك.",
        collections: "المجموعات",
        collection: "المجموعة",
        homeInfo:
          "نحن متخصصون في إنشاء الأثاث التصميمي والإبداعي تصميم الأثاث والإكسسوارات باستخدام الجودة العالية مواد مثل تيرازو العارية. خشب الجوز، والنحاس. كل قطعة هي شهادة على الحرفيين الماهرين في سوريا، الذين يجمعون بين التقليدية تقنيات ذات تصميمات حديثة. من القطع المميزة إلى القطع الدقيقة لهجات، مجموعتنا مصممة لرفع المساحة الخاصة بك.",
        details: "التفاصيل",
        SearchProduct: "البحث عن منتج",
        SimilarProducts: "منتجات مشابهة",
        callUs: "اتصل بنا",
        trainees: "المتدربين",
        trainings: "التدريبات",
        staff: "الفريق",
        ourGoals: "أهدافنا",
        ourGoalsSub:
          "انضم إلى مجتمع من المتعلمين ضمن برامج تدريبية معتمدة على الألعاب مصممة لتزويدك بالمهارات الأساسية وتطوير إمكاناتك الكاملة.",
        availableTrainings: "التدريبات المتوفرة",
        start: "يبدأ",
        end: "ينتهي",
        totalXP: "عدد النقاط",
        traineesHomeTitle: "تعرف على أبرز المنجزين لدينا",
        faqTitle: "الأسئلة الشائعة",
        leaderboard: "لوحة المتصدرين",
        ourTrainings: "تدريباتنا",
        daysAttendance: "أيام الحضور",
        trainingTopics: "محتوى التدريب",
        traineesList: "المتدربين",
        quizzez: "الاختبارات",
        homeworks: "الواجبات",
        extras: "الإضافات",
        ourTeam: "فريقنا",
        contactTitle: "سعيدون بالسماع منك",
        badgeTitle: "ابداء في جمع الشارات وتميز عن أقرانك",
        level: "المستوى",
        shareOn: "شارك على",
        badges: "الشارات",
        footer:
          "هذا الموقع هو مبادرة من مختبر التسريع برنامج الأمم المتحدة الإنمائي في سورية بالتعاون مع نقابة المهندسين السوريين (OSEA) مشروع بناء قدرات المهندسين في الجنهورية العربية السورية.",
        AboutSchool: "تعرف علينا",
        SampleTest: "اختبار",
        Newbie: "مبتدئ؟",
        Teachers: "المدرسين",
        FAQs: "الأسئلة الشائعة",
      },
    },
    en: {
      translation: {
        English: "English",
        Arabic: "العربية",
        code: "En",
        home: "Home",
        exit: "Exit",
        cancel: "Cancel",
        ok: "Ok",
        menu: "Menu",
        register: "Register Now",
        download: "Download",
        AboutUs: "About Us",
        JoinUs: "Join Us",
        ContactUs: "Contact Us",
        products: "Products",
        Categories: "Categories",
        category: "Category",
        UniqueDesign: "A Unique Design",
        OurWork: "Our Work",
        fullName: "Full Name",
        email: "Email",
        phoneNumber: "Phone Number",
        message: "Message",
        getInTouch: "Get In Touch",
        hearYou: "we'd love to hear from you",
        send: "Send",
        sending: "Sending...",
        all: "All",
        NoProjects: "There is No Projects Yet",
        OurTeam: "Our Team",
        teamSlogan: "A Small Team With impressive Cred",
        FollowUs: "Follow Us",
        sendMessage: "Send A Message",
        ContactInfo: "Contact Info",
        ViewAll: "Discover More",
        OurProfile: "Our Profile",
        Brands: "Brands",
        Textures: "Textures",
        contactSlogan: "Contact us and tell us your opinion and suggestions",
        Filter: "Filter",
        Profile: "Profile",
        Reset: "Reset",
        welcome: "Welcome to MH Designs, the Essence of post Modern Living",
        ourMission: "Our Mission",
        mission:
          "At MH Designs, we are dedicated to transforming your living spaces with bespoke furniture and home accessories that blend the best of post-modern aesthetics with timeless Syrian craftsmanship. Our mission is to bring innovation, elegance, and personalization into every home, making luxury accessible to all.",
        ourStory: "Our Story",
        story:
          "Born from a passion for design and a reverence for craftsmanship, MH Designs started with a simple idea: to create unique, personalized living spaces. Our founders, inspired by the rich cultural heritage of Syria and the possibilities of modern design, sought to bridge the gap between tradition and innovation. Today, we not only offer a curated selection of premium materials but also provide bespoke services to tailor each piece to your personal style and space.  ",
        customizationCore: "Customization at Its Core.",
        customization:
          "Your home should reflect who you are. Our customization process allows you to be part of the design Journey, from selecting materials to defining dimensions. Whether you're looking to make a bold statement or find that perfect fit, we're here to bring your vision to life. ",
        ourOffers: "What we Offers",
        offers:
          "We specialize in creating design- forward furnture and creating design- forward furniture and accessories using high-quality materials like bare terrazzo. walnut wood , and brass. Each piece is a testament to the skilled artisana in Syria, combining traditional techniques with modern designs.From statement pieces to subtle accents , our collection is designed to elevate your space. ",
        collections: "Collections",
        collection: "Collection",
        details: "Details",
        SearchProduct: "Search For A Product",
        SimilarProducts: "Similar Products",
        callUs: "Call Us",
        trainees: "Trainees",
        trainings: "Trainings",
        staff: "Staff",
        ourGoals: "Our Goals",
        ourGoalsSub:
          "Join a Community of Learners with Gamified Programs Designed to Equip You with essential skills and unlock your full potential.",
        availableTrainings: "Available Trainings",
        start: "Start",
        end: "End",
        totalXP: "Total XP",
        traineesHomeTitle: "Get to know our highly rated trainees",
        faqTitle: "Frequently Asked Questions",
        leaderboard: "Leaderboard",
        ourTrainings: "Our Trainings",
        daysAttendance: "Days of attendance",
        trainingTopics: "Training topics",
        traineesList: "Trainees list",
        quizzez: "Quizzes",
        homeworks: "Homeworks",
        extras: "Extras",
        ourTeam: "Our Team",
        contactTitle: "We are happy to hear from you",
        badgeTitle: "Start collecting badges and stand out from your peers",
        level: "Level",
        shareOn: "Share on",
        badges: "Badges",
        footer:
          "This website is an initiative of the UNDP Syria Accelerator Lab in collaboration with the Syrian Engineers Association (OSEA).",
        AboutSchool: "About School",
        SampleTest: "Sample Test",
        Newbie: "Newbie?",
        Teachers: "Teachers",
        FAQs: "FAQs",
      },
    },
  },
  lng: lnglocal ?? "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
