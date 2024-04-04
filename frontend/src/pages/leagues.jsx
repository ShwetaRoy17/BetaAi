import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTopLeagues } from "../features/TopLeagueSlice.js";

const League = () => {
  const [viewMode, setViewMode] = useState("all");

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTopLeagues());
  // }
  // , [dispatch]);

  // const leagues = useSelector((state)=>state.topLeague.leagues)
  const leagues = [
    {
      name: "USA MLS",
      country: "USA",
      league_name: "MLS",
      image: "https://cdn.footystats.org/img/competitions/usa-mls.png",
      season: [
        {
          id: 1,
          year: 2016,
        },
        {
          id: 16,
          year: 2015,
        },
        {
          id: 23,
          year: 2014,
        },
        {
          id: 24,
          year: 2013,
        },
        {
          id: 163,
          year: 2017,
        },
        {
          id: 1076,
          year: 2018,
        },
        {
          id: 1846,
          year: 2019,
        },
        {
          id: 4227,
          year: 2012,
        },
        {
          id: 4235,
          year: 2011,
        },
        {
          id: 4241,
          year: 2010,
        },
        {
          id: 4473,
          year: 2020,
        },
        {
          id: 5674,
          year: 2021,
        },
        {
          id: 6969,
          year: 2022,
        },
        {
          id: 8777,
          year: 2023,
        },
        {
          id: 10977,
          year: 2024,
        },
      ],
    },
    {
      name: "Scotland Premiership",
      country: "Scotland",
      league_name: "Premiership",
      image:
        "https://cdn.footystats.org/img/competitions/scotland-premiership.png",
      season: [
        {
          id: 2,
          year: 20162017,
        },
        {
          id: 164,
          year: 20172018,
        },
        {
          id: 167,
          year: 20152016,
        },
        {
          id: 168,
          year: 20142015,
        },
        {
          id: 169,
          year: 20132014,
        },
        {
          id: 223,
          year: 20122013,
        },
        {
          id: 1600,
          year: 20182019,
        },
        {
          id: 2361,
          year: 20192020,
        },
        {
          id: 4478,
          year: 20202021,
        },
        {
          id: 5992,
          year: 20212022,
        },
        {
          id: 7494,
          year: 20222023,
        },
        {
          id: 9636,
          year: 20232024,
        },
      ],
    },
  ];
  const currentYear = new Date().getFullYear();
  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
  };


  const filteredMatches = leagues.filter((league) => {
    // Check if the league has at least one season in the current year
    return league.season.some((season) => season.year === currentYear);
  }).map((league) => {
    // Filter and return only the current year's seasons for each league
    return {
      ...league,
      season: league.season.filter((season) => season.year === currentYear),
    };
  });

  return (
    <div className="bg-[#FDFDFC] m-[4vh] shadow-md overflow-y-auto h-[80vh] font-source">
      <h1 className="font-serif text-[4vh] font-[800] text-center text-black my-[1vh]">
        LEAGUES
      </h1>
      <div className="max-w-[600px] flex h-[8vh] justify-between font-serif text-[1.3vh] bg-[#F8F8F8] p-2 rounded-[8px]">
        <button
          className={`w-[8vw]  py-2 px-4 text-center bg-[#292448]  hover:bg-gshades2 font-medium rounded-[8px] text-white ${
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
            hello
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
                          <span className="text-gray-700 mr-4">{sea.year}</span>
                          <Link
                            to={
                              sea.year < currentYear
                                ? `/match-stats/${sea.id}`
                                : `/league-stats/${sea.id}`
                            }
                            className="text-blue-500 hover:underline"
                          >
                            {sea.year} Stats
                          </Link>
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
                          <span className="text-gray-700 mr-4">{sea.year}</span>
                          <Link
                            to={
                              sea.year < currentYear
                                ? `/match-stats/${sea.id}`
                                : `/league-stats/${sea.id}`
                            }
                            className="text-blue-500 hover:underline"
                          >
                            {sea.year} Stats
                          </Link>
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
  );
};

export default League;
