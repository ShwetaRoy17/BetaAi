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
        const url = `${import.meta.env.VITE_HOST}/api/v1/search/team/${team_id}`;
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
     
    </div>
  );
};

export default Team;
