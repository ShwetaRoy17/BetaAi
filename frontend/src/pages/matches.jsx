import React, { useState } from "react";

const Matches = () => {
  const [activeButton, setActiveButton] = useState("tab1");

 const All = ()=>{
  return(<>
  </>)
 }

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="container mx-auto p-1 ">
      <div className="flex h-[8vh] justify-between font-serif text-[1.3vh] bg-[#F8F8F8] p-2 rounded-[8px]">
        <button
          className={`w-[8vw]  py-2 px-4 text-center bg-[#292448]  hover:bg-gshades2 font-medium rounded-[8px] text-white ${
            activeButton === "All" ? "bg-[#292448] text-white" : ""
          }`}
          onClick={() => handleClick("All")}
        >
          ALL Matches
        </button>
        <button
          className={`w-1/4 py-2 px-4 text-center bg-[#FFD0D080] hover:bg-[#e78686] hover:text-white font-medium text-[#FF1A1A] rounded-[8px] ${
            activeButton === "LiveMatches" ? "bg-[#e78686] text-white" : ""
          }`}
          onClick={() => handleClick("LiveMatches")}
        >
          Live Matches
        </button>
        <button
          className={`w-1/4 py-2 ml-[25%] px-4 text-center bg-gray-200 hover:bg-[#EFEFEF] font-medium rounded-[8px] ${
            activeButton === "tab3" ? "bg-gray-400 text-white" : ""
          }`}
          onClick={() => handleClick("Odds")}
        >
          Odds
        </button>
      </div>
      <div className="h-[67.6vh] mt-4 p-4 bg-[#F8F8F8] shadow rounded">
        
      </div>
    </div>
  );
};

const MatchPage = () => {
  return <div></div>;
};

export default Matches;
