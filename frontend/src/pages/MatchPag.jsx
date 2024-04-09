import React,{useEffect,useState} from 'react'
import Stats from '../components/stats.jsx'
import CommentSection from '../components/comments.jsx'
import AiInsights from './ai_insights.jsx'
import Odds from '../components/odds.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMatchData } from '../features/MatchSlice.js';

const Home = () => {
  const {matchId} = useParams();
  const isLoading = useSelector((state) => state.match.isLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(fetchMatchData(matchId));
    
    
  }, [matchId, dispatch]);
  
  const matchData = useSelector((state) => state.match.matchData);
  // console.log("match data",matchData);
  return (
    <div >
      {isLoading?(<div className='my-auto mx-auto font-serif text-[2vw]'> Loading page..</div>):(<>
      <Stats/>
      <Odds/>
      <AiInsights/>
      <CommentSection/>
      </>)}
    </div>

  )
}

export default Home
