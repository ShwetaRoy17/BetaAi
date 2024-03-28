import React from 'react';
import Fixture from './Fixture'
import TopLeagues from './topLeague';
import Countries from './countries';
// import CalendarComponent from './Calendar';



const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[32.1vw,40vw,17vw]  gap-4 h-[76vh] mx-[2vw] md:mx-auto">
      <div className="flex flex-col justify-evenly dark:bg-gray-800 rounded-lg">
        <div className='h-[24%]'>
            <Fixture/>
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
