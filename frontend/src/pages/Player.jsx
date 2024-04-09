import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../utils/dictionary.js";
import PlayerCard from "../components/playercard";

const Player = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { player_id } = useParams();

  useEffect(() => {
    async function fetchdata(player_id) {
      setIsLoading(true);
      try {
        const url = `${import.meta.env.VITE_HOST}/api/v1/search/player/${player_id}`;
        const response = await axios.get(url);
        console.log("data", response);
        if (response) {
          setData(response.data.data);
          console.log("p data", data, response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(true);
        console.log("error with player", error);
      }
    }
    fetchdata(player_id);
  }, []);

  return (
    <>
      <div className="w-[90vw] md:w-full ">
        {isLoading && (
          <div className="my-auto h-[60vh] text-center mx-auto">Loading Players Details..</div>
        )}
        {!isLoading && data && (
          <div className="">
            <div className="md:mx-[4vw] md:h-full  shadow-xl rounded-lg text-gray-900">

              <div className=" h-[31vh] rounded-t-lg  bg-gradient-to-r from-suppcol6 to-pup1"></div>
              <div className="mx-auto w-[27vh] -mt-[21vh] border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-[100px] min-h-[50px] min-w-[50px] md:h-[27vh] md:w-[27vh]"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt={data[0]?.["full_name"]}
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-bold font-source text-[27px] text-suppcol6">
                  {data[0]?.known_as.toUpperCase()}
                </h2>
                <p className="text-gray-500 font-serif text-[18px]">
                  {data[0]?.full_name}
                </p>
              </div>
              <div className="flex flex-col  mx-auto ">
                <div className=" md:text-[18px] text-[12px] flex items-center mb-[5px] mx-auto">
                  <span className="font-[400] text-[#333] font-serif mr-[1vw]">
                    Full Name
                  </span>
                  <span className="font-[800] text-black font-serif">
                    {data[0]?.full_name}
                  </span>
                </div>
                <div className="flex items-center mb-[5px] mx-auto">
                  <span className="font-[400] text-[#333] font-serif mr-[1vw]">
                    Birthday
                  </span>
                  <span className="font-[800] text-black font-serif">
                    {formatDate(data[0]?.birthday)}
                  </span>
                </div>
                <div className="flex items-center mb-[5px] mx-auto">
                  <span className="font-[400] text-[#333] font-serif mr-[1vw]">
                    age
                  </span>
                  <span className="font-[800] text-black font-serif">
                    {data[0]?.age}
                  </span>
                </div>
              </div>
              <h2 className="font-source text-[3vw] font-[700] text-center">PERFORMANCE OVERALL</h2>
              {data.map((match) => PlayerCard(match))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Player;
