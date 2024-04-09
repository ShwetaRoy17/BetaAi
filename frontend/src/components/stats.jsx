import React from 'react'
import Fixture from './Fixture'
import Predict from './predictedLineup'
import LastHead from './headTohead'
import Standing from './standings'
import Statistcs from './statistic'




const stats = () => {
  return (
    
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 w-[86vw] mx-auto mt-[35px]  md:max-h-[130vh]">
      {/* left side container */}
      <div className="p-2 md:p-0 md:w-full  rounded h-full md:grid md:grid-rows-[31.1%,32.5%,34.5%]">
      <div className=" bg-gray-300 shadow-md rounded mb-[2vh] h-[31.1vh] ">
        <Fixture/>
      </div>
      <div className=" bg-gray-300 shadow-md rounded mb-[2vh] h-[32.5vh] ">
        <Predict/>
      </div>
      <div className=" bg-gray-300 shadow-md rounded mb-[2vh] md:mb-0 h-[34.5vh]">
        <LastHead/>
      </div>
      </div>

      {/* right side container */}
      <div className="w-full  rounded h-full md:grid md:grid-rows-[46.21%,51.5%] gap-[2%]">
      <div className=" bg-gray-300 shadow-md rounded-[8px] h-[46.21vh] ">
        <Standing/>
      </div>
      <div className=" bg-gray-300 shadow-md rounded-[8px] h-[51.5vh]  ">
        <Statistcs/>
      </div>
      </div>
    </div>
      
  )
}

export default stats
