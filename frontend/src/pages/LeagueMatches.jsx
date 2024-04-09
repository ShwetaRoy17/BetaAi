import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/dictionary";

const LeagueMatches = () => {
  const { season_id } = useParams();
  const [leaguematch, setLeaguematch] = useState([]);
  useEffect(() => {
    async function leagueMatch() {
      try {
        const url = `${import.meta.env.VITE_HOST}/api/v1/leagues/leagueMatches/${season_id}`;
        const response = await axios.get(url);
        setLeaguematch(response.data.data);
        console.log("response is,", leaguematch.length);
      } catch (error) {
        console.log("the error in leagueMatches is ", error);
      }
    }
    leagueMatch();
  }, [leaguematch]);
  return (
    <div className="mx-[4vh] bg-white rounded-sm">
      {leaguematch?.map((match) => (
        <div className=" p-4 border-b shadow-sm rounded-[8px] border-gray-200 hover:bg-gshades8 cursor-pointer font-source">
          <div className="grid grid-cols-[15%,1%,40%,1%,40%] md:grid-cols-[15%,1%,30%,1%,50%]  items-center border-b border-gray-200 py-4 px-4 hover:bg-sfs3">
            <div className="flex items-center mr-4">
              <span className="font-bold text-[10px] md:text-[1.5vh]">
                {formatDate(match.date_unix)}
              </span>
            </div>
            <div className="bg-gshades1 h-[8vh] w-[1px] ml-[1vw]"></div>

            <div className="flex flex-col items-center  flex-grow mx-4">
              <div className="w-full flex items-center mb-[2vh] text-[14px]">
                <img
                  src={`https://cdn.footystats.org/img/${match.home_image}`}
                  alt={match.home_name}
                  className="w-8 h-8 rounded-full shadow-md object-cover"
                />
                <span
                  className={`md:font-[600] ${
                    match.homeID === match.winningTeam ? "text-green-600" : ""
                  }`}
                >
                  {match.home_name}
                </span>
              </div>

              <div className="w-full flex items-center text-[14px]">
                <img
                  src={`https://cdn.footystats.org/img/${match.away_image}`}
                  alt={match.away_name}
                  className="w-8 h-8 rounded-full "
                />
                <span
                  className={`md:font-[600] ${
                    match.awayID === match.winningTeam
                      ? "text-green-600 font-[800]"
                      : ""
                  }`}
                >
                  {match.away_name}
                </span>
              </div>
            </div>
            <div className="bg-gshades1 h-[8vh] w-[1px] "></div>
            <div className="text-[1.5vh] px-[2vw]">
              <p>
                game_week:<span classname="font-[800] text-black">{match.game_week}</span>
              </p>
              <p>
                revised_game_week:<span>{match.revised_game_week}</span>
              </p>
              <p>
                homeGoals:<span classname="font-[800] text-black">{match.homeGoals}</span>
              </p>
              <p>
                awayGoals:<span classname="font-[800] text-black">{match.awayGoals}</span>
              </p>
              <p>
                homeGoalCount:<span classname="font-[800] text-black">{match.homeGoalCount}</span>
              </p>
              <p>
                awayGoalCount:<span classname="font-[800] text-black">{match.awayGoalCount}</span>
              </p>
              <p>
                totalGoalCount:<span classname="font-[800] text-black">{match.totalGoalCount}</span>
              </p>
            </div>
            {/* roundID: 106200/ */}
            
          </div>
          <div>
            <p
              className={`ml-4 ${
                match.status == "complete" ? "text-red-700" : "text-green-400"
              } `}
            >
              {match.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeagueMatches;
