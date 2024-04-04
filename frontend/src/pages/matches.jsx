import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatchDetails } from "../features/AllMatchSlice.js";


const Matches = () => {
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState("all");
  const [matchData,setMatchData] = useState([]);

  useEffect(() => {
    // Fetch match details on component mount (assuming competitionId is available)
    
      
      dispatch(fetchMatchDetails());
    
    // alert("hello match data")
  }, []);

  // const matchData = useSelector((state) => state.Matches.currentMatch);
  const handleViewModeChange = (newMode) => setViewMode(newMode);
  const { date_unix, home_name, away_name } = matchData;
  
  if (!matchData) {
    return <div>Loading match details...</div>;
  }
  

  const filteredMatches =
    viewMode === "live"
      ? matchData.sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date (earliest first)
      : matchData.reduce((acc, match) => {
          const leagueId = match.leagueId;
          acc[leagueId] = acc[leagueId] || [];
          acc[leagueId].push(match);
          return acc;
        }, {});

  return (
    <div className="container mx-auto p-1 ">
      <div className="flex h-[8vh] justify-between font-serif text-[1.3vh] bg-[#F8F8F8] p-2 rounded-[8px]">
        <button
          className={`w-[8vw]  py-2 px-4 text-center bg-[#292448]  hover:bg-gshades2 font-medium rounded-[8px] text-white ${viewMode === "all" ? '#ddd' : 'transparent'}`}
          onClick={() => handleViewModeChange("all")}
        >
          ALL Matches
        </button>
        <button
          className={`w-1/4 py-2 px-4 text-center bg-[#FFD0D080] hover:bg-[#e78686] hover:text-white font-medium text-[#FF1A1A] rounded-[8px] ${viewMode === "live" ? '#ddd' : 'transparent'}`
           }

          onClick={() => handleClick("live")}
        >
          Live Matches
        </button>
        <button
          className={`w-1/4 py-2 ml-[25%] px-4 text-center bg-gray-200 hover:bg-[#EFEFEF] font-medium rounded-[8px] ${viewMode === "live" ? '#ddd' : 'transparent'}`}
          onClick={() => handleClick("Odds")}
        >
          Odds
        </button>
      </div>
      <div className="h-[67.6vh] mt-4 p-4 bg-[#F8F8F8] shadow rounded">
        <div className="flex flex-col p-1 border-red-100 border-r-2">
          {viewMode === "all" ? (
            
            <div className="flex flex-wrap justify-between">
              hello
              {/* {console.log(matchData.length)} */}
              {matchData.map((match) => (
                <div className="w-[30%] p-1 border-[#ddd]-[1px] border-r-2 mb-1" key={match.id} onClick={() => navigate(`/matches/${match.id}`)}>
                  <div className="flex items-center">
                    <p>{match.date}</p>
                    <div className="flex items-center mr-1">
                      <img className="w-[30px] h-[30px] mr-[0.5rem]"
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.name}
                      />
                      <span>{match.homeTeam.name}</span>
                    </div>
                    <span>vs</span>
                    <div className="flex items-center mr-1">
                      <img className="w-[30px] h-[30px] mr-[0.5rem]"
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.name}
                      />
                      <span>{match.awayTeam.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            Object.entries(filteredMatches).map(([leagueId, matches]) => (
              <div key={leagueId}>
                {/* Display league name, country name, and flag (assuming */}
              </div>
            ))
          )}
        </div>
    </div>
</div>
  )}



export default Matches;
