import React, { useState, useEffect } from "react";
import realMadrid from "../assets/Real-Madrid-Logo.png";
import {useDispatch,useSelector} from 'react-redux'
import axios from "axios";

const Fixture = () => {
  const dispatch = useDispatch();
  const [fixtureData, setFixtureData] = useState(null);

 

  // useEffect(() => {
  //  dispatch(fetchFixtures())
  // }, [dispatch]);

  // if (!fixtureData) {
  //   return <div>Loading fixture data...</div>;
  // }

  // const { date, time, team1, team2, flag1, flag2 } = fixtureData;

  const fixtData = {
    date: "17-12-2001",
    time: "02:10",
    team1: "Bulgaria",
    team2: "realMadrid",
    flag1: "../assets/betaAi.png",
    flag2: "",
  };
  return (
    <div className="h-[100%] bg-white rounded px-[3vw] py-[1vh]">
      
      {/* div contaning all the information  flags name  date and time*/}
      <div className="flex flex-row  h-[90%] items-center justify-between my-[3vh]">
        {/* first team name and flag */}
        <div className="h-[100%] p-[2px] mt-[4vh] ml-[5vw]">
          <img
            className="h-[12vh] w-[12vh] mr-4"
            src={realMadrid}
            alt={fixtData.team1 + " Flag"}
          />
          <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
            {fixtData.team1}
          </span>
        </div>

        <div className="text-center ">
        <h2 className="text-[3vh] font-[600] text-center text-[#0B1D32] mb-[2.5vh]">
        FIXTURE
      </h2>
      <div className="flex flex-col">
          <span className=" text-[#132B47] text-[4vh] font-serif font-[900] mb-0">
            {fixtData.time}
          </span>
          <span className="text-[#132B47] text-[2vh] font-serif font-[400]">{fixtData.date}</span>
          </div>
        </div>
{/* second team image and name */}
        <div className="h-[100%] p-[2px] mt-[4vh] mr-[5vw]">
          <img
            className="h-[12vh] w-[12vh] mr-4"
            src={realMadrid}
            alt={fixtData.team1 + " Flag"}
          />
          <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
            {fixtData.team1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
