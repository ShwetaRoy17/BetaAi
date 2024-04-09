import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


const Team = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { team_id } = useParams();

  useEffect(() => {
    async function fetchdata(team_id) {
      setIsLoading(true);
      try {
        const url = `http://localhost:8000/api/v1/search/team/${team_id}`;
        const response = await axios.get(url);
        // console.log("data", response);
        if (response) {
          setData(response.data.data);
          // console.log("team data", data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(true);
        console.log("error with player", error);
      }
    }
    fetchdata(team_id);
  }, []);

  const data1 = {
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

  const renderTableData = () => {
    <tr key={key} className={index % 2 === 0 ? "bg-pup5" : ""}>
      <th className="text-left text-[3vh] font-serif px-2 py-[3px]">{key}</th>
      <td className="text-right text-[3vh] font-serif  px-2 py-[3px]">
        {value}
      </td>
    </tr>;
  };

  return (
    <div className="h-[80vh] w-full px-[4vw] font-source">
      {isLoading && <div className="my-auto">Loading Team data..</div>}
      {!isLoading && data.length!=0 && (
        <div className="shadow-md bg-white flex flex-col">
          <div className="h-[31vh] rounded-t-lg  bg-gradient-to-r from-suppcol6 to-pup1"></div>
          <img
            src={data[0].image}
            alt={data[0].name}
            className="mx-auto w-[27vh] -mt-[21vh] border-4 rounded-full "
          />
          <div className="overflow-hidden md:w-[40vw] xl:w-[30vw] w-[70px] mx-auto">
            <h1 className="md:w-[40vw] xl:w-[30vw] w-[70px] text-center text-[1.8vw] font-[800]">{data[0].name}</h1>
            <h2 className="md:w-[40vw] xl:w-[30vw] w-[70px] text-center text-[1.5vw] font-[600]">{data[0].country}</h2>
            <div ><Link to={data[0]?.official_sites?.site} className="md:w-[40vw] xl:w-[30vw] w-[70px] hover:text-suppcol6 hover:text-[19px] text-center">official Website </Link></div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-1 xl:grid-cols-6">
            {data.map((season) => (
              <div className="shadow-md hover:bg-sfs4 rounded-[8px]">
                <h1 className="font-[600] bg-suppcol6 text-center text-white ">{season.season}</h1>
                <p>Competition Id : <span>{season.competition_id}</span></p>
                <p>Season Format : <span>{season.season_format}</span></p>
                <p>Table Position : <span>{season.table_position}</span></p>
                <p>Performance Rank : <span>{season.performance_rank}</span></p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/*       
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
      </div> */}
    </div>
  );
};

export default Team;
