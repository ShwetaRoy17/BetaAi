import React from "react";
  
  const PlayerCard = (data) => {

    const {
      competition_id,
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
      cards_overall,
      yellow_cards_ovearll,
      red_cards_overall,
      min_per_card_overall,
      min_per_assist_overall,
      cards_per_90_overall,
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
    
    // const HandleClick = (id)=>{
    //   navigate(`league-stats/${id}`)
    // }
  
    const renderTableData = (tableData) =>
      tableData.map(({ key, value }, index) => (
        <tr key={key} className={index % 2 === 0 ? "bg-[#EEEBE5]" : ""}>
          <th className="text-left text-[2vh] font-serif px-2 py-[1px]">{key}</th>
          <td className="text-right text-[2vh]  px-2 py-[1px]">{value}</td>
        </tr>
      ));
  
    return (
      <div className="h-[80vh] mt-[6vh] mb-[2vh] w-full px-[4vw]  flex flex-col  gap-2 border-pup1 ">

        <h1 className="font-[600] text-[19px] text-center" >LEAGUE(Competition id) :<span className="hover:font-[800]" >{competition_id}</span></h1>
       
        <div className="w-[90vw] flex flex-col md:grid md:grid-rows-[34%,65%] gap-[1%] md:w-full  rounded-md  h-full p-[1vh]">
          <div className="shadow-md font-source rounded-sm bg-white p-4">
            <h1 className="text-center font-[600] text-suppcol6">Details</h1>
            <h2 className="font-sefif text-[14px] text-[#0B1D32]">League/Type : <span className="text-black font-serif font-bold">{`${league}/${league_type}`}</span> </h2>
            <h2 className="font-sefif text-[14px] text-[#0B1D32]">Position : <span className="text-black font-serif font-bold">{position}</span> </h2>
            <h2 className="font-sefif text-[14px] text-[#0B1D32]">Season : <span className="text-black font-serif font-bold">{season}</span> </h2>
            <h2 className="font-sefif text-[14px] text-[#0B1D32]">starting year/ Ending Year : <span className="text-black font-serif font-bold">{`${starting_year}/${ending_year}`}</span> </h2>
            {/* <h2 className="font-sefif text-[14px] text-[#0B1D32]">Minutes Played(away) <span className="text-black font-serif font-bold">{minutes_played_away}</span> </h2> */}
          </div>
          <div className="shadow-md rounded-sm bg-white text-center font-source overflow-y-auto ">
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
  
  export default PlayerCard;




