import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const PredictedLineup = () => {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [data2, setData2] = useState([]);
  // const [data1,setData1] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getplayername(id) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/api/v1/search/playerName/${id}`
      );
      // console.log("response for getplayer name is ",response.data.data.full_name);
      if (response.data.data.full_name) {
        return response.data.data.full_name;
      } else {
        return "Not available data"; // Handle player not found scenario
      }
    } catch (error) {
      console.error("Error fetching player name:", error);
      return "X"; // Handle errors gracefully
    }
  }
  const fetchData = async (data2) => {
    setIsLoading(true);
    try {
      const { team_a, team_b } = data2; /*  initial data array  */
      const team_1 = team_a?.slice(0, 5);
      const team_2 = team_b?.slice(0, 5);
      const pData1 = await processArrayWithAsyncValues(team_1, getplayername);
      setTeamA(pData1);
      const pData2 = await processArrayWithAsyncValues(team_2, getplayername);
      setTeamB(pData2);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const data1 = useSelector((state) => state.match.matchData);

  // if(data1){
  //   setData2(data1.lineups)
  // }
  // useEffect call

  // useEffect(() => {
  //   if (!data1) return;
  //   fetchData(data1.lineups);
  // }, [data1]);

  useEffect(() => {
    // console.log("DAta 1 before", data1);
    // setData2(datafromstate);
    // console.log("DAta 1 after", data1);
    if (data1) {
      setData2(data1.lineups);
      // console.log("data 2 is",data2)
      fetchData(data2);
    }
   
  }, [data1,data2]);

  async function processArrayWithAsyncValues(data, asyncFunction) {
    const processedData = [];
    for (const element of data) {
      const value = await asyncFunction(element.player_id); // Calling async function for each element's key
      processedData.push({ ...element, value }); // Spreading existing elements and addding new values
    }
    // console.log("processed data", processedData);
    return processedData;
  }

  // console.log("TeamA",teamA);

  return (
    <div className="flex flex-col w-full bg-white h-full overflow-y-auto">
      <h1 className="text-[2.6vh] font-[600] mb-[1vh] text-center mt-[1vh]">
        PREDICTED LINEUP
      </h1>
      {isLoading ? (
        <>
          <div className="mx-auto my-auto"> Loading</div>
        </>
      ) : (
       

        <div className="shadow min-h-[150px] rounded-md p-2">
          {teamA.length===0 && <div className="font-serif my-auto text-center"> No data available</div>}
          { teamA.length!==0 &&
          <div className="flex flex-row ">
          <table className="w-full border-collapse">
            <th className="y-2 text-[1.7vh] font-bold  text-[#132B47] uppercase tracking-wider">Team A</th>
            <tbody>
              {/* map function that takes data and returns row */}
              {teamA?.map((team, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : "bg-sfs5"}>
                  <td className="py-2  text-[1.5vh] text-left text-black font-serif font-[600]">{team.value}</td>
                </tr>
              ))}
              </tbody>
              </table>
              <table className="w-full border-collapse">
            <th className="y-2 text-[1.7vh] font-bold  text-[#132B47] uppercase tracking-wider">Team B</th>
            <tbody>
              {teamB?.map((team, index) => (
                
                <tr key={index} className={index % 2 === 0 ? "" : "bg-sfs5"}>
                  <td className="py-2  text-[1.5vh] text-left text-black font-serif font-[600]">{team.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
           }

        </div>
      )}
    </div>
  );
}

export default PredictedLineup;



