import React from 'react'

const head_to_head = () => {
  const data = [
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
    { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
   
  ];

  return (
    <div className="flex flex-col w-[90vw] mx-auto md:w-full mt-[7vh] h-full  md:px-[10vw] overflow-y-auto">
      <div className="shadow  rounded-md bg-white">
      <h1 className="text-[30px] font-[600] mb-[1vh] text-center mt-[1vh]">ODDS</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-center text-black text-[18px] font-[700] bg-sfs3">
              <th className="th-class">#</th>
              <th className="th-class pl-[2vw]">BOOKMAKER</th>
              <th className="th-class pl-[2vw]">1</th>
              <th className="th-class ">X</th>
              <th className="th-class pl-[2vw]">2</th>
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
                <td className="text-[18px] pl-[6vw] text-center td-class">{index+1}</td>
                <td className="text-[18px] pl-[5vw] td-class text-center">{match.league}</td>
                <td className="text-[18px] pl-[5vw] text-center td-class text-[#3DD598]">{match.Hometeam}</td>
                <td className="text-[18px] pl-[5vw] text-left td-class text-[#FC5A5A]">{match.AwayTeam}</td>
                <td className="text-[18px] pl-[5vw] text-left td-class text-[#FC5A5A]">{match.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default head_to_head
