import React from "react";

const Player = () => {
  const data = {
    id: "3171",
    competition_id: "6",
    full_name: "Cristiano Ronaldo dos Santos Aveiro",
    first_name: "Cristiano Ronaldo",
    last_name: "dos Santos Aveiro",
    known_as: "Cristiano Ronaldo",
    shorthand: "cristiano-ronaldo",
    age: "33",
    league: "UEFA Champions League",
    league_type: "Cup",
    season: "2016/2017",
    starting_year: "2016",
    ending_year: "2017",
    national_team_id: "0",
    url: "/players/portugal/cristiano-ronaldo",
    club_team_id: "84",
    club_team_2_id: "-1",
    position: "Forward",
    minutes_played_overall: "1170",
    minutes_played_home: "540",
    minutes_played_away: "630",
    birthday: "476438400",
    nationality: "Portugal",
    continent: "eu",
  };
  const {
    id,
    competition_id,
    full_name,
    known_as,
    age,
    league,
    league_type,
    season,
    starting_year,
    ending_year,
    club_team_id,
    club_team_2_id,
    position,
    minutes_played_overall,
    minutes_played_home,
    minutes_played_away,
    birthday,
    nationality,
    continent,
    appearances_overall,
    appearances_home,
    appearances_away,
    goals_overall,
    goals_home,
    goals_away,
    conceded_overall,
    conceded_home,
    conceded_away,
    assists_overall,
    assists_home,
    assists_way,
    penalty_goals,
    goals_involved_per_90_overall,
    assists_per_90_overall,
    goals_per_90_overall ,
    goals_per_90_home ,
    goals_per_90_away ,
    conceded_per_90_overall,
    min_per_conceded_overall,
    cards_overall,
    yellow_cards_ovearll,
    red_cards_overall,
    min_per_match,
    min_per_card_overall,
    min_per_assist_overall,
    cards_per_90_overall,
    last_match_timestamp
  } = data;


const game_stats = [
{key:"Matches Played(Overall)",value:appearances_overall},
{key:"Matches Played(Home)",value:appearances_home},
{key:"Matches Played(Away)",value:appearances_away},
{key:"Minutes Played(Overall)",value:minutes_played_overall},
{key:"Minutes Played(Home)",value:minutes_played_home},
{key:"Minutes Played(Away)",value:minutes_played_away},

]

const GoalData = [
{key:"Goals(Overall)",value:goals_overall},
{key:"Goals(Home)",value:goals_home},
{key:"Goals(Away)",value:goals_away},
{key:"Goals conceded(Overall)",value:conceded_overall},
{key:"Goals conceded(Home)",value:conceded_home},
{key:"Goals conceded(Away)",value:conceded_away},
]

const cardData = [
  {key:"Cards(Overall)",value:cards_overall},
{key:"Yellow_cards(Overall)",value:yellow_cards_ovearll},
{key:"Red_cards(Overall)",value:red_cards_overall},
{key:"Per_cards min(Overall)",value:min_per_card_overall},
{key:"Cards per 90(Overall)",value:cards_per_90_overall},
{key:"Minutes per assist",value:min_per_assist_overall},
]
  
  const leagueDetailsData = [
    { key: "Age", value: age },
    { key: "League", value: league },
    { key: "League Type", value: league_type },
    { key: "Season", value: season },
  ];
  
  

  const renderTableData = (tableData) =>
    tableData.map(({ key, value }, index) => (
      <tr key={key} className={index % 2 === 0 ? "bg-[#EEEBE5]" : ""}>
        <th className="text-left text-[2vh] font-serif px-2 py-[1px]">{key}</th>
        <td className="text-right text-[2vh]  px-2 py-[1px]">{value}</td>
      </tr>
    ));

  return (
    <div className="h-[80vh] w-full px-[4vw]  flex flex-col md:grid md:grid-cols-[38vw,54vw] gap-2">
      <div className="w-[90vw] md:w-full md:h-full bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[25vh] overflow-hidden bg-gradient-to-r from-suppcol6 to-pup1"></div>
        <div className="mx-auto w-[27vh] h-[27vh] -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-[100px] md:h-[32vh] w-[27vh]"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt={data.first_name}
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-bold font-source text-[27px] text-suppcol6">
            {data.known_as.toUpperCase()}
          </h2>
          <p className="text-gray-500 font-serif text-[18px]">{data.league}</p>
        </div>
        <div className="flex flex-col  mx-auto ">
          <div className=" md:text-[18px] text-[12px] flex items-center mb-[5px] mx-auto">
            <span className="font-[400] text-[#333] font-serif mr-[1vw]">
              Full Name
            </span>
            <span className="font-[800] text-black font-serif">
              {data.full_name}
            </span>
          </div>
          <div className="flex items-center mb-[5px] mx-auto">
            <span className="font-[400] text-[#333] font-serif mr-[1vw]">
              Nationality
            </span>
            <span className="font-[800] text-black font-serif">
              {data.nationality}
            </span>
          </div>
          <div className="flex items-center mb-[5px] mx-auto">
            <span className="font-[400] text-[#333] font-serif mr-[1vw]">
              Age
            </span>
            <span className="font-[800] text-black font-serif">{data.age}</span>
          </div>
        </div>
      </div>
      <div className="w-[90vw] flex flex-col md:grid md:grid-rows-[34%,65%] gap-[1%] md:w-full  shadow-md rounded-md  h-full p-[1vh]">
        <div className="shadow-md font-source rounded-sm bg-white p-4">
          <h1 className="text-center font-[600] text-suppcol6">Details</h1>
          <h2 className="font-sefif text-[14px] text-[#0B1D32]">League/Type : <span className="text-black font-serif font-bold">{`${league}/${league_type}`}</span> </h2>
          <h2 className="font-sefif text-[14px] text-[#0B1D32]">Position : <span className="text-black font-serif font-bold">{position}</span> </h2>
          <h2 className="font-sefif text-[14px] text-[#0B1D32]">Season : <span className="text-black font-serif font-bold">{season}</span> </h2>
          <h2 className="font-sefif text-[14px] text-[#0B1D32]">starting year/ Ending Year : <span className="text-black font-serif font-bold">{`${starting_year}/${ending_year}`}</span> </h2>
          {/* <h2 className="font-sefif text-[14px] text-[#0B1D32]">Minutes Played(away) <span className="text-black font-serif font-bold">{minutes_played_away}</span> </h2> */}
        </div>
        <div className="shadow-md rounded-sm bg-white text-center font-source">
          <h1 className="text-center font-[600] text-suppcol6">Performance Statistics</h1>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded overflow-hidden">
              <h3 className="text-[12px] font-semibold px-2 border-b border-gray-200">
                Game Statistics
              </h3>
              <table className="w-full">
                <tbody>{renderTableData(game_stats)}</tbody>
              </table>
            </div>
            <div className="bg-white shadow-md rounded overflow-hidden">
              <h3 className="text-[12px] font-semibold p-2 border-b border-gray-200">
                League Details
              </h3>
              <table className="w-full">
                <tbody>{renderTableData(leagueDetailsData)}</tbody>
              </table>
            </div>
            <div className="bg-white shadow-md rounded overflow-hidden">
              <h3 className="text-[12px] font-semibold p-2 border-b border-gray-200">
                Goal & Stats
              </h3>
              <table className="w-full">
                <tbody>{renderTableData(GoalData)}</tbody>
              </table>
            </div>
            <div className="bg-white shadow-md rounded overflow-hidden">
              <h3 className="text-[12px] font-semibold p-1 border-b border-gray-200">
                Performance Stats
              </h3>
              <table className="w-full">
                <tbody>{renderTableData(cardData)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
