import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopLeagues } from '../features/TopLeagueSlice.js';// Import Axios

const TopLeagues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopLeagues());
  }
  , [dispatch]);
  
  const leagues = useSelector((state)=>state.topLeague.leagues)
  // console.log("leagues",leagues);

  return (
    <div className="bg-[#1C2632] dark:bg-gray-800 rounded-lg shadow-md py-4 px-2 overflow-y-auto h-full">
      <h2 className="text-[17px] font-serif text-[#D2D4D6] font-medium mb-4">Top Leagues</h2>
      <ul className="space-y-2">
        {leagues.map((league) => (
          <li key={league.name} className="flex items-center">
            <img src={league.image} alt={league.country} className="w-[4vh] h-[4vh] mr-2 rounded-full" />
            <span className="text-[14px] text-[#D2D4D6] font-normal font-serif">{league.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLeagues;
