import React,{useEffect, useState} from 'react';
import madrid from '../assets/Real-Madrid-Logo.png'
import {useSelector} from 'react-redux'
import axios from 'axios'

const TeamTableRow = ({team,index}) => {
  const homename = useSelector(state=>state.match.homeName)
  const awayname = useSelector(state=>state.match.awayName)
  // const flagUrl = madrid; // dummy flag

  const goalCircles = (goals)=>{
  const getColor = (char) => {
    if (char === 'l') {
      return 'bg-red-500';
    } else if (char === 'w') {
      return 'bg-green-500';
    } else {
      return 'bg-gray-500';
    }
  };
  return (<>
  {goals.split('').map((goal, i) => (
    <span key={i} className={`h-2 w-2 rounded-full mr-1 ${getColor(goal)}`} />
  ))}
  </>
)
}
 
  return (
    <tr
      key={index}
      className={` ${
        team.name === homename||team.name ===awayname? 'bg-sfs2' : 'bg-white'
      }  `}
    >
      <td className="td-class text-sm">{index + 1}</td>
      <td className="td-class items-center">
        <div className='flex flex-row'>
        <img className="h-6 w-6 rounded-full " src={team.image} alt={`${team.name} Flag`} />
        <span className='text-sm'>{team.name}</span>
        </div>
      </td>
      <td className="pl-[4vw] td-class text-sm">{team.matchesPlayed}</td>
      <td className="pl-[4vw] td-class text-sm">{team.seasonWins_overall}</td>
      <td className="pl-[4vw] td-class text-sm">{team.seasonDraws_overall}</td>
      <td className="pl-[4vw] td-class text-sm">{team.seasonLosses_overall}</td>
      <td className="pl-[4vw] td-class text-sm">{team.points}</td>
      <td className="pl-[4vw] td-class flex items-center">
        {goalCircles(team.lastx)}
      </td>
    </tr>
  );
};

const LeagueTable = () => {

  const [isLoading,setIsLoading]= useState(false);
  const [standingData,setStandingData] = useState([]);



  async function fetchLeagueTablesData(id) {
    try {
      // Fetching league tables data from the first API endpoint
      const url = `http://localhost:8000/api/v1/leagues/leaguetables/${id}`
      
      const response = await axios.get(url);
      // console.log('response is',response)
      if(response){
      // console.log("fetch response is ",response.data.data)
      const leagueTablesData = response.data.data.all_matches_table_overall;
      
      // console.log("leagueTables data ",leagueTablesData)
      // Array to store the final result
      const result = [];
      
      // Iterate over each object in the league tables data array
      for (const team of leagueTablesData) {
          // alert("hello fetch")
            // Fetch additional data for each team from the second API endpoint
            const teamId = team.id;
            const teamDataResponse = await axios.get(`http://localhost:8000/api/v1/leagues/getLastXStats/${teamId}`);
            console.log("team data response",teamDataResponse)
            if(teamDataResponse){
              const teamData = teamDataResponse.data.data;
            console.log("theam",teamData)
            // Extract required data from the teamData
            const {
                image,lastx
            } = teamData;

            // Construct the object to push into the result array
            const resultItem = {
              seasonLosses_overall:team.seasonLosses_overall,
              seasonWins_overall:team.seasonWins_overall,
                seasonDraws_overall:team.seasonDraws_overall,
                matchesPlayed:team.matchesPlayed,
                points:team.points,
                name:team.name,
                // Add additional data from the league tables data
                image,
                lastx
                // Add any other properties needed from the league tables data
            };
            console.log("result item",resultItem)

            // Pusing the resultItem into the result array
            result.push(resultItem);
          }
        }

        return result;

            }
                } catch (error) {
        console.error('Error fetching data:', error);
        // Handling errors if needed
    }
}


 const id = useSelector((state)=>state.match.seasonId)


//  useEffectcall
  useEffect(()=>{
    async function fetchData(){
      setIsLoading(true);
      try{
        if(id){
        const data = await fetchLeagueTablesData(id);
        console.log("fetchleag:",data)
        setStandingData(data);
        console.log("standing data is here",standingData)
        setIsLoading(false);
        }
      }catch(err){
        console.log("Error fetching the data",err);
        setIsLoading(true);
      }
    }
    fetchData();
  },[])


  // console.log("standing data",standingData)
// dummy data

  // const data = [
  //   { team: 'Team A', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  //   { team: 'Team C', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  //   { team: 'Team E', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  //   { team: 'Team A', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  //   { team: 'Team C', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  //   { team: 'Team E', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  // ];

  return (
    <div className="flex flex-col w-full  bg-white h-full overflow-y-auto">
      
      <h1 className="text-[2.6vh] font-[600] mb-[1vh] text-center mt-[1vh] bg-white">STANDINGS</h1>
      {isLoading && <div className='mx-auto my-auto font-serif'>loading..</div>}
{!isLoading &&
      <div className='h-[90%] shadow overflow-x-auto rounded-md'>
      <table className="w-full h-[100%] border-collapse overflow-y-auto">
        <thead>
          <tr className="text-center ">
            <th className="th-class">#</th>
            <th className="th-class pl-[2vw]">Team</th>
            <th className="th-class pl-[2vw]">MP</th>
            <th className="th-class pl-[2vw]">W</th>
            <th className="th-class pl-[2vw]">D</th>
            <th className="th-class pl-[2vw]">L</th>
            <th className="th-class pl-[2vw]">Pts</th>
            <th className="th-class pl-[2vw]">Last 5 Goals</th>
          </tr>
        </thead>
        <tbody>
          {standingData?.length===0 && <div className='my-auto font-serif'>Loading data..</div>}
          {standingData?.length!==0 && <>{standingData.map((team, index) => (
            <TeamTableRow team={team} index = {index} />
          ))}</> 
        }
           
        </tbody>
      </table>
      </div>
      }
    </div>
  );
};

const thStyles = `font-medium text-sm uppercase tracking-wider`;
const tdStyles = `text-sm`;

export default LeagueTable;



