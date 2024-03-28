import React from 'react'
import Stats from './stats'
import CommentSection from './comments'
import AiInsights from './ai_insights'
import Odds from './odds'


const Home = () => {
  return (
    <div >
      <Stats/>
      <Odds/>
      <AiInsights/>
      <CommentSection/>
    </div>

  )
}

export default Home
