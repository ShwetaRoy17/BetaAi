import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopLeagues from "../components/topLeague.jsx";
import axios from "axios";

const League = () => {
  const [viewMode, setViewMode] = useState("all");
  const [leagues, setleague] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    async function leaguedata() {
      const data = await axios.get(
        `${import.meta.env.VITE_HOST}/api/v1/leagues/topleague`
      );
      if (data) {
        // console.log("league data",data);
        setleague(data.data.data);
      }
    }
    leaguedata();
  }, []);

  // const leagues = useSelector((state)=>state.topLeague.leagues)

  const currentYear = new Date().getFullYear();
  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
  };

  const filteredMatches = leagues
    .filter((league) => {
      // Check if the league has at least one season in the current year
      return league.season.some((season) => season.year === currentYear);
    })
    .map((league) => {
      // Filter and return only the current year's seasons for each league
      return {
        ...league,
        season: league.season.filter((season) => season.year === currentYear),
      };
    });

  return (
    <div className="grid grid-cols-[25%,65%,8%] ">
      <div className="grid grid-rows-[50%,47%] gap-[2vh] m-2">
        <div>
          <TopLeagues />
        </div>
        <div className="bg-pup1">Your advertisement here..</div>
      </div>
      <div className="bg-[#FDFDFC]  shadow-md overflow-y-auto h-[80vh] font-source p-2">
        <div className="max-w-[900px] flex h-[8vh] justify-between font-serif text-[1.3vh] bg-[#F8F8F8] p-2 rounded-[8px]">
          <button
            className={`w-[8vw]   py-2 px-4 text-center bg-[#292448]  hover:bg-gshades2 font-medium rounded-[8px] text-white ${
              viewMode === "all" ? "#ddd" : "transparent"
            }`}
            onClick={() => handleViewModeChange("all")}
          >
            ALL Leagues
          </button>
          <button
            className={`w-[8vw] py-2 px-4 text-center bg-[#FFD0D080] hover:bg-[#e78686] hover:text-white font-medium text-[#FF1A1A] rounded-[8px] ${
              viewMode === "live" ? "#ddd" : "transparent"
            }`}
            onClick={() => handleViewModeChange("live")}
          >
            Live Matches
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-2">
          {/* {console.log(leagues[0].season)} */}
          <ul className="">
            {viewMode == "all" ? (
              <>
                {leagues.map((league) => (
                  <li className=" rounded-[8px] mt-[2vh]">
                    <div className="flex items-center mr-[3vw] bg-[#EEEBE5]">
                      <img
                        src={league.image}
                        alt={league.name}
                        className=" h-[5vw] w-[5vw]  ml-2"
                      />
                      <span className="text-white text-[20px] font-extrabold ">
                        {league.name}
                      </span>
                    </div>

                    <ul className="list-none p-0">
                      {league.season
                        .sort((a, b) => b.year - a.year)
                        .map((sea) => (
                          <li
                            key={sea.id}
                            className="flex items-center py-2 px-4 border-b border-gray-200"
                          >
                            <div className="flex flex-row">
                              <h2 className="text-gray-700 mr-4 font-[700]">{sea.year}</h2>
                              <span className="mr-1">
                                <Link
                                  to={`/league-stats/${sea.id}`}
                                  className="text-blue-500 hover:underline"
                                >
                                  Stats
                                </Link>
                              </span>
                              /
                              <span className="ml-1">
                                <Link
                                  to={`/match-stats/${sea.id}`}
                                  className="text-blue-500 hover:underline"
                                >
                                  Matches
                                </Link>
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </>
            ) : (
              <>
                {filteredMatches.map((league) => (
                  <li className=" rounded-[8px] mt-[2vh]">
                    <div className="flex items-center mr-[3vw] bg-[#EEEBE5]">
                      <img
                        src={league.image}
                        alt={league.name}
                        className=" h-[5vw] w-[5vw]  ml-2"
                      />
                      <span className="text-white text-[20px] font-extrabold ">
                        {league.name}
                      </span>
                    </div>

                    <ul className="list-none p-0">
                      {league.season
                        .sort((a, b) => b.year - a.year)
                        .map((sea) => (
                          <li
                            key={sea.id}
                            className="flex items-center py-2 px-4 border-b border-gray-200"
                          >
                            <div className="flex flex-row">
                              <h2 className="text-gray-700 mr-4 font-[700]">{sea.year}</h2>
                              <span className="mr-1">
                                <Link
                                  to={`/league-stats/${sea.id}`}
                                  className="text-blue-500 hover:underline"
                                >
                                  Stats
                                </Link>
                              </span>
                              /
                              <span className="ml-1">
                                <Link
                                  to={`/match-stats/${sea.id}`}
                                  className="text-blue-500 hover:underline"
                                >
                                  Matches
                                </Link>
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full ml-[1vw] bg-pup1 text-white font-serif p-2 break-words">
        ADvertisement
      </div>
    </div>
  );
};

export default League;
