import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux';
import betAi from '../assets/betaAi.png'
import betx from '../assets/1xbet.png'

const ODD = () => {

  const [isLoading, setIsLoading] = useState(false);
   const [data1,setData] = useState([]);
   const data = useSelector((state)=>state.match.matchData);

  //  useeffect calling
   useEffect(()=>{
    setIsLoading(true);
    if(data){
      // console.log("the data for 1x is",data);
      setData(data.odds_comparison);
      setIsLoading(false);
    }
   },[data])
  // const data = [
  //   { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
  //   { league: 'La LiGA', Hometeam: 'RealMadrid',Score:1.0, AwayTeam: 'Celta Vigo' },
   
  // ];
  const bet1xValue = data1?.["FT Result"]?.["1"]?.["1xbet"]
  var index = 1;
  // console.log("data1 is for odd",data1);

  return (
    <div className="flex flex-col w-[90vw] mx-auto md:w-full mt-[7vh] h-full  md:px-[10vw] overflow-y-auto">
      <div className="shadow  rounded-md bg-white">
      <h1 className="text-[30px] font-[600] mb-[1vh] text-center mt-[1vh]">ODDS</h1>
      {isLoading?(<div className='my-auto text-center font-serif '> loading data...</div>):(<>
      {<table className="w-full border-collapse">
          <thead>
            <tr className="text-center text-black text-[20px] font-[700] bg-sfs3">
              <th className="th-class">#</th>
              <th className="th-class pl-[2vw]">BOOKMAKER</th>
              <th className="th-class pl-[2vw]">1</th>
              <th className="th-class ">X</th>
              <th className="th-class pl-[2vw]">2</th>
            </tr>
          </thead>
          <tbody>
             {bet1xValue && <tr>
                <td className="text-[18px] pl-[6vw] text-center td-class">{index++}.</td>
                <td className="text-[18px] pl-[5vw] td-class text-center"><img src={betx} alt="betx"  className='h-[2vw] w-[2vw]'/></td>
                <td className="text-[18px] pl-[5vw] text-center td-class text-[#3DD598]">{data1["FT Result"]["1"]["1xbet"]}</td>
                <td className="text-[18px] pl-[5vw] text-left td-class text-[#FC5A5A]">{data1["FT Result"]["1"]["1xbet"]}</td>
                <td className="text-[18px] pl-[5vw] text-left td-class text-[#FC5A5A]">{data1["FT Result"]["1"]["1xbet"]}</td>
              </tr>
}
              <tr>
                <td className="text-[18px] pl-[6vw] text-center td-class">{index++}.</td>
                <td className="text-[18px] pl-[5vw] td-class text-center"><img src={betAi} alt="betAi" className='h-[2vw] w-[2vw]' /></td>
                <td className="text-[18px] pl-[5vw] blur-sm  text-center td-class text-[#3DD598]">Coming Soon</td>
                <td className="text-[18px] pl-[5vw] blur-sm text-left td-class text-[#FC5A5A]">Coming Soon</td>
                <td className="text-[18px] pl-[5vw] blur-sm text-left td-class text-[#FC5A5A]">Coming Soon</td>
              </tr>
          </tbody>
        </table>}

        </>
        )}
       
      </div>
    </div>
  );
};

export default ODD
