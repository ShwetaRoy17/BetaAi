import React, { useState } from "react";
import realMadrid from '../assets/Real-Madrid-Logo.png'


const Statistics = () => {
  const buttonOptions = ["All Leagues", "This League"];
  const [selectedButton, setSelectedButton] = useState(buttonOptions[0]);

  const handleClick = (buttonValue) => {
    setSelectedButton(buttonValue);
    onSelect(buttonValue); // Call the provided onSelect function
  };


  function ProgressBar({ title, min, max, value }) {
    const progress = Math.min(Math.max(value, min), max); // Clamp value between min and max
    const progressPercent = Math.floor((progress / max) * 100); // Calculate progress percentage
  
  
    return (
      <>
      <div className="font-serif text-base text-[12px] text-center font-[700] dark:text-white text-[#132B47]">{title}</div>
      <div className="flex flex-row justify-center mx-auto">
        <div className="font-serif font-[700] text-[12px] mr-[1vw] ">{min}</div>
<div className="w-[70%] bg-pup4 rounded-full h-1.5 mb-4 dark:bg-pup6">
  <div className="bg-pup2 h-1.5 rounded-full dark:bg-pup3" style={{width: "30%"}}></div>
</div>
        <div className="font-serif font-[700] text-[12px] ml-[1vw]">{max}</div>
      </div>
      </>
    );
  }
// dummy record
  const records = [
    { title: 'Average', min: 0, max: 100, value: 75 },
    { title: 'Average Conceded Goals', min: 50, max: 150, value: 120 },
    { title: 'Average Yellow Cards', min: 0, max: 100, value: 75 },
    { title: 'Average Red Cards', min: 2, max: 150, value: 120 }
    // ... more records
  ];

  return (
    <div className="flex flex-col bg-white h-full rounded-md shadow p-4">
      <h2 className="text-[3vh] font-[600] text-center text-[#0B1D32] mb-[1.5vh]">
        STATISTICS
      </h2>
      <div className="flex justify-center gap-5 overflow-y-auto">
        {buttonOptions.map((buttonValue) => (
          <button
            key={buttonValue}
            className={`rounded-full py-1 px-1 text-sm font-bold font-serif ${
              selectedButton === buttonValue
                ? "bg-pup2 text-white"
                : "bg-white border border-pup2 text-pup2 hover:bg-purple-100"
            }`}
            onClick={() => handleClick(buttonValue)}
          >
            {buttonValue}
          </button>
        ))}
      </div>
      <div className="flex flex-row w-[60%] justify-center mx-auto mt-[1vh] h-[20%] mb-[1vw]">
      <div className="h-[100%] p-[2px] ">
          <img
            className="h-[8vh] w-[8vw] mr-4"
            src={realMadrid}
            alt={"real Madrid" + " Flag"}
          />
          <span className="text-[#132B47] text-[2vh] font-serif font-bold">
            "Real Madrid"
          </span>
        </div>
        <div className="flex flex-col justify-center align-center">
          <h2 className="my-auto font-serif font-[900] leading-[24.2px] text-gshades7 text-[5vh]">VS</h2>
        </div>
        <div className="h-[100%] p-[2px] ml-[1vw]">
          <img
            className="h-[8vh] w-[8vw] mr-4"
            src={realMadrid}
            alt={"real Madrid" + " Flag"}
          />
          <span className="text-[#132B47] text-[2vh] font-serif font-bold">
            "Real Madrid"
          </span>
        </div>
       
      </div>
      <div>
    {records.map((record) => (
      <ProgressBar key={record.title} {...record} /> // Spread record properties
    ))}
  </div>
    </div>
  );
};

export default Statistics;
