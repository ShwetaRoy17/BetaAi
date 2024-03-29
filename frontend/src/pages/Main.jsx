import React from 'react'
import Stats from '../components/stats'
import CommentSection from '../components/comments'
import AiInsights from './ai_insights'
import Odds from '../components/odds'


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
