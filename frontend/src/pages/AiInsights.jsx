import React, { useState, useEffect } from "react";
import Chatbot from "../components/chatbot";
import AISights from "../components/aiprediction";

const ai_insights = () => {
  return (
    <div className="w-[100vw] md:h-[100vh] mt-[5vh] py-[2vh] md:px-[5vw]">
      <h1 className="text-[40px] font-[600] mb-[3vh] text-center mt-[1vh] text-[#132B47]">
        AI INSIGHTS
      </h1>
      <div className="flex md:flex-row flex-col w-full md:h-[78.1vh] justify-between">
        <div className="w-[90vw] md:w-[33.4vw] mx-auto md:ml-[2vw] md:h-full">
          <AISights />
        </div>
        <div className="w-[90vw] md:w-[51.21vw] mx-auto mt-[3vh] md:mt-0 md:mr-[2vw] h-[90vh] md:h-full">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default ai_insights;
