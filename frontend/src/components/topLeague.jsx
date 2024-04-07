import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopLeagues = () => {
  const [leagues,setLeagueList]= useState([]);
  useEffect(() => {
    async function help(){
      const data = await axios.get("http://localhost:8000/api/v1/leagues/topleague");
      if(data){
        // console.log("data",data);
      setLeagueList(data.data.data);
      }
    }
    help();
  }
  , []);
  
  
  // console.log("leagues",leagues);

  return (
    <div className="bg-[#1C2632] dark:bg-gray-800 rounded-lg shadow-md py-4 px-1 md:px-2 overflow-y-auto h-full overflow-x-hidden">
      <h2 className="text-[14px] md:text-[17px] font-serif text-[#D2D4D6] font-medium mb-1 md:mb-4">Top Leagues</h2>
      <ul className="space-y-2">
        {leagues.map((league) => (
          <li key={league.name} >
          <Link to="/home" className="flex items-center">
            <img src={league.image} alt={league.country} className="w-[4vh] h-[4vh] mr-2 rounded-full" />
            <span className="text-[12px] md:text-[14px] text-[#D2D4D6] font-normal font-serif">{league.name}</span>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLeagues;
