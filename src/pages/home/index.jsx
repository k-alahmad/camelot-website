import React from "react";
import Header from "./components/Header";
import WWYG from "./components/WWYG";
// import TrialLesson from "./components/TrialLesson";
import TrialLessons from "./components/TrialLessons";
import SampleTest from "./components/SampleTest";
import HowToSpeak from "./components/HowToSpeak";
import Teachers from "./components/Teachers";
import SignUp from "./components/SignUp";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import { Helmet } from "react-helmet";
const HomePage = () => {
  const pageTitle =
    "Learn English Fast in Dubai | Camelot English Language School | Free Trial";
  const pageDescription =
    "Join Camelot, Dubai's leading English school. Improve speaking fast with native teachers. Take a free trial lesson & language test. Sign up today!";
  const canonicalUrl = "https://www.camelot-eng.ae/";
  const ogImageUrl = "https://www.www.camelot-eng.ae/og-camelot-dubai.png";
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="title" content={pageTitle} />
        <meta
          name="keywords"
          content="Learn English Dubai, English language school Dubai, English courses Dubai, Improve English speaking Dubai, English classes Dubai, Native English teachers Dubai, English trial lesson Dubai, English test Dubai, Camelot Dubai"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta
          property="og:site_name"
          content="Camelot English Language School Dubai"
        />
        <meta property="og:locale" content="en_AE" />
        <meta name="robots" content="index, follow" />{" "}
        {/* Standard for allowing indexing */}
        <meta name="author" content="Camelot English Language School" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Camelot English Language School",
              "description": "Learn English quickly and effectively in Dubai with experienced native teachers.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "JVC, Binghatti Emerald, office 303", 
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "Your Postal Code", 
                "addressCountry": "AE"
              },
              "telephone": "+971-54-585-1248", 
              "url": "${canonicalUrl}",
              "logo": "https://www.www.camelot-eng.ae/og-camelot-dubai.png", // 
              "hasMap": "https://maps.app.goo.gl/nDM81EqZ143JmYXL8", //
              "openingHoursSpecification": [ // <-- Adjust days/times as needed
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "01:00",
                  "closes": "21:00"
                },
              ],
              "sameAs": [ // <-- Add links to your social media profiles
                "https://www.youtube.com/@camelotenglishlanguageschool",
                "https://www.instagram.com/lance_pro_english/?igsh=MWhudWVtNmI3bnZnag%3D%3D&utm_source=qr#",
                "https://www.linkedin.com/company/camelot-english-language-school/",
              ],
              "potentialAction": { // Encourages specific actions like trial sign-up
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "${canonicalUrl}#signup", // Link to your sign-up section
                  "inLanguage": "en-AE",
                  "actionPlatform": [
                    "https://schema.org/DesktopWebPlatform",
                    "https://schema.org/IOSPlatform",
                    "https://schema.org/AndroidPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Book Free Trial Lesson"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <Header />
      <div id="aboutSchool" />
      <WWYG />
      {/* <TrialLesson /> */}
      <TrialLessons />
      <div id="sampleTest" />
      <SampleTest />
      <div id="newbie" />
      <HowToSpeak />
      <div id="teachers" />
      <Teachers />
      <div id="signup" />
      <SignUp />
      <div id="reviews" />
      <Reviews />
      <div id="faq" />
      <FAQ />
    </div>
  );
};

export default HomePage;
