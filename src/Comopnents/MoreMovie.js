import React, { useEffect, useState } from 'react'
import Header from './Header'
import { API_TOKEN } from '../Utils/Constant'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MoreMovie = () => {

    const getTitle = JSON.parse(localStorage.getItem('getMovieTitle'))
    const [getMovies, setgetMovies] = useState(null)
    const [getPaginationId, setgetPaginationId] = useState('1')



    const getData = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + getTitle.seeTitle + '?language=en-US&page=' + getPaginationId, API_TOKEN)
        const data = await res.json()
        setgetMovies(data.results);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        getData()
    }, [getPaginationId])

    const handelPagination = (id) => {
        setgetPaginationId(id)
    }



    return (
        <div>
            <Header />
            {
                !getData ? <h1 style={{ color: 'white' }}>Loading...</h1> :
                    <>


                        <div className='moreMovieSeaction'>
                            <h1>{getTitle.title}</h1>
                            <div className='moreMovieComponent'>
                                {
                                    getMovies && getMovies.map((movie) => {
                                        return <div className='moreMovie' key={movie.id}>
                                            <Link to={'/watchmovie/' + movie.id} key={movie.id} >
                                                <MovieCard poster_path={movie.poster_path} movie={movie} />
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            <div className='pagination'>
                                <span onClick={() => handelPagination('1')} style={{ backgroundColor: getPaginationId === '1' ? '#eb7f1a' : '#e1a368' }}>1</span>
                                <span onClick={() => handelPagination('2')} style={{ backgroundColor: getPaginationId === '2' ? '#eb7f1a' : '#e1a368' }}>2</span>
                                <span onClick={() => handelPagination('3')} style={{ backgroundColor: getPaginationId === '3' ? '#eb7f1a' : '#e1a368' }}>3</span>
                                <span onClick={() => handelPagination('4')} style={{ backgroundColor: getPaginationId === '4' ? '#eb7f1a' : '#e1a368' }}>4</span>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default MoreMovie