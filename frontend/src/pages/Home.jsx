import React,{useEffect} from 'react';
import TopLeagues from '../components/topLeague';
import Countries from '../components/countries';
import Matches from '../components/matches';
import {useSelector} from 'react-redux'
import Calendar from '../components/calendar';
import { formatDate,unixToTime } from '../utils/dictionary';


const Featured = ()=>{
const data = useSelector((state)=>state.AllMatches.FeaturedMatch);
const isLoading = useSelector((state)=>state.AllMatches.isLoading);
useEffect(()=>{
  data
},[data,isLoading])
return (
  <>
  {isLoading && <div className='font-serif py-4 mx-auto bg-white h-full text-center'>Loading...</div>}
  {!isLoading && 
  <div className="h-[90%] rounded-[8px] bg-white  xl:px-[1.5vw] py-[1vh] overflow-hidden mx-auto ">
      
      {/* div contaning all the information  flags name  date and time*/}
      <div className="grid grid-cols-[29%,40%,29%] gap-[1%] h-[100%] min-h-[90px] items-center  my-auto ">
        {/* first team name and flag */}
        <div className="h-[100%]  p-[2px] mt-[4vh]">
          <img
            className="h-[12vh] w-[12vh] mx-auto"
            src={`https://cdn.footystats.org/img/${data?.home_image}`}
            alt={data?.home_name }
          />
          <div className="text-center w-[100%] ">
          <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
            {data?.home_name}
          </span>
          </div>
        </div>

        <div className="text-center ">
        <h2 className="text-[3vw] md:text-[19px] font-[600] text-center text-[#0B1D32] mb-[2.5vh]">
        FEATURED MATCH
      </h2>
      <div className="flex flex-col">
          <span className=" text-[#132B47] text-[19px] md:text-[22px] font-serif font-[900] mb-0">
            {data?.date_unix?unixToTime(data?.date_unix):""}
          </span>
          <span className="text-[#132B47] text-[14px] font-serif font-[400]"> {data?.date_unix?formatDate(data?.date_unix):"coming.."}</span>
          </div>
        </div>
{/* second team image and name */}
        <div className="h-[100%] p-[2px] mt-[4vh] ">
          <img
            className="h-[12vh] w-[12vh] mx-auto"
            src={`https://cdn.footystats.org/img/${data?.away_image}`}
            alt={data?.away_name + " Flag"}
          />
          <div className="text-center w-[100%] ">
          <span className="text-[#132B47] text-[2.5vh] font-serif font-bold">
            {data?.away_name}
          </span>
          </div>
        </div>
      </div>
    </div>
}
    </>
)
}


const Home = () => {
  
  
  // useEffect(() => {
    
  //   dispatch(fetchMatches());
    
    
  // }, [dispatch]);
  // const currentFixture = useSelector((state)=>state.AllMatches.matches);
  // console.log("current Fixture",currentFixture);
  // const  [];
 
// const home_name = "REal Mardi";
  return (
    <div className="grid grid-cols-1 md:grid-cols-[32.1vw,40vw,17vw]  gap-4 h-[76vh] mx-[2vw] md:mx-auto">
      <div className="flex flex-col justify-evenly dark:bg-gray-800 rounded-lg">
        <div className='h-[26%]'>
          <Featured/>
        </div>
        <div className='flex flex-row justify-between h-[46.4vh] px-[.5vw]'>
        <div className='w-[48%] md:w-[15vw] h-full'>
            <TopLeagues/>
        </div>
        <div className='w-[48%] md:w-[15vw] h-full'>
          <Countries/>
        </div>
        </div>
        <div className=' bg-pup1 font-serif h-[19.5vh]'>Your Advertisement</div>
        {/* Content for first sub-div */}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-4 py-4">
        <Matches/>
        {/* Content for second sub-div */}
      </div>
      <div className="flex md:flex-col justify-between dark:bg-gray-800 rounded-lg">
        <div className='md:h-[37vh] w-full bg-black'>
          <Calendar/>
        </div>
        <div className='h-[55vh] w-full bg-pup1 text-white font-serif rounded-sm shadow-md'>
          Your Advertisement
        </div>
        {/* Content for third sub-div */}
      </div>
    </div>
  );
};

export default Home;
