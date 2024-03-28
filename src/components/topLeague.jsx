import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const TopLeagues = () => {
//   const [leagues, setLeagues] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://your-api-endpoint.com/leagues'); // Replace with your API endpoint
//       setLeagues(response.data);
//     };

//     fetchData();
//   }, []);

const leagues= [
    {flagUrl:"",country:"America"},
    {flagUrl:"",country:"America"},
    {flagUrl:"",country:"America"},
    {flagUrl:"",country:"America"},
    {flagUrl:"",country:"America"},
]
  return (
    <div className="bg-[#1C2632] dark:bg-gray-800 rounded-lg shadow-md py-4 px-2 overflow-y-auto h-full">
      <h2 className="text-[17px] font-serif text-[#D2D4D6] font-medium mb-4">Top Leagues</h2>
      <ul className="space-y-2">
        {leagues.map((league) => (
          <li key={league.id} className="flex items-center">
            <img src={league.flagUrl} alt={league.country} className="w-[4vh] h-[4vh] mr-2 rounded-full" />
            <span className="text-[14px] text-[#D2D4D6] font-normal font-serif">{league.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLeagues;
