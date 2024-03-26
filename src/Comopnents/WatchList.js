import React, { useEffect, useState } from 'react'
import close from '../Images/message-square-x-solid-24.png'
import { Link } from 'react-router-dom'

const WatchList = () => {

    const [movies, setMovies] = useState([]);
    const getMovies = JSON.parse(localStorage.getItem('watchList')) || [];


    useEffect(() => {
        if (getMovies) {
            setMovies(getMovies);
        }
    }, []);

    const removeWatchList = (id) => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.setItem('watchList', JSON.stringify(updatedMovies));
    }

    return (<>
        <div className='wacthListSection'>
            {
                getMovies.length > 0 ? movies.map((movie) => {
                    return <div className='watchListMovies' key={movie.id}>
                        <Link to={'/watchmovie/' + movie.id} ><img
                            src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
                            alt="movie_poster"
                        /></Link>
                        <img src={close} alt="close" onClick={() => removeWatchList(movie.id)} />
                    </div>

                }) : <h2 className='noWatchList'> Your Watchlist is currently empty <br />
                    Add Movies that you want to watch later by clicking Add to Watchlist. </h2>
            }
        </div>
    </>
    )
}

export default WatchList