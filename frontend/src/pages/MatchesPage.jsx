import React from 'react'
import Matches from '../components/matches'


const MatchPage = () => {
  return (
    <div className='grid grid-cols-[60%,38%] mx-[2vh]'>
        <Matches/>
        <div className='grid grid-rows-[41%,56%] gap-[2%]'>
            <div className='bg-pup1'>Advertisement 1</div>
            <div className='bg-pup1'>Advertisement 2</div>
        </div>
      
    </div>
  )
}

export default MatchPage
