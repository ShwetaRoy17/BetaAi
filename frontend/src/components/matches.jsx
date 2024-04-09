import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { formatDate } from "../utils/dictionary";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMatches } from "../features/AllMatchSlice.js";
import { addDetails } from "../features/MatchSlice.js";


const Matches = () => {
  const [todayMatch, setTodayMatch] = useState([]);
  const [viewMode, setViewMode] = useState("all");
  const [clusteredData, setClusteredData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [isLoading1,setIsLoading1] = useState(false);
const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle click function
  const handleClick = (id,stadium_name,game_week) => {
    dispatch(addDetails({stadium_name:stadium_name,game_week:game_week}))
    navigate(`/match/${id}`);
  };

  // league details information function
  async function fetchLeagueDetails(competitionId) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/api/v1/leagues/leaguedetails/${competitionId}`
      );
      // console.log("league Details are:", response.data.data); // console for checking response
      return response.data.data;
    } catch (error) {
      console.log("the error fetching league details",error);
    }
  }

  async function clusterAndFetchLeagueDetails(data) {
    // alert("cul")
    // object to store clustered data
    const clusteredData = {};

    // Iterating over the data array
    for (const item of data) {
      // Checking if the competition ID already exists in the clustered data
      if (!clusteredData[item.competition_id]) {
        // If not, creating a new entry with an empty array for matches
        clusteredData[item.competition_id] = {
          competition_id: item.competition_id,
          matches: [],
        };
      }

      // Pushing the current item to the matches array of the corresponding competition ID
      clusteredData[item.competition_id].matches.push(item);
    }
    // Iterating over the clustered data and fetch league details for each competition
    for (const key in clusteredData) {
      const competitionId = clusteredData[key].competition_id;
      const leagueDetails = await fetchLeagueDetails(competitionId);
      // Adding league details as a field in the clustered data
      clusteredData[key].league_details = leagueDetails;
    }

    // Converting the clustered data object back to an array of objects
    const result = Object.values(clusteredData);
    console.log("clustered data,",clusteredData)
    return result;
  }

  useEffect(() => {
    // Fetch match details on component mount (assuming competitionId is available)
    async function matchdata() {
      setIsLoading(true);
      const data = await axios.get(
        `${import.meta.env.VITE_HOST}/api/v1/leagues/matches`
      );
      if (data) {
        setTodayMatch(data.data.data);
        setIsLoading(false);
        dispatch(setMatches(data.data.data[0]));
        }else{
          setIsLoading(true);
        }
        
    }
    matchdata();
    async function fetchData() {
      try {
        
        setIsLoading1(true);
        const Data = await clusterAndFetchLeagueDetails(todayMatch);
        if(Data) {
        setClusteredData(Data);
        console.log("data after function",Data)
        setIsLoading1(false);
        }
      } catch (error) {
        console.log("fetching league data error",error)
        setIsLoading1(true)
      }
    }
    
    if(matchdata){
    
    fetchData();
    }
  }, []);

  const memoizedClusteredData = useMemo(() => clusteredData, [clusteredData]);

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
      {isLoading && <div className="h-[67.6vh] my-auto font-serif"> Loading...</div>}
      {!isLoading && <div className="h-[67.6vh] md:mx-[4vh] mt-4 p-4 bg-[#F8F8F8] shadow rounded overflow-y-auto">
        <div className="flex flex-col p-1 ">
          {viewMode === "live" ? (
            <>
              <ul className="list-none p-0">
                {todayMatch.map((match) => (
                  <>
                    <div className="bg-[#F0F0F0] h-[2vh] md:text-[1.8vh] ">
                      
                    </div>

                    <div className="grid grid-cols-[15%,1%,60%,1%,16%,5%]  items-center border-b border-gray-200 py-4 px-4 hover:bg-sfs3">
                      <div className="flex items-center mr-4">
                        <span className="font-bold text-[10px] md:text-[1.5vh]">
                          {formatDate(match.date_unix)}
                        </span>
                      </div>
                      <div className="bg-gshades1 h-[8vh] w-[1px] "></div>

                      <div
                        className="flex flex-col items-center  flex-grow mx-4 "
                        onClick={() => handleClick(match.id,match.stadium_name,match.game_week)}
                      >
                        <div className="w-full flex items-center mb-[2vh] text-[14px]">
                          <img
                            src={`https://cdn.footystats.org/img/${match.home_image}`}
                            alt={match.home_name}
                            className="w-8 h-8 rounded-full shadow-md object-cover"
                          />
                          <span className="md:font-[600]">
                            {match.home_name}
                          </span>
                        </div>

                        <div className="w-full flex items-center text-[14px]">
                          <img
                            src={`https://cdn.footystats.org/img/${match.away_image}`}
                            alt={match.away_name}
                            className="w-8 h-8 rounded-full "
                          />
                          <span className="md:font-[600]">
                            {match.away_name}
                          </span>
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
            </>
          ) : (
            <>
            {isLoading1 && <div className="mx-auto text-center font-source">Loading data...</div>}
              {!isLoading1 && <div>
                {clusteredData?.map((competition) => (
                  <div key={competition.competition_id} className="">
                    <div className="bg-[#F0F0F0] flex flex-row py-[1vh] px-[1vw] h-[8vh]">
                    <div className="min-h-[40px]">
                    <img src = {competition.league_details.image} alt="country flag my-auto" className="h-[6vh] w-[6vh]"/>
                    </div>
                    <div className="h-[6vh]">
                    <span className="text-[12px]">{competition.league_details.country}</span>
                    <h1 className="text-[20px] font-[700]">{competition.league_details.name.toUpperCase()}</h1>
                    
                    </div>
                    </div>
                    {competition.matches.map((match) => (
                      <>
                        <div className="bg-[#F0F0F0] h-[14px] md:h-[1.2vh] ">
                          
                        </div>

                        <div className="grid grid-cols-[15%,1%,60%,1%,16%,5%]  items-center border-b border-gray-200 py-4 px-4 hover:bg-sfs3">
                          <div className="flex items-center mr-4">
                            <span className="font-bold text-[10px] md:text-[1.5vh]">
                              {formatDate(match.date_unix)}
                            </span>
                          </div>
                          <div className="bg-gshades1 h-[8vh] w-[1px] "></div>

                          <div
                            className="flex flex-col items-center  flex-grow mx-4 "
                            onClick={() => handleClick(match.id,match.stadium_name,match.game_week)}
                          >
                            <div className="w-full flex items-center mb-[2vh] text-[14px]">
                              <img
                                src={`https://cdn.footystats.org/img/${match.home_image}`}
                                alt={match.home_name}
                                className="w-8 h-8 rounded-full shadow-md object-cover"
                              />
                              <span className="md:font-[600]">
                                {match.home_name}
                              </span>
                            </div>

                            <div className="w-full flex items-center text-[14px]">
                              <img
                                src={`https://cdn.footystats.org/img/${match.away_image}`}
                                alt={match.away_name}
                                className="w-8 h-8 rounded-full "
                              />
                              <span className="md:font-[600]">
                                {match.away_name}
                              </span>
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
                  </div>
                ))}
              </div>}
            </>
          )}
        </div>
      </div>
      }
    </div>
  );
};

export default Matches;
