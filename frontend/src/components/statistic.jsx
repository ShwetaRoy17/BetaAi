import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import realMadrid from "../assets/Real-Madrid-Logo.png";

const Statistics = () => {
  const [viewMode, setViewMode] = useState("all");
  const fixdata = useSelector((state) => state.match.matchData);
  const [homeId, setHomeId] = useState();
  const [homeImg, setHomeImg] = useState("");
  const [AwayImg, setAwayImg] = useState("");
  const [homename, setHomename] = useState("");
  const [awayname, setAwayname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect call
  useEffect(() => {
    setIsLoading(true);
    if (fixdata) {
      setHomeId(fixdata.homeID);
      setHomeImg(`https://cdn.footystats.org/img/${fixdata.home_image}`);
      setAwayImg(`https://cdn.footystats.org/img/${fixdata.away_image}`);
      setHomename(fixdata.home_name);
      setAwayname(fixdata.away_name);
      console.log("stattistics", fixdata);
      setIsLoading(false);
    }
  }, [fixdata]);

  // handle view function
  const handleViewModeChange = (newMode) => {
    setViewMode(newMode);
  };

  // progress bar component
  function ProgressBar(title, min, max) {
    if(!title||!min||!max) {
      return (<div></div>)
    }
    const progressPercent = Math.floor((min / max) * 100); // Calculate ratio percentage

    return (
      <>
        <div className="font-serif text-base text-[1.5vw] text-center font-[700] dark:text-white text-[#132B47]">
          {title}
        </div>
        <div className="flex flex-row justify-center mx-auto">
          <div className="font-serif font-[700] text-[12px] mr-[1vw] ">
            {min}
          </div>
          <div className="w-[70%] bg-pup4 rounded-full h-1.5 mb-[1vh] dark:bg-pup6">
            <div
              className="bg-pup2 h-1.5 rounded-full dark:bg-pup3"
              style={{ width: `${progressPercent%100}%` }}
            ></div>
          </div>
          <div className="font-serif font-[700] text-[12px] ml-[1vw]">
            {max}
          </div>
        </div>
      </>
    );
  }

  // dummy record
  const records = [
    { title: "Average", min: 0, max: 100, value: 75 },
    { title: "Average Conceded Goals", min: 50, max: 150, value: 120 },
    { title: "Average Yellow Cards", min: 0, max: 100, value: 75 },
    { title: "Average Red Cards", min: 2, max: 150, value: 120 },
    // ... more records
  ];

  return (
    <div className="flex flex-col bg-white h-full rounded-md shadow p-4 overflow-y-auto">
      <h2 className="h-[10%] text-[3vh] font-[600] text-center text-[#0B1D32] mb-[1.5vh]">
        STATISTICS
      </h2>
      <div className="h-[90%] grid grid-rows-[10%,30%,58%] gap-[1%]">
        <div className="flex justify-center gap-5 overflow-y-hidden ">
          <button
            key={"All Season"}
            className={`rounded-full py-1 px-1 text-sm font-bold font-serif ${
              viewMode === "all"
                ? "bg-pup2 text-white"
                : "bg-white border border-pup2 text-pup2 hover:bg-purple-100"
            }`}
            onClick={() => handleViewModeChange("all")}
          >
            All Season
          </button>
          <button
            key={"All Season"}
            className={`rounded-full py-1 px-1 text-sm font-bold font-serif ${
              viewMode === "This"
                ? "bg-pup2 text-white"
                : "bg-white border border-pup2 text-pup2 hover:bg-purple-100"
            }`}
            onClick={() => handleViewModeChange("This")}
          >
            This Season
          </button>
        </div>

        <div className="grid grid-cols-[39%,10%,39%] gap-[1%]  px-[5%] items-center  my-auto ">
          {/* first team name and flag */}
          <div className="h-[100%] p-[2vh] mx-auto items-center">
            <img
              className="h-[4vw] w-[4vw] "
              src={homeImg}
              alt={homename + " Flag"}
            />
            <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
              {homename}
            </span>
          </div>

          <div className="text-center ">
            <span className="text-[2vw]">VS</span>
          </div>
          {/* second team image and name */}
          <div className="h-[100%] p-[2vh] mx-auto ">
            <img
              className="h-[4vw] w-[4vw] "
              src={AwayImg}
              alt={awayname + " Flag"}
            />
            <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
              {awayname}
            </span>
          </div>
        </div>
        {isLoading && <div className="text-center my-auto"> Loading data</div>}
      {!isLoading &&  <div className="">
          {viewMode === "This" ? (
            <>
              <div className="mt-[2vh] hover:bg-sfs3 rounded-[8px] shadow-md overflow-y-auto">
                {ProgressBar(
                  "Average Goals Scored",
                  fixdata.homeGoalCount,
                  fixdata.awayGoalCount
                )}
                {ProgressBar(
                  "Average Conceded Goals",
                  fixdata.homeGoalCount,
                  fixdata.awayGoalCount
                )}
                {ProgressBar(
                  "Average Yellow Cards",
                  fixdata.team_a_yellow_cards,
                  fixdata.team_b_yellow_cards
                )}
                {ProgressBar(
                  "Average Red Cards",
                  fixdata.team_a_red_cards,
                  fixdata.team_b_red_cards
                )}
                {ProgressBar(
                  "Average Corners per Game",
                  fixdata.team_a_corners,
                  fixdata.team_b_corners
                )}
              </div>
            </>
          ) : (
            <div className="mt-[2vh] hover:bg-sfs3 rounded-[8px] shadow-md overflow-y-auto">
              <div className="flex flex-col items-start px-4">
              <h2 className="font-serif font-[500] text-gshades1 text-[1.8vh]">Total Matches : <span className="font-[700] text-black">{fixdata?.h2h?.previous_matches_results?.totalMatches}</span></h2>
              <h2 className="font-serif font-[500] text-gshades1 text-[1.8vh]">{homename}(win) : <span className="font-[700] text-black">{fixdata?.h2h?.previous_matches_results?.team_a_wins}</span></h2>
              <h2 className="font-serif font-[500] text-gshades1 text-[1.8vh]">{awayname}(win): <span className="font-[700] text-black">{fixdata?.h2h?.previous_matches_results?.team_b_wins}</span></h2>
              <h2 className="font-serif font-[500] text-gshades1 text-[1.8vh]">Draw : <span className="font-[700] text-black">{fixdata?.h2h?.previous_matches_results?.draw}</span></h2>
              </div>
              {ProgressBar(
                  "Home win",
                  fixdata?.h2h?.previous_matches_results?.team_a_win_home,
                  fixdata?.h2h?.previous_matches_results?.team_b_win_home
                )}
                {ProgressBar(
                  "Away win",
                  fixdata?.h2h?.previous_matches_results?.team_a_win_away,
                  fixdata?.h2h?.previous_matches_results?.team_b_win_away
                )}
                {ProgressBar(
                  "Winning Percentage",
                  fixdata?.h2h?.previous_matches_results?.team_a_win_percent,
                  fixdata?.h2h?.previous_matches_results?.team_b_win_percent
                )}
            </div>
          )}

        </div>}
      </div>
    </div>
  );
};

export default Statistics;
