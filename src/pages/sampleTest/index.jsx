import React, { useState } from "react";
import { testData } from "../../data/testData";
const SampleTestPage = () => {
  const [userData, setUserData] = useState();
  return (
    <div className="px-[5%] py-[7%] space-y-8 text-smaller md:text-small flex flex-col justify-start items-start">
      {testData.map((item, index) => {
        return (
          <div key={index} className="space-y-3">
            <p className="font-bold">
              {item.id} - {item.question}
            </p>
            <div className="space-y-2 flex flex-col justify-start items-start translate-x-6">
              {item.answers.map((answer, i) => {
                return (
                  <div
                    key={i}
                    className={`min-w-[250px] sm:min-w-[400px] border-2 border-grey-500 p-2 rounded-lg cursor-pointer flex justify-start items-center gap-x-4`}
                  >
                    <div className="w-4 h-4 rounded-full border-[1px] border-gray-500" />
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
    </div>
  );
};

export default SampleTestPage;
