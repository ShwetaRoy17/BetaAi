import React from "react";

const Player = () => {
  const data = {
    id: "3171",
    competition_id: "6",
    full_name: "Cristiano Ronaldo dos Santos Aveiro",
    first_name: "Cristiano Ronaldo",
    last_name: "dos Santos Aveiro",
    known_as: "Cristiano Ronaldo",
    shorthand: "cristiano-ronaldo",
    age: "33",
    league: "UEFA Champions League",
    league_type: "Cup",
    season: "2016/2017",
    starting_year: "2016",
    ending_year: "2017",
    national_team_id: "0",
    url: "/players/portugal/cristiano-ronaldo",
    club_team_id: "84",
    club_team_2_id: "-1",
    position: "Forward",
    minutes_played_overall: "1170",
    minutes_played_home: "540",
    minutes_played_away: "630",
    birthday: "476438400",
    nationality: "Portugal",
    continent: "eu",
  };

  return (
    <div className="h-[80vh] w-full px-[4vw]  flex flex-col md:grid md:grid-cols-[38vw,56vw] gap-2">
      <div className="w-[90vw] md:w-full md:h-full    bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[20vh] overflow-hidden bg-slate-400"></div>
        <div className="mx-auto w-[27vh] h-[27vh] relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-[100px] md:h-[32vh] w-[27vh]"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt={data.first_name}
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-bold font-source text-[27px]">{data.first_name.toUpperCase()}</h2>
          <p className="text-gray-500 font-serif text-[18px]">{data.league}</p>
        </div>
        
      </div>
      <div className="w-[90vw] md:w-fullshadow-md rounded-md bg-sfs8 h-full"></div>
    </div>
  );
};

export default Player;
