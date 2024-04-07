import React,{useEffect} from 'react';
import Fixture from '../components/Fixture'
import TopLeagues from '../components/topLeague';
import Countries from '../components/countries';
import Matches from '../components/matches';
import {useDispatch,useSelector} from 'react-redux'
import { fetchMatches } from '../features/AllMatchSlice';
import { formatDate } from '../utils/dictionary';
// import CalendarComponent from './Calendar';
// dummy data 
import home_image from '../assets/Real-Madrid-Logo.png'


const Home = () => {
  const dispatch = useDispatch();
  
  // useEffect(() => {
    
  //   dispatch(fetchMatches());
    
    
  // }, [dispatch]);
  // const currentFixture = useSelector((state)=>state.AllMatches.matches);
  // console.log("current Fixture",currentFixture);
  // const  [];
const home_name = "REal Mardi";
  return (
    <div className="grid grid-cols-1 md:grid-cols-[32.1vw,40vw,17vw]  gap-4 h-[76vh] mx-[2vw] md:mx-auto">
      <div className="flex flex-col justify-evenly dark:bg-gray-800 rounded-lg">
        <div className='h-[26%]'>
          <>
         <div className='bg-white shadow-lg h-full rounded-[8px]'>
        <h2 className="text-[3vh] font-[600] text-center text-[#0B1D32] mb-[2.5vh]">
        FEATURED MATCH
      </h2>
      
    </div>
      </>
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

        </div>
        <div className='h-[55vh] w-full bg-pup1 text-white font-serif rounded-sm shadow-md'>
          Your Adevertisement
        </div>
        {/* Content for third sub-div */}
      </div>
    </div>
  );
};

export default Home;
