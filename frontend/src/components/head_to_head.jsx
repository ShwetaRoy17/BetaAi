import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const head_to_head = () => {
  const [lastData, setFixtureData] = useState(null);
  const [homeId, setHomeId] = useState();
  const [homeImg, setHomeImg] = useState("");
  const [AwayImg, setAwayImg] = useState("");
  const [homename, setHomename] = useState("");
  const [awayname, setAwayname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fixdata = useSelector((state) => state.match.matchData);

  useEffect(() => {
    setIsLoading(true);
    if (fixdata) {
      setFixtureData(fixdata?.["h2h"]?.["previous_matches_ids"]);
      setHomeId(fixdata.homeID)
      setHomeImg(`https://cdn.footystats.org/img/${fixdata.home_image}`,)
      setAwayImg(`https://cdn.footystats.org/img/${fixdata.away_image}`,)
      setHomename(fixdata.home_name)
      setAwayname(fixdata.away_name)
      console.log("h2h", fixdata.h2h);
      setIsLoading(false);
      console.log(homeImg)
    }
  }, [fixdata]);
  // console.log("fixdata is",lastData);

  const data = [
    {
      league: "La LiGA",
      Hometeam: "RealMadrid",
      Score: 1.0,
      AwayTeam: "Celta Vigo",
    },
    {
      league: "La LiGA",
      Hometeam: "RealMadrid",
      Score: 1.0,
      AwayTeam: "Celta Vigo",
    },
    {
      league: "La LiGA",
      Hometeam: "RealMadrid",
      Score: 1.0,
      AwayTeam: "Celta Vigo",
    },
    {
      league: "La LiGA",
      Hometeam: "RealMadrid",
      Score: 1.0,
      AwayTeam: "Celta Vigo",
    },
    {
      league: "La LiGA",
      Hometeam: "RealMadrid",
      Score: 1.0,
      AwayTeam: "Celta Vigo",
    },
    {
      league: "La LiGA",
      Hometeam: "RealMadrid",
      Score: 1.0,
      AwayTeam: "Celta Vigo",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white h-full overflow-y-auto">
      <h1 className="text-[2.6vh] font-[600] mb-[1vh] text-center mt-[1vh]">
        LAST 5 HEAD TO HEAD GAMES
      </h1>
      <div className="shadow overflow-x-auto rounded-md">

      {isLoading && <div className="my-auto text-center font-serif "> Loading ..</div>}
      {!isLoading && 
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-center bg-sfs3">
              <th className="th-class">#</th>
              <th className="th-class pl-[2vw]">LEAGUE</th>
              <th className="th-class pl-[2vw]">HOME TEAM</th>
              <th className="th-class">AWAY TEAM</th>
              <th className="th-class pl-[2vw]">SCORE</th>
            </tr>
          </thead>
          <tbody>
            {lastData?.slice(0,6).map((match, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : "bg-sfs3"}>
                <td className="pl-[1vw] text-center td-class">{index + 1}</td>
                <td className="pl-[5vw] td-class text-center">
                  {"league"}
                </td>
                <td className="pl-[5vw] text-center td-class">
                  <div className="flex flex-row items-center">
                    <img src={match.team_a_id===homeId?homeImg:AwayImg} alt={match.team_a_id===homeId?homename:awayname}  className="h-[3vw] w-[3vw]"/>
                    <span>{match.team_a_id===homeId?homename:awayname} </span>
                  </div>
                </td>
                <td className="pl-[3vw] text-left td-class">
                <div className="flex flex-row items-center">
                    <img src={match.team_b_id===homeId?homeImg:AwayImg} alt={match.team_a_id===homeId?homename:awayname}  className="h-[3vw] w-[3vw]"/>
                    <span>{match.team_b_id===homeId?homename:awayname} </span>
                  </div>
                </td>
                <td className={`pl-[4vw] text-left td-class  ${match.team_a_goals>match.team_b_goals?"text-green-600":"text-red-600"}`}><span className={`${match.team_a_goals>match.team_b_goals?"text-green-600":"text-red-600"}`}>{match.team_a_goals}:{match.team_b_goals}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
}
      </div>
    </div>
  );
};

export default head_to_head;
