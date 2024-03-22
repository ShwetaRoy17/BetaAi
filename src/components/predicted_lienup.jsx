import React from 'react'

const predicted_lienup = () => {
  // dummy data
  const data = [
    { team1: 'Team A', team2: 'Team B', date: '2024-03-23' },
    { team1: 'Team C', team2: 'Team D', date: '2024-03-24' },
    { team1: 'Team E', team2: 'Team F', date: '2024-03-25' },
    { team1: 'Team A', team2: 'Team B', date: '2024-03-23' },
    { team1: 'Team C', team2: 'Team D', date: '2024-03-24' },
    { team1: 'Team E', team2: 'Team F', date: '2024-03-25' },
  ];

  return (
    <div className="flex flex-col w-full bg-white h-full overflow-y-auto">
      <h1 className="text-[2.6vh] font-[600] mb-[1vh] text-center mt-[1vh]">PREDICTED LINEUP</h1>
      <div className="shadow overflow-x-auto rounded-md">
        <table className="w-full border-collapse">
          
          <tbody>
            {/* map function that takes data and returns row */}
            {data.map((match, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? '' : 'bg-sfs5'
                }
              >
                <td className="pl-[5vw] td-class">{match.team1}</td>
                <td className="td-class">{match.team2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


 


export default predicted_lienup;


