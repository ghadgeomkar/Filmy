import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import { API_TOKEN } from '../Utils/Constant'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchCache } from '../Store/SearchCacheSlice'


const SearchMovie = () => {
    const { id } = useParams()
    const [data, setdata] = useState(null)
    const dispatch = useDispatch()
    const getcache = useSelector(store => store.SearchCache.cache)


    const getdata = async () => {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query=' + id, API_TOKEN)
        const data = await res.json()
        setdata(data.results);
        dispatch(addSearchCache({ [id]: data.results }))
    }

    useEffect(() => {
        const cachedData = getcache.find(obj => obj[id]);
        if (cachedData) {
            setdata(cachedData[id]);
        } else {
            getdata();
        }
    }, [id])

    if (data === null) {
        return <h1 style={{ color: 'white' }}>Loading...</h1>
    }
    
    return (
        <>
            <Header />
            <div className='searchMovieComponent'>
                <h2>{id}:</h2>
                <div className='getSearchMovie'>
                    {
                        data.length < 1 ? <p className='notFoundMovie'>I can't able to find this movie </p> :
                            data.map(movie => <Link to={'/watchmovie/' + movie.id} key={movie.id} > <MovieCard poster_path={movie.poster_path} movie={movie} /> </Link>)
                    }
                </div>
            </div>
        </>
    )

}

export default SearchMovie