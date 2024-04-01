import React from "react";

const Player = () => {
  const data = {
    id: 1,
    continent: null,
    image: "https://cdn.footystats.org/img/teams/canada-montreal-impact.png",
    season: "2016",
    url: "https://footystats.org/clubs/canada/montreal-impact",
    table_position: 5,
    performance_rank: 7,
    risk: 69,
    season_format: "Domestic League",
    competition_id: 1,
    founded: "2010",
    country: "Canada",
    name: "Montreal Impact",
    full_name: "Montreal Impact",
    english_name: "Montreal Impact",
    alt_names: [],
    official_sites: {
      site: "https://www.impactmontreal.com/en",
    },
    stats: {
      suspended_matches: 0,
      homeAttackAdvantage: 18,
      homeDefenceAdvantage: -1,
      homeOverallAdvantage: 9,
      seasonGoals_overall: 61,
      seasonConceded_overall: 63,
      seasonGoalsTotal_overall: 124,
      seasonGoalsTotal_home: 66,
      seasonGoalsTotal_away: 58,
      seasonScoredNum_overall: 61,
    },
  };

  const statsList = [
    { suspended_matches: 0 },
    { key: "homeAttackAdvantage", value: 18 },
    { key: "homeDefenceAdvantage", value: -1 },
    { key: "homeOverallAdvantage", value: 9 },
    { key: "seasonGoals_overall", value: 61 },
    { key: "seasonConceded_overall", value: 63 },
    { key: "seasonGoalsTotal_overall", value: 124 },
    { key: "seasonGoalsTotal_home", value: 66 },
    { key: "seasonGoalsTotal_away", value: 58 },
    { key: "seasonScoredNum_overall", value: 61 },
  ];

  const renderTableData = (tableData) =>
    tableData.map(({ key, value }, index) => (
      <tr key={key} className={index % 2 === 0 ? "bg-pup5" : ""}>
        <th className="text-left text-[3vh] font-serif px-2 py-[3px]">{key}</th>
        <td className="text-right text-[3vh] font-serif  px-2 py-[3px]">
          {value}
        </td>
      </tr>
    ));

  return (
    <div className="h-[80vh] w-full px-[4vw]  flex flex-col md:grid md:grid-cols-[38vw,56vw] gap-2">
      <div className="w-[90vw] md:w-full md:h-full    bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[20vh] overflow-hidden bg-gradient-to-r from-suppcol6 to-pup1"></div>
        <div className="mx-auto w-[27vh] h-[27vh] relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-[100px] md:h-[32vh] w-[27vh]"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-bold font-source text-[27px]">
            {data.name.toUpperCase()}
          </h2>
          <p className="text-gray-500 font-serif text-[18px]">{data.league}</p>
        </div>
      </div>
      <div className="md:w-full shadow-md rounded-md bg-sfs8 h-full p-4">
        <div className="rounded overflow-hidden px-[5vw] md:py-[5vh]">
          <h3 className="text-[18px] text-center mt-[2vh] font-bold p-2 border-b border-gray-200">
            Team Stats
          </h3>
          <table className="w-full">
            <tbody>{renderTableData(statsList)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Player;
