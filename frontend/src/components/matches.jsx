import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../utils/dictionary";
import { useNavigate } from 'react-router-dom';

const Matches = () => {
  const [todayMatch, setTodayMatch] = useState([]);
  const [sortedMatch,setSortedMatch] = useState([]);
  const [viewMode, setViewMode] = useState("all");

  const navigate = useNavigate();

  const handleClick = (id) => {

    navigate(`/match/${id}`); 
  };
  
  
  useEffect(() => {
    // Fetch match details on component mount (assuming competitionId is available)
    async function matchdata() {
      const data = await axios.get(
        "http://localhost:8000/api/v1/leagues/matches"
      );
      if (data) {
        setTodayMatch(data.data.data);
      }
    }
    matchdata();
    
  }, []);

  const currentYear = new Date().getFullYear();
  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
  };

  return (
    <div className="container mx-auto p-1 font-source min-h-[300px]">
      <div className="flex h-[8vh] justify-between font-serif text-[1.3vh] bg-[#F8F8F8] p-2 md:px-5 rounded-[8px]">
        <button
          className={`w-1/4 max-w-[200px] py-2 px-4 text-center bg-[#292448]  hover:bg-gshades2 font-medium rounded-[8px] text-white ${
            viewMode === "all" ? "#ddd" : "transparent"
          }`}
          onClick={() => handleViewModeChange("all")}
        >
          ALL Matches
        </button>
        <button
          className={`w-1/4 max-w-[200px] py-2 px-4 text-center bg-[#FFD0D080] hover:bg-[#e78686] hover:text-white font-medium text-[#FF1A1A] rounded-[8px] ${
            viewMode === "live" ? "#ddd" : "transparent"
          }`}
          onClick={() => handleViewModeChange("live")}
        >
          Live Matches
        </button>
        <div
          className={`w-1/4 max-w-[200px] py-2 ml-[25%] px-4 text-center bg-gray-200 hover:bg-[#EFEFEF] font-medium rounded-[8px] ${
            viewMode === "live" ? "#ddd" : "transparent"
          }`}
        >
          Odds
        </div>
      </div>
      <div className="h-[67.6vh] md:mx-[4vh] mt-4 p-4 bg-[#F8F8F8] shadow rounded overflow-y-auto">
        <div className="flex flex-col p-1 ">
          {viewMode === "live" ? (
            <>
              <ul className="list-none p-0">
                {todayMatch.map((match) => (
                  <>
                    <div className="bg-[#F0F0F0] text-[14px] md:text-[1.8vh] ">
                      League
                    </div>

                    <div className="grid grid-cols-[15%,1%,60%,1%,16%,5%]  items-center border-b border-gray-200 py-4 px-4 hover:bg-sfs3">
                      <div className="flex items-center mr-4">
                        <span className="font-bold text-[10px] md:text-[1.5vh]">
                          {formatDate(match.date_unix)}
                        </span>
                      </div>
                      <div className="bg-gshades1 h-[8vh] w-[1px] "></div>
                    
                      <div className="flex flex-col items-center  flex-grow mx-4 " onClick={()=>handleClick(match.id)}>
                        <div className="w-full flex items-center mb-[2vh] text-[14px]">
                          <img
                            src={`https://cdn.footystats.org/img/${match.home_image}`}
                            alt={match.home_name}
                            className="w-8 h-8 rounded-full shadow-md object-cover"
                          />
                          <span className="md:font-[600]">{match.home_name}</span>
                        </div>

                        <div className="w-full flex items-center text-[14px]">
                          <img
                            src={`https://cdn.footystats.org/img/${match.away_image}`}
                            alt={match.away_name}
                            className="w-8 h-8 rounded-full "
                          />
                          <span className="md:font-[600]">{match.away_name}</span>
                        </div>
                      </div>
                      <div className="bg-gshades1 h-[8vh] w-[1px] "></div>
                      <div className="flex flex-col items-center  flex-grow ml-4 mr-2">
                        <div className="font-[500] text-gray-600 text-[1.8vw] md:text-[2vh]">
                          <span>{match.odds_ft_1}</span>
                        </div>
                        <div className="font-[500] text-gray-600 text-[1.8vw] md:text-[2vh]">
                          <span>{match.odds_ft_2}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <i className="fas fa-star text-yellow-400"></i>
                      </div>
                    </div>
                  </>
                ))}
              </ul>
              {/* </li>
              ))} */}
            </>
          ) : (
            <>hello</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Matches;
