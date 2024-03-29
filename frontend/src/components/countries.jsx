import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { getheader } from '../get';


const Countries = () => {
  console.log(`https://api.football-data-api.com/country-list?key=${import.meta.env.VITE_API_KEY}`,{getheader});
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.football-data-api.com/country-list?key=${import.meta.env.VITE_API_KEY}`); // Replace with your API endpoint
      setLeagues(response.data);
      console.log(response.data);
    };
 
    fetchData();
  }, []);

const countries= [
    {country:"America"},
    {country:"America"},
    {country:"America"},
    {country:"America"},
    {country:"America"},
]
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md py-4 px-4 overflow-y-auto h-full">
      <h2 className="text-[17px] font-serif text-[#132B47] font-medium mb-2">Countries</h2>
      <form class="max-w-md mx-auto">   
    <label for="default-search" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="">
        <button class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
        <input type="search" id="default-search" class="block w-full p-2 ps-10 text-[1.5vh] font-serif text-[#9A9DA7] border border-gray-300 rounded-md bg-gray-50 focus:ring-[#9A9DA7] focus:ring-1 focus:border-[#9A9DA7] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" placeholder="Search for..." required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
    </form>
      <ul className="space-y-2">
        {countries.map((country) => (
          <li key={country.id} className="flex items-center">
            <span className="text-[14px] text-black font-normal font-serif">{country.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
