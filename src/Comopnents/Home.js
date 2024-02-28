import React, { useEffect, useState } from 'react'
import Header from './Header'
import { API_TOKEN } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { AddTopRatedMoies, addNowPlayingMovies, addPopularMovies, addUpcomingMovies } from '../Store/MovieListSlice';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const Home = () => {

  const dispatch = useDispatch()
  const [simmerUi, setSimmerUi] = useState(true)

  const NowPlaying = useSelector(store => store.MovieList.NowPlaying)
  const Upcoming = useSelector(store => store.MovieList.Upcoming)
  const TopRated = useSelector(store => store.MovieList.TopRated)
  const popular = useSelector(store => store.MovieList.popular)

  const popularMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_TOKEN)
    const data = await res.json()
    dispatch(addPopularMovies(data.results))
  }
  const NowPlayingMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_TOKEN)
    const data = await res.json()
    dispatch(addNowPlayingMovies(data.results))
  }
  const UpcomingMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_TOKEN)
    const data = await res.json()
    dispatch(addUpcomingMovies(data.results))
  }
  const TopRatedMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_TOKEN)
    const data = await res.json()
    dispatch(AddTopRatedMoies(data.results))
  }



  useEffect(() => {
    popularMovie()
    NowPlayingMovie()
    UpcomingMovie()
    TopRatedMovie()
    const unsubscrib = setTimeout(() => {
      setSimmerUi(false)
    }, 1000);

    return () => clearTimeout(unsubscrib)
  }, [])


  if (!NowPlaying || !Upcoming || !popular || !TopRated) {
    return <h1 style={{ color: 'white' }}>Loading...</h1>
  }

  return (
    <div>
      <Header />
      <>
        <FirstSection />
        <SecondSection />
      </>

    </div>
  )
}

export default Home