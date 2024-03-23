import React from 'react'

const head_to_head = () => {
  const data = [
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
  ];

  return (
    <div className="flex flex-col w-full bg-white h-full overflow-y-auto">
      <h1 className="text-[2.6vh] font-[600] mb-[1vh] text-center mt-[1vh]">LAST HEAD TO HEAD GAMES</h1>
      <div className="shadow overflow-x-auto rounded-md">
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
            {data.map((match, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? '' : 'bg-sfs3'
                }
              >
                <td className="pl-[1vw] text-center td-class">{index+1}</td>
                <td className="pl-[5vw] td-class text-center">{match.league}</td>
                <td className="pl-[5vw] text-center td-class">{match.Hometeam}</td>
                <td className="pl-[3vw] text-left td-class">{match.AwayTeam}</td>
                <td className="pl-[4vw] text-left td-class">{match.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default head_to_head
