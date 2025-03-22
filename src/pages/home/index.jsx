import React from "react";
import Header from "./components/Header";
import WWYG from "./components/WWYG";
// import TrialLesson from "./components/TrialLesson";
import TrialLessons from "./components/TrialLessons";
import SampleTest from "./components/SampleTest";
import HowToSpeak from "./components/HowToSpeak";
import Teachers from "./components/Teachers";

const HomePage = () => {
  return (
    <div>
      <Header />
      <WWYG />
      {/* <TrialLesson /> */}
      <TrialLessons />
      <SampleTest />
      <HowToSpeak />
      <Teachers />
    </div>
  );
};

export default HomePage;
