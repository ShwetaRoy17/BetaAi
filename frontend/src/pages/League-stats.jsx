import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const renderTableLeague = (tableLeague) => (
  
  <table className="table-auto w-full">
    <tbody>
      {tableLeague.map(({ key, value }, index) => (
        <tr key={key} className={`${index % 2 === 0 ? "bg-sfs3" : ""} hover:scale-110 hover:font-[800]`}>
          <th className="h-[4vh] px-2 text-left text-[1.9vh] font-medium text-gray-800">
            {key}
          </th>
          <td className="h-[4vh] px-4 text-right text-[1.6vh] font-medium text-slate-900">
            {value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const LeagueStats = () => {
  const [league, setLeague] = useState([]);
  // const { showPopup, selectedPlayer, handleOpenPopup, handleClosePopup } = usePlayerPopup();
  const { season_id } = useParams();
  const navigate = useNavigate();
 

  useEffect(() => {
    async function fetchLeagueData() {
      try {
        const url = `${import.meta.env.VITE_HOST}/api/v1/leagues/leagueStats/${season_id}`;
        const response = await axios.get(url);
        // alert("hello")
        setLeague(response.data.data);
        // console.log("ther url is :",url,"\nresponse is:",league);
      } catch (error) {
        console.error("Error fetching league data:", error);
        // Handling error 
      }
    }
    fetchLeagueData();
  }, [league]);

  
  const LeagueDetails = [
    { key: "home Clean Sheets", value: league.home_teams_clean_sheets },
    { key: "away teams clean sheets", value: league.away_teams_clean_sheets },
    {
      key: "Failed to Score(H/A)",
      value: [
        league.home_teams_failed_to_score,
        "/",
        league.away_teams_failed_to_score,
      ],
    },
    {
      key: "Average Corners(O/H/A)",
      value: [
        league.cornersAVG_overall,
        "/",
        league.cornersAVG_home,
        "/",
        league.cornersAVG_away,
      ],
    },
    {
      key: "Average Cards(O/H/A)",
      value: [
        league.cardsAVG_overall,
        "/",
        league.cardsAVG_home,
        "/",
        league.cardsAVG_away,
      ],
    },
    {
      key: "Average Fouls(O/H/A)",
      value: [
        league.foulsAVG_overall,
        "/",
        league.foulsAVG_home,
        "/",
        league.foulsAVG_away,
      ],
    },
    {
      key: "Average Shots(O/H/A)",
      value: [
        league.shotsAVG_overall,
        "/",
        league.shotsAVG_home,
        "/",
        league.shotsAVG_away,
      ],
    },
    {
      key: "Average Offside(O/H/A)",
      value: [
        league.offsidesAVG_overall,
        "/",
        league.offsidesAVG_home,
        "/",
        league.offsidesAVG_away,
      ],
    },
  ];

  const LeagueStatistics = [
    { key: "Matches Completed", value: league.matchesCompleted },
    { key: "out of", value: league.totalMatches },
    { key: "Progress", value: league.progress },
    { key: "Total Goals", value: league.total_goals },
    { key: "Home", value: league.home_teams_goals },
    { key: "Away", value: league.away_teams_goals },
    { key: "Average Goals per Game", value: league.seasonAVG_overall },
    {
      key: "Home Team Attack Advantage(%)",
      value: league.homeAttackAdvantagePercentage,
    },
    {
      key: "Home Team Defense Advantage(%)",
      value: league.homeDefenceAdvantagePercentage,
    },
    { key: "Home Team Overall Advantage", value: league.homeOverallAdvantage },

    { key: "BTTS (Both Teams to Score) Matches", value: league.btts_matches },
    { key: "season BTTS%", value: league.seasonBTTSPercentage },
  ];
  const handleClick = (id) => {
    navigate(`/search/player/${id}`); 
  };

  return (
  <>
  {league.id?(<>
    <>
<div className=" w-[96vw] md:grid md:grid-cols-[34%,48%,16%] md:gap-[1%] mx-auto font-serif">
  <div className="bg-[#FDFDFC] shadow-lg rounded-[8px] ml-2 p-2 mb-[1vh]">
    <div className="flex items-center mr-[3vw] ">
      <img
        src={league.image}
        alt={league.english_name}
        className=" h-[10vw] w-[10vw] ml-2"
      />
      <span className="text-[#132B47] text-[4.2vh] font-extrabold ">
        {league?.english_name?.toUpperCase()}
      </span>
    </div>
    <div className="ml-[12vw] font-serif">
      <h3 className="font-[400] text-[2.5vh]">
        Country :
        <span className="text-gray-800 font-[600]">{league.country}</span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Status :
        <span className={`text-gray-800 font-[600] ${league.status==="In Progress"?"text-green-700":"text-red-800"}`}>{league.status}</span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Competition Level :{" "}
        <span className="text-gray-800 font-[600]">h</span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Format :
        <span className="text-gray-800 font-[600]">{league.format}</span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Division :
        <span className="text-gray-800 font-[600]">
          {league.division}
        </span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Season :
        <span className="text-gray-800 font-[600]">{league.season}</span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Number of Teams:{" "}
        <span className="text-gray-800 font-[600]">{league.clubNum}</span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Gameweek/Out(of):{" "}
        <span className="text-gray-800 font-[600]">
          {league.game_week}/{league.total_game_week}
        </span>
      </h3>
      <h3 className="font-[400] text-[2.5vh]">
        Round:{" "}
        <span className="text-gray-800 font-[600]">{league.round}</span>
      </h3>
    </div>
  </div>
  <div className="bg-[#FDFDFC] grid grid-cols-[45%,45%] gap-4 ml-2 shadow-lg rounded-[8px] p-2 mb-[1vh]">
   
    <div className="mt-[2vh] ">{renderTableLeague(LeagueStatistics)}</div>
    <div className="mt-[2vh]">{renderTableLeague(LeagueDetails)}</div>
  </div>
  <div className="bg-pup1 min-h-[200px] ">Your advertisement here..</div>
</div>
<div>
<h1 className="text-center font-[800] font-serif mt-[3vh] text-[19px] mb-[1.5vh]">
  TOP SCORER's
</h1>
<div className="grid grid-cols-3 md:grid-cols-6 gap-2 mx-[3vw]">
 
  {league?.top_scorers?.map((scorer) => (
  <div className="bg-gray-100 shadow-md  rounded-lg  cursor-pointer hover:bg-gshades7 font-serif text-[1.5vw] md:text-[14px] w-[100%] md:h-[150px]">
        <div className="" >
          <h1 className="font-[600] rounded-sm text-[1.5vw] text-center bg-gradient-to-t from-gshades4 to-suppcol6 h-[6vh] text-white word-break">
            {scorer.known_as}{" "}
          </h1>
          <div className="p-1" >
            <h2>
              Nationality:<span className="font-[600]">{scorer.nationality}</span>
            </h2>
            <h2>
              Position:<span className="font-[600]">{scorer.position}</span>
            </h2>
            <h2>
              League:
              <span className="font-[600]">
                {scorer.league}/({scorer.league_type})
              </span>
            </h2>
            <h2>
              Season:<span className="font-[600]">{scorer.season}</span>
            </h2>
          </div>
        </div>
        {/* <button type="submit" onClick={handleClick(scorer.id)} className="h-[5vh] bg-gradient-to-r from-gshades3 to-gshades5 hover:border-red-100">Know More.</button> */}
        </div>))}
</div>
{/* {showPopup && (
          <>popUpCard(selectedPlayer)</>
        )} */}
</div>
</>

  </>):(<>
  <div className="font serif text-[4vh]">Loading data..</div></>)}
  </>
  );
};

export default LeagueStats;

/*

 const popUpCard=()=>{
    return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-75 z-10">
              <div className="fixed h-[70vh] w-[70vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedPlayer.full_name}
                </h3>
                <div className="flex flex-row">
                  <table className="table-auto w-full">
                    <h1 className="font-[800] text-[16px]">League stats</h1>
                    <tbody className="font-[800]">
                      <tr>
                        <td className="px-2 py-1 text-gray-600">
                          Minutes Played
                        </td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.minutes_played_overall}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600">Appearances</td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.appearances_overall}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600">Yellow Cards</td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.yellow_cards_overall}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600">Goals</td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.goals_overall}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table-auto w-full">
                    <tbody className="font-[800]">
                      <tr>
                        <td className="px-2 py-1 text-gray-600">
                          Minutes Played
                        </td>
                        <td className="px-2 py-1 text-gray-900">
                          {selectedPlayer.minutes_played_overall}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600">Appearances</td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.appearances_overall}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600">Yellow Cards</td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.yellow_cards_overall}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 text-gray-600">Goals</td>
                        <td className="px-2 py-1 text-gray-800">
                          {selectedPlayer.goals_overall}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link
                  to={`/players/${selectedPlayer.competitionId}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md mt-4"
                >
                  <span className="mr-2">View Full Stats</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  onClick={handleClosePopup}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
    )
  }
 */

