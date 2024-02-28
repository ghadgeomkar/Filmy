import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import logo from '../Images/webLogo.png'

const SecondSection = () => {

  const NowPlaying = useSelector(store => store.MovieList.NowPlaying)
  const Upcoming = useSelector(store => store.MovieList.Upcoming)
  const TopRated = useSelector(store => store.MovieList.TopRated)
  const popular = useSelector(store => store.MovieList.popular)

  return (
    <div className='SecondSection'>
      <MovieList title={'Recent'} seeTitle={'now_playing'} movie={NowPlaying} />
      <MovieList title={'Upcoming'} seeTitle={'upcoming'} movie={Upcoming} />
      <MovieList title={'Top Rated'} seeTitle={'top_rated'} movie={TopRated} />
      <MovieList title={'Popular'} seeTitle={'popular'} movie={popular} />
      <div className='endLogo'>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}


export default SecondSection