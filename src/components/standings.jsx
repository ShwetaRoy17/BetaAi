import React from 'react';
import madrid from '../assets/Real-Madrid-Logo.png'

const TeamTableRow = ({ index, team, mp, w, d, l, points, goals,n }) => {
  const flagUrl = madrid; // Replace with actual flag URL source

  const goalCircles = goals.map((goal, i) => (
    <span key={i} className={`h-2 w-2 rounded-full mr-1 ${goal > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
  ));

  return (
    <tr
      key={index}
      className={` ${
        index  === 0 ||index===n ? 'bg-sfs2' : 'bg-white'
      }  ${index===n?'absolute bottom-0':''}`}
    >
      <td className="td-class text-sm">{index + 1}</td>
      <td className="td-class items-center">
        <div className='flex flex-row'>
        <img className="h-6 w-6 rounded-full " src={flagUrl} alt={`${team} Flag`} />
        <span className='text-sm'>{team}</span>
        </div>
      </td>
      <td className="pl-[4vw] td-class text-sm">{mp}</td>
      <td className="pl-[4vw] td-class text-sm">{w}</td>
      <td className="pl-[4vw] td-class text-sm">{d}</td>
      <td className="pl-[4vw] td-class text-sm">{l}</td>
      <td className="pl-[4vw] td-class text-sm">{points}</td>
      <td className="pl-[4vw] td-class flex items-center">
        {goalCircles}
      </td>
    </tr>
  );
};

const LeagueTable = () => {
  const data = [
    { team: 'Team A', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
    { team: 'Team C', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
    { team: 'Team E', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
    { team: 'Team A', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
    { team: 'Team C', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
    { team: 'Team E', stats: {mp:1,w:2,d:3,l:4,points:32}, lastFiveGoals: [0,1,0,1,1] },
  ];

  return (
    <div className="flex flex-col w-full overflow-y-auto bg-white">
      <h1 className="text-[2.6vh] font-[600] mb-[1vh] text-center mt-[1vh] bg-white">STANDINGS</h1>
      <div className='shadow overflow-x-auto rounded-md'>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-center ">
            <th className="th-class">#</th>
            <th className="th-class pl-[2vw]">Team</th>
            <th className="th-class pl-[2vw]">MP</th>
            <th className="th-class pl-[2vw]">W</th>
            <th className="th-class pl-[2vw]">D</th>
            <th className="th-class pl-[2vw]">L</th>
            <th className="th-class pl-[2vw]">Pts</th>
            <th className="th-class pl-[2vw]">Last 5 Goals</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => (
            <TeamTableRow key={index} index={index} team={team.team} {...team.stats} goals={team.lastFiveGoals} n={data.length}/>
          ))}
           
        </tbody>
      </table>
      </div>
    </div>
  );
};

const thStyles = `font-medium text-sm uppercase tracking-wider`;
const tdStyles = `text-sm`;

export default LeagueTable;



