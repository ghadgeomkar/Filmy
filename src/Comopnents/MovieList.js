import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({ title, movie, seeTitle }) => {


    return (
        <div className='movieList'>
            <div className='movieListTitle'>
                <h1>{title}</h1>
                <Link to='/moremovies'  ><h2 onClick={() => localStorage.setItem('getMovieTitle', JSON.stringify({ title, seeTitle }))} > See more </h2> </Link>
            </div>
            <div className='MovieCards'>
                {
                    movie.map(movie => <Link to={'/watchmovie/' + movie.id} key={movie.id} > <MovieCard poster_path={movie.poster_path} movie={movie} /> </Link>)
                }
            </div>
        </div>
    )
}



export default MovieList