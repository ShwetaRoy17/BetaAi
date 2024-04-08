import React, { useState, useEffect } from "react";
import realMadrid from "../assets/Real-Madrid-Logo.png";
import {useDispatch,useSelector} from 'react-redux'
import { formatDate,unixToTime } from "../utils/dictionary";

const Fixture = () => {
  const [fixtureData, setFixtureData] = useState(null);
  
    const fixdata = useSelector((state)=>state.match.matchData);
    useEffect(()=>{

      setFixtureData(fixdata);
    },[])
    // console.log("fixdata is",fixdata);
    
  

  // if (!fixtureData) {
  //   return <div>Loading fixture data...</div>;
  // }

  // const { date, time, team1, team2, flag1, flag2 } = fixtureData;

  return (
    <div className="h-[100%] rounded-[8px] bg-white  xl:px-[3vw] py-[1vh] overflow-hidden mx-auto ">
      
      {/* div contaning all the information  flags name  date and time*/}
      <div className="grid grid-cols-[29%,40%,29%] gap-[1%] h-[90%] min-h-[180px] items-center  my-auto ">
        {/* first team name and flag */}
        <div className="h-[100%] p-[2px] mt-[4vh]">
          <img
            className="h-[12vh] w-[12vh] mr-4"
            src={`https://cdn.footystats.org/img/${fixtureData?.home_image}`}
            alt={fixtureData?.home_name + " Flag"}
          />
          <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
            {fixtureData?.home_name}
          </span>
        </div>

        <div className="text-center ">
        <h2 className="text-[3vh] font-[600] text-center text-[#0B1D32] mb-[2.5vh]">
        FIXTURE
      </h2>
      <div className="flex flex-col">
          <span className=" text-[#132B47] text-[4vh] font-serif font-[900] mb-0">
            {unixToTime(fixtureData?.date_unix)}
          </span>
          <span className="text-[#132B47] text-[2vh] font-serif font-[400]"> {formatDate(fixtureData?.date_unix)}</span>
          </div>
        </div>
{/* second team image and name */}
        <div className="h-[100%] p-[2px] mt-[4vh] mr-[5vw]">
          <img
            className="h-[12vh] w-[12vh] mr-4"
            src={`https://cdn.footystats.org/img/${fixtureData?.away_image}`}
            alt={fixtureData?.away_name + " Flag"}
          />
          <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
            {fixtureData?.away_name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
