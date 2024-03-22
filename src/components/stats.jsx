import React from 'react'
import Fixture from './Fixture'
import Predict from './predicted_lienup'
import LastHead from './head_to_head'
import Standing from './standings'
import Statistcs from './statistic'




const stats = () => {
  return (
    
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 w-[86vw] mx-auto mt-[35px]  md:h-auto ">
      {/* left side container */}
      <div className="p-2 md:p-0 md:w-full  rounded h-full ">
      <div className=" bg-gray-300 shadow-md rounded mb-[2vh] h-[31.1vh] md:h-[31.1%]">
        <Fixture/>
      </div>
      <div className=" bg-gray-300 shadow-md rounded mb-[2vh] h-[32.5vh] md:h-[32.5%]">
        <Predict/>
      </div>
      <div className=" bg-gray-300 shadow-md rounded mb-[2vh] md:mb-0 h-[34.5vh] md:h-[34.5%]">
        <LastHead/>
      </div>
      </div>

      {/* right side container */}
      <div className="w-full  rounded h-full">
      <div className=" bg-gray-300 shadow-md rounded-[8px] h-[46.21vh] md:h-[46.21%] mb-[3.3vh]">
        <Standing/>
      </div>
      <div className=" bg-gray-300 shadow-md rounded-[8px] h-[51.5vh] md:h-[51.5%] ">
        <Statistcs/>
      </div>
      </div>
    </div>
      
  )
}

export default stats
